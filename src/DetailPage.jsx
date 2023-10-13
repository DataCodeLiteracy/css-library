import React from 'react'
import ImageLayout from './components/ImageLayout'
import Description from './components/Description'
import Option from './components/Option'

const DetailPage = () => {
  return (
    <div className="flex-col justify-center ">
      <div className="flex justify-center ">
        <ImageLayout />
      </div>
      <div className="desc-option flex justify-center px-32 py-10">
        <Description />
        <Option />
      </div>
    </div>
  )
}

export default DetailPage
