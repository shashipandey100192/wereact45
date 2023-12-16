import React, { useEffect, useState } from 'react'
   
function Myforms() {
    const [sv, sf]=useState("abcd");

    const mysubmit = (p)=>{
       console.log(p.target.value);
       sf(p.target.value);
    //    console.log(p);
       const b = new String(p.target.value)
       console.log(b);
        if(b.length>=10)
        {
            alert("welcome");
            sf("eee");
        }
    }


    const [bgv,bgf]=useState("red")
    const changeback = (element)=>{
        // document.bgColor=element.target.value;
        bgf(element.target.value);
    }

useEffect(()=>{
    alert("this is run function after reload window");
})



  return (
    <div className='container' style={{backgroundColor:`${bgv}`}}>
        <div className='row'>
            <div className='col'>
                <input type='text' className='form-control' onChange={mysubmit} value={sv}/> 
                <input type='color' onChange={changeback}/>
            
            </div>
        </div>
    </div>
  )
}

export default Myforms