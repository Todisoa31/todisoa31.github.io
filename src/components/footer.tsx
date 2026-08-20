export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8">
      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          flex
          flex-col
          sm:flex-row
          items-center
          justify-between
          gap-4
        "
      >
        <p className="text-sm text-gray-400 text-center sm:text-left">
          © 2026 Todisoa Herinjanahary
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/todisoa-herinjanahary-200401145/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-yellow-400 transition-colors"
          >
            LinkedIn
          </a>

          <a
            href="mailto:toudisoua@gmail.com"
            className="text-gray-300 hover:text-yellow-400 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
