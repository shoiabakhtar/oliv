import HomepageBox from "./Homepage/box-component";
import HomepageImgHeading from "./Homepage/img-heading-component";
import HomepageColorBox from "./Homepage/color-box-component";
import HomepageTeam from "./Homepage/team-box-component";
import HomepageBlog from "./Homepage/blog-box-component";
import pages, { HomePageBoxType } from "../content/homepage";
import { imageheadingdata, imgheadingtype } from "../content/img-heading";
import {
  homepageColorboxData,
  homepageColorboxtype,
} from "../content/color-box";
import { teamData, teaminfotype } from "../content/team";
import { blogData, bloginfotype } from "../content/blog";
import Contact from "../common/contact-component";

const ExcludingJoinBox = homepageColorboxData.filter(
  (item: homepageColorboxtype) => item.title != "JOIN THE TEAM"
);

const filterjoinbox = homepageColorboxData.filter(
  (item: homepageColorboxtype) => item.title === "JOIN THE TEAM"
);
const HomePage = () => {
  return (
    <>
      <div className="p-8 md:p-15 lg:p-20">
        <span className="xl:text-8xl font-sans font-light lg:text-6xl md:text-4xl text-5xl">
          Building Brands, One <br />
          Success Story at a Time.
        </span>
        <br />
        <div className="mt-6">
          <span className="font-thin text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Create a Brand That Resonates: We Can Help You
            <br /> Define and Communicate Your Unique Message.
          </span>
        </div>
        <div className="mt-6">
          <button className="font-thin pl-8 pr-8 pt-3 pb-3 rounded-full border-black border-2 text-white bg-black">
            Our Services
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4 pl-6 pr-6 md:pl-8 md:pr-8 lg:pl-10 lg:pr-10 ">
        {pages.map((page: HomePageBoxType) => (
          <HomepageBox page={page} />
        ))}
      </div>
      <div>
        <span className="p-5 md:p-15 lg:p-20 text-base font-light ">
          Our Work
        </span>
      </div>
      <div className="p-5 md:p-15 lg:p-20 text-6xl font-light">
        <span>Selected Work</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md-grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 p-2 md:p-14 lg:p-20 ">
        {imageheadingdata.map((imageheadingdata: imgheadingtype) => (
          <HomepageImgHeading imageheadingdata={imageheadingdata} />
        ))}
      </div>
      <div className="pl-20">Our Values</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4 p-5 md:p-15 lg:p-20">
        {ExcludingJoinBox.map((homepageColorboxData: homepageColorboxtype) => (
          <HomepageColorBox homepageColorboxData={homepageColorboxData} />
        ))}
      </div>
      <span className="p-5 md:p-15 lg:p-20 text-base font-light">Our Team</span>
      <div className="p-5 md:p-15 lg:p-20 text-4xl font-light">
        <span>Our Team of Experts</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4 p-5 md:p-15 lg:p-20">
        {filterjoinbox.map((homepageColorboxData: homepageColorboxtype) => (
          <HomepageColorBox homepageColorboxData={homepageColorboxData} />
        ))}
        {teamData.map((teamData: teaminfotype) => (
          <HomepageTeam teamData={teamData} />
        ))}
      </div>
      <span className="p-5 md:p-15 lg:p-20 text-base font-light">Blog</span>
      <div className="p-5 md:p-15 lg:p-20  text-4xl font-light">
        <span>Insights on Branding</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-8 pl-20 pr-20">
        {blogData.map((blogData: bloginfotype) => (
          <HomepageBlog blogData={blogData} />
        ))}
      </div>
    </>
  );
};
export default HomePage;
