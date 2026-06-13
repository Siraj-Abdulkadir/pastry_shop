
import './App.css'
import NavBar from './NavBar'
import Card from './Card'
import { useState } from 'react'
import ch1 from './assets/ch/chornaki.jpg'
import ch2 from './assets/ch/chornaki1.jpg'
import ch3 from './assets/ch/chornaki2.jpg'
import ch4 from './assets/ch/chornaki3.jpg'
import ch5 from './assets/ch/chornakiAI.png'
import ch6 from './assets/ch/chornaki.webp'
import ch7 from './assets/ch/chornaki1.webp'
import ch8 from './assets/ch/chornaki4.jpg'



const IMAGES = [ch1,ch2,ch3,ch4,ch5,ch6,ch7,ch8]

function App() {
  

  const [imageIndex, setImageIndex] = useState(0)



  const nextImage = () => {
    if (imageIndex === IMAGES.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };
  const prevImage = () => {
    if (imageIndex === -2) {
      setImageIndex(5);
    } else {
      setImageIndex(imageIndex - 1);
    }
  };
  

  return ( 
    <>
    <NavBar/>

    <h1>Wellcome to <strong style={{color:'rgb(109, 209, 51)'}}><em>Chornake</em></strong> Shop</h1>

   
    <div className="card_container">
      <button className="next_btn" onClick={prevImage}>Prev</button>
      
    <Card my_image={IMAGES[imageIndex]}></Card>
    <Card my_image={IMAGES[imageIndex + 1]}></Card>
    <Card my_image={IMAGES[imageIndex +2]}></Card>


    <button className="next_btn" onClick={nextImage}>Next</button>



    </div>

    <h2>{imageIndex}</h2>
    </>
  )
}

export default App
