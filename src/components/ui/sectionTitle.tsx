type Props = {
  subtitle?: string;
  title: string;
};

export default function SectionTitle({ subtitle, title }: Props) {
  return (
    <div className="mb-16 text-center">
      {subtitle && (
        <p
          className="
              inline-block
              rounded-full
              border
              font-semibold
              mb-4
              border-yellow-500/30
              bg-yellow-500/10
              px-4
              py-1
              text-xs
              sm:text-sm
              tracking-widest
              uppercase
              text-yellow-400
            "
        >
          {subtitle}
        </p>
      )}

      <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
    </div>
  );
}
