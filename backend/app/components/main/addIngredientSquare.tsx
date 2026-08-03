"use client"
import { useState } from "react";
interface ingredientsProps{
    numberIngredients: number;
    setNumberIngredients: React.Dispatch<React.SetStateAction<number>>;
    setRecipeIngredientsName: React.Dispatch<React.SetStateAction<string[]>>;
    setRecipeIngredientsQuantity: React.Dispatch<React.SetStateAction<number[]>>;
    setTypeIngredientsQuantity: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function AddIngredientSquare({numberIngredients,setNumberIngredients , setRecipeIngredientsName,setRecipeIngredientsQuantity,setTypeIngredientsQuantity}:ingredientsProps){
    
    const [name,setName] = useState("")
    const [quantity,setQuantity] = useState(0)
    const [type,setType] = useState(0)
    //This add the value of the auxiliar use States to the last part of the list of ingredients
    function addNewIngredient(){
        setNumberIngredients(numberIngredients+1)
        setRecipeIngredientsName(prev => [
            ...prev,
            name
        ])
        setRecipeIngredientsQuantity(prev => [
            ...prev,
            quantity
        ])
        setTypeIngredientsQuantity(prev => [
            ...prev,
            type
        ])
    }
    return(
        <div>
            <p>Ingredient Name</p>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
            <p>Ingredient Quantity</p>
            <input type="number" value={quantity} onChange={(e) => {setQuantity(Number(e.target.value))}}></input>
            <p>Quantity </p>
            <select value={type} onChange={(e)=>{setType(Number(e.target.value))}} >
                <option value={0}>Grams</option>
                <option value={1}>quantity</option>
                <option value={2}>ml</option>
            </select>
            <button onClick={addNewIngredient}>
                <p>Add Ingredient</p>
            </button>
        </div>
    )
}



/*setRecipeIngredientsName(prev=>[...prev,name])
setRecipeIngredientsQuantity(prev=>[...prev,quantity])

*/