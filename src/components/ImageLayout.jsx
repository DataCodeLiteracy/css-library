import './ImageLayout.css'

const ImageLayout = () => {
  return (
    <div className="images-wrap flex justify-center ">
      <div className="image1 w-80 mr-10">
        <img className="w-80 h-72" src="images/image1.jpeg" alt="" />
      </div>
      <div className="image2 image3 mr-10">
        <img className="w-80 h-32 mb-8" src="images/image2.jpeg" alt="" />
        <img className="w-80 h-32" src="images/image3.jpeg" alt="" />
      </div>
      <div className="image4">
        <img className="w-80 h-72" src="images/image4.jpeg" alt="" />
      </div>
    </div>
  )
}

export default ImageLayout
