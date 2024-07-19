import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Grooming from './women js/Grooming'
import Shirt from './women js/Shirt'
import Trouser from './women js/Trouser'
import Jewellery from './women js/Jewellery'

const Women = () => {
  return (
    <div>Women Items:
       
        <ul>
        <li><Link to='/women/Grooming'>Grooming</Link></li>
        <li><Link to='/women/Shirt'>Shirt</Link></li>
        <li><Link to='/women/Trouser'>Trouser</Link></li>
        <li><Link to='/women/Jewellery'>Jewellery</Link></li>
    </ul>
   
        <Routes>
            <Route path='/Grooming' element={<Grooming/>} />
            <Route path='/Shirt' element={<Shirt/>} />
            <Route path='/Trouser' element={<Trouser/>} />
            <Route path='/Jewellery' element={<Jewellery/>} />
        </Routes>
    </div>
  )
}

export default Women