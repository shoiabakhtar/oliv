import { homepageColorboxtype } from "../../content/color-box";

const HomepageColorBox = ({
  homepageColorboxData,
}: {
  homepageColorboxData: homepageColorboxtype;
}) => {
  return (
    <>
      <div
        className={`flex-col justify-center rounded-lg box-border w-70 h-auto p-10 bg-${homepageColorboxData.color}-200 font-sans`}
      >
        <div className="mb-20">
          <span className=" font-thin text-sm">
            {homepageColorboxData.title}
          </span>
          <br />
          {homepageColorboxData.titleline2 != "" && (
            <span className=" font-thin text-sm">
              {homepageColorboxData.titleline2}
            </span>
          )}
          <span className="text-lg">{homepageColorboxData.content3}</span>
          <br />
          <span className="font-thin text-sm">
            {homepageColorboxData.content2}
          </span>
        </div>
        {homepageColorboxData.links === "" ? (
          <div>
            <span className="pt-5 text-xl font-light">
              {homepageColorboxData.contentline1}
            </span>
            <br />
            <span className="pt-5 text-xl font-light">
              {homepageColorboxData.contentline2}
            </span>
          </div>
        ) : (
          <div>
            <span>
              <button className="p-2 rounded-full border-black border-2 text-white bg-black">
                {homepageColorboxData.links}
              </button>
            </span>
          </div>
        )}
      </div>
    </>
  );
};
export default HomepageColorBox;
