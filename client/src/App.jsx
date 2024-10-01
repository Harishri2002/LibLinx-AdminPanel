import { useState } from "react";
import "./App.css";
import { SigninPage } from "./pages/Signin/SigninPage";
import { LoginPage } from "./pages/Login/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home/HomePage";
import Dashboard from "./pages/Home/Dashboard";
import AddBooks from "./pages/Home/AddBooks";
import AllBooks from "./pages/Home/AllBooks";
import Layout from "./components/Admin/Shared/Layout";
import { ScannerPage } from "./pages/Home/ScannerPage";
import AddStudent from "./pages/Home/AddStudent";
import Holder from ".//pages/Home/Holder";
import Records from "./pages/Home/Records";
import { dateTimeSeperator } from "./util/dateTimeSperator";

// dateTimeSeperator("2024-04-14T17:04:15.718Z");

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="/SigninPage" element={<SigninPage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/Login" element={<LoginPage />} />

          <Route path="/AdminPage" element={<Layout />} >
            <Route index element={<Dashboard />} />
            <Route path="AddBooks" element={<AddBooks />} />
            <Route path="ViewBooks" element={<AllBooks />} />
            <Route path="AddStudent" element={<AddStudent />} />
            <Route path="ScannerPage" element={<ScannerPage />} />
            <Route path="BookHolder" element={<Holder />} />
            <Route path="Records" element={<Records />} />
            <Route path="Sign" element={<SigninPage />} />
            
          </Route>
          <Route path="ScannerPage" element={<ScannerPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
