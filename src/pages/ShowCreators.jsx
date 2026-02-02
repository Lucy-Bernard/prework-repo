import { useEffect, useState } from "react";
import CreatorCard from "../components/ContentCreators/CreatorCard.jsx";
import { fetchAllCreators } from ".././service/creatorService.js";
import NavBar from "../components/NavBar.jsx";
const ShowCreators = () => {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCreators = async () => {
      const { data, error } = await fetchAllCreators();

      if (!error && data) {
        setCreators(data);
      } else {
        console.log(error);
      }
      setLoading(false);
    };

    loadCreators();
  }, []);

  const handleDeleteCreator = (deletedId) => {
    setCreators(creators.filter((creator) => creator.id !== deletedId));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="w-16 h-16 border-4 border-stone-300 border-t-stone-700 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="bg-amber-50">
      <NavBar />

      <div className="flex flex-wrap w-full py-20 justify-center items-center gap-4">
        {creators.map((creator) => (
          <CreatorCard
            key={creator.id}
            creator={creator}
            onDelete={handleDeleteCreator}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowCreators;
