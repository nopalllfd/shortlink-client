function Footer() {
  const links = ['Privacy Policy', 'Terms of Service', 'API Documentation', 'Support'];

  return (
    <footer className="bg-slate-100 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-semibold tracking-[0.15em] uppercase text-slate-500">© 2024 Shortlink. The Digital Architect.</p>

          <nav>
            <ul className="flex flex-wrap gap-8 text-sm font-semibold tracking-[0.15em] uppercase text-slate-500">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
