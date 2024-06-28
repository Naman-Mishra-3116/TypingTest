import React from "react";
import Input from "../UI/Input";
import NavigationFor from "../UI/NavigationFor";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigator = useNavigate();
  function handleOnClickSubmit(event) {

    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    console.log(data);

    // api in progress

    // navigate to login automatically if the signup is successfull
    navigator("/login");
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col">
        <p className="text-center bg-secondary-back p-4 rounded-lg mt-[3rem] self-center">
          Create an Account
        </p>
        <form onSubmit={handleOnClickSubmit} className="mt-3">
          <Input title="Username" name="username" id="username" type="text" />
          <Input title="Email" name="email" id="email" type="email" />
          <Input
            type={"password"}
            id="pass"
            name="password"
            title={"Password"}
          />
          <button
            type="submit"
            className="bg-[#1585e0] px-4 py-[10px] rounded-lg mt-[30px] hover:bg-[#369cef] mb-4"
          >
            Sign Up
          </button>
        </form>
        <NavigationFor navigateTo={"login"} label={"Log In"} description={"Already have an account?"}/>
      </div>
    </div>
  );
};

export default Signup;
