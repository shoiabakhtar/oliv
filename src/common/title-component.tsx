interface Titletype {
  title: string;
  buttonname: string;
}
export const TitleComponent = ({ title, buttonname }: Titletype) => {
  return (
    <div className="flex justify-between mt-3 mb-3 font-thin">
      <a>
        <span className="text-xl">{title}</span>
      </a>

      <button className="px-3 rounded-full border-black border  hover:text-white hover:bg-black">
        {buttonname}
      </button>
    </div>
  );
};
