import BeautyHubPage from "./components/BeautyHubPage";
import HomepageHeroSlider from "../components/home/HomepageHeroSlider";
import { getBeautyHubPage } from "./lib/beautyData";
import { buildBeautyMetadata } from "./lib/beautyMetadata";

const page = getBeautyHubPage("home");

export const metadata = buildBeautyMetadata({
  title: page.title,
  description: page.description,
  canonicalPath: "/"
});

export default function HomePage() {
  return (
    <>
      <HomepageHeroSlider />
      <BeautyHubPage {...page} compactHero />
    </>
  );
}
