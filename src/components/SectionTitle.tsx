type SectionTitleProps = {
  eyebrow: string
  title: string
  titleId?: string
  text?: string
}

export function SectionTitle({ eyebrow, title, titleId, text }: SectionTitleProps) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="mb-3 text-sm font-bold uppercase tracking-[.22em] text-violet-400">{eyebrow}</p>
      <h2 id={titleId} className="text-3xl font-black tracking-tight text-white sm:text-5xl light:text-slate-950">{title}</h2>
      {text && <p className="mt-5 max-w-2xl leading-7 text-slate-400 light:text-slate-600">{text}</p>}
    </div>
  )
}
