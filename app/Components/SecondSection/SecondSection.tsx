import Section from "@/components/Section";
import Marquee from "./Marquee";

const SecondSection = () => {
  return (
    <Section
      ellipse="yellow"
      className="w-[746px] h-[755px] absolute -right-[200px] top-[100px] "
      wrapperCN="w-full min-h-screen"
    >
      <Marquee />
    </Section>
  );
};

export default SecondSection;
