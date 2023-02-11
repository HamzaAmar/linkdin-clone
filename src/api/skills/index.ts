import { SKILLS_LIST } from './skills.data'

export function getSkills() {
  return SKILLS_LIST
}
export function getSkillBySlug(slug: string) {
  const skill = SKILLS_LIST.find((skill) => skill.slug === slug)
  if (!skill) throw new Error('no slug exist with ')
  return skill
}
