import React from "react";
import Input from "../UI/Input";
import NavigationFor from "../UI/NavigationFor";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigator = useNavigate();
  function onClickLoginButton(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    console.log(data);

    // api for login in progress.
    navigator("/");
    
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col">
        <p className="text-center bg-secondary-back p-4 rounded-lg mt-[3rem] self-center">
          Log In
        </p>
        <form onSubmit={onClickLoginButton} className="mt-3 mb-4">
          <Input title="Username" name="username" id="username" type="text" />
          <Input
            type={"password"}
            id="pass"
            name="password"
            title={"Password"}
          />
          <button
            type="submit"
            className="bg-[#1585e0] px-4 py-[10px] rounded-lg mt-[30px] hover:bg-[#369cef]"
          >
            Log In
          </button>
        </form>
        <NavigationFor
          navigateTo={"signup"}
          label={"Sign Up"}
          description={"Don't have an account?"}
        />
        <NavigationFor
          navigateTo={"reset"}
          label={"Reset"}
          description={"Forgot your password?"}
        />
      </div>
    </div>
  );
};

export default Login;
