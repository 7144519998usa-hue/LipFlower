import Link from "next/link";
import Logo from "./Logo";
import { siteConfig } from "../lib/siteConfig";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-row">
        <Logo />
        <nav className="nav-row desktop-nav" aria-label="Primary">
          {siteConfig.primaryNavLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link href="/search" className="ghost-link">
            Search
          </Link>
          <Link href="/beauty" className="search-button">
            Explore Beauty
          </Link>
        </div>
        <details className="mobile-menu">
          <summary>Menu</summary>
          <nav className="mobile-nav" aria-label="Mobile primary">
            {siteConfig.primaryNavLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
            <Link href="/search">Search</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
