import './App.css'

interface CardProps {
  my_image: string;
  alt?:string;
}

function Card({my_image, alt}:CardProps) {

  return (
    <>
     
    <div className="card_box_container">


    <div className="card_box">
      
       <img 
       loading='lazy'
       style={{ 
          width: '300px', 
          height: '300px', 
          objectFit: 'cover' ,
          borderRadius:'20px'
        }}
        src={my_image} alt={alt}/>
       
    </div>
      </div>
    </>
  )
}

export default Card