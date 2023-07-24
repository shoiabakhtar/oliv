const Footer = () => {
  return (
    <div className="m-20 ">
      <div className="p-32  bg-slate-100 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        <div>
          <a href="/">
            <img
              src="https://assets.website-files.com/63c3f1995d4c3581bbc944b5/63c3fed42405e70f33df42ee_logo.svg"
              alt="logo"
            />
          </a>
        </div>

        <div className="font-thin space-y-7 ">
          <span className="text-xl border-t-0 border-y-2 pb-4">Pages</span>
          <br />
          <span className=" text-base flex flex-col space-y-3">
            <a href="/">Home</a>
            <a href="/">Services</a>
            <a href="/">About</a>
            <a href="/">Jobs</a>
            <a href="/">Contact</a>
            <br />
          </span>
        </div>
        <div className="font-thin space-y-7">
          <span className="text-xl border-t-0 border-y-2 pb-4">CMS</span>
          <br />
          <span className=" text-base flex flex-col space-y-3">
            <a href="/">Work</a>
            <a href="/">Work Single</a>
            <a href="/">Blog</a>
            <a href="/">Blog Single</a>
            <a href="/">Shop</a>
            <a href="/">Shop Single</a>
            <br />
          </span>
        </div>
        <div className="font-thin space-y-7">
          <span className="text-xl border-t-0 border-y-2 pb-4">
            Utility Pages
          </span>
          <br />
          <span className=" text-base flex flex-col space-y-3">
            <a href="/">404 Error Page</a>
            <a href="/">Password Protected</a>
            <a href="/">Styleguide</a>
            <a href="/">Licensing</a>
            <a href="/">Changelog</a>
            <br />
          </span>
        </div>
        <div className="mt-6"></div>
        <div className="mt-6"></div>
      </div>
    </div>
  );
};
export default Footer;
