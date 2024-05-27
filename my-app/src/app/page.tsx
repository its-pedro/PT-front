import React from "react";
import AddToPage from "./components/AddToPage"
import BuscaConfig from "./components/BuscaConfig"
import OrdenarConfig from "./components/OrdenarConfig"
import Image from "next/image";
import Link from "next/link";

const FeedDeslogado = () => {
  return (
    <main>
      <div className="w-full  h-full  bg-gray-background">
        <div className= "w-full  h-auto bg-blue-header rounded-md p-2 flex items-center">
          <div className="w-full flex justify-start items-center">
            <img className="my-4 ml-8 w-20 h-12 rounded-lg" src="logo-unb.png" alt=""/>
            <h1 className= " text-white text-2xl object-left ml-4 font-serif font-bold flex intems-center"
            >Avaliação de professores
            </h1>
          </div>
          <div className="w-full flex justify-end mr-16">
            <AddToPage />
          </div>
        </div>
          <br/>
        <div className="flex justify-end">
          <input
          className="font-mono pr-64 pl-12 mr-28 py-2.5 rounded-full font-semibold text-pretty text-1xl"
          type="string"
          placeholder="pesquisar"
          />
        </div>
          <br/>
        <div className="flex items-center">
          <div className="bg-white w-64 h-72 mx-auto rounded-lg border-transparent flex flex-col items-center">
            <>
              <img className="w-48 h-48 mt-4 mb-2 object-center rounded-lg" src="DEXTER.jpg" alt=""/>
              <p className="mb-2 text-base font-mono">Dexter</p>
            </>
            <>
              <p className="mb-2 text-sm font-mono text-gray-disciplina">Física Experimental 1</p>
            </>
          </div>
          <div className="bg-white w-64 h-72 mx-auto rounded-lg border-transparent flex flex-col items-center">
            <>
              <img className="w-48 h-48 mt-4 mb-2 object-center rounded-lg" src="Usuario.jpg" alt=""/>
              <p className="mb-2 text-base font-mono">Professor</p>
            </>
            <>
              <p className="mb-2 text-sm font-mono text-gray-disciplina">Disciplina</p>
            </>
          </div>
          <div className="bg-white w-64 h-72 mx-auto rounded-lg border-transparent flex flex-col items-center">
            <>
              <img className="w-48 h-48 mt-4 mb-2 object-center rounded-lg" src="Usuario.jpg" alt=""/>
              <p className="mb-2 text-base font-mono">Professor</p>
            </>
            <>
              <p className="mb-2 text-sm font-mono text-gray-disciplina">Disciplina</p>
            </>
          </div>
          <div className="bg-white w-64 h-72 mx-auto rounded-lg border-transparent flex flex-col items-center">
            <>
              <img className="w-48 h-48 mt-4 mb-2 object-center rounded-lg" src="Usuario.jpg" alt=""/>
              <p className="mb-2 text-base font-mono">Professor</p>
            </>
            <>
              <p className="mb-2 text-sm font-mono text-gray-disciplina">Disciplina</p>
            </>
          </div>
        </div>
          <br/><br/>
            <hr className="w-100 border-2 border-blue-header p-0 mx-4"/>
          <br/>
        <div className="w-full flex items-center">
          <h1 
          className= "w-full flex justify-start text-blue-header text-3xl object-left mx-32 font-serif font-bold"
          >Todos os professores
          </h1>
          <div className="w-full flex justify-end mx-16">
            <OrdenarConfig/>
          </div>
        </div>
          <br/>
        <div className="flex items-center">
          <div className="bg-white w-64 h-72 mx-auto rounded-lg border-transparent flex flex-col items-center">
            <>
              <img className="w-48 h-48 mt-4 mb-2 object-center rounded-lg" src="Usuario.jpg" alt=""/>
              <p className="mb-2 text-base font-mono">Professor</p>
            </>
            <>
              <p className="mb-2 text-sm font-mono text-gray-disciplina">Disciplina</p>
            </>
          </div>
          <div className="bg-white w-64 h-72 mx-auto rounded-lg border-transparent flex flex-col items-center">
            <>
              <img className="w-48 h-48 mt-4 mb-2 object-center rounded-lg" src="Usuario.jpg" alt=""/>
              <p className="mb-2 text-base font-mono">Professor</p>
            </>
            <>
              <p className="mb-2 text-sm font-mono text-gray-disciplina">Disciplina</p>
            </>
          </div>
          <div className="bg-white w-64 h-72 mx-auto rounded-lg border-transparent flex flex-col items-center">
            <>
              <img className="w-48 h-48 mt-4 mb-2 object-center rounded-lg" src="Usuario.jpg" alt=""/>
              <p className="mb-2 text-base font-mono">Professor</p>
            </>
            <>
              <p className="mb-2 text-sm font-mono text-gray-disciplina">Disciplina</p>
            </>
          </div>
          <div className="bg-white w-64 h-72 mx-auto rounded-lg border-transparent flex flex-col items-center">
            <>
              <img className="w-48 h-48 mt-4 mb-2 object-center rounded-lg" src="Usuario.jpg" alt=""/>
              <p className="mb-2 text-base font-mono">Professor</p>
            </>
            <>
              <p className="mb-2 text-sm font-mono text-gray-disciplina">Disciplina</p>
            </>
          </div>
        </div>
        <br/>
        <p className="text-gray-background">.</p>  
      </div>
    </main>
  );
};

export default FeedDeslogado;