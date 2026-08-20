export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      {/* Fond */}
      <div className="absolute inset-0 bg-[#0B1120]" />

      {/* Halo bleu */}
      <div className="absolute -top-40 left-0 h-125 w-125 rounded-full bg-blue-500/20 blur-[180px]" />

      {/* Halo violet */}
      <div className="absolute right-0 top-40 h-112.5 w-112.5 rounded-full bg-violet-500/20 blur-[180px]" />

      {/* Halo cyan */}
      <div className="absolute bottom-0 left-1/2 h-100 w-100 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[160px]" />

      {/* Grille */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 45%, rgba(0,0,0,.45) 100%)',
        }}
      />
    </div>
  );
}
