import React from "react";
import { Toaster } from "react-hot-toast";
import Home from "../pages/home";

export default function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Home />
    </>
  );
}
