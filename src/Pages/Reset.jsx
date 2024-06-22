import React from "react";
import Input from "../UI/Input";
import NavigationFor from "../UI/NavigationFor";

const Reset = () => {
  function onClickResetButton(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    console.log(data);

    // reset api in progress.
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col">
        <p className="text-center bg-secondary-back p-4 rounded-lg mt-[3rem] self-center">
          Reset Password
        </p>
        <form onSubmit={onClickResetButton} className="mt-3 mb-4">
          <Input title="Email" name="email" id="email" type="email" />

          <button
            type="submit"
            className="bg-[#1585e0] px-4 py-[10px] rounded-lg mt-[30px] hover:bg-[#369cef]"
          >
            Send Password Reset Link
          </button>
        </form>
        <NavigationFor
          navigateTo={"login"}
          label={"Go back"}
          description={"Want to try again?"}
        />
      </div>
    </div>
  );
};

export default Reset;
