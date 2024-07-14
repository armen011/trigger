import Typography from "@/components/Typography";
import PartnerFirstList from "@/assets/icon/partner_first.svg";
import PartnerSecondList from "@/assets/icon/partner_second.svg";

import BaroorIcon from "@/assets/icon/partners/baroor.svg";
import BSMIIcon from "@/assets/icon/partners/bsmi.svg";
import CashMeIcon from "@/assets/icon/partners/cashme.svg";
import AraviaIcon from "@/assets/icon/partners/aravia.svg";
import HealthyBoxIcon from "@/assets/icon/partners/healthy_box.svg";
import NailIcon from "@/assets/icon/partners/nail.svg";
import MegaIcon from "@/assets/icon/partners/mega.svg";
import EthosIcon from "@/assets/icon/partners/ethos.svg";
import KochardIcon from "@/assets/icon/partners/kochard.svg";
import AmeriaIcon from "@/assets/icon/partners/ameria.svg";
import IncoreIcon from "@/assets/icon/partners/incore.svg";

import Marquee from "react-fast-marquee";

const firstMarqueeList = [
  {
    Icon: BaroorIcon,
    className:
      "w-[] h-[] md:w-[] md:h-[] xl:w-[] xl:h-[] 2xl:w-[205px] 2xl:h-[90px]",
  },
  {
    Icon: BSMIIcon,
    className:
      "w-[] h-[] md:w-[] md:h-[] xl:w-[] xl:h-[] 2xl:w-[126px] 2xl:h-[136px]",
  },
  {
    Icon: CashMeIcon,
    className:
      "w-[] h-[] md:w-[] md:h-[] xl:w-[] xl:h-[] 2xl:w-[206px] 2xl:h-[90px]",
  },
  {
    Icon: AraviaIcon,
    className:
      "w-[] h-[] md:w-[] md:h-[] xl:w-[] xl:h-[] 2xl:w-[228px] 2xl:h-[90px]",
  },
  {
    Icon: HealthyBoxIcon,
    className:
      "w-[] h-[] md:w-[] md:h-[] xl:w-[] xl:h-[] 2xl:w-[114px] 2xl:h-[114px]",
  },
  {
    Icon: NailIcon,
    className: "w-[] h-[] md:w-[] md:h-[] xl:w-[] xl:h-[] 2xl:w-[] 2xl:h-[]",
  },
  {
    Icon: MegaIcon,
    className: "w-[] h-[] md:w-[] md:h-[] xl:w-[] xl:h-[] 2xl:w-[] 2xl:h-[]",
  },
  {
    Icon: EthosIcon,
    className: "w-[] h-[] md:w-[] md:h-[] xl:w-[] xl:h-[] 2xl:w-[] 2xl:h-[]",
  },
  {
    Icon: KochardIcon,
    className: "w-[] h-[] md:w-[] md:h-[] xl:w-[] xl:h-[] 2xl:w-[] 2xl:h-[]",
  },
  {
    Icon: AmeriaIcon,
    className: "w-[] h-[] md:w-[] md:h-[] xl:w-[] xl:h-[] 2xl:w-[] 2xl:h-[]",
  },
  {
    Icon: IncoreIcon,
    className: "w-[] h-[] md:w-[] md:h-[] xl:w-[] xl:h-[] 2xl:w-[] 2xl:h-[]",
  },
];

const Partners = () => {
  return (
    <div className="flex flex-col items-center py-20 md:py-[120px] xl:py-[140px] 2xl:py-[180px]">
      <Typography variant="h1" className="mb-10 md:mb-12 xl:mb-16 2xl:mb-20">
        They Trusted Us
      </Typography>
      <Marquee className="w-full" speed={100}>
        {firstMarqueeList.map(({ Icon, className }, index) => (
          <Icon key={index} className={className} />
        ))}
      </Marquee>
      <Marquee className="w-full" speed={100}>
        {firstMarqueeList.map(({ Icon, className }, index) => (
          <Icon key={index} className={className} />
        ))}
      </Marquee>
    </div>
  );
};

export default Partners;
