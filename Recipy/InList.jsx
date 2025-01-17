export default function InList(props){
    return(
        <section>
                <h2>Ingredients On Hand:</h2>
                <ul>{props.ingredient}</ul>
                {props.ingredient.length > 3 && <div className="recipe-container">

                    <div>
                        <h3>Ready for a recipe? </h3>
                        <p>Generate a recipe from your list of ingredients</p>
                    </div>
                    <div className="button-container">
                        <button onClick={props.getRecipe}>Get a recipe</button>
                    </div>
                </div>}
            </section>
    )
}