import "./index.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigationToFeatures = () => {
    navigate("/investors");
  };

  return (
    <div className="home">
      <div className="content">
        <div className="title">
          <h1>SelliQ</h1>
          <p>
            Supercharge your sales team <span>with AI</span>
          </p>
        </div>
        <button className="get-started" onClick={handleNavigationToFeatures}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
