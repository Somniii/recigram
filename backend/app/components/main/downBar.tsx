"use client"
import SearchBar from "./searchBar"
import { useState } from "react";
import PublishSquare from "./publishSquare";

export default function DownBar(){
  const [publish, setPublish] = useState(false)

  function spawnPublish(){
    setPublish(!publish)
  }

  return(
    <>
      {publish && (
        <div className="fixed bottom-[40px] left-0 w-full flex justify-center z-50">
          <div className="bg-white shadow-lg rounded-t-lg w-[90%] max-w-md p-4">
            <PublishSquare />
          </div>
        </div>
      )}

      <div className="flex bg-orange-500 w-full h-[40px] justify-center items-center relative z-40">
        <div>
          <SearchBar/>
        </div>
        <div>
          <button onClick={spawnPublish}>
            <p>Publicar</p>
          </button>
        </div>
      </div>
    </>
  )
}