import { useForm } from "react-hook-form";
import logo from "../../assets/images/logo.png";
import { FaEyeSlash } from "react-icons/fa";
import { useRef, useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState("text");

  const passRef = useRef();
  const { register, handleSubmit } = useForm();

  const handleShowAndHidePassword = () => {
    setShowPassword(!showPassword)
  };

  const onSubmit = (data) => {
    //  console.log(data);
  };

  return (
    <div className="flex items-center justify-center mt-24 mb-24">
      <div className=" w-[400px]">
        <div className="flex items-center justify-center">
          <img src={logo} alt="logo" className="w-24 h-24 " />
        </div>
        <div className="mb-4 text-center">
          <h3 className="text-4xl font-semibold text-orange-400 text-ellipsis">
            Bangldesh Railway
          </h3>
          <p className="mt-2">নিরাপদ . আরামদায়ক . সাশ্রয়ী</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-4 border rounded-md"
        >
          <div className="flex justify-between mb-2">
            <a href="" className="text-orange-400">
              Forgot Password ?
            </a>
            <a href="" className="text-gray-400">
              Need help?
            </a>
          </div>
          <div className="form-control">
            <input
              type="text"
              {...register("phone")}
              className="p-2 border rounded-md"
              placeholder="Enter your mobile number"
            />
          </div>
          <div className="relative mt-3 form-control">
            <input
              ref={passRef}
              onClick={() => setShowPassword(!showPassword)}
              type={showPassword ? "text" : "password"}
              {...register("password")}
              className="p-2 border rounded-md "
              placeholder="Enter your password "
            />
            <div className="absolute cursor-pointer top-2 right-4">
              <FaEyeSlash
                className="w-[20px] h-[20px]"
                onClick={handleShowAndHidePassword}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-3 text-white bg-green-800 btn hover:bg-green-600"
          >
            Login
          </button>{" "}
          <div className="mt-4 text-center">
            <p className="text-gray-400">OR</p>
            <a href="" className="underline">
              REGISTER
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
