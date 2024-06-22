import React from "react";
import twitter from "../../public/white_twitter.png";
import mail from "../../public/white_mail.png";
import linkedIn from "../../public/white_linkedin.png";
import gitHub from "../../public/white_github.png";
import { NavLink } from "react-router-dom";
const year = new Date().getFullYear();

const MainFooter = () => {
  return (
    <div className="flex flex-col gap-4 mt-[100px]">
      <hr className="border-slate-800 border-2 mb-5" />
      <p className="text-md text-slate-400 mb-3 hover:underline hover:text-slate-200">Contact Us</p>
      <nav className="flex gap-7 self-center">
        <NavLink
          target="_blank"
          to={"https://x.com/mishr89057"}
          end
          className="hover:scale-110 duration-75 transition ease-in"
        >
          <img src={twitter} alt="twitter logo" width={35} height={35} />
        </NavLink>
        <NavLink
          target="_blank"
          onClick={() =>
            window.open(
              "https://mail.google.com/mail/?view=cm&fs=1&to=namanmishra3116@gmail.com",
              "_blank",
              "noopener,noreferrer"
            )
          }
          className="hover:scale-110 duration-75 transition ease-in"
          end
        >
          <img src={mail} alt="mail logo" width={35} height={35} />
        </NavLink>
        <NavLink
          target="_blank"
          onClick={() =>
            window.open("https://github.com/Naman-Mishra-3116", "_blank")
          }
          className="hover:scale-110 duration-75 transition ease-in"
          end
        >
          <img src={gitHub} alt="github logo" width={35} height={35} />
        </NavLink>
        <NavLink
          target="_blank"
          to={"https://www.linkedin.com/in/naman-mishra-082555265/"}
          className="hover:scale-110 duration-75 transition-transform ease-in"
          end
        >
          <img src={linkedIn} alt="Linkedin logo" width={35} height={35} />
        </NavLink>
      </nav>
      <p className="text-md text-slate-400 hover:text-slate-200">Copyright &copy; {year} <span className="text-[#1585e0]">Naman Mishra</span> &mdash; All rights reserved</p>
    </div>
  );
};

export default MainFooter;
