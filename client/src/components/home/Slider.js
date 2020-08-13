import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Controller, Navigation, Pagination, Scrollbar, Autoplay }  from 'swiper';
import 'swiper/swiper.scss'
import 'swiper/components/effect-coverflow/effect-coverflow.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'


SwiperCore.use([EffectCoverflow, Controller, Navigation, Pagination, Scrollbar, Autoplay]);

function Slider() {
  const [controlledSwiper, setControlledSwiper] = useState(null)
  return (
    <div className="container">
        <Swiper      
      controller={{ control: controlledSwiper}}
      spaceBetween={25}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 1000, disableOnInteraction: false }}            
      navigation
      pagination={{ clickable: true }}      
      onSlideChange={() => console.log('slide change')}
      onSwiper={setControlledSwiper}      
      
    >
      <SwiperSlide >
        <Link to="/info/Boruto:%20Naruto%20Next%20Generations">
          <div className="center">
            <img src="/images/homeAnime/Boruto.jpg" alt="Slider" className="responsive-img" />
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide >
        <Link to="/info/Kimi%20no%20Na%20wa.">
          <div className="center">
            <img src="/images/homeAnime/KimiNoNawa.jpg" alt="Slider" className="responsive-img" />
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide >
        <Link to="/info/Shingeki%20no%20Kyojin%20Season%203%20Part%202">
          <div className="center">
            <img src="/images/homeAnime/AttackOnTitan.jpg" alt="Slider" className="responsive-img" />
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide >
        <Link to="/info/Gintama°">
          <div className="center">
            <img src="/images/homeAnime/Gintama.jpg" alt="Slider" className="responsive-img" />
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide >
        <Link to="info/Enen%20no%20Shouboutai">
          <div className="center">
            <img src="/images/homeAnime/FireForce.jpg" alt="Slider" className="responsive-img" />
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide >
        <Link to="/info/Hunter%20x%20Hunter%20(2011)">
          <div className="center">
            <img src="/images/homeAnime/HunterXHunter.jpg" alt="Slider" className="responsive-img" />
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide >
        <Link to="/info/Steins;Gate">
          <div className="center">
            <img src="/images/homeAnime/SteinsGate.jpg" alt="Slider" className="responsive-img" />
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide >
        <Link to="/info/Vinland%20Saga">
          <div className="center">
            <img src="/images/homeAnime/VinlandSaga.jpg" alt="Slider" className="responsive-img" />
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide >
        <Link to="/info/Shigatsu%20wa%20Kimi%20no%20Uso">
          <div className="center">
            <img src="/images/homeAnime/ShigatsuWaKimiNoUso.jpg" alt="Slider" className="responsive-img" />
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide >
        <Link to="/info/Fullmetal%20Alchemist:%20Brotherhood">
          <div className="center">
            <img src="/images/homeAnime/FullmetalAlchemist.jpg" alt="Slider" className="responsive-img" />
          </div>
        </Link>
      </SwiperSlide>
      
    </Swiper>
    </div>
  )
}

export default Slider
