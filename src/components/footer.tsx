import Image from 'next/image';

const email = 'toudisoua@gmail.com';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-400 sm:text-left">
          © 2026 Todisoa Herinjanahary
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/todisoa-herinjanahary"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-300 transition-colors hover:text-yellow-400"
          >
            LinkedIn
          </a>

          <a
            href={`mailto:${email}`}
            aria-label="Me contacter par email"
            title="Me contacter"
            className="group"
          >
            <Image
              src="/icons/gmail.svg"
              alt="Gmail"
              width={26}
              height={26}
              className="transition-all duration-200 group-hover:drop-shadow-[0_0_6px_rgba(234,67,53,0.4)]"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
