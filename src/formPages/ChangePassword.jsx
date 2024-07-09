import React from "react";
import Input from "../UI/Input";

const ChangePassword = () => {
  const onClickChangePassword = (event) => {
    event.preventDefaut();
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col">
        <p className="text-center bg-secondary-back p-4 rounded-lg mt-[1rem] self-center">
          Change Password
        </p>
        <form onSubmit={onClickChangePassword} className="mt-3">
          <Input
            title="Current Password"
            name="currentPassword"
            id="currentPassword"
            type="password"
          />
          <Input
            title="New Password"
            name="newPassword"
            id="newPassword"
            type="password"
          />
          <Input
            type={"password"}
            id="pass"
            name="password"
            title={"Confirm New Password"}
          />
          <button
            type="submit"
            className="bg-[#1585e0] px-4 py-[10px] rounded-lg mt-[30px] hover:bg-[#369cef] mb-4"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
