export type EducationKey = 'puc' | 'unasp'
export type CourseKey = 'javascript' | 'spreadJava' | 'webIntro'

export const educationItems: ReadonlyArray<{ key: EducationKey }> = [
  { key: 'puc' },
  { key: 'unasp' },
]

export const courseItems: ReadonlyArray<{ key: CourseKey }> = [
  { key: 'javascript' },
  { key: 'spreadJava' },
  { key: 'webIntro' },
]
