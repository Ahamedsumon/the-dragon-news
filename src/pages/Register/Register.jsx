const Register = () => {
  return (
    <div className="hero bg-base-200  min-h-screen">
      <div className="card bg-base-100 w-full max-w-md shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">
            Register your account!
          </h1>
          <div className="border border-base-200 my-4"></div>
          <form>
            <fieldset className="fieldset">
              {/* Name field */}
              <label className="label">Your Name</label>
              <input
                type="text"
                className="input"
                name="name"
                placeholder="Enter your name"
              />
              {/* Photo URL Field */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                className="input"
                name="photo"
                id=""
                placeholder="Photo URL"
              />
              {/* Email Field */}
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Enter your email address"
              />
              {/* Password Field */}
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Enter your password"
              />
              {/* Terms and Condition Box */}
              <div className="flex items-center gap-2">
                <input type="checkbox" className="checkbox checkbox-md" />
                <p>Accept Term & Conditions</p>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
