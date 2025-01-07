import { Link } from "react-router";

import myCV from "../assets/files/HaiderMukhtar_CV.pdf";
import download from "../assets/img/icons/download.svg";
import email from "../assets/img/icons/email.svg";
import facebook from "../assets/img/icons/facebook.svg";
import github from "../assets/img/icons/github.svg";
import instagram from "../assets/img/icons/instagram.svg";
import linkedin from "../assets/img/icons/linkedin.svg";
import links from "../lib/nav-links.ts";

const Footer = () => {
  const myEmail = "haidermukhtarch405@gmail.com";

  const d = new Date();
  let year = d.getFullYear();

  return (
    <footer className="flex flex-col items-center justify-center bg-blue-500">
      <div className="grid w-11/12 items-center gap-6 py-6 md:grid-cols-2 lg:w-4/5">
        <div className="space-y-2">
          <Link
            to="/"
            className="font-primaryBold text-3xl text-white drop-shadow-2xl"
          >
            HM.
          </Link>
          <div className="font-primaryRegular flex gap-5">
            {links.map((link: any) => (
              <Link
                key={link.id}
                to={link.path}
                className="font-primaryRegular text-sm text-white hover:underline hover:underline-offset-2"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="">
          <div className="flex flex-row gap-5">
            <a
              href="https://www.facebook.com/chhaidermukhtar880"
              target="_blank"
              title="Facebook"
              className="hover:scale-110 hover:transition-transform"
            >
              <img className="h-6 w-6" src={facebook} alt="Facebook" />
            </a>
            <a
              href="https://www.instagram.com/haider_mukhtar_ch/"
              target="_blank"
              title="Instagram"
              className="hover:scale-110 hover:transition-transform"
            >
              <img className="h-6 w-6" src={instagram} alt="Instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/haider-mukhtar/"
              target="_blank"
              title="LinkedIn"
              className="hover:scale-110 hover:transition-transform"
            >
              <img className="h-6 w-6" src={linkedin} alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/Haider-Mukhtar"
              target="_blank"
              title="Github"
              className="hover:scale-110 hover:transition-transform"
            >
              <img className="h-6 w-6" src={github} alt="Github" />
            </a>
            <a
              href={`mailto:${myEmail}?subject=Hi there!&body=Hi Haider, how are you doing?`}
              target="_blank"
              title="Email"
              className="hover:scale-110 hover:transition-transform"
            >
              <img className="h-6 w-6" src={email} alt="Email" />
            </a>
            <a
              href={myCV}
              download={true}
              title="Download CV"
              className="hover:scale-110 hover:transition-transform"
            >
              <img className="h-6 w-6" src={download} alt="Download CV" />
            </a>
          </div>
        </div>
      </div>
      <div className="font-primaryRegular w-11/12 border-t-[1px] border-white/50 py-5 text-center text-xs text-white lg:w-4/5">
        @{year} HaiderMukhtar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
