import { useNavigate } from "react-router";
import NavBar from "../components/NavBar.jsx";
import CreatorForm from "../components/ContentCreators/CreatorForm.jsx";
import { createCreator } from "../service/creatorService.js";

const AddCreator = () => {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    const { error } = await createCreator(formData);

    if (!error) {
      console.log("Creator added successfully!");
      navigate("/");
    }
  };
  return (
    <div className="min-h-screen bg-amber-50">
      <NavBar />
      <div className="max-w-2xl mx-auto pt-10">
        <h1 className="text-3xl font-bold text-stone-700 mb-6 text-center">
          Add Creator
        </h1>
        <CreatorForm onSubmit={handleSubmit} submitText="Add" />
      </div>
    </div>
  );
};

export default AddCreator;
