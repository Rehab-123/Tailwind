import photoLift from "../assets/photo1.svg";

export default function HeroSection() {
  return (
    <div className="flex w-25">
        <img src={photoLift} />
    <div className="flex justify-center pb-37.5">
      <div className="container flex justify-between w-277.5">
        <h1 className="font-Livvic font-bold text-[100px] leading-25">
          Find the <br /> best <span className="text-LightCoral">talent</span>
        </h1>
        <div className="w-111.25 h-48.75 flex flex-col justify-between">
          <hr className="w-12.5 h-4 text-RaptureBlue" />
          <p className="font-Livvvic text-[18px] font-semibold leading-7">
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
