"use client"

import UpBar from "@/app/components/landingpage/upBar"
import LoginSquare from "@/app/components/landingpage/loginSquare"
import landingBackground from "@/app/assets/images/landingBackground.jpg"
import RegisterSquare from "@/app/components/landingpage/registerSquare"

export default function LandingPage(){
    return(
        <div className="relative w-screen h-screen">

            <img 
                className="absolute inset-0 w-full h-full object-cover -z-10"
                src={landingBackground.src}
            />

            <UpBar />

            <div className="flex justify-center items-center h-full">
                <div className="w-[800px]">
                    <RegisterSquare/>
                </div>
            </div>

        </div>
    )
}