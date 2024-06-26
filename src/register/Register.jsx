import { Link } from "react-router-dom";
import Navbar from "../pages/share/navabr/Navbar";
import { useContext } from "react";
import { AuthContext } from "../provider/Authprovider";


const Register = () => {

  
   const {createUser} = useContext(AuthContext)
   
    
    const handleregister = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        const name = form.get('name')
        const photo = form.get('photo')
        console.log(email,password,name,photo);
        createUser(email,password)
        .then(result =>{
           console.log(result)
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
      <h1 className="text-5xl font-bold">Registration now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleregister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" 
          name = "name"
          className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="photo" 
          name = "photo"
          className="input input-bordered" required />
        </div>
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

export default Register;