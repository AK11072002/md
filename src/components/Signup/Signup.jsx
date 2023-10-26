import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";
import { RxAvatar } from "react-icons/rx";
import Blockchain from "../../Assets/Blockchain.json";
import Lottie from "react-lottie";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [mobileNumber, setMobileNumber] = useState(""); // Add mobile number state
  const [gender, setGender] = useState(""); // Add gender

  const handleSubmit = () => {
    console.log("fff");
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  return (
    <div className="min-h-screen bg-blue-200 flex flex-col justify-center py-2 sm:px-6 lg:px-8 " 
    style={{
      backgroundImage:
        // "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
        // https://t3.ftcdn.net/jpg/05/40/35/62/240_F_540356243_5SRgLSDDCpSl4VWacWjjHi29c8SPppsF.jpg
        // "url(https://img.freepik.com/free-vector/background-realistic-abstract-technology-particle_23-2148431735.jpg?size=626&ext=jpg&ga=GA1.2.1471054712.1695892083&semt=ais)",
         "url(https://img.freepik.com/free-photo/abstract-techno-background-with-connecting-dots-circuit-board-image_1048-5813.jpg?size=626&ext=jpg&uid=R117837083&ga=GA1.1.1471054712.1695892083&semt=ais)",
        backgroundSize:"contain",
    }} 
    >


        
      <div className="sm:mx-auto sm:w-full sm:max-w-md ">
        <h2 className=" mt-1 text-center text-4xl font-extrabold text-white">
          Register as a New User
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form action="" className="space-y-6">
            <div>
              <label
                htmlFor="Email"
                className="block text-sm font-medium text-black"
              >
                Full Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="Email"
                className="block text-sm font-medium text-black"
              >
                Email Address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="MobileNumber"
                className="block text-sm font-medium text-black"
              >
                Mobile Number
              </label>
              <div className="mt-1">
                <input
                  type="tel"
                  name="mobileNumber"
                  autoComplete="tel"
                  required
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="Gender"
                className="block text-sm font-medium text-black"
              >
                Gender
              </label>
              <div className="mt-1">
                <select
                  name="gender"
                  required
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-500 sm:text-sm"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="Password"
                className="block text-sm font-medium text-black"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-500 sm:text-sm"
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="avatar"
                className="block text-sm font-medium text-gray-700"
              ></label>
              <label>
                <div className="mt-2 flex items-center">
                  <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                    {avatar ? (
                      <img
                        src={URL.createObjectURL(avatar)}
                        alt="avatar"
                        className="h-full w-full object-cover rounded-full"
                      />
                    ) : (
                      <RxAvatar className="h-8 w-8" />
                    )}
                  </span>
                  <label
                    htmlFor="file-input"
                    className="ml-5 flex items-centr justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <span>Upload a pic</span>
                    <input
                      type="file"
                      name="avatar"
                      id="file-input"
                      accept=".jpg,.jpeg,.png"
                      onChange={handleFileInputChange}
                      className="sr-only"
                    ></input>
                  </label>
                </div>
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 "
              >
                Submit
              </button>
            </div>
            <div className={`${styles.normalFlex} w-full`}>
              <h4> Already Have any account?</h4>
              <Link to="/login" className="text-blue-700 font-medium pl-2">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>

      
    </div>
  );
};

export default Signup;
