export type ExperienceKey = 'getnet' | 'positivo' | 'run2biz' | 'spread'

export const experiences: ReadonlyArray<{
  key: ExperienceKey
  current: boolean
  tags: readonly string[]
}> = [
  {
    key: 'getnet',
    current: true,
    tags: ['Java', 'Spring Boot', 'AWS', 'PIX', 'BACEN', 'KMS', 'Vault'],
  },
  {
    key: 'positivo',
    current: false,
    tags: ['Java', 'Python', 'AWS', 'Azure', 'IBM Watson', 'Chatbots'],
  },
  {
    key: 'run2biz',
    current: false,
    tags: ['Node.js', 'APIs', 'MongoDB', 'Low-code'],
  },
  {
    key: 'spread',
    current: false,
    tags: ['Java', 'Spring Boot', 'JavaScript', 'Hibernate', 'SQL'],
  },
]
