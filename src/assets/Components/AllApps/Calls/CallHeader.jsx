import React from 'react'
import { IoCall } from 'react-icons/io5'
import { RiDeleteBack2Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

function CallHeader() {
  return (
    <><header className='min-h-12 flex justify-between items-center p-3 px-12 bg-slate-950/50 w-full border-b-2 border-white/10'>
    <div><Link to="Calldailer"><IoCall className='min-w-7 min-h-7' /></Link></div>
    <div className='text-2xl font-bold'>Call</div>
    <div><Link to="/"><RiDeleteBack2Fill className='min-w-7 min-h-7' /></Link></div>
  </header></>
  )
}

export default CallHeader