"use client"
interface ingredientsProps{
    ingredientName: String;
    ingredientQuantity: number;
    typeQuantity: number;
    numberOfIngredients: number;
    setQuantityIngredients: React.Dispatch<React.SetStateAction<number>>;
    children?: React.ReactNode
}

export default function IngredientSquare({ ingredientName,ingredientQuantity,numberOfIngredients, typeQuantity,setQuantityIngredients}:ingredientsProps){
    function deleteIngredient(){
        setQuantityIngredients(numberOfIngredients-1)
    }
    return(
        <div>
            <p>{ingredientName}</p>
            <p>{ingredientQuantity}</p>
            <p>{typeQuantity}</p>
            <button onClick={deleteIngredient}>
                <p>Delete Ingredient</p>
            </button>
        </div>
    )
}