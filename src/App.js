import './App.css';
import { useEffect, useState } from 'react';
import video from './food.mp4';
import MyRecipesComponent from './MyRecipesComponent';

function App() {

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([])

  useEffect ( () => {
    getRecipe()
    }, [])

    const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=374446f2&app_key=8e9798184625b3729bc2356a86702480`);
    const data = await response.json();
    console.log(data)
    setMyRecipes(data);
  }
  
  const myRecipeSearch = (e) => {
    console.log(e.target.value)
    setMySearch(e.target.value)
  }

  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <h1>Find a Recipe</h1>
      </div>

      <div className="container">
        <input className="search" placeholder="Search..." onChange={myRecipeSearch} value={mySearch}></input>
      </div>

      <div className="container">
        <button>
          <img src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/512/external-pan-home-appliances-and-kitchen-flatart-icons-flat-flatarticons.png" className='icons' width="50px" height="50px" />
        </button>
      </div>


      {myRecipes.map(element => (
        <MyRecipesComponent 
        label={element.recipe.label} 
        image={element.recipe.image}
        />
      
      ))}



    </div>
  );
}

export default App;
