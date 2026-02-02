import { Link } from "react-router";
import { deleteCreator } from "../../service/creatorService.js";

const CreatorCard = ({ creator, onDelete }) => {
  const handleDelete = async () => {
    if (confirm(`Are you sure you want to delete ${creator.name}?`)) {
      const { error } = await deleteCreator(creator.id);

      if (!error) {
        console.log("Creator deleted successfully!");

        if (onDelete) {
          onDelete(creator.id);
        }
      } else {
        alert("Failed to delete creator. Please try again.");
      }
    }
  };

  return (
    <div className="flex flex-col border border-rose-200 shadow-md bg-white w-[350px] rounded-xl m-6 pb-2 text-stone-600">
      <div>
        <img
          className="object-cover w-[350px] h-[350px] rounded-t-xl"
          src={creator.imageURL}
          alt={creator.name}
        />
      </div>

      <div className="flex justify-between py-2 px-4">
        <div className="font-ubunto text-xl font-bold text-stone-700">
          {creator.name}
        </div>
        <div className="flex gap-2">
          <Link to={`/view-creator/${creator.id}`}>
            <i className="fa-solid text-blue-900/80 fa-circle-info"></i>
          </Link>
          <Link to={`/edit-creator/${creator.id}`}>
            <i className="fa-solid text-orange-500 fa-pen"></i>
          </Link>
          <button onClick={handleDelete}>
            <i className="text-red-600 fa-solid fa-trash"></i>
          </button>
        </div>
      </div>

      <div className="flex justify-between py-2 px-4">
        <div>{creator.description}</div>
        <div>
          <a href={creator.url} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands text-red-600 fa-youtube"></i>
          </a>
          <i className="fa-brands text-yellow-800 fa-instagram mx-1"></i>
          <i className="fa-brands text-blue-900 fa-twitter"></i>
        </div>
      </div>
    </div>
  );
};

export default CreatorCard;
