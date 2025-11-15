import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailsPage from "./pages/NoteDetailsPage";

const App = () => {
  return (
    <div
      className="relative min-h-screen w-full bg-transparent "
     data-theme="synthwave"
    >
      <div
        className="absolute inset-0 -z-10 w-full h-full 
        [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#8A9EFF_100%)]"
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailsPage />} />
      </Routes>
    </div>
  );
};

export default App;
