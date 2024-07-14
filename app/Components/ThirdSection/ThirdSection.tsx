"use client";
import Section from "@/components/Section";
import Typography from "@/components/Typography";
import Slider from "./Slider";

const ThirdSection = () => {
  return (
    <Section
      ellipse="red"
      className="w-[746px] h-[755px] absolute -left-[200px] -top-1/3"
    >
      <Typography
        variant="h1"
        className="mb-10 md:mb-12 xl:mb-16 2xl:mb-20 text-center"
      >
        What Our Clients Say!
      </Typography>
      <Slider />
    </Section>
  );
};

export default ThirdSection;
