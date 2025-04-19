import page from "../assets/page.png";
import star1 from "../assets/star1.png";
import star2 from "../assets/star2.png";
import star3 from "../assets/star3.png";
import books from "../assets/books.png";

const Quotes = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mx-auto px-6 md:px-10 max-w-7xl py-12">
        <img
          className="w-72 md:w-80 rounded-xl shadow-xl object-cover transition-transform duration-300 hover:scale-105"
          src={page}
          alt="Jordan Edition"
        />
        <p className="font-normal text-3xl md:text-4xl mt-8 md:mt-10 text-center md:text-left ">
          Discover <span className="borel-regular">mindfulness</span> through
          culture and creativity.
        </p>
        <img
          src={star1}
          data-aos="zoom-in-up"
          className="relative top-[130px] right-[450px] hidden md:inline-block w-[250px] rotate-12"
          alt=""
        />
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10 mx-auto px-6 md:px-10 max-w-7xl py-12">
        <p className="font-normal text-3xl md:text-4xl mt-8 md:mt-10 text-center md:text-left">
          A journey of <span className="borel-regular">healing</span> through
          art and tradition.
        </p>
        <img
          src={star2}
          data-aos="zoom-in"
          className="hidden md:inline-block w-[200px] rotate-x-2 filter grayscale brightness-10 relative top-28 left-[-25]"
          alt=""
        />
        <img
          src={star2}
          data-aos="zoom-in-left"
          className="hidden md:inline-block w-[75px] rotate-x-5 filter relative left-[-70]"
          alt=""
        />
        <img
          className="w-72 md:w-80 rounded-xl shadow-xl object-cover transition-transform duration-300 hover:scale-105"
          src={books}
          alt="palestineBook Edition"
        />
        <img
          src={star3}
          data-aos="zoom-in"
          className="hidden md:inline-block w-[150px] rotate-12 filter grayscale brightness-50"
          alt=""
        />
      </div>
    </>
  );
};

export default Quotes;
