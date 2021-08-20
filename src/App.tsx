import { Box } from "@material-ui/core";
import React from "react";
//import TitleProvider from "./TitleProvider";
import "./App.css";
import Header from "./Components/header/Header";
import Sidebar from "./Components/header/Sidebar";
import Feed from "./Components/newsfeed/Feed";

function App() {
  return (
    <div className="App">
      <Header />
      <Box display="flex">
        <Sidebar />
        <Feed />
      </Box>
    </div>
  );
}

export default App;
