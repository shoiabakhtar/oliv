const Navbar = () => {
  return (
    <>
      <nav className="ml-20 mr-10 pt-10 pb-1 grid grid-rows-1 grid-flow-col gap-4 border-b-2 border-y-2 pb-4">
        <a className="flex items-center" href="/">
          <img
            src="https://assets.website-files.com/63c3f1995d4c3581bbc944b5/63c3fed42405e70f33df42ee_logo.svg"
            alt="logo"
          />
        </a>

        <ul className="px-2 py-2 flex justify-end items-center space-x-8 font-thin">
          <li>
            <a href="/work">Work</a>
          </li>
          <li>
            <a href="/services">Servies</a>
          </li>
          <li>
            <a className="disable" href="/about">
              About
            </a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/">Pages</a>
          </li>
          <li>
            <a href="/">Cart</a>
          </li>
          <li>
            {" "}
            <button className="px-5 py-2 rounded-full border border-black  hover:text-white hover:bg-black">
              Get in touch
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
