import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Pages/Menu";
import Home from "./Pages/HomePage";
import Settings from "./Pages/Settings";
import NoPage from "./Pages/NoPage";
import AddSong from './Pages/AddSong';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<Home />} />
          <Route path="settings" element={<Settings />} />
          <Route path="add-song" element={<AddSong />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}