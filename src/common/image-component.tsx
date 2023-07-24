interface Imagetype {
  imageurl: string;
}

export const ImageComponent = ({ imageurl }: Imagetype) => {
  return (
    <div className="text-xl">
      <div className="object-cover h-3/5 w-3/5 md:h-5/6 md:w-5/6 lg:h-full lg:w-full overflow-hidden">
        <img
          className="transform hover:scale-110 transition-all delay-150 duration-300 ease-in-out  "
          src={imageurl}
          alt="Invision Studio img"
        ></img>
      </div>
    </div>
  );
};
