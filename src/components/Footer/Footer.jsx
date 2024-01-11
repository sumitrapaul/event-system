import { GiRoyalLove, GiRose } from "react-icons/gi";
import { HiOutlineCake } from "react-icons/hi";
import { CgRing } from "react-icons/cg";
import { BiSolidDrink } from "react-icons/bi";
import { LuBaby } from "react-icons/lu";
import { AiFillTwitterCircle, AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="footer footer-center mt-16 h-[350px] p-8 bg-blue-200 text-base-content rounded">
        <div className="grid grid-flow-col">
          <div className="flex justify-center items-center">
            <div className="text-2xl text-black font-bold">GatherJoy</div>
            <img
              className="w-28 h-20"
              src="https://i.ibb.co/zNwgG5b/image-removebg-preview.png"
            ></img>
          </div>
        </div>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <GiRoyalLove className="text-2xl text-red-600"></GiRoyalLove>
            <HiOutlineCake className="text-2xl text-pink-400"></HiOutlineCake>
            <GiRose className="text-2xl text-red-600"></GiRose>
            <CgRing className="text-2xl text-yellow-600"></CgRing>
            <BiSolidDrink className="text-2xl text-red-900"></BiSolidDrink>
            <LuBaby className="text-2xl text-orange-300"></LuBaby>
          </div>
        </nav>
  
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <AiFillTwitterCircle className="text-blue-700 text-3xl"></AiFillTwitterCircle>
            </a>
            <a>
             <AiFillFacebook className="text-blue-700 text-3xl"></AiFillFacebook>
            </a>
            <a>
             <AiFillLinkedin className="text-blue-700 text-3xl"></AiFillLinkedin>
            </a>
            <a>
             <AiFillInstagram className="text-pink-800 text-3xl"></AiFillInstagram>
            </a>
            <a>
             <AiOutlineGithub className="text-3xl"></AiOutlineGithub>
            </a>
          </div>
        </nav>
        <aside>
          <p className="pb-16">Copyright © 2023 - All rights reserved.</p>
        </aside>
      </footer>
    );
};

export default Footer;