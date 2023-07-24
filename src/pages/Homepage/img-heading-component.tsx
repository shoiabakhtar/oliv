import { ImageComponent } from "../../common/image-component";
import { TitleComponent } from "../../common/title-component";
import { imgheadingtype } from "../../content/img-heading";

const HomepageImgHeading = ({
  imageheadingdata,
}: {
  imageheadingdata: imgheadingtype;
}) => {
  return (
    <>
      {" "}
      <div className="p-5 flex flex-col">
        {true ? (
          <>
            <ImageComponent imageurl={imageheadingdata.imageurl} />
            <TitleComponent
              title={imageheadingdata.title}
              buttonname={imageheadingdata.buttonname}
            />
          </>
        ) : (
          // <div className="p-5 flex flex-col">
          <>
            <TitleComponent
              title={imageheadingdata.title}
              buttonname={imageheadingdata.buttonname}
            />
            <ImageComponent imageurl={imageheadingdata.imageurl} />
          </>
          // {/* </div> */}
        )}
      </div>
    </>
  );
};
export default HomepageImgHeading;
