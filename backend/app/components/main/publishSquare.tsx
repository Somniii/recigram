"use client";
import NotGlass from "@/app/styles/notglass"
import { useState } from "react"
import { useUser } from "@/app/context/userContext";
import AddIngredientSquare from "./addIngredientSquare";
import IngredientSquare from "./ingredientSquare";
export default function PublishSquare(){
const [msg, setMsg] = useState<{ text: string; ok: boolean } | null>(null);

const [recipeTitle,setRecipeTitle] = useState("")
const [recipeIngredientsName, setRecipeIngredientsName] = useState<string[]>([])
const [recipeIngredietsQuantity, setRecipeIngredientsQuantity] = useState<number[]>([])
const [typeIngredientsQuantity, setTypeIngredientsQuantity] = useState<number[]>([])
const [recipeSteps, setRecipeSteps] = useState("")
const [loading, setLoading] = useState(false);
const [numberOfIngredients , setNumberOfIngredients] = useState(0)

const { userId, userName } = useUser()

    async function publishRecipe(e: React.FormEvent){
      e.preventDefault(); 
          if(!recipeTitle || !recipeIngredientsName || !recipeSteps){{
              setMsg({text:"Fill all the fields",ok:false});
              return
          }}
          setLoading(true);
      try {
        const res = await fetch("/api/publishRecipe", {
          method: "POST", 
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId, recipeTitle ,recipeIngredientsName,recipeSteps }),
        });
        const data = await res.json();
        if (data.ok) {
          setMsg({ text: `Receta"${recipeTitle}" registrado exitosamente.`, ok: true });
          setRecipeTitle("")
          //setRecipeIngredientsName("")
          setRecipeSteps("")
        } else {
          setMsg({ text: data.error || "Error al registrar.", ok: false });
        }
      } catch {
        setMsg({ text: "No se pudo conectar al servidor.", ok: false });
      } finally {
        setLoading(false);
      }
  }
  function addIngredients(){
    setNumberOfIngredients(numberOfIngredients+1)
  }
  function delIngredients(){
    setNumberOfIngredients(numberOfIngredients-1)
  }
    return(
        <div>
            <NotGlass>
                <form onSubmit={publishRecipe}>
                    <p>Recipe title</p>
                    <input type="text" value={recipeTitle} onChange={(e)=>setRecipeTitle(e.target.value)}/>
                    <p>Recipe ingredients</p>
                    <div> 
                      <AddIngredientSquare 
                          numberIngredients={numberOfIngredients} 
                          setNumberIngredients={setNumberOfIngredients}                           
                          setRecipeIngredientsName={setRecipeIngredientsName}
                          
                          setRecipeIngredientsQuantity={setRecipeIngredientsQuantity}
                          setTypeIngredientsQuantity={setTypeIngredientsQuantity}/>
                      {recipeIngredientsName.map((ingredient, index )=> (
                        <IngredientSquare 
                          key={index}
                          ingredientName={ingredient}
                          ingredientQuantity={recipeIngredietsQuantity[index]}
                          numberOfIngredients = {numberOfIngredients}
                          typeQuantity = {typeIngredientsQuantity[index]}
                          setQuantityIngredients={setNumberOfIngredients}

                          
                          
                          ></IngredientSquare>

                      ))}
                      
                    </div>
                    <button type="submit" disabled={loading}>
                    {loading ? "Publicando..." : "Publicar"}
                  </button>
                </form>
            </NotGlass>
        </div>
    )

}