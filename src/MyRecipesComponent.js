function MyRecipesComponent ({label, image}) {
    return (<div>
        <h2>{label}</h2>
        <img src={image}></img>
    </div>
    )
}

export default MyRecipesComponent;