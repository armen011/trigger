import Section from "@/components/Section";
import Image from "next/image";
import TriggerIcon from "@/assets/icon/logo.svg";
import Links from "./Links";

const FirstSection = () => {
  return (
    <Section
      ellipse="green"
      className="w-[746px] h-[755px] absolute -left-[200px] -top-1/3"
      wrapperCN="w-full h-[calc(100vh-40px)] lg:h-[calc(100vh-104px)] xl:h-[calc(100vh-104px)] 2xl:h-[calc(100vh-136px)] relative"
    >
      <TriggerIcon className="absolute h-6 left-4 top-6 md:h-8 md:left-10 md:top-7 xl:h-10 xl:left-20 xl:top-9 2xl:h-12 2xl:top-10 2xl:left-32 z-50" />
      <Image
        src="/images/head.png"
        alt="hero"
        layout="fill"
        className="animate-smooth-appear max-h-[calc(100%-200px)] pr-10 lg:pr-0 lg:max-h-[unset] max-w-[357px] md:max-w-[733px] mx-auto"
        objectFit="contain"
      />
      <Links />
    </Section>
  );
};

export default FirstSection;
