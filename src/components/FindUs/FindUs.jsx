import fbLogo from "../../assets/fb.png";
import twitterbLogo from "../../assets/twitter.png";
import instagramLogo from "../../assets/instagram.png";
const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-3">Find Us on</h2>
      <div className="">
        <div className="join join-vertical w-full">
          <button className="btn bg-base-100 justify-start join-item">
            <img src={fbLogo} alt="" />
            Facebook
          </button>
          <button className="btn bg-base-100 justify-start join-item">
            <img src={twitterbLogo} alt="" />
            Twitter
          </button>
          <button className="btn bg-base-100 justify-start join-item">
            <img src={instagramLogo} alt="" />
            Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
