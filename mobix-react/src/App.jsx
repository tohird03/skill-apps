import React from "react";
import { Routes, Route } from "react-router-dom"
import { observer } from "mobx-react-lite";
import Todos from "./components/todo/Todos";
import Fillial from "./Pages/Education/Fillial";
import Course from "./Pages/Education/Course";
import Group from "./Pages/Education/Group";
import Pupil from "./Pages/Education/Pupil";
import Home from "./Pages/Education/Home";
const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/todo" element={<Todos/>}/>
        <Route path="/fillial" element={<Fillial/>}/>
        <Route path="/course/:id" element={<Course/>}/>
        <Route path="/groups/:branchId/:id" element={<Group/>}/>
        <Route path="/pupil/:pupilId" element={<Pupil/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default observer(App);
