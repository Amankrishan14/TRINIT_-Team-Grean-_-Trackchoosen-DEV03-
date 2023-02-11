import React,{useState} from 'react'
import {question} from './api'
import "../Css/Pfaqs.css" 
import Mypfaqs from './Mypfaqs'
const Pfaqs = () => {
  const [data, setData] = useState(question);
  return (
   <>
   <div className='pfaqs'>
   <section className='main-div'>
    <h1>Frequently asked questions</h1>
   {
    data.map((curElem) => {
          const { id } = curElem;
          return <Mypfaqs key={id} {...curElem} />;

    })
   }
   </section>
   </div>
   </>
  )
}

export default Pfaqs