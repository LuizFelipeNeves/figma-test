import arrowCircleLeft from "../assets/ArrowCircleLeft.png";
import arrowCircleRight from "../assets/ArrowCircleRight.png";
import clientImage1 from "../assets/client-image (1).png";
import clientImage2 from "../assets/client-image (2).png";

const Testimonial = () => {
  return (
    <section id="testimonial">
      <div className="testimonial-container">
        <div className="testimonial-container-top">
          <div className="testimonial-container-top-text">
            <h2>Testimonial</h2>
            <h5>What our clients say about us</h5>
          </div>
          <div className="testimonial-container-top-btn">
            <img src={arrowCircleLeft} alt="" />
            <img src={arrowCircleRight} alt="" />
          </div>
        </div>
        <div className="testimonial-contents">
          {[clientImage1, clientImage2, clientImage2].map((clientImg, index) => (
            <div className="client" key={index}>
              <div className="client-details">
                <img src={clientImg} alt="" />
                <div>
                  <h4>Michael Wong</h4>
                </div>
              </div>
              <div className="client-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel
                  sit dolor fringilla volutpat lectus amet. Integer sed pretium
                  odio lectus at malesuada sed eget nunc.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
