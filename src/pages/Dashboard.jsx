import ContentCreators from "../components/ContentCreators";
import NavBar from "../components/NavBar.jsx";
const Dashboard = () => {
  return (
    <div className="min-h-screen bg-amber-50 ">
      <NavBar />
      <div className="flex justify-center items-center">
        <ContentCreators />
      </div>
    </div>
  );
};

export default Dashboard;
