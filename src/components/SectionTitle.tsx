export function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return <div className="mb-12 max-w-2xl">
    <p className="mb-3 text-sm font-bold uppercase tracking-[.22em] text-violet-400">{eyebrow}</p>
    <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl light:text-slate-950">{title}</h2>
    {text && <p className="mt-4 leading-7 text-slate-400 light:text-slate-600">{text}</p>}
  </div>
}
