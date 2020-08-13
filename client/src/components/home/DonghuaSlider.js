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

function DonghuaSlider() {
  /* ----------------------------
  .         slider Images
  ---------------------------- */
  const [donghuaSliderImages, setDonghuaSliderImages] = useState([
    {
      image: "/images/home/donghua/TheUntamed.jpg",
      link: "/info/Mo%20Dao%20Zu%20Shi"
    },
    {
      image: "/images/home/donghua/DouluoDalu.jpg",
      link: "/info/Douluo%20Dalu"
    },
    {
      image: "/images/home/donghua/MartialUniverse.jpg",
      link: "/info/Wu%20Dong%20Qian%20Kun%202nd%20Season"
    },
    {
      image: "/images/home/donghua/SpiritGuardian.jpg",
      link: "/info/Dou%20Hun%20Wei:%20Xuan%20Yue%20Qiyuan"
    },
    {
      image: "/images/home/donghua/StellarTransformation.jpg",
      link: "/info/Xing%20Chen%20Bian:%20Yu%20Li%20Cang%20Hai"
    },  
    {
      image: "/images/home/donghua/WanJieChunQiu.jpg",
      link: "/info/Wan%20Jie%20Chun%20Qiu"
    },
    {
      image: "/images/home/donghua/RakshasaStreet.jpg",
      link: "/info/Zhen%20Hun%20Jie"
    },
    {
      image: "/images/home/donghua/KingsAvatar.jpg",
      link: "/info/Quanzhi%20Gaoshou"
    },
    {
      image: "/images/home/donghua/SnowEagleLord.jpg",
      link: "/info/Xue%20Ying%20Ling%20Zhu"
    },
    {
      image: "/images/home/donghua/DifferentWorldMedicineShop.jpg",
      link: "/info/Yi%20Shijie%20Zhongyao%20Pu"
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
       donghuaSliderImages.map((item, index)=>{
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

export default DonghuaSlider
