import { createAffiliateOutboundHref } from "../lib/affiliateRouting";

export default function AffiliateLink({
  href,
  children,
  className = "search-button",
  label,
  source = "seller-card",
}) {
  return (
    <a
      href={createAffiliateOutboundHref({ href, source, label })}
      className={className}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      aria-label={label}
    >
      {children}
    </a>
  );
}
