import { Link } from "react-router";
const NavBar = () => {
  return (
    <div className="bg-rose-100 border border-rose-200 border-2 h-[100px]  text-rose-600 flex items-center justify-center">
      <div className=" w-full flex justify-around  ">
        <Link className="font-bold text-xl " to="/">
          <i class="fa-solid fa-photo-film text-2xl mr-2"></i>
          Creator Verse
        </Link>
        <Link className="font-bold text-xl " to="/show-creators">
          <i className="fa-solid fa-icons  text-2xl mr-2"></i>
          Show All Creators
        </Link>
        <Link className="font-bold text-xl" to="/add-creator">
          <i class="fa-solid fa-heart-circle-plus mr-2"></i>
          Add Creator
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
