import { Link, NavLink } from "react-router";
import userImage from "../../assets/user.png";
import { use } from "react";
import { AuthContext } from "../../provider/AuthProvider";
const Navbar = () => {
  const { user } = use(AuthContext);
  console.log(user);
  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-4">
        <img className="rounded-full" src={userImage} alt="" />
        <Link to="/auth/login" className="btn btn-primary px-10">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
