import React from 'react'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function Slider() {

    
const slider = {

    items : 5,
    margin : 10,
    // loop : true,
  }

  return (


    <>
<OwlCarousel className='owl-theme' items={2}  owl={slider}>
    <div className='item'>
    <div><img src={require('./img/1.webp')} className='poster'/></div>
    </div>
    <div className='item'>
        <div><img src={require('./img/10.jpg')} className='poster'/></div>
    </div>
    <div className='item'>
        <div><img src={require('./img/2.jpeg')} className='poster'/></div>
            </div>
    <div className='item'>
        <div><img src={require('./img/3.jpg')} className='poster'/></div>
            </div>
    <div className='item'>
        <div><img src={require('./img/4.jpg')} className='poster'/></div>
            </div>
    <div className='item'>
        <div><img src={require('./img/5.jpeg')} className='poster'/></div>
            </div>
    <div className='item'>
        <div><img src={require('./img/6.jpg')} className='poster'/></div>
            </div>
    <div className='item'>
        <div><img src={require('./img/7.jpeg')} className='poster'/></div>
            </div>
    <div className='item'>
        <div><img src={require('./img/8.jpeg')} className='poster'/></div>
            </div>
    <div className='item'>
        <div><img src={require('./img/9.jpeg')} className='poster'/></div>

    </div>
    <div className='item'>
        <div><img src={require('./img/12.jpg')} className='poster'/></div>

    </div>
    <div className='item'>
        <div><img src={require('./img/11.jpeg')} className='poster'/></div>

    </div>
</OwlCarousel>;

    </>
  )
}

export default Slider