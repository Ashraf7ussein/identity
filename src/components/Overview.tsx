import star2 from "../assets/star2.png";
import star3 from "../assets/star3.png";
import starGroup from "../assets/starGroup.png";

const Overview = () => {
  return (
    <>
      <h2 className="borel-regular font-semibold text-3xl text-center mt-12 mb-4">
        Overview
      </h2>
      <p className="text-center px-16">
        ​The "Identity" coloring book series by Jordanian author Jude Jweihan
        offers a unique blend of art therapy and cultural education. Each book
        in the series features intricate illustrations accompanied by bilingual
        narratives that delve into the heritage, landmarks, and traditions of
        various countries. These books are designed to provide a meditative and
        informative experience for adults.​
      </p>
      <div
        className="flex flex-col md:flex-row items-center md:items-start justify-center mx-auto px-6 
      md:px-10 max-w-7xl"
      >
        <div data-aos="zoom-in-up">
          <img
            src={star2}
            className="relative top-[150px] left-[200px] hidden md:inline-block w-[150px] rotate-45 filter grayscale brightness-50"
            alt=""
          />
        </div>
        <span
          className="font-semibold text-3xl md:text-4xl mt-8 md:mt-10 text-center md:text-left 
        tracking-wide"
        >
          Art Therapy,
          <br /> World's Culture
        </span>

        <img
          className="w-60 md:w-96 mt-6 md:mt-0 md:ml-6"
          src={starGroup}
          alt="Star group"
        />
        <img
          data-aos="zoom-in-down"
          src={star3}
          className="w-[100px] hidden md:inline-block"
          alt=""
        />
        <img
          src={star3}
          data-aos="zoom-in-down"
          className="hidden md:inline-block w-[150px] rotate-12 filter grayscale brightness-50"
          alt=""
        />
      </div>
    </>
  );
};

export default Overview;
