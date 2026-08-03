"use client"

import { useEffect, useState } from "react"
import RecipeView from "./RecipeView"

interface Recipe {
  idRecipe: string;
  idUser: string;
  recipeName: string;
  recipeDescription: string; // ingredientes
  recipeSteps: string;
}

export default function RecipeSquare(){
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const res = await fetch("/api/allRecipes")
        const data = await res.json()
        if (data.ok) {
          setRecipes(data.recipes)
        }
      } catch (error) {
        console.error("Error al traer recetas:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchRecipes()
  }, [])

  if (loading) return <p>Cargando recetas...</p>

  return (
    <div className="w-[400px] h-full">
      {recipes.map((recipe) => (
        <RecipeView
          key={recipe.idRecipe}
          recipeTitle={recipe.recipeName}
          recipeIngredients={recipe.recipeDescription}
          recipeSteps={recipe.recipeSteps}
          idUser={recipe.idUser}
        />
      ))}
    </div>
  )
}