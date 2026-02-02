import { useParams } from "react-router";
import { supabase } from "../client";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar.jsx";
const ViewCreator = () => {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);
  console.log("id", id);

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select()
        .eq("id", id);
      console.log(data);
      if (data) {
        setCreator(data[0]);
      } else {
        console.log(error);
      }
    };
    fetchCreator();
  }, [id]);

  console.log("creator", creator);
  return (
    <div className="min-h-screen bg-amber-50">
      <NavBar />
      {creator && (
        <div className="flex justify-center pt-20 ">
          <div className=" w-full max-w-[800px]   flex">
            <img
              className="w-96 h-96 object-cover rounded-full border border-rose-200 shadow-lg"
              src={creator.imageURL}
            />
            <div className="flex flex-col justify-around pl-10">
              <div>
                <div className="text-stone-500 ">Name</div>
                <div>{creator.name}</div>
              </div>

              <div>
                <div className="text-stone-500 ">Social Media</div>
                <div>{creator.url}</div>
              </div>
              <div>
                <div className="text-stone-500 ">Description</div>
                <div>{creator.description}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewCreator;
