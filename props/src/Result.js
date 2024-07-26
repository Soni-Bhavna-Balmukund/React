import React from 'react'

function Result(props) {

    let data = props.result;

    // console.log(data);
  return (
    <div>

        {

            data.map((v,i)=>{


                return <div>

                    <li>{v.name}</li>
                    <b>{v.rollno}</b>

                    </div>
            })
        }

    </div>
  )
}

export default Result