
import './App.css';
import logo from './images/logo.png';
import Container1 from './Components/Container1';
import Container2 from './Components/Container2';
import Container3 from './Components/Conatiner3';
import Image1 from './images/f1.jpg';
import Image2 from './images/f2.jpg';
import Image3 from './images/f3.jpg';
import Image4 from './images/about-img.jpg';
import Image5 from './images/g1.jpg';
import Image6 from './images/g2.jpg';
import Image7 from './images/g3.jpg';
import Image8 from './images/g4.jpg';
import Image9 from './images/g5.jpg';
import Image10 from './images/g6.jpg';
import Image11 from './images/i1.jpg';
import Image12 from './images/i2.jpg';
import Image13 from './images/i3.jpg';
import Image14 from './images/i4.jpg';
import Image15 from './images/i5.jpg';
import Image16 from './images/i6.jpg';
import Image17 from './images/i7.jpg';
import Image18 from './images/i8.jpg';

function App() {
  return (
    <>"
      <header className="header" >
        <div className=" flex container">
          <div className="logo">
            <a href="#home">
              <img src={logo} />
            </a>
          </div>
          <nav className="nav">
            <a href="#">Home</a>
            <a href="#">Falilities</a>
            <a href="#">Service</a>
            <a href="#">Book</a>
          </nav>
        </div>
      </header>
      {/*Section 1 */}
      <section className="container1" style={{ height: "100vh" }} >

        <h1 className="first_h1">
          Enjoy Holidays <br></br>
          with affordable Hotels
        </h1>
        <a className="btn a" href="#">start searching</a>
      </section>


      {/* Section 2*/}
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

      {/*Section 3 */}

      <section className={"flex area"}>
        <div>
          <img className={"img_key"} src={Image4} alt="" />
        </div>
        <div className={"block block1"}>
          <h1 className={"block_h1"}>A very Lovely Welcome <br></br>
            to our Hotel</h1>
          <p className={"margin1"}>
            inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards
            especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond
            reproach. inappropriate behavior is often laughed.
          </p>
          <a className={"btn btn-second"} href="#">Make Package of your own</a>
        </div>
      </section>

      {/*Section 4 */}

      <section className={"padding"}>
       
        <div>
          <h1 className={"second_h1"}>Superb Facilities</h1>
          <p className={"para margin"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut<br></br>
            labore et dolore magna aliqua.
          </p>
        </div>
        <div >
          <div className={"row"}>
            <div className={"sigle-facilities  col-lg-4 col-lg-6 "}>
              <span className={"inr lnr lnr-rocket"}></span>
              <h4>Easy Flight Search</h4>
              <p className={"para"}>
                inappropriate behavior is often laughed off as <br></br>“boys will be boys,” women face higher conduct.
              </p>
            </div>
            <div className={"sigle-facilities  col-lg-4 col-lg-6 "} >
              <span className={" inr lnr lnr-magic-wand"}>
              </span>
              <h4>Get Hotel Offers</h4>
              <p className={"para"}>
                inappropriate behavior is often laughed off as <br></br> “boys will be boys,” women face higher conduct.
              </p>
            </div>
            <div className={"sigle-facilities  col-lg-4 col-lg-6 "}>
              <span className={" inr lnr lnr-gift"}></span>
              <h4>Holiday Packages</h4>
              <p className={"para"}>
                inappropriate behavior is often laughed off as<br></br> “boys will be boys,” women face higher conduct.
              </p>
            </div>
            </div>
            <div className='row row1'>
            <div className={"sigle-facilities  col-lg-4 col-lg-6 "} >
              <span className={"inr lnr lnr-rocket"}></span>
              <h4>Easy Flight Search</h4>
              <p className={"para"}>
                inappropriate behavior is often laughed off as <br></br> “boys will be boys,” women face higher conduct.
              </p>
            </div>
            <div className={"sigle-facilities  col-lg-4 col-lg-6 "} >
              <span className={" inr lnr lnr-magic-wand"}>
              </span>
              <h4>Get Hotel Offers</h4>
              <p className={"para"}>
                inappropriate behavior is often laughed off as <br></br> “boys will be boys,” women face higher conduct.
              </p>
            </div>
            <div className={"sigle-facilities  col-lg-4 col-lg-6 "}>
              <span class=" inr lnr lnr-gift"></span>
              <h4>Holiday Packages</h4>
              <p class="para">
                inappropriate behavior is often laughed off as<br></br> “boys will be boys,” women face higher conduct.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/*Section 5 */}

      <section>
        <div className={"second_gallery "}>
          <Container2 className={"box container3"}>
            <a href="#">
              <img className={"img5"} src={Image5} alt="" />
              <div className={"overlay"}>
                <div className={"text"}>Resort Holiday Package</div>
              </div>
            </a>
          </Container2>
          <Container2 className={"box container3"}>
            <a href="#">
              <img className={"img5"} src={Image6} alt="" />
              <div className={"overlay"}>
                <div className={"text"}>Resort Holiday Package</div>
              </div>
            </a>
          </Container2>
          <Container2 className={"box container3"}>
            <a href="#">
              <img className={"img5"} src={Image7} alt="" />
              <div className={"overlay"}>
                <div className={"text"}>Resort Holiday Package</div>
              </div>
            </a>
          </Container2>
          <Container2 className={"box container3"}>
            <a href="#">
              <img className={"img5"} src={Image8} alt="" />
              <div className={"overlay"}>
                <div className={"text"}>Resort Holiday Package</div>
              </div>
            </a>
          </Container2>
          <Container2 className={"box container3"}>
            <a href="#">
              <img className={"img5"} src={Image9} alt="" />
              <div className={"overlay"}>
                <div className={"text"}>Resort Holiday Package</div>
              </div>
            </a>
          </Container2>
          <Container2 className={"box container3"}>
            <a href="#">
              <img className={"img5"} src={Image10} alt="" />
              <div className={"overlay"}>
                <div className={"text"}>Resort Holiday Package</div>
              </div>
            </a>
          </Container2>
        </div>
      </section>

      {/*Section 5 */}

      <section className={"padding container booking-wrap"}>

        <div>
          <h1 className={"second_h1"}>Book a Room</h1>
          <p className={"para margin"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut<br></br>
            labore et dolore magna aliqua.
          </p>
        </div>
        <div className={"flex "}>

          <form>
            <input type="text" name="fname" className={"single-in form-control"} placeholder="First Name" onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'First Name'" required="" />
            <input id="datepicker" name="arrival" className={"single-in form-control hasDatepicker"} onblur="this.placeholder = 'Arrival'"
              type="text" placeholder="Arrival" required="" />
            <select className={"single-in form-control "}>
              <option value="Room type">Room type</option>
              <option value="Room type1">Room type1</option>
              <option value="Room type2">Room type2</option>
              <option value="Room type3">Room type3</option>
            </select>
            <select className={"single-in form-control "} >
              <option value="Adult">Adult</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>

          </form>

          <div className={"form1"}>
            <form className={"form1"}>
              <input type="text" name="lname" className={"single-in form-control"} placeholder="Last Name" onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'Last Name'" required="" />
              <input id="datepicker" name="Departure" className={"single-in form-control hasDatepicker"} onblur="this.placeholder = 'Departure'"
                type="text" placeholder="Departure" required="" />
              <select className={"single-in form-control "}>
                <option value="Numbers of Room">Numbers of Room</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <select className={"single-in form-control "}>
                <option value="Chailds">Chailds</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </form>
          </div>
          <div className={"msg"}>
            <textarea className={"single-in form-control"} name="message" placeholder="Messege" onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'Messege'" required=""></textarea>
          </div>
        </div>
        <div className={"btnroom"}>

          <a className={"btn3 "} href="#">Book Room <span className={"lnr lnr-arrow-right"}></span></a>
        </div>

      </section>

      {/*Section 6 */}
      <section className={"padding "}>
        <div className={"container flex"}>
          <div>
            <h4>Visit Our Office</h4>
            <p className={"para"}>56/8, bir uttam qazi nuruzzaman <br></br>
              road, west panthapath, kalabagan,<br></br>
              Dhanmondi, Dhaka - 1205</p>
          </div>
          <div>
            <h4>Let’s call us</h4>
            <p className={"para"}>Phone 01: 012-6532-568-9746<br></br>
              Phone 02: 012-6532-568-9748<br></br>
              FAX: 02-6532-568-746</p>
          </div>
          <div>
            <h4>Let’s Email Us</h4>
            <p className={"para"}>hello@colorlib.com<br></br>
              mainhelpinfo@colorlib.com<br></br>
              infohelp@colorlib.com</p>
          </div>
          <div>
            <h4>Customer Support</h4>
            <p className={"para"}>support@colorlib.com<br></br>
              emergencysupp@colorlib.com<br></br>
              extremesupp@colorlib.com</p>
          </div>
        </div>
      </section>
      {/*Footer*/}
      <footer className={"footer-area section-gap"}>
        <div className={"container "}>
          <div className={"row flex"}>
            <div>
              <h6>About Us</h6>
              <p className={"para2"}>Lorem ipsum dolor sit amet,<br></br>
                consectetur adipisicing elit, sed do <br></br>
                eiusmod tempor incididunt ut labore<br></br>
                dolore magna aliqua.</p>
            </div>
            <div>
              <h6>Newsletter</h6>
              <p className={"para2"} style={{ marginBottom: "15px" }}>Stay update with our latest</p>
              <form className={"flex"}>
                <input className={"form-control last-input"} name="EMAIL" placeholder="Enter Email"
                  onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Email '" required=""
                  type="email" />
                <a className={"lastbtn "} href="#"><span className={"lnr lnr-arrow-right"}></span></a>
              </form>
            </div>
            <div>

            </div>
            <div>
              <h6>Instragram Feed</h6>
              <div class="second_gallery2">
                <Container3 className={"last"}><img className={"imgfooter"} src={Image11} alt="" /></Container3>
                <Container3 className={"last"}><img className={"imgfooter"} src={Image12} alt="" /></Container3>
                <Container3 className={"last"}><img className={"imgfooter"} src={Image13} alt="" /></Container3>
                <Container3 className={"last"}><img className={"imgfooter"} src={Image14} alt="" /></Container3>
                <Container3 className={"last"}><img className={"imgfooter"} src={Image15} alt="" /></Container3>
                <Container3 className={"last"}><img className={"imgfooter"} src={Image16} alt="" /></Container3>
                <Container3 className={"last"}><img className={"imgfooter"} src={Image17} alt="" /></Container3>
                <Container3 className={"last"}><img className={"imgfooter"} src={Image18} alt="" /></Container3>
              </div>
            </div>
            <div>
              <h6>Follow Us</h6>
              <p class="para2" style={{ marginBottom: "15px" }}>Let us be social</p>
              <div class="flex">
                        <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" height="0.9em" viewBox="0 0 320 512"><path fill="#cccccc" d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
                        </a>
                        <a href='#'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="0.9em"  viewBox="0 0 512 512"><path fill="#cccccc" d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg>
                        </a>
                        <a href='#'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="0.9em"  viewBox="0 0 512 512"><path fill="#cccccc" d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/></svg>
                        </a>
                        <a href='#'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="0.9em"  viewBox="0 0 576 512"><path fill="#cccccc" d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"/></svg>
                        </a>
                        
                       </div>
            </div>
          </div>
        </div>
        <div className={"padding"}>
          <p className={"para2"}>
            Copyright ©2023 All rights reserved | Made with <span className={"material-symbols-outlined footerlst heart"}>
              favorite
            </span> by <a className={"footerlst"} href="https://colorlib.com/" target="_blank">Colorlib</a> & distributed by
            <a className={"footerlst"} href="https://themewagon.com/" target="_blank">ThemeWagon</a>
          </p>
        </div>
      </footer>

    </>
  );
}

export default App;
