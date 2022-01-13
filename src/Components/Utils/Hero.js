import video from "../../pic/banner.mp4";

const Hero = () => {
  return (
    <div className="main-image">
      <video id="video2" preload autoPlay muted playsInline loop>
        <source src={video} type="video/mp4" />
      </video>
      <div className="container">
        {/* <h1>
          <span>Kingdom Diplomat</span>
        </h1> */}
        <span className="cen">Welcome To Church</span>
        <a className="button" href="#">
          Connect
        </a>
      </div>
    </div>
  );
};

export default Hero;
