import React from 'react'
import Navbar from './Navbar';
const All = () => {

 
  return (
    
    <div className="kitchen-slider" style={{background:'none'}}>
      <Navbar/>
      <h1> All type of furniture works</h1>     
        <div className='all'>
          <div className='all-furniture'>
            <img src="all1.jpg" alt=" 1" />
          </div>
          <div className='all-furniture'>
            <img src="all2.jpg" alt=" 2" />
          </div>
          <div className='all-furniture'>
            <img src="all3.jpg" alt=" 3" />
          </div>
          <div className='all-furniture'>
            <img src="all4.jpg" alt=" 4" />
          </div>
          <div className='all-furniture'>
            <img src="all5.jpg" alt=" 4" />
          </div>
          <div className='all-furniture'>
            <img src="all6.jpg" alt=" 4" />
          </div>
          <div className='all-furniture'>
            <img src="all7.jpg" alt=" 4" />
          </div>
        </div>
    </div>
  )
}

export default All