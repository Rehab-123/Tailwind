import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
let styleH4 = "font-bold font-Livvvic text-[18px] leading-7 text-LightCoral";
let styleP = "font-Livvvic font-semibold text-[15px] leading-6.25 font-white";

export default function Right() {
  return (
        <div className="w-135 h-91 absolute bottom-0 right-0 flex flex-col gap-8">
          <div className="w-135 h-23.5 flex justify-between">
            <img src={icon1} className="w-18" />
            <div className="w-111.25 h-23.5 flex flex-col justify-between">
              <h4 className= {styleH4}>
                Experienced Individuals
              </h4>
              <p className= {styleP}>
                Our network is made up of highly experienced professionals who
                are passionate about what they do.
              </p>
            </div>
          </div>
          <div className="w-135 h-23.5 flex justify-between">
            <img src={icon2} className="w-18" />
            <div className="w-111.25 h-23.5 flex flex-col justify-between">
              <h4 className= {styleH4}>
                Easy to Implement
              </h4>
              <p className= {styleP}>
                Our processes have been refined over years of implementation meaning our teams always deliver.
              </p>
            </div>
          </div>
          <div className="w-135 h-23.5 flex justify-between">
            <img src={icon3} className="w-18" />
            <div className="w-111.25 h-23.5 flex flex-col justify-between">
              <h4 className= {styleH4}>
                Enhanced Productivity
              </h4>
              <p className= {styleP}>
                Our customized platform with in-built analytics helps you manage your distributed teams.
              </p>
            </div>
          </div>
        </div>
  )
}
