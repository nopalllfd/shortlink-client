function Footer() {
  const links = ['Privacy Policy', 'Terms of Service', 'Support'];

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand */}
          <div className="max-w-md">
            <img src="/logo.webp" alt="BlinkURL" className="w-40" />

            <p className="mt-6 text-slate-500 leading-7">
              Transform long URLs into memorable digital assets. Built for modern teams, creators, and businesses that need fast, reliable link
              management.
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-4">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-900">Product</h4>

              <ul className="mt-5 space-y-3">
                <li>
                  <a href="#" className="text-slate-500 hover:text-blue-600 transition">
                    Features
                  </a>
                </li>

                <li>
                  <a href="#" className="text-slate-500 hover:text-blue-600 transition">
                    Analytics
                  </a>
                </li>

                <li>
                  <a href="#" className="text-slate-500 hover:text-blue-600 transition">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-900">Company</h4>

              <ul className="mt-5 space-y-3">
                <li>
                  <a href="#" className="text-slate-500 hover:text-blue-600 transition">
                    About
                  </a>
                </li>

                <li>
                  <a href="#" className="text-slate-500 hover:text-blue-600 transition">
                    Contact
                  </a>
                </li>

                <li>
                  <a href="#" className="text-slate-500 hover:text-blue-600 transition">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-900">Resources</h4>

              <ul className="mt-5 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-500 hover:text-blue-600 transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} BlinkURL. All rights reserved.</p>

          <p>Crafted for modern link management.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
