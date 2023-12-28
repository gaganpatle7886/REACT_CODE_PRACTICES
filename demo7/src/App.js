
import './App.css';
import Card from "./Card";
import image1 from "./img_5terre.jpg";
import image2 from "./img_forest.jpg";
import image3 from "./img_lights.jpg";
import image4 from "./img_mountains.jpg";

import Gallery from './Gallery';



function App() {
  return (
    <>
      <Card>
        <Gallery 
        href="img_5terre.jpg"
        image={image1} 
        alt="Cinque Terre"
        desc="Add a description of the image here"
        />
       </Card>

      <Card>
      <Gallery 
        href="img_forest.jpg"
        image={image2} 
        alt="Forest"
        desc="Add a description of the image here"
        />
      </Card>

      <Card>
      <Gallery 
        href="img_lights.jpg"
        image={image3} 
        alt="Northern Lights"
        desc="Add a description of the image here"
        />
      </Card>

      <Card>
      <Gallery 
        href="img_mountains.jpg"
        image={image4} 
        alt="Mountains" 
        desc="Add a description of the image here"
        />
      </Card>
    </>
  );
}

export default App;
