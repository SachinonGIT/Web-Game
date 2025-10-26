import React from 'react'

function Container({
    className = "",
    children,
    ...props
}) {
  return (
    <>
     <div className={`bg-slate-600 w-full min-h-screen backdrop-blur-md ${className}`} {...props}>
     <div className="max-w-screen-sm m-auto text-center min-h-screen bg-slate-900 text-slate-300 flex flex-col">
     {children}
        </div>
        </div>
    </>
  )
}

export default Container