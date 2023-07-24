import { blogData, bloginfotype } from "../content/blog";
import HomepageBlog from "./Homepage/blog-box-component";

const firstBlog = blogData.filter(
  (item, index) =>
    item.content === "The Importance of a Strong Brand Positioning"
);
const BlogPage = () => {
  return (
    <>
      <div className="grid grid-cols-2 p-32 ">
        <div>
          {firstBlog.map((blogData: bloginfotype) => (
            <HomepageBlog blogData={blogData} />
          ))}
        </div>
        <div className="">
          <span className="font-thin text-lg">Social Media</span>
          <br />
          <span className="text-6xl font-sans font-light">
            The Importance of a Strong Brand Positioning
          </span>
          <br />
          <div className="mt-6">
            <span className="font-thin text-3xl">
              Having a strong brand positioning is crucial for <br />
              any business looking to stand out in the market
              <br /> and achieve its business objectives.
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md-grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 p-2 md:p-14 lg:p-20 ">
        {blogData.map((blogData: bloginfotype) => (
          <HomepageBlog blogData={blogData} />
        ))}
      </div>
    </>
  );
};
export default BlogPage;
