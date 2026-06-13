import NavBar from "./NavBar"

function About() {
  return (

    <>
     <NavBar/>
    <h1>This is the About Page</h1>

     <div>
      <h2>
        About Our Bakery 
      </h2>
      
      <p style={{color: '#c93737' }}>
        "Baking the world a sweeter place, one pastry at a time."
      </p>


        <p>
          Founded in 2026, our bakery started with a simple mission: to bring authentic, 
          freshly baked pastries to our community every single morning. What began as a small 
          kitchen experiment with a single oven has grown into a beloved neighborhood spot.
        </p>

        

        <h4>Contact us</h4>
        <p >BITS College, Megenagn Shola</p>
    </div>
    </>
   
  );
}

export default About;