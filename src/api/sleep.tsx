export function sleep(callback: (...args: any) => void) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(callback)
      } catch (err) {
        reject(err)
      }
    }, Math.random() * 800)
  })
}
