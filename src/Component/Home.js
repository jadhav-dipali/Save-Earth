import React from "react"
import "../Style/home.css"
import Topnav from "./Topnav"
import org1 from "../Images/WWF_logo.svg.png"
import org2 from "../Images/NRDC_bear_logo.svg"
import org3 from "../Images/Greenpeace_logo.svg.png"
import org4 from "../Images/adubon.png"
import diffearth from "../Images/earthdeff.jpg"
import rect1 from "../Images/Climate Change tree.png"
import rect2 from "../Images/globalWarmimg.jpeg"
import rect3 from "../Images/globalwarmEffect.jpg"
import recycle from "../Images/recycle.jpg"
import other1 from "../Images/bhkamp.png"
import other2 from "../Images/mahapur.avif"
import other3 from "../Images/kachara.jpg"
import social1 from "../Images/Vector(1).png"
import social2 from "../Images/bi_instagram.png"
import social3 from "../Images/linkedin.png"
export default function Home(){
    return<>
    <div id="Home-container">
        <Topnav/>
        <div id="container-of-the-home-slogan">
            <div id="slogan-of-the-home">
                <h1 id="home-slogan">Save Earth, save a life, save us all. Keep our Earth green and clean.</h1>
                <p>We all know that the Earth is the only planet in our solar system that sustains life. It is not home to just human beings but animals, birds and all other living organisms as well.</p>
                <div id="read-more-in-the-home-slogan">
                <button className="read-more-btn">Read More</button>
                </div>
              
            </div>
            <div id="rightt-side-slogan">

            </div>
        </div>
    </div>

    <div>
        <div>
            <h4 id="organization-of-thesave-eath">Organization Of Save Earth</h4>
        </div>
        <div id="img-container-org">
           <img src={org1} className="org-images"/>
           <img src={org2} className="org-images" />
           <img src={org3} className="org-images"/>
           <img src={org4} className="org-images" />
        </div>
    </div>

    {/* Slide second home-page */}
    <div id="second-slide-container">
        <div id="left-side-of-second-slide">
           <div>
               <h4 className="para-of-second-slide">A B O U T</h4>
                 <h1>Love the Earth and be happy. Raise your voice against every act of harming the Earth.</h1>
                 <p className="para-of-second-slide">We should save the mother earth so that our future generations can live in a safe environment. We can save the earth by saving trees, natural vegetation, water, natural resources, electricity, etc. We should strictly follow all the possible measures to control the environmental pollution and global warming.</p>
                 <button className="read-more-btn">Read More</button>
           </div>
        </div>
        <div id="right-side-of-second-slide">
            <img src={diffearth}></img>
        </div>
    </div>
    {/* Second slide end */}
    {/* third slide start */}
    <div id="third-slide-container">
            <div>
                <h4 className="servay servay-of-survay">S U R V A Y</h4>
                <h1 className='servay'>Survay Of Save Earth</h1>
            </div>
            <div id="image-card-holder">
                <div className='image-card-container'>
                    <img src={rect1} className='threeimages-in-thirdSlide'/>
                    <p className='lorem-para-card'>Plant a green tree and live younger.<br></br> Save a tree and save the air from pollution.</p>
                    <button className="read-more-btn">Read More</button>
                </div>
                <div className='image-card-container'>
                    <img src={rect2} className='threeimages-in-thirdSlide'/>
                    <p className='lorem-para-card'>Energy conservation is the true solution to global warming.<br></br> Save earth today to survive tomorrow.</p>
                    <button className="read-more-btn">Read More</button>
                </div>
                <div className='image-card-container'>
                    <img src={rect3} className='threeimages-in-thirdSlide'/>
                    <p className='lorem-para-card'>Be chill and don't fill the earth with heat. <br></br>Stop global warming from stopping ice melting.</p>
                    <button className="read-more-btn">Read More</button>
                </div>
            </div>
            <div id="more-servicess"><button className="read-more-btn">Read Survay</button></div>
        </div>
    <div>
    </div>
{/* third slide end */}
{/* firth slide start */}
<div id="second-slide-container">
<div id="right-side-of-second-slide" className="recycle-img">
            <img src={recycle}></img>
        </div>
        <div id="left-side-of-second-slide">
           <div>
               <h4 className="para-of-second-slide">R E C Y C L E</h4>
                 <h1>Reuse, recycle, and reduce the waste for a better future.</h1>
                 <p className="para-of-second-slide">Recycling of waste is defined in the Waste Framework Directive as any recovery operation by which waste materials are reprocessed into products, materials or substances whether for the original or other purposes.</p>
                 <button className="read-more-btn">Read More</button>
           </div>
        </div>
    </div>
{/* forth slidr end */}
{/* fifth slide start */}
    <div id="forth-slide-start">
       <div id="leftside-of-the-side-forth">
          <div>
            <h1 id="others-heading">Others</h1>
          </div>
       </div>
       <div className="right-side-of-the-side-forth">
       <div id="image-card-holder" >
                <div className='image-card-container what-people-say'>
                    <img src={other1} className='threeimages-in-thirdSlide'/>
                    <p className='lorem-para-card'>When an earthquake comes, be prepared to hide. Stay alert and try not to get hurt.  Tables can save your life during an earthquake.</p>
                    <button className="read-more-btn">Read More</button>
                </div>
                <div className='image-card-container what-people-say'>
                    <img src={other2} className='threeimages-in-thirdSlide'/>
                    <p className='lorem-para-card'>Energy conservation is the true solution to global warming.<br></br> Save earth today to survive tomorrow.</p>
                    <button className="read-more-btn">Read More</button>
             </div>
             <div className='image-card-container what-people-say'>
                    <img src={other3} className='threeimages-in-thirdSlide'/>
                    <p className='lorem-para-card'>Energy conservation is the true solution to global warming.<br></br> Save earth today to survive tomorrow.</p>
                    <button className="read-more-btn">Read More</button>
             </div>
       </div>
    </div>
    </div>
    {/* fifth slide end */}

      {/* last slide start */}
      <div id="footer-of-the-home">
       
        <div id="right-side-footer">
            <div>
                <h4>Sidemap</h4>
                <p>Home</p>
                <p>About</p>
                <p>Survay</p>
                <p>Recycle</p>
                <p>contact</p>
               
            </div>
            <div>
            <h4>Resourse</h4>
                <p>Help</p>
                <p>Blog</p>
                <p>Privacy</p>
            </div>
            <div>
                <h4>Follow Us</h4>
                <img src={social1} className="social-app"  />
                <img src={social2}  className="social-app" />
                <img src={social3}  className="social-app" />
            </div>
        </div>
      </div>

    </>
}