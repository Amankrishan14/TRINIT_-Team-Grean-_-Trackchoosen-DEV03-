import React,{useState} from 'react'

const Mypfaqs = ({ question,answer}) => {
   const [show, setShow] = useState(false) 
  return (
   <>
  <div className='main-heading'>
    <p onClick={()=> setShow(!show)}>+</p>
    <h3> {question} </h3>
  </div>
  {show && <p> {answer} </p> }
   </>
  )
}

export default Mypfaqs