import Link from "next/link";

export default function DisclosureNotice() {
  return (
    <div className="disclosure-bar">
      <p>
        LipFlower may earn affiliate revenue when you continue to seller sites. Product mentions are
        for beauty research and may not fit every routine. Learn more in our{" "}
        <Link href="/about/advertiser-disclosure">affiliate disclosure</Link>.
      </p>
    </div>
  );
}
