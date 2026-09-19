import HeroDefinition from "@/components/home/HeroDefinition";
import ProductKnowledge from "@/components/home/ProductKnowledge";
import MiddleSections from "@/components/home/MiddleSections";
import BottomSections from "@/components/home/BottomSections";

export const metadata = {
  title: "MedSpace AI — Clinical Intelligence, Connected",
  description:
    "MedSpace AI connects clinical data, patient information, medical devices and healthcare workflows through a governed clinical knowledge graph. Five products for documentation, remote patient monitoring, clinic operations, patient engagement and enterprise clinical intelligence.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroDefinition />
      <ProductKnowledge />
      <MiddleSections />
      <BottomSections />
    </div>
  );
}
