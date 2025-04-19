import home from "../assets/home.jpg";
import pattern from "../assets/pattern.png";

const Hero = () => {
  return (
    <>
      <div className="bg-[#a2ca57] flex flex-col items-center pt-28 px-4 pb-32 md:pb-56 text-center">
        <h1 className="text-2xl">Identity Jo</h1>
        <h2 className="borel-regular font-bold text-3xl md:text-5xl max-w-2xl leading-snug mt-12">
          Art therapy coloring books about the world's cultures
        </h2>
      </div>
      <div className="relative bg-contain py-12">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${pattern})`,
            opacity: 0.2, // adjust opacity here
            backgroundSize: "contain",
            backgroundRepeat: "repeat",
            zIndex: 0,
          }}
        />
        <img
          src={home}
          alt="Home"
          data-aos="fade-up"
          className="w-[350px] md:w-[750px] mx-auto -mt-24 relative z-10"
        />
      </div>
    </>
  );
};

export default Hero;
