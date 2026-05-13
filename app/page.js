import BeautyHubPage from "./components/BeautyHubPage";
import LipFlowerHeroSlider from "../components/home/LipFlowerHeroSlider";
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
      <LipFlowerHeroSlider />
      <BeautyHubPage {...page} />
    </>
  );
}
