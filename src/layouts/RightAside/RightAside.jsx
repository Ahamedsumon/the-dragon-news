import FindUs from "../../components/FindUs/FindUs";
import Qzone from "../../components/Qzone/Qzone";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const RightAside = () => {
  return (
    <div className="space-y-5">
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
      <Qzone></Qzone>
    </div>
  );
};

export default RightAside;
