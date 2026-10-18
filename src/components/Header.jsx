import logo from "../assets/myteam.svg";
let styleLinke = "font-Livvic font-[600] text-[18px] leading-[28px]";

export default function Header() {
  return (
        <div className= "flex justify-center pb-32.25">
        <div className="container w-277.5 h-12 flex justify-between">
          <div className="w-95 h-full flex justify-between">
            <img src={logo} alt="logo"/>
            <nav className="w-35 flex gap-10 items-center">
              <a href="main.jsx" className={styleLinke}>home</a>
              <a href="#" className={styleLinke}>about</a>
            </nav>
          </div>
          <button className="w-38.25 h-12 rounded-3xl border-white border-2 font-Livvvic text-4.5 font-semibold text-white leading-7 bg-transparent">contact us</button>
        </div>
      </div>
  )
}
