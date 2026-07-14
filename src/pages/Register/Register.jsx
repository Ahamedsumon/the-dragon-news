import { use } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const { createUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    console.log(name, photo);
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero bg-base-200  min-h-screen">
      <div className="card bg-base-100 w-full max-w-md shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">
            Register your account!
          </h1>
          <div className="border border-base-200 my-4"></div>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* Name field */}
              <label className="label">Your Name</label>
              <input
                type="text"
                className="input"
                name="name"
                placeholder="Enter your name"
                required
              />
              {/* Photo URL Field */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                className="input"
                name="photo"
                id=""
                placeholder="Photo URL"
                required
              />
              {/* Email Field */}
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                name="email"
                placeholder="Enter your email address"
                required
              />
              {/* Password Field */}
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                name="password"
                placeholder="Enter your password"
                required
              />
              {/* Terms and Condition Box */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-md"
                  required
                />
                <p>Accept Term & Conditions</p>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
