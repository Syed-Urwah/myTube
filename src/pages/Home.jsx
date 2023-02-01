import React from "react";
import Navbar from "../components/Navbar";
import Vidoes from "../components/Vidoes";

export default function Home() {
  return (
    <div>
      <main className="flex">
        <Navbar display="block"/>
        <Vidoes />
      </main>
    </div>
  );
}
