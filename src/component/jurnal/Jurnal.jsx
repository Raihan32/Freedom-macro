import React from 'react'
import './jurnal.css'
import jurnal1 from './img/jurnal1.png'

const Jurnal = () => {
  return (
    <div className='jurnal'>
        <div className='judul jurnal'>
            <p>Jurnal</p>
            
        </div>
      <div className='kolom'>
        <div className='contentjurnal'>
            <img src={jurnal1} style={{width:"246px" , height:"307px"}} />
            <div className='text'>
                <p>Kompas.com</p>
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <p>2 days ago . 3 min read</p>
            </div>
        </div>
        <div className='contentjurnal'>
            <img src={jurnal1} style={{width:"246px" , height:"307px"}} />
            <div className='text'>
                <p>Kompas.com</p>
                <p>Lorem Ipsum</p>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <p>2 days ago . 3 min read</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Jurnal;