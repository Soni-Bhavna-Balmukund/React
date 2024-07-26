import React from 'react'

const Header = (props) => {

  let data = props.name;
  // console.log(data);
  return (


    {


        data.map((v,i)=>{

        })

    }
  //   <section className=" bg-img ">
  //   <div className="bg"></div>
  //   <div className="container  text-white">

  //     <div className="d-flex justify-content-between align-items-center pr z-99 pt-16">
  //       <div className=""><img src={require('./img/logo.png')} className="logo"></img></div>
  //       <div className="d-flex">
  //         <div><button value="button" className="engbtn me-15">English</button></div>
  //         <div><button value="button" className="sign-in">Sign In</button></div>
  //       </div>
  //     </div>

  //     <div className="p-120">
  //       <div className="text-center pr z-99">
  //         <div>
  //           <div className="fs-40 fw-900">Unlimited movies, tv shows and more</div>
  //           <div className="fs-24"><p>Watch anywhere. Cancel anytime.</p></div>
  //         </div>
  //         <div>
  //           <div className="fs-20">Ready to watch? Enter your email to create or restart your membership.</div>
  //           <div className="d-flex justify-content-center mt-16 dc ">
  //             <div><input type="email" placeholder="Email Address" className="my-md-0 my-4 em"></input></div>
  //             <div><button className="getbtn">Get Started </button></div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>

  // </section>
  )
}

export default Header