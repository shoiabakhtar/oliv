import { ImageComponent } from "../../common/image-component";
import { TitleComponent } from "../../common/title-component";
import { teaminfotype } from "../../content/team";

const HomepageTeam = ({ teamData }: { teamData: teaminfotype }) => {
  return (
    <>
      <div>
        <ImageComponent imageurl={teamData.imageurl} />
        <TitleComponent
          title={teamData.title}
          buttonname={teamData.buttonname}
        />
      </div>
      {/* <div className="transform hover:scale-105 flex-col justify-center rounded-lg box-border w-72 h-80 font-sans">
        <div>
          <img src={props.photo} alt="Invision Studio img"></img>
        </div>
        <div className="flex justify-between mt-3">
          <a>
            <span>{props.name}</span>
          </a>

          <button className="px-2 rounded-full border-black border-2">
            {props.department}
          </button>
        </div>
      </div> */}
    </>
  );
};
export default HomepageTeam;
