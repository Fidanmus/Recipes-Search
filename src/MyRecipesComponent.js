function MyRecipesComponent ({label, image, calories, ingredients, link}) {
    return (<div>
        <div className="container">
        <h2>{label}</h2>
        </div>
        
        <div className="container">
            <a href={link}>
        <img className="tasty" src={image} alt="recipeImage"></img>
        </a>
        </div>

        <ul className="list">
        {ingredients.map(ingredient => (
            <li><img src="https://img.icons8.com/fluency/512/ok.png" className="icon" alt="tickmark"/>
                {ingredient}</li>
        ))}
        </ul>
        
        <div className="container">
        <p className="par">{calories.toFixed()} calories</p>
        </div>
        
    </div>
    )
}

export default MyRecipesComponent;