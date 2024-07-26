import React from 'react'

function Navbar(props) {

    let txt = props.logo;

    let links = props.links;

    console.log(links);

    // console.log(txt);
  return (

    <>
    <div>{txt}</div>
        {    
    
                links.map((v,i)=>{
    

                    return <li>

                        {v}

                    </li>
            })
    
        }
    </>


    
  )
}

export default Navbar