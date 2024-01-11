/* eslint-disable no-unused-vars */
import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {
    const { createUser, handleProfileUpdate } = useContext(AuthContext);
    const navigate = useNavigate();
  
    const handleRegister = (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      const image=e.target.image.value;
      const password = e.target.password.value;
     
  
      if (password.length < 6) {
        toast.error("Password must be at least 6 characters or longer!!");
        return;
      } else if (!/[A-Z]/.test(password)) {
        toast.error("Password must contain at least one capital letter!!");
        return;
      } else if (!/[@$!%*?&]/.test(password)) {
        toast.error("Password must contain at least one special character!!");
        return;
      }
  
    createUser(email, password)
        
        .then(result =>{
          handleProfileUpdate(name,image)
       
        .then((result) => {
          toast.success("Users created successfully!!");
          navigate("/");
        })
      })
        .catch((error) => {
         
          toast.error(error.message);
        });
    };

    return (
       <div>
      <div>
        <h1 className="text-2xl md:text-3xl font-bold my-8 text-center">Register now!</h1>
      </div>
      <div className="card flex-shrink-0 w-[400px] md:w-[500px] mx-auto shadow-2xl bg-base-100">
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="text"
              placeholder="Enter your image link"
              name="image"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-red-800 text-white" type="submit">Register</button>
          </div>
          
        </form>

        <p className="text-center mt-3 mb-8">
          Already have an account? Please <Link to="/login" className="text-blue-600 font-bold">
            Login
          </Link>
        </p>
      </div>
      <Toaster/>
    </div>
    );
};

export default Register;