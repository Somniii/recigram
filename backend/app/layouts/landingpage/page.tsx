"use client"

import UpBar from "@/app/components/landingpage/upBar"
import LoginSquare from "@/app/components/landingpage/loginSquare"
import landingBackground from "@/app/assets/images/landingBackground.jpg"
import RegisterSquare from "@/app/components/landingpage/registerSquare"
import { useEffect , useState } from "react"

export default function LandingPage(){
    const [typeForm ,setTypeForm] = useState(0)
    return(
        <div className="relative w-screen h-screen">

            <img 
                className="absolute inset-0 w-full h-full object-cover -z-10"
                src={landingBackground.src}
            />

            <UpBar typeForm={typeForm } setTypeForm={setTypeForm}/>

            <div className="flex justify-center items-center h-full">
                <div className="w-[800px]">
                    {typeForm === 1 && <LoginSquare/>}
                    {typeForm === 2 && <RegisterSquare/>}
                </div>
            </div>
            

        </div>
    )
}