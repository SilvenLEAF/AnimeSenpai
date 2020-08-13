import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Controller, Navigation, Pagination, Scrollbar, Autoplay }  from 'swiper';
import 'swiper/swiper.scss'
import 'swiper/components/effect-coverflow/effect-coverflow.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'

// my CSS
import '../../styles/Slider.css'

SwiperCore.use([EffectCoverflow, Controller, Navigation, Pagination, Scrollbar, Autoplay]);

function AnimeSlider() {
  /* ----------------------------
  .         slider Images
  ---------------------------- */
  const [animeSliderImages, setAnimeSliderImages] = useState([
    {
      image: "/images/home/anime/Boruto.jpg",
      link: "/info/Boruto:%20Naruto%20Next%20Generations"
    },
    {
      image: "/images/home/anime/DrStone.jpg",
      link: "/info/Dr.%20Stone"
    },
    {
      image: "/images/home/anime/AttackOnTitan.jpg",
      link: "/info/Shingeki%20no%20Kyojin%20Season%203%20Part%202"
    },
    {
      image: "/images/home/anime/Gintama.jpg",
      link: "/info/Gintama°"
    },
    {
      image: "/images/home/anime/FireForce.jpg",
      link: "info/Enen%20no%20Shouboutai"
    },
    {
      image: "/images/home/anime/HunterXHunter.jpg",
      link: "/info/Hunter%20x%20Hunter%20(2011)"
    },
    {
      image: "/images/home/anime/SteinsGate.jpg",
      link: "/info/Steins;Gate"
    },
    {
      image: "/images/home/anime/VinlandSaga.jpg",
      link: "/info/Vinland%20Saga"
    },
    {
      image: "/images/home/anime/ShigatsuWaKimiNoUso.jpg",
      link: "/info/Shigatsu%20wa%20Kimi%20no%20Uso"
    },
    {
      image: "/images/home/anime/FullmetalAlchemist.jpg",
      link: "/info/Fullmetal%20Alchemist:%20Brotherhood"
    }
  ])
  /* ----------------------------
  .         end of Images
  ---------------------------- */
  const [controlledSwiper, setControlledSwiper] = useState(null)
  return (
    <div className="container">
        <Swiper      
      controller={{ control: controlledSwiper}}
      spaceBetween={25}
      slidesPerView={3}
      loop={true}
      autoplay={{ delay: 1000, reverseDirection: true, disableOnInteraction: false }}            
      navigation
      pagination={{ clickable: true }} 
      onSwiper={setControlledSwiper}      
      
    >     
     {
       animeSliderImages.map((item, index)=>{
         return (
          <SwiperSlide key={index} >
          <Link to={ item.link}>
            <div className="center mySliderImageHolder">
              <img src={ item.image} alt="Slider" className="responsive-img" />
            </div>
          </Link>
        </SwiperSlide>
         )
       })

     }

      
    </Swiper>
    </div>
  )
}

export default AnimeSlider
