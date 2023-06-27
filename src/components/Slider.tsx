import {useRef, useEffect} from "react";
import Swiper, { Navigation, Pagination } from 'swiper';
const sldierData = ["https://wallpapercave.com/wp/SwjeQmU.jpg",
                    "https://wallpaperaccess.com/full/925436.jpg",
                    "https://wallpaperaccess.com/full/177987.jpg",
                    "https://cdn.wallpapersafari.com/65/23/Pqf7jn.jpg"];

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Slider:React.FC = () => {
   const sliderRef = useRef(null);
   useEffect(()=>{
    if(sliderRef.current !== null){
        new Swiper('.swiper', {
            modules: [Navigation, Pagination],
            direction: 'horizontal',
            loop: true,
          
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
    }
   },[sliderRef.current])
    
    return  <section className="slider">
        <div className="swiper" ref={sliderRef} style={{width:"600px",height:"300px"}}>
            <div className="swiper-wrapper">
              {sldierData.map((link:string)=>{
                return <div key={link} className="swiper-slide" style={{backgroundImage:`url(${link})`}}></div>
              })}
          </div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
      </div>
    </section>
}