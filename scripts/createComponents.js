/* eslint-disable no-useless-return */
const fs = require('fs')
const path = require('path')

function debug(message, variant) {
  const color = variant === 'success' ? '\x1b[32m' : '\x1b[31m'
  const symbol = variant === 'success' ? '✓' : '✖'

  console.log(`\n${color} ${symbol} ${message}`)
}

function getFiles(component) {
  const camelName = component[0].toUpperCase() + component.slice(1)

  /*  Typescript File */

  const typeFile = {
    basename: `${component}.type.ts`,
    content: `import type { ReactNode } from 'react';

    export interface ${camelName}Props {
      children: ReactNode;
    }`,
  }

  /*  Index File */

  const indexFile = {
    basename: 'index.tsx',
    content: `export {default} from "./${component}"`,
  }

  /*  StoryBook File */

  const storyFile = {
    basename: `${component}.stories.tsx`,
    content: `import React from 'react';
    import { ComponentStory, ComponentMeta } from '@storybook/react';

    import ${camelName} from '.';

    export default {
      title: 'COMPONENTS/CORE/${camelName}',
      component: ${camelName},
      args: {
        children: 'Hello world',
      },
    } as ComponentMeta<typeof ${camelName}>;

    const Template: ComponentStory<typeof ${camelName}> = (args) => <${camelName} {...args} />;

    export const Regular${camelName} = Template.bind({});
    `,
  }

  /*  React Component File */

  const componentFile = {
    basename: `${component}.tsx`,
    content: `import React from 'react';
  import type { ${camelName}Props } from './${component}.type';

  const ${camelName} = ({ children, ...rest }: ${camelName}Props) => {
    return (
      <div className="${component}" {...rest}>
        {children}
      </div>
    );
  };

  export default ${camelName};`,
  }

  /*  Scss Style File */

  const scssFile = {
    basename: `_${component}.scss`,
    content: `.${component}{}`,
  }

  /*  Array  Files */

  return [typeFile, indexFile, storyFile, componentFile, scssFile]
}

function appendToFileIfExist(file, content) {
  const addToFile = fs.existsSync(file) ? fs.appendFileSync : fs.writeFileSync
  addToFile(file, content)
}

function makeFiles(directory, component, parent) {
  const files = getFiles(component)

  files.forEach(({ basename, content }) => {
    const file = path.join(directory, basename)

    fs.writeFileSync(file, content, 'UTF8')
    if (/.scss$/.test(basename)) {
      const componentScssPath = directory.split(path.sep).slice(1).join('/') + `/${component}`
      const pathParent = path.join('src', 'scss', 'components')
      if (!fs.existsSync(pathParent)) {
        fs.mkdirSync(pathParent)
      }
      appendToFileIfExist(path.join(pathParent, `_${parent}.scss`), `@forward "@${componentScssPath}";`)
    }
  })
}

function makeComponent(parent, component) {
  const UppercaseFirstLetter = component[0].toUpperCase() + component.slice(1)

  const directoryParent = path.join('src', 'components', parent)
  const indexParent = path.join(directoryParent, 'index.ts')
  const directory = path.join(directoryParent, component)
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory)
    makeFiles(directory, component, parent)
    appendToFileIfExist(indexParent, `export {default as ${UppercaseFirstLetter}} from "./${component}";`)

    return
  }
  debug(
    `directory with the name ${component} already exist please try with another name or
     please look at this path for the component ▼ \n ${directory}`,
    'danger'
  )
}

const createComponent = () => {
  /* eslint-disable no-unused-vars */
  const [_, __, folder, filename] = process.argv

  // This is only work If You config You Project to work with path alias
  makeComponent(folder, filename)
}

exports.createComponent = createComponent
