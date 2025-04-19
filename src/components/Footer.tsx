const Footer = () => {
  return (
    <footer className="bg-white rounded-lg m-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
          © 2025 Identity™ . All Rights Reserved.
        </span>

        <p className="text-sm">
          developed by{" "}
          <a
            className="hover:underline"
            href="https://ashrafportfolio.vercel.app/"
          >
            ashraf.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
