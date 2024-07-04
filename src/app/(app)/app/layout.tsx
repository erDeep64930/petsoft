import AppFooter from '@/components/AppFooter'
import AppHeader from '@/components/AppHeader'
import BackgroundPattern from '@/components/BackgroundPattern'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
      <BackgroundPattern />
      <div className='flex flex-col max-w-[1080px] mx-auto px-4 min-h-screen'>
      <AppHeader />
      {children}
      <AppFooter />
      </div>
      
      </>

  )
}

export default layout