import React from 'react'
import "../Css/Pfaqs.css" 
const Pfaqs = () => {
  return (
   <div className='pfaqs'>
    <button className="accordion">Section 1</button>
<div className="panel">
  <p>Lorem ipsum...</p>
</div>

<button className="accordion">Section 2</button>
<div className="panel">
  <p>Lorem ipsum...</p>
</div>

<button className="accordion">Section 3</button>
<div className="panel">
  <p>Lorem ipsum...</p>
</div>
   </div>
  )
}

export default Pfaqs