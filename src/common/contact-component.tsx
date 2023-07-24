const Contact = () => {
  return (
    <div className="m-20 ">
      <div className="p-32  bg-lime-100 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        <div>
          <span>Contact</span>
        </div>

        <div className="col-span-3">
          <span className="text-6xl font-sans font-light">
            Let's start building your brand's
            <br /> unique story together.
          </span>
          <br />
          <div className="mt-6">
            <span className="font-thin text-3xl">
              Want to see what a difference a strong brand can
              <br /> make? Request a consultation today.
            </span>
          </div>
          <div className="mt-6">
            <button className="font-thin pl-8 pr-8 pt-3 pb-3 rounded-full border-black border-2 text-white bg-black">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
