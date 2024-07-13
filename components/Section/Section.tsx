import { FC } from "react";
import { EllipseVariant } from "./types";
import { ellipseMap } from "./utils";

type SectionProps = {
  ellipse?: EllipseVariant;
  children: React.ReactNode;
  className?: string;
  wrapperCN?: string;
};

const Section: FC<SectionProps> = ({
  children,
  ellipse,
  className,
  wrapperCN,
}) => {
  const ellipseClassName = ellipse
    ? `bg-gradient-to-bl rounded-full blur-[352px] ${ellipseMap[ellipse]} ${className} z-0 animate-smooth-appear`
    : "";
  return (
    <section className={`w-full relative ${wrapperCN}`}>
      <div className={ellipseClassName} />
      {/* <div className="w-full h-full bg-[url('/images/textures.png')] bg-contain absolute left-0 top-0 bg-repeat z-10" /> */}
      <div className="z-30 w-full h-fit">{children}</div>
    </section>
  );
};

export default Section;
