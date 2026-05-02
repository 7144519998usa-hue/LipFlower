import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="brand-mark">
      <span className="brand-badge" aria-hidden="true">
        LF
      </span>
      <span>LipFlower</span>
    </Link>
  );
}
