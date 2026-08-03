"use client"
import NotGlass from "@/app/styles/notglass"
interface recipeProps{
    recipeTitle: string,
    recipeSteps: string,
    recipeIngredients: string;
    idUser : string;
}
export default function RecipeView({recipeTitle,recipeIngredients,recipeSteps,idUser}:recipeProps){
    return(
        <NotGlass className="mb-4">
            <div>
                <h2>{recipeTitle}</h2>
                <p>{recipeSteps}</p>
                <p>{recipeIngredients}</p>
            </div>
        </NotGlass>
    )
}