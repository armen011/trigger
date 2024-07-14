import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import SliderArrowIcon from "@/assets/icon/slider_arrow.svg";
import { FC, useCallback, useRef } from "react";
import Typography from "@/components/Typography";
import useResizeObserver from "use-resize-observer";
import "swiper/css";

type NavigationButtonProps = {
  variant: "prev" | "next";
  handleClick: () => void;
  className?: string;
};

const NavigationButton: FC<NavigationButtonProps> = ({
  variant,
  handleClick,
  className,
}) => {
  return (
    <button className={className} onClick={handleClick}>
      <SliderArrowIcon
        className={`"w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12" ${
          variant === "prev" ? "transform rotate-180" : ""
        }`}
      />
    </button>
  );
};

type SlideCardProps = {
  text: string;
  writer?: {
    name: string;
    position: string;
  };
};

const SlideCard: FC<SlideCardProps> = ({ text, writer }) => {
  return (
    <div className="w-full h-full rounded-[56px] p-6 md:p-8 xl:p-12 2xl:p-16 min-h-[unset] xl:min-h-[705px] 2xl:min-h-[706px] border border-white bg-[#D9D9D9] bg-opacity-5 flex flex-col justify-between gap-10">
      <Typography variant="p3" color="secondary">
        {text}
      </Typography>
      {writer && (
        <div>
          <Typography variant="p2" className="font-semibold">
            {writer.name}
          </Typography>
          <Typography variant="p1" color="tertiary">
            {writer.position}
          </Typography>
        </div>
      )}
    </div>
  );
};

const Slider = () => {
  const swiperRef = useRef<null | SwiperType>(null);
  const { ref, width } = useResizeObserver<HTMLDivElement>();

  const navigate = useCallback(
    (direction: "prev" | "next") => () => {
      if (direction === "prev") {
        swiperRef.current?.slidePrev();
      } else {
        swiperRef.current?.slideNext();
      }
    },
    [swiperRef]
  );
  return (
    <div
      ref={ref}
      className="mx-4 mb-[80px] md:mx-[40px] md:mb-[120px] xl:mx-[80px] xl:mb-[140px] 2xl:mx-[120px] 2xl:mb-[180px] md:gap-6 xl:gap-10 2xl:gap-12 md:flex"
    >
      <div className="w-full flex justify-between md:w-fit mb-4 md:mb-0">
        <NavigationButton variant="prev" handleClick={navigate("prev")} />
        <NavigationButton
          variant="next"
          handleClick={navigate("next")}
          className="md:hidden"
        />
      </div>
      <Swiper
        spaceBetween={40}
        slidesPerView={width && width < 768 ? 1 : 2}
        navigation={true}
        modules={[Navigation]}
        loop={true}
        pagination={{
          clickable: true,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {Array.from({ length: 10 }).map((_, idx) => (
          <SwiperSlide key={idx} className="w-max">
            <SlideCard
              text="This team responds promptly to every challenge and comes up with a SOLUTION to every problem. I can keep on talking about the working attitude, but what truly matters is that this team drives SALES, which is the cornerstone of effective marketing."
              writer={{
                name: "Narine Karapetyan",
                position: "Head of Marketing at Global Credit UVC CJ",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <NavigationButton
        variant="next"
        handleClick={navigate("next")}
        className="hidden md:block"
      />
    </div>
  );
};

export default Slider;
