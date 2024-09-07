import BtnLink from "./buttons/BtnLink";

const Hero = ({ heroImg }) => {
  return (
    <div className="hero container">
      <div className="hero__img">
        <img src={heroImg} alt="coffee beans" />
      </div>
      <div className="hero__text mb-hg">
        <h1 className="heading-primary">
          Food and coffee
          <br /> for your <span>soul</span>
        </h1>
      </div>
      <div className="hero__btn-box">
        <BtnLink text="explore menu" className="btn-link btn-link--full" />
        <BtnLink text="contact us" className="btn-link btn-link--outline" />
      </div>
    </div>
  );
};

export default Hero;
