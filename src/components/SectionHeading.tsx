
interface SectionHeadingProps {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  number,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-3xl lg:mb-16">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
        {number} / {eyebrow}
      </p>

      <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}