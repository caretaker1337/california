import React, { useEffect, useState } from "react";
import { Pagination, Scrollbar } from "swiper";
import { SwiperSlide } from "swiper/react";

import { Loader } from "~/components";
import { Navigation } from "./Navigation";
import { Item } from "./Item";
import { TSlide } from "./Item/types";
import { StyledWrapper } from "./styled";

const Slider: React.FC = () => {
  const [slides, setSlides] = useState<TSlide[]>([]);
  const [slidesLoading, toggleLoading] = useState<boolean>(true);

  const getSlides = (): void => {
    fetch(`data/slides.json`)
      .then((response: Response): Promise<TSlide[]> => response.json())
      .then((data: TSlide[]): void => {
        setSlides(data);
      })
      .catch((): void => {
        setSlides([]);
      })
      .finally((): void => {
        toggleLoading(false);
      });
  };

  useEffect((): void => {
    getSlides();
  }, []);

  return (
    <StyledWrapper
      breakpoints={{
        767: {
          pagination: { clickable: true, enabled: true },
        },
      }}
      loop
      modules={[Pagination, Scrollbar]}
      navigation
      pagination={{
        enabled: false,
      }}
      slidesPerView={1}
      spaceBetween={50}
    >
      {slides &&
        !!slides.length &&
        slides.map(
          ({ id, ...rest }: TSlide): React.ReactElement => (
            <SwiperSlide key={id}>
              <Item {...{ id }} {...rest} />
            </SwiperSlide>
          )
        )}

      <Navigation />
      {slidesLoading && <Loader />}
    </StyledWrapper>
  );
};

export { Slider };
