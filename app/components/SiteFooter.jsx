import Link from "next/link";
import { siteConfig } from "../lib/siteConfig";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-row">
        <div>
          <div className="brand-mark">
            <span className="brand-badge" aria-hidden="true">
              LF
            </span>
            <span>LipFlower</span>
          </div>
          <p>{siteConfig.siteTagline}</p>
        </div>
        <div className="footer-links">
          {siteConfig.primaryNavLinks.slice(0, 6).map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="footer-links">
          {siteConfig.utilityLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
