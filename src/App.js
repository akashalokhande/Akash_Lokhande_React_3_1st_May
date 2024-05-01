import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignUp from "./Component/SignUp";
import "./App.css";
import Profile from "./Component/Profile";
import { UserProvider } from "./Component/UserContext";

const App = () => {
  return (
    <Router>
      <UserProvider>
        <div>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/*" element={<Navigate to="/signup" />} />
          </Routes>
        </div>
      </UserProvider>
    </Router>
  );
};

export default App;
