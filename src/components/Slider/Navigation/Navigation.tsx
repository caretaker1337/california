import React from "react";
import { useSwiper } from "swiper/react";

import { SliderArrowSvg } from "~/icons";
import { StyledArrow } from "./styled";

const Navigation: React.FC = () => {
  const swiper = useSwiper();

  return (
    <>
      <StyledArrow onClick={(): void => swiper.slidePrev()} type="button">
        <SliderArrowSvg />
      </StyledArrow>

      <StyledArrow onClick={(): void => swiper.slideNext()} type="button">
        <SliderArrowSvg />
      </StyledArrow>
    </>
  );
};

export { Navigation };
