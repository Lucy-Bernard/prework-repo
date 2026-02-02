import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar.jsx";
import CreatorForm from "../components/ContentCreators/CreatorForm.jsx";
import { fetchCreatorById, updateCreator } from "../service/creatorService.js";

const EditCreator = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCreator = async () => {
      const { data, error } = await fetchCreatorById(id);

      if (!error && data) {
        setCreator(data);
      }
      setLoading(false);
    };

    loadCreator();
  }, [id]);

  const handleSubmit = async (formData) => {
    const { error } = await updateCreator(id, formData);

    if (!error) {
      console.log("Creator updated successfully!");
      navigate(`/view-creator/${id}`);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-stone-300 border-t-stone-700 rounded-full animate-spin"></div>
          <p className="text-stone-600">Loading creator...</p>
        </div>
      </div>
    );
  }

  if (!creator) {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-stone-700">
            Creator not found
          </h2>
          <button
            onClick={() => navigate("/")}
            className="mt-4 bg-stone-700 text-white px-6 py-2 rounded"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50">
      <NavBar />
      <div className="max-w-2xl mx-auto pt-10">
        <h1 className="text-3xl font-bold text-stone-700 mb-6 text-center">
          Edit Creator
        </h1>
        <CreatorForm
          initialData={creator}
          onSubmit={handleSubmit}
          submitText="Save"
        />
      </div>
    </div>
  );
};

export default EditCreator;
