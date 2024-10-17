import React from "react";
import MyComponent from "./components/Main/Tabs/Tabs.tsx";
import Header from "./components/Header/Header.tsx";
import Sidebar from "./components/SideBar/Sidebar.tsx";
import Main from "./components/Main/Main.tsx";
import Queue from "./components/Queue/Queue.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {
  return (
    <>
      <div className="main-wrapper">
        {/* <MyComponent/> */}
        <Header/>
        <Sidebar />
        <Main />
        <Queue />
        <Footer />
      </div>
    </>
  );
}

export default App;
