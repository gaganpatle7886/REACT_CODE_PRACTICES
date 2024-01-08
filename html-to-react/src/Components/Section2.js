import './CSS/Section2.css';
import Image1 from './images/f1.jpg';
import Image2 from './images/f2.jpg';
import Image3 from './images/f3.jpg';

import Container1 from './Components/Container1';

function section2() {
    return (
        <section className="container padding">
        <div>
          <h1 className="second_h1">Superb Facilities</h1>
          <p className="para margin">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut <br></br> labore et
            dolore magna aliqua.</p>
        </div>


     <article>
          <div className="first_gallery ">
            <Container1 className={"container3"}>
              <a href="#">
                <img className={"image-1"} src={Image1} alt="" />
                <div className={"overlay"}>
                  <div className={"text"}>Resort Holiday Package</div>
                </div>
              </a>
            </Container1>
            <Container1 className={"container3"}>
              <a href="#">
                <img src={Image2} alt="" />
                <div className={"overlay"}>
                  <div className={"text"}>Resort Holiday Package</div>
                </div>
              </a>
            </Container1>
            <Container1 className={"container3"}>
              <a href="#">
                <img src={Image3} alt="" />
                <div className={"overlay"}>
                  <div className={"text"}>Resort Holiday Package</div>
                </div>
              </a>
            </Container1>
          </div>
    </article>  
      </section>

    )
}

export default section2;