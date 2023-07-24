import { ImageComponent } from "../../common/image-component";
import { blogData, bloginfotype } from "../../content/blog";

const HomepageBlog = ({ blogData }: { blogData: bloginfotype }) => {
  return (
    <>
      <div>
        <ImageComponent imageurl={blogData.imageurl} />
        <div className=" font-base mt-3 pb-2 ">
          <a>
            <span>{blogData.content}</span>
          </a>
        </div>
        <div>
          <span className=" font-light underline text-xs">
            <a href={blogData.links}>Read More</a>
          </span>
        </div>
      </div>
    </>
  );
};
export default HomepageBlog;
