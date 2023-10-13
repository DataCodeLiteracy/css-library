import {
  ImageWrap,
  ImageStyleBig,
  ImageStyleSmall,
  ImageSmallWrap,
  ImageBigWrap
} from './styles/ImageStyles'

const ImageLayout = () => {
  return (
    <ImageWrap className="images-wrap">
      <ImageBigWrap className="image1">
        <ImageStyleBig src="images/image1.jpeg" alt="" />
      </ImageBigWrap>
      <ImageSmallWrap className="image2 image3">
        <ImageStyleSmall src="images/image2.jpeg" alt="" />
        <ImageStyleSmall src="images/image3.jpeg" alt="" />
      </ImageSmallWrap>
      <ImageBigWrap className="image4">
        <ImageStyleBig src="images/image4.jpeg" alt="" />
      </ImageBigWrap>
    </ImageWrap>
  )
}

export default ImageLayout
