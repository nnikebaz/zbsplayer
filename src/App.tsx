import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.tsx";
import Sidebar from "./components/SideBar/Sidebar.tsx";
import Main from "./components/Main/Main.tsx";
import Queue from "./components/Queue/Queue.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Tracks from "../tracks.tsx";

function App() {
  return (
    <Router basename="/zbsplayer/">
      <div className="Wrapper">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Sidebar />
                <Main />
                <Queue />
                <Footer />
              </>
            }
          />
          <Route path="/admin" element={<Tracks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
