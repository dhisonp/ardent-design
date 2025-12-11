import { MainContainer } from "@/components/ui/MainContainer";
import { Header } from "@/components/sections/Header";
import { Philosophy } from "@/components/sections/Philosophy";
import { Influences } from "@/components/sections/Influences";
import { Typography } from "@/components/sections/Typography";
import { Colors } from "@/components/sections/Colors";
import { Components } from "@/components/sections/Components";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <MainContainer className="px-5 md:px-6">
      <Header />
      <Philosophy />
      <Influences />
      <Typography />
      <Colors />
      <Components />
      <Footer />
    </MainContainer>
  );
}
