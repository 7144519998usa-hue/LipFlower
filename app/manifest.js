import { publicEnv } from "./lib/env";
import { siteConfig } from "./lib/siteConfig";

export default function manifest() {
  return {
    name: siteConfig.siteName,
    short_name: "LipFlower",
    description: siteConfig.siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#fbf8f5",
    theme_color: "#8a4b5f",
    icons: [
      {
        src: `${publicEnv.siteUrl || siteConfig.siteUrl}/icon.svg`,
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
