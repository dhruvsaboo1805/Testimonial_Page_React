import React from 'react'
import {FaQuoteLeft , FaQuoteRight} from 'react-icons/fa';


const Card = (props) => {
    let review = props.review;
  return (
    <div className = "flex flex-col md:relative">
      <div className = "absolute top-[12rem] left-[0.5rem] md:left-[0rem] sm:left-[0rem] sm:top-[-7rem] md:top-[-7rem] z-[10] mx-auto top[-10rem]">
          <img src = {review.image} className = "aspect-square rounded-full md:w-[140px] md:h-[140px] w-[80px] h-[80px] z-[25]"/>
          <div className = "md:w-[140px] md:h-[140px] w-[80px] h-[80px] rounded-full bg-violet-500 absolute top-[-8px] z-[-20] left-[5px]"></div>
      </div>
      <div className = "text-center mt-7">
          <p className = "font-bold text-2xl capitalize tracking-wider">{review.name}</p>
          <p className = "text-violet-300 uppercase">{review.job}</p>
      </div>

        <div className = "text-violet-400 mx-auto ter mt-7">
            <FaQuoteLeft></FaQuoteLeft>
        </div>
        <div className = "text-center mt-4 text-slate-500">
            {review.text}
        </div>
        <div className = "text-violet-400 mx-auto ter mt-7">
            <FaQuoteRight></FaQuoteRight>
        </div>
        
    </div>
  )
}

export default Card
