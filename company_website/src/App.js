
import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Acordian from './components/Accordian'
import './font/stylesheet.css';

import { Container } from 'react-bootstrap';
import { FiArrowRight } from "react-icons/fi";
import { FaRegCheckCircle } from "react-icons/fa";
import { PiArrowSquareUpRightFill } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import Footer from './components/Footer';


function App() {
  return (
    <>

      <section>
        <Header />
      </section>

      <section >
        <Container className='pt-70'>

          <div className='pr'>
            <div ><img src={require('./img/Design.png')} className='design ' alt="" /></div>
            <div ><h1 className="inter-bold lh-15"> BEST </h1> </div>
            <div ><h1 className="inter-3d lh-15"> WEBSITE</h1></div>
            <div><h1 className="inter-italic lh-15 z-1 position-relative">DEVELOPMENT</h1></div>
          </div>

          {/* <div className='position-relative'>
          <img src={require('./img/banner.jpg')} alt="" className='banner'/>
          </div> */}
        </Container>
      </section>

      <section >
        <Container fluid className=' '>
          <div>
            <img src={require('./img/banner.jpg')} alt="" className='banner' />
          </div>
        </Container>
      </section>

      <section className='py-70'>
        <Container>
          <div className='about-com text-white'>
            <div className='text-md-start text-center'><img src={require('./img/icon.png')} style={{ "width": "200px", "height": "200px" }} alt="" /></div>
            <div className='text-md-start text-center'>
              <h5 className='mb-4 '><img src={require('./img/Vector-1.png')} alt="" /> <span className='text-green ms-3'>About Company</span></h5>
              <p className='fs-50 lh-1 fw-semibold mb-5'>Our Main Goal to Satisfied Local & Global Clients</p>

              <p className='fs-2 pt-4'>At Vdigtech, we understand that your online presence is more than just code and graphics; it’s the digital heartbeat of your brand. That’s why we specialize in creating custom web solutions tailored to your unique needs.</p>

              <div className='fs-4 fw-semibold '><span className='read'>Read More <FiArrowRight /></span></div>
            </div>
          </div>
        </Container>
      </section>

      <section className='d-sm-block d-none'>
        <Container>
          <div><h2 className='lh-15'><span className='inter-bold'>WEB</span> <span className='inter-3d ms-5'>DESIGN</span> <span className='inter-bold'>AGENCY</span>
          </h2></div>
        </Container>
      </section>

      <section className='py-3 blank'>
        <div className='blank py-70'></div>
      </section>

      <section className='py-70'>
        <Container>
          <div className='grid'>
            <div className='text-white '>
              <div><FaRegCheckCircle className='text-green fs-2' /></div>
              <div className='inter-3d-n lh-15 py-sm-4 py-5'>250</div>
              <div className='fs-1 text-uppercase'>Projects</div>
            </div>

            <div className='text-white '>
              <div><FaRegCheckCircle className='text-green fs-2' /></div>
              <div className='inter-bold-n text-green lh-15 py-sm-4 py-5'>125</div>
              <div className='fs-1 text-uppercase'>Clients</div>
            </div>

            <div className='text-white '>
              <div><FaRegCheckCircle className='text-green fs-2' /></div>
              <div className='inter-3d-n lh-15 py-sm-4 py-5'>25</div>
              <div className='fs-1 text-uppercase'>Experts</div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className='text-center text-white'>

            <div>
              <div className='d-flex align-content-center justify-content-center'><span><img src={require('./img/Vector-1.png')} alt="" /></span><span className='fs-3 text-green fw-semibold'>All Services</span></div>
              <div><h2 className='fs-50 py-3'>Our Services</h2></div>
              <div className='d-grid justify-items-center pt-70 pb-5'><p className='fs-3 p-grid'>Comprehensive Website Services to Ignite Your Online Success. Empower Your Business with Powerful Online Services from our Website.</p></div>
            </div>
            {/* box 6 */}
            <div>
              <div className='box-6'>

                <div className='box'>
                  <div className='bg-green'>
                    <div className=' p-5 d-flex position-relative'>
                      <div><img src={require('./img/development-1.png')} className='im1' alt="" /></div>
                      <div><img src={require('./img/circle.png')} alt="" className='circle' /> <span className='text-black '><PiArrowSquareUpRightFill className='icon-a' /></span></div>
                    </div>
                    <div className='text-black  pb-3'>
                      <div><h2 className='pb-5 fw-bold h2'>Website Development</h2></div>
                      <div><img src={require('./img/dev2.jpg')} alt="" style={{ "width": "240px", "height": "auto" }} /></div>
                    </div>
                  </div>
                </div>

                <div className='box'>
                  <div className='text-white'>
                    <div className=' p-5 d-flex position-relative'>
                      <div><img src={require('./img/app1.png')} alt="" className='im1' /></div>
                      <div><img src={require('./img/circle.png')} alt="" className='circle' /> <span className='text-green'><PiArrowSquareUpRightFill className='icon-a' /></span></div>
                    </div>
                    <div className='  pb-3'>
                      <div><h2 className='pb-5 fw-bold'>App Development</h2></div>
                      <div><img src={require('./img/app2.jpg')} alt="" style={{ "width": "240px", "height": "auto" }} /></div>
                    </div>
                  </div>
                </div>

                <div className='box'>
                  <div className='text-white'>
                    <div className=' p-5 d-flex position-relative'>
                      <div><img src={require('./img/digi1.png')} alt="" className='im1' /></div>
                      <div><img src={require('./img/circle.png')} alt="" className='circle' /> <span className='text-green'><PiArrowSquareUpRightFill className='icon-a' /></span></div>
                    </div>
                    <div className='  pb-3'>
                      <div><h2 className='pb-5 fw-bold'>Degital Marketing</h2></div>
                      <div><img src={require('./img/digi2.jpg')} alt="" style={{ "width": "240px", "height": "auto" }} /></div>
                    </div>
                  </div>
                </div>

                <div className='box'>
                  <div className='text-white'>
                    <div className=' p-5 d-flex position-relative'>
                      <div><img src={require('./img/maintain1.png')} alt="" className='im1' /></div>
                      <div><img src={require('./img/circle.png')} alt="" className='circle' /> <span className='text-green'><PiArrowSquareUpRightFill className='icon-a' /></span></div>
                    </div>
                    <div className='  pb-3'>
                      <div><h2 className='pb-5 fw-bold'>Website Maintenance</h2></div>
                      <div><img src={require('./img/maintain2.jpg')} alt="" style={{ "width": "240px", "height": "auto" }} /></div>
                    </div>
                  </div>
                </div>

                <div className='box grid-se'>
                  <div className='text-white'>
                    <div className=' p-5 d-flex position-relative'>
                      <div><img src={require('./img/des1.png')} alt="" className='im1' /></div>
                      <div><img src={require('./img/circle.png')} alt="" className='circle' /> <span className='text-green'><PiArrowSquareUpRightFill className='icon-a' /></span></div>
                    </div>
                    <div className='  pb-3'>
                      <div><h2 className='pb-5 fw-bold'>Graphic Design</h2></div>
                      <div><img src={require('./img/des2.png')} alt="" style={{ "width": "240px", "height": "auto" }} /></div>
                    </div>
                  </div>
                </div>

                <div className='box'>
                  <div className='text-white'>
                    <div className=' p-5 d-flex position-relative'>
                      <div><img src={require('./img/domain1.png')} alt="" className='im1' /></div>
                      <div><img src={require('./img/circle.png')} alt="" className='circle' /> <span className='text-green'><PiArrowSquareUpRightFill className='icon-a' /></span></div>
                    </div>
                    <div className='  pb-3'>
                      <div><h2 className='pb-5 fw-bold'>Domain & Hosting</h2></div>
                      <div><img src={require('./img/domain2.png')} alt="" style={{ "width": "240px", "height": "auto" }} /></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className='py-70 d-grid justify-items-center'>
            <h1><span className='inter-3d'>Digital</span><span className='inter-bold'>Solution</span></h1>
          </div>
        </Container>
      </section>

      {/* gallary */}

      <section>
        <Container className='text-white'>
          <div >
            <div><h4><img src={require('./img/Vector-1.png')} alt="" /><span className='text-green'>Recent Work Gallary</span></h4></div>
            <div><h1 className='fs-50 fw-semibold'>Let's Look Our Recent Project Gallary</h1></div>
            <div className='text-end mb-4'><span className='border border-light-subtle py-4 px-5 fs-4 '>View more Projects <FiArrowRight /> </span></div>
          </div>

          <div>

            <div className='grid-gallary py-70 '>
              <div>
                <div className='fs-50'>01</div>
                <div className='fs-1 fw-semibold'>Audium</div>
              </div>
              <div><img src={require('./img/p1.png')} alt="" style={{ "width": "78%" }} /></div>
              <div className='text-center'><span className='border rounded-circle p-4 fs-50'><GoArrowUpRight /></span></div>
            </div>

            <div><hr className='hr py-4' /></div>

            <div className='grid-gallary py-70 '>
              <div>
                <div className='fs-50'>02</div>
                <div className='fs-1 fw-semibold'>Eviman</div>
              </div>
              <div><img src={require('./img/p2.png')} alt="" style={{ "width": "78%" }} /></div>
              <div className='text-center'><span className='border rounded-circle p-4 fs-50'><GoArrowUpRight /></span></div>
            </div>

            <div><hr className='hr py-4' /></div>

            <div className='grid-gallary py-70 '>
              <div>
                <div className='fs-50'>03</div>
                <div className='fs-1 fw-semibold'>Biggoz</div>
              </div>
              <div><img src={require('./img/p3.png')} alt="" style={{ "width": "78%" }} /></div>
              <div className='text-center'><span className='border rounded-circle p-4 fs-50'><GoArrowUpRight /></span></div>
            </div>

            <div><hr className='hr py-4' /></div>

          </div>
        </Container>
      </section>

      <section className='py-70'>
        <Container>
          <div className='home-grid'>
            <div>
              <img src={require('./img/home.jpg')} alt="" style={{ "width": "90%" }} />
            </div>

            <div >
              <div>
                <div className='mb-5 ms-5'><img src={require('./img/Vector-1.png')} alt="" /><span className='text-green h3 ms-3'>Why Choose Us</span></div>
                <div className='text-white'><h1 className='fs-50'>Establish Your Business’s Online Presence <span><img src={require('./img/medal.png')} alt="" style={{ "width": "50px" }} /></span></h1>

                  <div><p className='fs-3'>Improve your business website’s online presence with the unique integration of digital marketing features. Show up your online strength to achieve your virtual goal.</p></div>
                </div>

                <div className='text-white '>

                  <div className='tick-grid mb-4'>
                    <div className='text-green fs-50'> <FaCheckCircle /></div>
                    <div className='fs-25 fw-semibold'>White-Hat SEO Technique</div>
                  </div>

                  <div className='tick-grid mb-4'>
                    <div className='text-green fs-50'> <FaCheckCircle /></div>
                    <div className='fs-25 fw-semibold'>Social Media Marketing & Advertisement</div>
                  </div>

                  <div className='tick-grid mb-4'>
                    <div className='text-green fs-50'> <FaCheckCircle /></div>
                    <div className='fs-25 fw-semibold'>Organic Content Strategy</div>
                  </div>

                  <div className='tick-grid mb-4'>
                    <div className='text-green fs-50'> <FaCheckCircle /></div>
                    <div className='fs-25 fw-semibold'>Real Time Report</div>
                  </div>

                  <div className='tick-grid mb-4'>
                    <div className='text-green fs-50'> <FaCheckCircle /></div>
                    <div className='fs-25 fw-semibold'>Analytics and Market Research</div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </Container>

      </section>

      <section className='pb-70 blank'>
        <Container>
          <div >
            <h1><span className='inter-3d me-5'>Clients</span><span className='inter-bold ms-5'>Say's</span></h1>
          </div>

          <Slider />

        </Container>
      </section>

      <section className='py-70'>
        <Container>
          
            <div className='g2'>

          <div>
            <div className='mb-5 ms-5'><img src={require('./img/Vector-1.png')} alt="" /><span className='text-green h3 ms-3'>What we do</span></div>

            <div><p className='fs-4 text-white'>As a website designer we provide affordable website design services to our clients all over the world with best services. Our services include; small business website design services</p></div>

            <div>
              <Acordian />
            </div>
          </div>

            <div className='pt-5 d-just'>
             
                <form action="">
              <div><h1 className='text-white'>Drop Us a Message</h1></div>
                  <div><input type="text" name="name" id="name" placeholder='Name'/></div>
                  <div className='grid4'>
                    <div>
                      <div className='ph  pb-2 pt-2'><img src={require('./img/ind.png')} alt=""/><span className='text-gray fs-20 mx-xl-4 mx-3'>+91</span><span><img src={require('./img/down.png')} alt="" style={{"width":"30px"}}/></span></div></div>
                    <div><input type="number" name="num" id="num" placeholder='Phone No*' className='w-180'/></div>
                    <div><input type="email" name="em" id="em" placeholder='Email' className='w-180'/></div>
                    <div><select name="course" id="" className='ph'>
                      <option value="">Web design & development</option>
                      <option value="">Website Redisign</option>
                      <option value="">Website Maintanane</option>
                      <option value="">App Development</option>
                      <option value="">Digital Marketing</option>
                      <option value="">Branfing</option>
                      <option value="">Grapic Design</option>
                      <option value="">Digital Marketing</option>
                      <option value="">Customized Software Solution</option></select></div>
                    </div>
              
              <div><input type="text" name="bs" id="bs" placeholder='Which Businnes do you have*'/></div>
              <div><input type="text" name="loc" id="loc" placeholder='Location*'/></div>
              <div><textarea name="msg" id="msg" placeholder='Message*'></textarea></div>
              <div><button type="button" className='btnb mt-4'>Connect With Viditech Today</button></div>
            </form>
           
          </div>

        </div>
       
      
    </Container >
      </section >

      <section>
            <Footer />
      </section>

    </>
  );
}


export default App;
