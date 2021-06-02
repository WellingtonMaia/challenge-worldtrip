import { ContinentsSwiper } from "./ContinentsSwiper";
import { Descriptions } from "./Descriptions";
import { ContinentsContent } from "./ContinentsContents";
import { SwiperSlide } from "swiper/react";

interface ContinentsProps {
  data: {
    id: string,
    title: string,
    description: string,
    image: string
  }[],
}

export function Continents({ data }: ContinentsProps) {
  return (
    <>
      <Descriptions />
      <ContinentsSwiper>
        {data.map(continent => (
           <SwiperSlide key={continent.id}>
            <ContinentsContent
              slug={continent.id}  
              title={continent.title}
              description={continent.description}
              image={continent.image}
            />
          </SwiperSlide>
        ))}
      </ContinentsSwiper>
    </>
  );
}