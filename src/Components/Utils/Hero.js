import video from "../../pic/banner.mp4";
import a from "../../pic/coverkd.jpg";

const Hero = () => {
  return (
    <div className="main-image">
      <img src={a} />
      <video id="video2" preload autoPlay muted playsInline loop>
        <source src={video} type="video/mp4" />
      </video>
      <div className="container">
        {/* <h1>
          <span>Kingdom Diplomat</span>
        </h1> */}
        <span className="cen">Welcome To Church</span>
        <a
          className="button"
          href="https://www.youtube.com/channel/UC11cQHgDCIXrdqKL4fkVlgg"
        >
          Connect
        </a>
      </div>
    </div>
  );
};

export default Hero;
