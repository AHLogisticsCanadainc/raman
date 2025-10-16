export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Insured By RD. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
             Licensed Insurance Advisor With Canada Care Insurance Agency
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
