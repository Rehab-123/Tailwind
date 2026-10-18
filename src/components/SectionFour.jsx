import logo from "../assets/myteam.svg";
let styleLinke = "font-Livvic font-[600] text-[18px] leading-[28px]";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import photo from "../assets/photo5.svg";


export default function SectionFour() {
  return (
    <div className="h-99">
        <div className="h-50 bg-LightCoral flex justify-center items-center relative">
            <div className="container w-229.25 h-12 flex justify-between" >
                <h1 className="font-Livvvic font-bold text-[48px] leading-12 text-SacramentoStateGreen">Ready to get started?</h1>
                <button className="w-38.25 h-12 font-Livvvic font-semibold text-[18px] leading-7 text-SacramentoStateGreen border-2 rounded-3xl border-SacramentoStateGreen bg-transparent">contact us</button>
            </div>
            <img src={photo} className="absolute bottom-0 left-0"/>
        </div>
        <div className="bg-DarkGreen flex justify-center items-center h-49">
            <div className="container w-277.5 h-25 flex justify-between">
                <div className="w-182.5 flex gap-31.25">
                    <div className="flex flex-col gap-6.25">
                        <img src={logo} alt="Logo"/>
                        <nav className="w-35 flex justify-between">
                            <a href="main.jsx" className={styleLinke}>home</a>
                            <a href="#" className={styleLinke}>about</a>
                        </nav>
                    </div>
                        <p className="font-Livvvic font-semibold text-[15px] leading-6.25">987  Hillcrest Lane<br/>Irvine, CA<br/>California 92714<br/>Call Us : 949-833-7432</p>
                </div>
                    <div className="flex flex-col gap-12.75">
                        <div className="w-26 flex justify-between">
                            <IoLogoFacebook className="text-white w-10"/>
                            <FaInstagramSquare className="text-white w-10"/>
                            <FaTwitter className="text-white w-10"/>
                        </div>
                        <p className="font-Livvvic font-medium text-[15px] leading-6.25">Copyright 2020. All Rights Reserved</p>
                    </div>
            </div>
        </div>

    </div>
  )
}
