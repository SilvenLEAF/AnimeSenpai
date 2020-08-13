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

function MovieSlider() {
  /* ----------------------------
  .         slider Images
  ---------------------------- */
  const [movieSliderImages, setMovieSliderImages] = useState([
    {
      image: "/images/home/movie/KimiNoNawa.jpg",
      link: "/info/Kimi%20no%20Na%20wa."
    },
     {
      image: "/images/home/movie/SAO.jpg",
      link: "/info/Sword%20Art%20Online%20Movie:%20Ordinal%20Scale"
    },
    {
      image: "/images/home/movie/TenkiNoKo.jpg",
      link: "/info/Tenki%20no%20Ko"
    },
    {
      image: "/images/home/movie/KoeNoKatachi.jpg",
      link: "/info/Koe%20no%20Katachi"
    },
    {
     image: "/images/home/movie/SayonaraNoAsa.jpg",
     link: "/info/Sayonara%20no%20Asa%20ni%20Yakusoku%20no%20Hana%20wo%20Kazarou"
    },
    {
     image: "/images/home/movie/Inverted.jpg",
     link: "/info/Sakasama%20no%20Patema"
    },
    {
     image: "/images/home/movie/Kizumonogatari.jpg",
     link: "/info/Kizumonogatari%20III:%20Reiketsu-hen"
    },
    {
     image: "/images/home/movie/DoraemonSteelTroops.jpg",
     link: "/info/Doraemon%20Movie%2031:%20Shin%20Nobita%20to%20Tetsujin%20Heidan%20-%20Habatake%20Tenshi-tachi"
    },
    {
     image: "/images/home/movie/Overlord.jpg",
     link: "/info/Overlord%20Movie%201:%20Fushisha%20no%20Ou"
    },
    {
     image: "/images/home/movie/ReZero.jpg",
     link: "/info/Re:Zero%20kara%20Hajimeru%20Isekai%20Seikatsu%20-%20Hyouketsu%20no%20Kizuna"
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
      autoplay={{ delay: 1000, disableOnInteraction: false }}            
      navigation
      pagination={{ clickable: true }}      
      onSwiper={setControlledSwiper}      
      
    >     
     {
       movieSliderImages.map((item, index)=>{
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

export default MovieSlider
