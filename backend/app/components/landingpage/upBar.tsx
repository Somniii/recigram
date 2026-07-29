import {ReactNode} from "react"
import { useState } from "react";
interface upBarProps{
    typeForm: number;
    setTypeForm: React.Dispatch<React.SetStateAction<number>>;
}
export default function UpBar({typeForm,setTypeForm}:upBarProps){
    
    return(
        <div className="flex  w-full h-12 bg-orange-500 items-center">
            <div>
                <p className="text-white">recigram</p>
            </div>
            <div className=" justify-end  flex w-full h-full ">
                <button onClick={() => setTypeForm(1)}>
                    <div className="w-20 h-8 bg-white rounded-lg ">
                        <p>Login</p>
                    </div>
                </button>
                <button onClick={() => setTypeForm(2)}>
                    <div className="w-20 h-8 bg-white rounded-lg ">
                        <p>Register</p>
                    </div>
                </button>
            </div>
        </div>
    )
}