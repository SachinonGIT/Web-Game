import React from 'react'
import UrlBar from '../UrlBar/UrlBar'

function BlogWebsite() {
  return (
    <>
     <div className="   bg-slate-600 w-full  backdrop-blur-md min-h-screen ">
        <div className=" max-w-screen-sm m-auto text-center bg-slate-900 text-slate-300 py-2 min-h-screen">
          <UrlBar />
          <div className='m-3 p-3 text-left'>
            <header className='text-center mb-4 border-b-2 border-white/30 pb-2 '>
                <h1 className='text-xl font-bold'>Welcome to BlogWebsite.com</h1>
            </header>
            <div className='m-2'>
                <h2 className='text-lg font-medium'>Lorem ipsum dolor sit.</h2>
                <p className='text-white/80 p-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo tempora quibusdam non? Repudiandae corrupti officia autem velit, ab deleniti iste?</p>
            </div>
            <div className='m-2'>
                <h2 className='text-lg font-medium'>Lorem ipsum dolor sit.</h2>
                <p className='text-white/80 p-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo tempora quibusdam non? Repudiandae corrupti officia autem velit, ab deleniti iste?</p>
            </div>
          </div>
          </div>
          </div>
    </>
  )
}

export default BlogWebsite