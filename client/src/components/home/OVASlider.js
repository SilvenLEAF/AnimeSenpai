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

function OVASlider() {
  /* ----------------------------
  .         slider Images
  ---------------------------- */
  const [OVASliderImages, setOVASliderImages] = useState([
    {
      image: "/images/home/ova/TheUntamedCute.jpg",
      link: "info/Mo%20Dao%20Zu%20Shi%20Q"
    },
    {
      image: "/images/home/ova/Hellsing.jpg",
      link: "/info/Hellsing%20Ultimate"
    },
    {
      image: "/images/home/ova/Sinbad.jpg",
      link: "/info/Magi:%20Sinbad%20no%20Bouken"
    },
    {
      image: "/images/home/ova/MahoutsukaiNoYome.jpg",
      link: "/info/Mahoutsukai%20no%20Yome:%20Hoshi%20Matsu%20Hito"
    },
    {
      image: "/images/home/ova/MobileSuitGundam.jpg",
      link: "/info/Mobile%20Suit%20Gundam:%20The%2008th%20MS%20Team"
    },
    {
      image: "/images/home/ova/HunterXHunter.jpg",
      link: "/info/Hunter%20x%20Hunter:%20Greed%20Island%20Final"
    },
    {
      image: "/images/home/ova/Drifters.jpg",
      link: "/info/Drifters%20(OVA)"
    },
    {
      image: "/images/home/ova/SaiyuukiGarden.jpg",
      link: "/info/Saiyuuki%20Gaiden"
    },
    {
      image: "/images/home/ova/Haikyuu.jpg",
      link: "/info/Haikyuu!!:%20Riku%20vs.%20Kuu"
    },
    {
      image: "/images/home/ova/AttackOnTitan.jpg",
      link: "/info/Shingeki%20no%20Kyojin:%20Kuinaki%20Sentaku"
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
       OVASliderImages.map((item, index)=>{
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

export default OVASlider
