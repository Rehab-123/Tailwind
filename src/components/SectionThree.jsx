import photoTop from "../assets/photo4.svg";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";
import icon from "../assets/“.svg";
import bottom from "../assets/photo4 (2).svg"
let styleP =
  "font-semibold text-[15px] font-Livvvic leading-6.25 font-white text-center";
let styleH5 =
  "font-bold text-[18px] leading-7 text-center text-RaptureBlue font-Livvic";
let styleH6 = "font-medium text-[13px] font-Livvvic leading-4.5 text-center";

export default function SectionThree() {
  return (
    <div className="h-186.25 bg-DeepJungleGreen relative">
      <img src={photoTop} className="w-36.75" />
      <div className="flex justify-center items-center pt-10">
        <div className="container w-277.5 h-116.25 flex  flex-col items-center justify-between">
          <h1 className="font-Livvvic font-bold text-[48px] leading-12 font-white w-233 text-center ">
            Delivering real results for top companies. Some of our{" "}
            <span className="text-RaptureBlue">success stories.</span>
          </h1>
          <div className="w-full h-78.25 grid grid-cols-3 gap-7.5 relative ">
            <div className="flex flex-col items-center gap-8">
          <img src={icon} className="-mb-13.75"/>
              <p className={styleP}>
                {" "}
                “The team perfectly fit the specialized skill set required. They
                focused on the most essential features helping us launch the
                platform eight months faster than planned.”
              </p>
              <div>
                <h5 className={styleH5}>Kady Baker</h5>
                <h6 className={styleH6}>Product Manager at Bookmark</h6>
              </div>
              <div className="w-15.5 h-15.5 rounded-full border-[#C4FFFE] border-2 overflow-hidden">
                <img src={profile2} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex flex-col items-center gap-8">
          <img src={icon} className="-mb-13.75"/>
              <p className={styleP}>
                “We needed to automate our entire onboarding process. The team
                came in and built out the whole journey. Since going live, user
                retention has gone through the roof!”
              </p>
              <div>
                <h5 className={styleH5}>Aiysha Reese</h5>
                <h6 className={styleH6}>Founder of Manage</h6>
              </div>
              <div className="w-15.5 h-15.5 rounded-full border-[#C4FFFE] border-2 overflow-hidden">
                <img src={profile3} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex flex-col items-center gap-8">
          <img src={icon} className="-mb-13.75"/>
              <p className={styleP}>
                “Amazing. Our team helped us build an app that delivered a new
                experience for hiring a physio. The launch was an instant
                success with 100k downloads in the first month.”
              </p>
              <div>
                <h5 className={styleH5}>Arthur Clarke</h5>
                <h6 className={styleH6}>Co-founder of MyPhysio</h6>
              </div>
              <div className="w-15.5 h-15.5 rounded-full border-[#C4FFFE] border-2 overflow-hidden">
                <img src={profile1} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={bottom} className="absolute bottom-0 right-0"/>
    </div>
  );
}
