export const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6 },
}

export function revealWithDelay(delay = 0) {
  return {
    ...reveal,
    transition: { ...reveal.transition, delay },
  }
}
