import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { href: '/', label: 'Home', isRouterLink: true },
  { href: '/#featured-hospitals', label: 'Featured Hospitals' },
  { href: '/#how-we-work', label: 'How We Help' },
  { href: '/#case-studies', label: 'Case Studies' },
  { href: '/#reviews', label: 'Reviews' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/#get-started', label: 'Get Started' },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-[100] w-full shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
      {/* Top Bar */}
      <div className="bg-topbar-bg py-2.5 text-xs text-slate-400">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-4 sm:px-10">
          <div className="flex gap-4 sm:gap-6">
            <a href="mailto:contact@buzziwah.com" className="flex items-center gap-1.5 text-slate-300 transition-colors hover:text-white">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <span className="max-sm:hidden">contact@buzziwah.com</span>
            </a>
            <a href="#" className="flex items-center gap-1.5 text-slate-300 transition-colors hover:text-white">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              <span className="max-sm:hidden">Chat with us</span>
            </a>
          </div>
          <div className="flex items-center gap-5 max-sm:hidden">
            <a href="#" className="text-xs font-semibold text-slate-300 uppercase transition-colors hover:text-white" aria-label="Facebook"><svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
            <a href="#" className="text-xs font-semibold text-slate-300 uppercase transition-colors hover:text-white" aria-label="Instagram"><svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
            <a href="#" className="text-xs font-semibold text-slate-300 uppercase transition-colors hover:text-white" aria-label="Twitter"><svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg></a>
            <a href="#" className="text-xs font-semibold text-slate-300 uppercase transition-colors hover:text-white" aria-label="YouTube"><svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white py-4">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-4 sm:px-10">
          <div className="flex items-center gap-1.5 text-2xl font-extrabold">
            <img src="/buzziwah_logo.png" alt="Buzziwah Marketing" style={{ height: '40px', objectFit: 'contain', transform: 'scale(2.8)', transformOrigin: 'left center' }} />
          </div>

          <nav className="flex gap-7 max-lg:hidden">
            {navLinks.map((link) =>
              link.isRouterLink ? (
                <Link key={link.label} to={link.href} className="text-sm font-semibold text-slate-600 transition-colors hover:text-primary-orange">{link.label}</Link>
              ) : (
                <a key={link.label} href={link.href} className="text-sm font-semibold text-slate-600 transition-colors hover:text-primary-orange">{link.label}</a>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-50 max-sm:hidden">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              EN
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 lg:hidden"
            >
              {menuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav Panel */}
        {menuOpen && (
          <nav className="flex flex-col gap-1 border-t border-slate-100 px-4 py-3 lg:hidden">
            {navLinks.map((link) =>
              link.isRouterLink ? (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-2 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50 hover:text-primary-orange"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-2 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50 hover:text-primary-orange"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
