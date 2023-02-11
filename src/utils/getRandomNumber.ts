export function getRandomNumber({ min = 0, max }: { min?: number; max: number }) {
  return Math.floor(Math.random() * (max - min) + min)
}
