import callIcon from '../assets/call-icon.png';
import aboutUsDivider from '../assets/about-us-divider.png';
import arrowRight from '../assets/ArrowRight.png';
import aboutUsImg1 from '../assets/about-us-img1.png';
import aboutUsImg2 from '../assets/about-us-img2.png';
import aboutUsImg3 from '../assets/about-us-img3.png';

const Hero = () => {
    return (<section id="hero">
        <div className="hero-container">
          <div className="hero-contents">
            <h1><b>Lorem ipsum dolor sit amet consectetur.</b></h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, expedita? Numquam, sed quasi saepe
              dolorem quidem ad facere nulla quisquam!
            </p>
            <button className="btn"><img src={callIcon} alt="Call Icon" />Book a call</button>
          </div>
        </div>
        {/* *============ about-us starts ============* */}
        <section id="about-us-container">
          {/* about us image starts */}
          <div className="about-us-images">
            <div className="about-us-images-col1">
              <img src={aboutUsImg1} alt="" />
            </div>
            <div className="about-us-images-col2">
              <img src={aboutUsImg2} alt="" />
              <img src={aboutUsImg3} alt="" />
            </div>
          </div>
          {/* about us image ends */}
          {/* about us contents start */}
          <div className="about-us-content">
            <div className="about-us-content-header">
              <h2>About Us</h2>
              <h5>Discover the various breathtaking locations</h5>
            </div>
            <div className="about-us-content-description">
              <img src={aboutUsDivider} alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur. In at amet semper velit elit nisi faucibus arcu. Bibendum nulla
                porttitor faucibus bibendum erat a vulputate sed. Quisque quis viverra turpis at erat vel ut metus congue. Sed
                senectus ullamcorper imperdiet sit fermentum. Fermentum faucibus proin hac sed condimentum euismod felis risus.
              </p>
            </div>
            <button className="btn">
              Read More
              <img src={arrowRight} alt="" />
            </button>
          </div>
          {/* about us contents end */}
        </section>
        {/* *============ about-us ends ============* */}
      </section>)
}

export default Hero;