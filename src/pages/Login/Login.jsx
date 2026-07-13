import { Link } from "react-router";

const Login = () => {
  return (
    <div className="hero bg-base-200  min-h-screen">
      <div className="card bg-base-100 w-full max-w-md shadow-2xl">
        <div className="card-body">
          <h1 className="text-4xl font-bold text-center">
            Login your account!
          </h1>
          <div className="border border-base-200 my-4"></div>
          <form>
            <fieldset className="fieldset">
              <label className="label">Email address</label>
              <input
                type="email"
                className="input"
                placeholder="Enter your email address"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Enter your password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
              <p className="py-2 font-semibold">
                Dont't Have An Account ?{" "}
                <Link to="/auth/register" className="text-secondary">
                  Register
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
