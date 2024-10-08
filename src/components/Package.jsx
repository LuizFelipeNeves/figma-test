import arrowRight from '../assets/ArrowRight.png';
import numberCircleOne from '../assets/NumberCircleOne.png';
import numberCircleTwo from '../assets/NumberCircleTwo.png';
import numberCircleThree from '../assets/NumberCircleThree.png';
import packageImg1 from '../assets/package-img1.png';
import packageImg2 from '../assets/package-img2.png';
import packageLine from '../assets/package-line.png';

const Package = () => {
    return (<section id="packages">
        <div className="packages-container">
          <div className="packages-container-left">
            <div className="packages-header">
              <h2>Packages</h2>
              <h5>Choose your best package</h5>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. In at amet semper velit elit nisi faucibus arcu. Bibendum nulla
              porttitor
              faucibus bibendum erat a vulputate sed.
            </p>
            <div className="packages-contents">
              <div className="packages-content-line">
                <img src={packageLine} alt="" />
              </div>
              <div className="packages-content">
                {[
                  { img: numberCircleOne, title: 'Golden Package', desc: 'Lorem ipsum dolor sit amet consectetur.' },
                  { img: numberCircleTwo, title: 'Silver Package', desc: 'Lorem ipsum dolor sit amet consectetur.' },
                  { img: numberCircleThree, title: 'Bronze Package', desc: 'Lorem ipsum dolor sit amet consectetur.' },
                ].map((pkg, index) => (
                  <div className="packages-content-each" key={index}>
                    <img src={pkg.img} alt="" />
                    <div className="packages-content-details">
                      <h3>{pkg.title}</h3>
                      <p>{pkg.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="btn">
              View package details <img src={arrowRight} alt="" />
            </button>
          </div>
          <div className="packages-images">
            <img src={packageImg1} alt="" />
            <img src={packageImg2} alt="" />
          </div>
        </div>
      </section>)
  }

  export default Package;