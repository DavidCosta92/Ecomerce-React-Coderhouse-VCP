import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";

import "./SlideProductImg.css"


const SlideProductImg = ({a,b,c, d, textoAlt})=>{
    return (
        <>
        <Swiper
          spaceBetween={30}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          loop
          speed={800}
          sliderPerView={1}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="swiperslide">
            <img src={`../assets/imagenes/products/${a}`} alt={textoAlt} />
          </SwiperSlide >
          <SwiperSlide className="swiperslide">
            <img src={`../assets/imagenes/products/${b}`} alt={textoAlt} />
          </SwiperSlide>
          <SwiperSlide className="swiperslide">
            <img src={`../assets/imagenes/products/${c}`} alt={textoAlt} />
          </SwiperSlide>
          <SwiperSlide className="swiperslide">
            <img src={`../assets/imagenes/products/${d}`} alt={textoAlt} />
          </SwiperSlide>
        </Swiper>
      </>
        
    )
}

export default SlideProductImg;