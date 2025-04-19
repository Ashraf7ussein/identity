import jordanBook from "../assets/jordanBook.png";
import palestineBook from "../assets/palestineBook.png";
import egyptBook from "../assets/egyptBook.png";
import qatarBook from "../assets/qatarBook.png";
import jordanCal from "../assets/jordanCal.png";
import Card from "../components/Card";

const Products = () => {
  const products = [
    {
      name: "Egypt Coloring Book",
      img: egyptBook,
      desc: "Explore the rich history and vibrant culture of Egypt through this captivating coloring book.",
      link: "https://www.amazon.ae/Egypt-Identity-Adult-Colouring-Book/dp/B09XJFRHBQ/ref=sr_1_1?crid=1C9CMNSJQB9TL&dib=eyJ2IjoiMSJ9.t39bWSwHsJFH5uKfs8KJmIIEqV5uz83QlGMV8txygfp8VNEnhRt4kfiKOCztCMHRQn3z8-BtOiHQqpDiw7d0xQ.e2lsP233hPyu9-54oLg_EGV6NGoy57JVDXyl0Eyou4Y&dib_tag=se&keywords=identity+coloring+egypt&qid=1744958792&sprefix=identity+coloring+egyp%2Caps%2C306&sr=8-1",
    },
    {
      name: "Jordan Coloring Book",
      img: jordanBook,
      desc: "Discover the ancient heritage and scenic landscapes of Jordan in this beautiful coloring book.",
      link: "https://www.amazon.ae/Jordan-Identity-Adult-Colouring-Book/dp/B0CCYXWK8P/ref=sr_1_1?crid=1VJ3ZLCSYMVL3&dib=eyJ2IjoiMSJ9.40ZpsWfEmLEw-s2D6JJk7BEPD4z4BQuomIbh6PhVNNLGjHj071QN20LucGBJIEps.z9ObdiS9cLruoS7FDGj-vm9cBCj2yAMOboS5T96-_u8&dib_tag=se&keywords=identity+coloring+jordan&qid=1745049852&sprefix=identity+coloring+jordan%2Caps%2C151&sr=8-1",
    },
    {
      name: "Palestine Coloring Book",
      img: palestineBook,
      desc: "Uncover the history and beauty of Palestine with this insightful and artistic coloring book.",
      link: "",
    },
    {
      name: "Qatar Coloring Book",
      img: qatarBook,
      desc: "Explore the stunning landscapes and rich culture of Qatar in this inspiring coloring book.",
      link: "https://www.amazon.ae/s?k=identity+coloring+qatar&crid=U0VE6PT6XELV&sprefix=identity+coloring+qatar%2Caps%2C187&ref=nb_sb_noss",
    },
    {
      name: "Jordan Coloring Calendar",
      img: jordanCal,
      desc: "Experience the beauty of Jordan month by month with this creatively designed coloring calendar.",
      link: "",
    },
  ];

  return (
    <div id="products" className="mx-auto px-[20px]">
      <h2 className="borel-regular font-semibold text-3xl text-center mt-36 mb-4">
        Our Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto justify-items-center">
        {products.map((item, index) => (
          <Card key={index} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
