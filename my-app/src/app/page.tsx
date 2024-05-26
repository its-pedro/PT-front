import React from "react";
import AddToPage from "./components/AddToPage"
import BuscaConfig from "./components/BuscaConfig"

export default function Home() {
  return (
    <main>
      <div>
        <div className= "w-screen bg-sky-700 rounded-md p-2">
          <div className="m-4 flex justify-start">
            <h1 className= " text-white text-2xl object-left"
            >Avaliação de professores
          </h1>
          </div>
          <div className="flex justify-end">
            <AddToPage />
          </div>
        </div>
        <br></br>
        <div className="flex justify-end">
          <BuscaConfig />
        </div>
      </div>
    </main>
  );
}
