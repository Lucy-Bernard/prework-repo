import { useEffect, useState } from "react";
import CreatorCard from "./CreatorCard.jsx";
import { fetchAllCreators } from "../../service/creatorService.js";

const ContentCreators = () => {
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
    <div className="flex flex-wrap w-full max-w-[800px] py-20 justify-center items-center">
      {creators
        .filter((creator, index) => index < 5)
        .map((creator) => (
          <CreatorCard
            key={creator.id}
            creator={creator}
            onDelete={handleDeleteCreator}
          />
        ))}
    </div>
  );
};

export default ContentCreators;
