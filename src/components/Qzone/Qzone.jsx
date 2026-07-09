import swimmingImg from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playgroundImg from "../../assets/playground.png";
import bgImg from "../../assets/bg.png";
const Qzone = () => {
  return (
    <div>
      <div className="bg-[#F3F3F3] p-2">
        <h2 className="font-bold mb-2">Q-Zone</h2>
        <div className="flex flex-col gap-5">
          <img src={swimmingImg} alt="" />
          <img src={classImg} alt="" />
          <img src={playgroundImg} alt="" />
        </div>
      </div>
      <div className="mt-5">
        <img src={bgImg} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
