import "../Style/home.css"
import Topnav from "./Topnav"
import org1 from "../Images/WWF_logo.svg.png"
import org2 from "../Images/NRDC_bear_logo.svg"
import org3 from "../Images/Greenpeace_logo.svg.png"
import org4 from "../Images/adubon.png"
import diffearth from "../Images/earthdeff.jpg"

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

    </>
}