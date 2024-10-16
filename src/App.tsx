import React from "react"
import MyComponent from "./components/MyComponent/MyComponent.tsx"
import Header from "./components/Header/Header.tsx"
import Sidebar from "./components/SideBar/Sidebar.tsx"
import Main from "./components/Main/Main.tsx"


function App() {

  return (
    <>
    <div className="main-wrapper">
      {/* <MyComponent/> */}
      <Header/>
      <Sidebar/>
      <Main/>
      <div className="list">list</div>
      </div>
    </>
  )
}

export default App
