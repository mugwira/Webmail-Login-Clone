import React from "react";
import {BsFillPersonFill} from "react-icons/bs"
import {GiPadlock} from "react-icons/gi"

function WebMailLogIn() {
  return (
    <div className="main ">
      <div className="heading flex flex-col  justify-center mx-auto items-center my-32">
        <h1 className="text-orange-600 text-7xl font-bold  mb-8">Webmail</h1>
        <div className="inputs space-y-6">
          <div className="first-input flex flex-col">
            <label className="mb-2 font-semibold text-gray-500" htmlFor="">
              Email address
            </label>
            <div className="person flex items-center space-x-4  ">
               <div className="pic z-10 text-gray-400"><BsFillPersonFill /></div>
              <div className="inner z-0">
              <input
              className="border border-gray-300 text-sm py-1.5 border-2 w-72 -mx-8 rounded-md  px-6 outline-none"
              type="text"
              placeholder=" Enter your email address."
            />     
                </div>
            </div>
            
            
          </div>
          <div className="second-input flex flex-col">
            <label className="mb-2 font-semibold text-gray-500" htmlFor="">
              Password
            </label>
            <div className="lock flex items-center space-x-4  ">
              <div className="lock-pic z-10 text-gray-400"><GiPadlock /></div>
              <div className="inp2 z-0">
              <input
              className="border border-gray-300 text-sm py-1.5 border-2 w-72 -mx-8 rounded-md px-6 outline-none"
              type="text"
              placeholder="Enter your email password."
            /> 
                </div>
            </div>
            
          </div>
          <div className="login">
            <button className="border border-gray-300 border-2 w-72 py-1.5 rounded-md text-sm text-white bg-blue-500 hover:bg-indigo-800">Login</button>
            </div>
            <div className="reset">
            <button className= "w-72 py-1.5 text-sm rounded text-gray-700 hover:text-orange-600 font-bold ">Reset Password</button>
              </div>
           
        </div>
        <div className="footer text-sm space-x-8 font-light mt-12">
          <a className="hover:text-orange-600" href="">English</a>
          <a className="hover:text-orange-600" href="">Shona</a>
          <a className="hover:text-orange-600" href="">Ndebele</a>
          <a className="hover:text-orange-600" href="">Nambia</a>
          <a className="hover:text-orange-600" href="">Tonga</a>
          <a className="hover:text-orange-600" href="">Deustch</a>
          <a className="hover:text-orange-600" href="">Espanol</a>
          <a className="hover:text-orange-600" href="">French</a>
          <a className="hover:text-orange-600 text-5xl tracking-tighter" href="">...</a>
          </div>
      </div>
    </div>
  );
}

export default WebMailLogIn;
