import { imageheadingdata, imgheadingtype } from "../content/img-heading";
import HomepageImgHeading from "./Homepage/img-heading-component";

const WorkPage = () => {
  return (
    <>
      <div className="p-32">
        <span className="font-thin text-lg">Work</span>
        <br />
        <span className="text-8xl font-sans font-light">
          Bringing Brands to Life:
          <br />A Selection of Our Recent Work
        </span>
        <br />
        <div className="mt-6">
          <span className="font-thin text-3xl">
            Discover the strategies and tactics we've used to <br />
            create memorable and effective brands for our clients.
          </span>
        </div>
        <div>
          {imageheadingdata.map((imageheadingdata: imgheadingtype) => (
            <HomepageImgHeading imageheadingdata={imageheadingdata} />
          ))}
        </div>
      </div>
    </>
  );
};
export default WorkPage;
