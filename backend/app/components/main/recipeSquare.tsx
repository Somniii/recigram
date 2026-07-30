"use client"

import RecipeView from "./RecipeView"

export default function RecipeSquare(){
    return(
        <div className="w-[400px] h-full">
            <RecipeView></RecipeView>
            <RecipeView></RecipeView>
            <RecipeView></RecipeView>
            <RecipeView></RecipeView>
            <RecipeView></RecipeView>
        </div>
    )
}