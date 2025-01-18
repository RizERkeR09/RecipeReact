import { useState } from "react"

import InList from "./InList"
import Recipe from "./Recipe"

export default function Body() {
    const [ingredientList, setIngredientList] = useState(["oregano", "dough", "Spices", "tomato"])



    const ingredient = ingredientList.map(item => (
        <li key={item}>{item}</li>
    ))

    const [recipe, setRecipe] = useState("")

    async function getRecipe() {
        // setRecipe(prevShown => !prevShown)
        // Right now recipe is gotting from Recipe.jsx
        const recipeMarkdown = await getRecipeFromMistral(ingredientList)
        setRecipe(recipeMarkdown)
        //we should have gotten same result after getting strings from ai but button is not working.
    }


    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget) //creating object of input form form input
        const newIngredient = formData.get("ingredient")
        setIngredientList(prevIngredient => [...prevIngredient, newIngredient])

        event.target.reset();

    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    placeholder="e.g. Oregano"
                    aria-label=" Add ingrediants"
                    name="ingredient" />
                <button>Add Ingredient</button>
            </form>

            {ingredientList.length > 0 && <InList 
            ingredient={ingredient}
            getRecipe= {getRecipe}
            />}
            {recipe && <Recipe />}
        </main>
    )
}
