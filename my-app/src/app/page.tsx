import React from "react";
import AddToPage from "./components/AddToPage"
import BuscaConfig from "./components/BuscaConfig"
import OrdenarConfig from "./components/OrdenarConfig"

const FeedDeslogado = () => {
  return (
    <main>
      <div className="w-full  h-full  bg-gray-background">
        <div className= "w-full  h-32 bg-blue-header rounded-md p-2 flex items-center">
          <div className="w-full flex justify-start">
            <h1 className= " text-white text-3xl object-left ml-16 font-serif font-bold"
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
          <div className="bg-white w-64 h-72 mx-auto rounded-lg border-transparent">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsam impedit distinctio saepe eos non nobis accusamus, enim nesciunt incidunt sequi illum molestiae nam quo facere molestias, ut at commodi!</p>
          </div>
          <div className="bg-white w-64 h-72 mx-auto rounded-lg border-transparent">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsam impedit distinctio saepe eos non nobis accusamus, enim nesciunt incidunt sequi illum molestiae nam quo facere molestias, ut at commodi!</p>
          </div>
          <div className="bg-white w-64 h-72 mx-auto rounded-lg border-transparent">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsam impedit distinctio saepe eos non nobis accusamus, enim nesciunt incidunt sequi illum molestiae nam quo facere molestias, ut at commodi!</p>
          </div>
          <div className="bg-white w-64 h-72 mx-auto rounded-lg border-transparent">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsam impedit distinctio saepe eos non nobis accusamus, enim nesciunt incidunt sequi illum molestiae nam quo facere molestias, ut at commodi!</p>
          </div>
        </div>
          <br/><br/>
            <hr className="w-100 border-2 border-blue-header p-0 mx-4"/>
          <br/>
        <div className="w-full flex items-center">
          <h1 
          className= "w-full flex justify-start text-blue-header text-3xl object-left mx-16 font-serif font-bold"
          >Todos os professores
          </h1>
          <div className="w-full flex justify-end mx-16">
            <OrdenarConfig/>
          </div>
        </div>
          <br/>
        <div className="flex items-center">
          <div className="bg-white w-64 h-72 mx-auto rounded-lg border-transparent">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsam impedit distinctio saepe eos non nobis accusamus, enim nesciunt incidunt sequi illum molestiae nam quo facere molestias, ut at commodi!</p>
          </div>
          <div className="bg-white w-64 h-72 mx-auto rounded-lg border-transparent">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsam impedit distinctio saepe eos non nobis accusamus, enim nesciunt incidunt sequi illum molestiae nam quo facere molestias, ut at commodi!</p>
          </div>
          <div className="bg-white w-64 h-72 mx-auto rounded-lg border-transparent">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsam impedit distinctio saepe eos non nobis accusamus, enim nesciunt incidunt sequi illum molestiae nam quo facere molestias, ut at commodi!</p>
          </div>
          <div className="bg-white w-64 h-72 mx-auto rounded-lg border-transparent">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsam impedit distinctio saepe eos non nobis accusamus, enim nesciunt incidunt sequi illum molestiae nam quo facere molestias, ut at commodi!</p>
          </div>
        </div>
        <br/>
        <p className="text-gray-background">.</p>  
      </div>
    </main>
  );
};

export default FeedDeslogado;