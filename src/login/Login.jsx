import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../pages/share/navabr/Navbar";
import { useContext } from "react";
import { AuthContext } from "../provider/Authprovider";



const Login = () => {
   const {signIn} = useContext(AuthContext)
   const location = useLocation()
   const navigate = useNavigate()
   console.log('location in the login page',location);
    const handlelogin = e=>{
         e.preventDefault()
         const form = new FormData(e.currentTarget)
         const email = form.get('email')
         const password = form.get('password')
         signIn(email,password)
         .then(result=>{
           console.log(result)
           navigate(location.state ? location.state : '/')
           

         })
         .catch(error=>{
           console.log(error)
         })   
         
}

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl">Login</h2>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handlelogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" 
          name = "email"
          className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" 
          className="input input-bordered"
          name ="password"
          required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p>Dont have an account <Link className="text-blue-600" to="/register">Register</Link> </p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;

