import React from 'react'
import ImageLayout from './components/ImageLayout'
import Description from './components/Description'
import Option from './components/Option'

import { DetailPageStyle } from './DetailPageStyles'
import { DescAndOptionStyle } from './components/styles/DescAndOptionStyles'
import { ImageLayoutStyle } from './components/styles/ImageStyles'

const DetailPage = () => {
  return (
    <DetailPageStyle>
      <ImageLayoutStyle>
        <ImageLayout />
      </ImageLayoutStyle>
      <DescAndOptionStyle>
        <Description />
        <Option />
      </DescAndOptionStyle>
    </DetailPageStyle>
  )
}

export default DetailPage
