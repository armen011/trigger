import Section from "@/components/Section";
import Marquee from "./Marquee";
import Partners from "./Partners";
import Typography from "@/components/Typography";

const SecondSection = () => {
  return (
    <Section
      ellipse="yellow"
      className="w-[685px] h-[521px] absolute -right-[200px] top-[100px] -rotate-90"
      wrapperCN="w-full"
    >
      <Marquee />
      <Partners />
    </Section>
  );
};

export default SecondSection;
