
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Slider from './Slider';
import './font/stylesheet.css';
import { HiPlus } from "react-icons/hi";

function App() {

  let navvv = [100,200,300,400];

  return (
    <>



{/* <FaHome /> */}



       <Header name={navvv} />
      <div className="bg-gray">



    <Slider/>

        <section className=" mt-10 bg-black">
          <div className="container text-white d-flex d-c pr p-70 dc">

            <div className="p-70 text-lg-start text-center">
              <div>
                <div ><h1 className="fs-50 fw-900">Enjoy on your TV</h1></div>
                <div><p className="fs-24">Watch on smart TVs, PlayStation, Xbox,<br /> Chromecast, Apple TV, Blu-ray players and<br /> more.</p></div>
              </div>
            </div>

            {/* img and ideo */}
            <div className='w-50'>
              <div className='pr'><img src={require('./img/tv.png')} className="img" /></div>
              <div><video src={require('./img/tv_video.m4v')} className="vid" autoPlay loop muted /></div>
            </div>
          </div>
        </section>


        <section className=" mt-10 bg-black text-white p-70">
          <div className="container">
            <div className="d-flex gap-3 dcr dcr">
              <div className="pr text-lg-start text-center">
                <div ><img src={require('./img/mobile.jpg')} className="img2 "></img></div>

                <div className="box d-flex align-items-center ">
                  <div className="me-15"><img src={require('./img/boxshot.png')} className="book"></img></div>
                  <div className="me-15">
                    <div className="fs-16 fw-500">Stranger Thing</div>
                    <div className="text-blue fs-14">Downloading...</div>
                  </div>
                  <div>
                    <div><img src={require('./img/download.gif')} className="dwn"></img></div>
                  </div>
                </div>

              </div>
            

            <div className="pt-48 text-lg-start text-center">
              <div>
                <div ><h1 className="fs-50 fw-900 mb-0">Download your  shows to watch offline</h1></div>
                <div><p className="fs-24 pt-16">Save your favourites easily and always have <br/> something to watch.</p></div>
              </div>
            </div>
          </div>
          </div>
        </section>

        <section className=" mt-10 bg-black p-70 pb-345">
          <div className="container text-white d-flex d-c dc pr">

            <div className="p-120 w-50 text-lg-start text-center">
              <div>
                <div ><h1 className="fs-50 fw-900">Watch everywhere</h1></div>
                <div><p className="fs-24">Stream unlimited movies and TV shows on your  phone, tablet, laptop, and TV.</p></div>
              </div>
            </div>

            {/* img and ideo */}
            <div className='w-50'>
             <div> <img src={require('./img/tv-tile.png')} className="img imgt" /></div>
             <div> <video src={require('./img/m-video.m4v')} className="tvid" autoPlay loop muted /></div>
            </div>
          </div>
        </section>

        <section className=" mt-10 bg-black text-white">
          <div className='container p-70 d-flex dcr dcr'>
              <div className='text-lg-start text-center'>
                <div><img className='cimg' src={require('./img/cartoon.png')}></img></div>
              </div>
              <div className="pt-30">
              <div className='p-70 ps-42 text-lg-start text-center'>
                <div ><h1 className="fs-50 fw-900 mb-0">Create profiles for kids</h1></div>
                <div><p className="fs-24">Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p></div>
              </div>
            </div>
          </div>
        </section>
     
      <section className='mt-10 bg-black text-white'>
        <div className='container p-70'>
          <div className='py-20' >
        <div className='text-center mb-15'><h1 className='fs-50 fw-900'>Frequently Asked Questions</h1></div>

        <div className='p-24 d-flex justify-content-between bg-gray align-items-center mb-15 cb' >
          <div><p className='fs-24 mb-0'>What is Netflix?</p></div>
          <div><HiPlus className='fs-50'/></div>
        </div>

        <div className='p-24 d-flex justify-content-between bg-gray align-items-center mb-15 cb'>
          <div><p className='fs-24 mb-0'>How much does Netflix cost?</p></div>
          <div><HiPlus className='fs-50'/></div>
        </div>

        <div className='p-24 d-flex justify-content-between bg-gray align-items-center mb-15 cb'>
          <div><p className='fs-24 mb-0'>Where can i watch?</p></div>
          <div><HiPlus className='fs-50'/></div>
        </div>

        <div className='p-24 d-flex justify-content-between bg-gray align-items-center mb-15 cb'>
          <div><p className='fs-24 mb-0'>How do i cancel?</p></div>
          <div><HiPlus className='fs-50'/></div>
        </div>

        <div className='p-24 d-flex justify-content-between bg-gray align-items-center mb-15 cb'>
          <div><p className='fs-24 mb-0'>What can i watch on Netflix?</p></div>
          <div><HiPlus className='fs-50'/></div>
        </div>

        <div className='p-24 d-flex justify-content-between bg-gray align-items-center mb-15 cb'>
          <div><p className='fs-24 mb-0'>Is Netflix good for kids?</p></div>
          <div><HiPlus className='fs-50'/></div>
        </div>
          </div>

          <div className='p-70'>
                  <div className="fs-20 text-center">Ready to watch? Enter your email to create or restart your membership.</div>
                  <div className="d-flex justify-content-center mt-16 pb-40 dc">
                    <div><input type="email" placeholder="Email Address" className="em my-md-0 my-4"></input></div>
                    <div><button className="getbtn">Get Started </button></div>
                  </div>
                </div>
        </div>
      </section>
     
     
     <Footer/>
     
      </div>
    </>
  );
}

export default App;
