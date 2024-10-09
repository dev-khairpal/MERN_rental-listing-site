import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7" >Sign Up</h1>
      <form className="flex gap-4 flex-col ">
        <input type="text" placeholder="username" className="border p-3 rounded-lg" id="username" />
        <input type="email" placeholder="email" className="border p-3 rounded-lg" id="email" />
        <input type="password" placeholder="password" className="border p-3 rounded-lg" id="password" />
        <button className="bg-slate-950 text-white p-3 rounded-lg hover:opacity-85 transition-all disabled:opacity-50">Sign Up</button>
      </form>
      <div>
      <p>Have an account?
      <Link to="/sign-in" className="text-blue-500 px-2">Sign In</Link>
      </p>
      </div>
    </div>
  );
}
