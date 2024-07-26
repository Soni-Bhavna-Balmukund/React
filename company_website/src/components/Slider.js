import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { FaStar } from "react-icons/fa";


// const Slider = () => {
//   return (

function Slider() {
    return (
        <Carousel className='pb-70'>
            <Carousel.Item>
                <div className='d-grid justify-items-center'>
                    <div className=' py-5'>
                        <img src={require('../img/icon.png')} alt="" style={{ "width": "220px" }} />
                    </div>

                    <div className='w-75 '>

                        <p className='fs-1 text-center text-white py-5'>Impressed with the results. The team was extremely professional and responsive throughout the entire process. I've received numerous compliments from both customers and colleagues on the new site.</p>

                        <hr className='text-green border-2 py-5' />

                        <div className='user-grid'>
                            <div className='d-flex text-white'>
                                <div><img src={require('../img/user.png')} alt="" style={{ "width": "50px" }} className='rounded-circle me-5' /></div>
                                <div>
                                    <div className='fs-3'>Akasha Oanda</div>
                                    <div className='fs-4'>MANAGER</div>
                                </div>
                            </div>
                            <div className='text-green fs-25'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                        </div>
                    </div>
                </div>

            </Carousel.Item>
            <Carousel.Item>
                <div className='d-grid justify-items-center'>
                    <div className=' py-5'>
                        <img src={require('../img/icon.png')} alt="" style={{ "width": "220px" }} />
                    </div>

                    <div className='w-75 '>

                        <p className='fs-1 text-center text-white py-5'>I had a fantastic experience working with <strong>Vdigtech</strong> on a website redesign project. I appreciated how the team explained every step of the process to keep me comfortable before moving forward.</p>

                        <hr className='text-green border-2 py-5' />

                        <div className='user-grid'>
                            <div className='d-flex text-white'>
                                <div><img src={require('../img/user.png')} alt="" style={{ "width": "50px" }} className='rounded-circle me-5' /></div>
                                <div>
                                    <div className='fs-3'>Bibhuti Bhusan Nayak</div>
                                    <div className='fs-4'>FOUNDER</div>
                                </div>
                            </div>
                            <div className='text-green fs-25'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                        </div>
                    </div>
                </div>

            </Carousel.Item>

            <Carousel.Item>
                <div className='d-grid justify-items-center'>
                    <div className=' py-5'>
                        <img src={require('../img/icon.png')} alt="" style={{ "width": "220px" }} />
                    </div>

                    <div className='w-75 '>

                        <p className='fs-1 text-center text-white py-5'>The team at <strong>Vdigtech</strong> was extremely knowledgeable and helpful in guiding me through the entire process. I am very pleased with their result, which helps me to get high compliments regarding my business.</p>

                        <hr className='text-green border-2 py-5' />

                        <div className='user-grid mb-5'>
                            <div className='d-flex text-white'>
                                <div><img src={require('../img/user.png')} alt="" style={{ "width": "50px" }} className='rounded-circle me-5' /></div>
                                <div>
                                    <div className='fs-3'>Dipak Sahoo</div>
                                    <div className='fs-4 text-uppercase'>CEO</div>
                                </div>
                            </div>
                            <div className='text-green fs-25'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                        </div>
                    </div>
                </div>

            </Carousel.Item>
        </Carousel>
    );
}


//   )
// }

export default Slider