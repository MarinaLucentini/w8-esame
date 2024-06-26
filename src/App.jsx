import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Homepage from "./component/Homepage";
import MyNavBar from "./component/MyNavBar";
import Meteopage from "./component/Meteopage";
import { useState } from "react";
import MyMap from "./component/MyMap";

const App = () => {
  const [searchUser, setSearchUser] = useState("");
  return (
    <div className="bg-dark app">
      <BrowserRouter>
        <MyNavBar
          setSearchUser={setSearchUser}
          searchUser={searchUser}
        />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/weatherpage/:dimamicCity"
            element={<Meteopage searchUser={searchUser} />}
          />
          <Route path="/map" element={<MyMap />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
