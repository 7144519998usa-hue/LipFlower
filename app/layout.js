import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import DisclosureNotice from "./components/DisclosureNotice";
import JsonLd from "./components/JsonLd";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import { publicEnv, getServerEnv } from "./lib/env";
import { siteConfig } from "./lib/siteConfig";

export const metadata = {
  metadataBase: new URL(publicEnv.siteUrl || siteConfig.siteUrl),
  applicationName: siteConfig.siteName,
  title: {
    default: `${siteConfig.siteName} | Luxury Beauty, Skin Care, Makeup, and Lip Care`,
    template: `%s | ${siteConfig.siteName}`
  },
  description: siteConfig.siteDescription,
  icons: {
    icon: "/icon.svg",
  },
  verification: publicEnv.googleVerification ? { google: publicEnv.googleVerification } : undefined,
  openGraph: {
    title: siteConfig.siteName,
    description: siteConfig.siteDescription,
    url: publicEnv.siteUrl || siteConfig.siteUrl,
    siteName: siteConfig.siteName,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.siteName,
    description: siteConfig.siteDescription
  }
};

export default function RootLayout({ children }) {
  const { enableVercelAnalytics } = getServerEnv();
  const googleAnalyticsId = publicEnv.googleAnalyticsId;
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.siteName,
    url: publicEnv.siteUrl || siteConfig.siteUrl,
    description: siteConfig.siteTagline
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.siteName,
    url: publicEnv.siteUrl || siteConfig.siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${publicEnv.siteUrl || siteConfig.siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <body>
        {googleAnalyticsId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleAnalyticsId}');
              `}
            </Script>
          </>
        ) : null}
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <SiteHeader />
        <DisclosureNotice />
        {children}
        <SiteFooter />
        {enableVercelAnalytics ? <Analytics /> : null}
      </body>
    </html>
  );
}
