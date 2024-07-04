import React from 'react'

const ContentBlock = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='bg-[#f7f8fa] shadow-sm rounded-md overflow-hidden h-full w-full' >{children}</div>
  )
}

export default ContentBlock