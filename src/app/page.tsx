import { Header } from "@/components/sections/Header";
import { TOC } from "@/components/sections/TOC";
import { Philosophy } from "@/components/sections/Philosophy";
import { Influences } from "@/components/sections/Influences";
import { Typography } from "@/components/sections/Typography";
import { Colors } from "@/components/sections/Colors";
import { SpacingSection } from "@/components/sections/SpacingSection";
import { ContainerSection } from "@/components/sections/ContainerSection";
import { Components } from "@/components/sections/Components";
import { DensitySection } from "@/components/sections/DensitySection";
import { Dashboard } from "@/components/sections/Dashboard";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="frame">
      <article className="doc">
        <Header />
        <TOC />
        <Philosophy />
        <Influences />
        <Typography />
        <Colors />
        <SpacingSection />
        <ContainerSection />
        <Components />
        <DensitySection />
        <Dashboard />
        <Footer />
      </article>
    </div>
  );
}
