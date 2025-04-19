import sel1 from "../assets/sel1.jpg";
import sel2 from "../assets/sel2.jpg";
import sel3 from "../assets/sel3.jpg";
import sel4 from "../assets/sel4.jpg";
import sel5 from "../assets/sel5.jpg";
import sel6 from "../assets/sel6.jpg";
import sel7 from "../assets/sel7.jpg";

const SellingPoints = () => {
  return (
    <>
      <h2 className="borel-regular font-semibold text-3xl text-center mt-12 mb-4">
        Jordan Selling Points
      </h2>

      <div className="overflow-hidden w-full">
        <div className="flex whitespace-nowrap animate-scroll">
          {[sel1, sel2, sel3, sel4, sel5, sel6, sel7, sel1, sel2, sel3].map(
            (img, i) => (
              <img
                key={i}
                src={img}
                alt={`scroll-img-${i}`}
                className="w-64 md:w-80"
              />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default SellingPoints;
