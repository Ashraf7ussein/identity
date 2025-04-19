interface Product {
  img: string;
  name: string;
  desc: string;
  link: string;
}

const Card = ({ product }: { product: Product }) => {
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-md">
      <img
        className="rounded-t-lg w-full h-auto"
        src={product.img}
        alt={product.name}
      />
      <div className="p-3">
        <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
          {product.name}
        </h5>
        <p className="text-sm font-normal text-gray-700 dark:text-gray-400 mb-2">
          {product.desc}
        </p>
        <a
          href={product.link}
          target="_blank"
          className="inline-flex items-center px-3 py-1 text-sm font-medium text-center text-white bg-[#a2ca57] 
             rounded-lg hover:bg-[#7b9e3a] transition-all duration-300 ease-in-out"
        >
          Get your copy
          <svg
            className="rtl:rotate-180 w-4 h-4 ml-2 transition-transform transform hover:translate-x-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;
