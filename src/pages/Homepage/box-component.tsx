import { HomePageBoxType } from "../../content/homepage";

const HomepageBox = ({ page }: { page: HomePageBoxType }) => {
  return (
    <>
      <div className="flex-col justify-center rounded-lg box-border w-70 h-auto text p-5 md:p-9 lg:p-10 bg-slate-50 font-sans">
        <div className="mb-4">
          <span className=" font-light text-xl md:text-2xl lg:text-3xl">
            {page.title}
          </span>
        </div>
        <div className="mb-10">
          <span className="font-thin text-base md:text-base lg:text-xl text-gray-600">
            {page.content}
          </span>
        </div>
        <div>
          <span className="font-extralight underline text-sm md:text-base lg:text-lg">
            <a href="/services">{page.reference}</a>
          </span>
        </div>
      </div>
    </>
  );
};
export default HomepageBox;
