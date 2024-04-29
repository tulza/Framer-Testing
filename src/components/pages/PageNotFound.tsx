import { NotFound } from "@/assets/images";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="grid h-dvh w-dvw place-items-center bg-black">
      <div className="flex w-[512px] flex-col items-center justify-center">
        <img src={NotFound} draggable={false} />
        <Link to="/">
          <button className="h-8 w-[128px] rounded-lg bg-white  hover:bg-white/90">
            back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
