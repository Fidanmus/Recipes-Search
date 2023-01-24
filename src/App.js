import './App.css';
import { useEffect, useState } from 'react';
import video from './food.mp4';
import MyRecipesComponent from './MyRecipesComponent';

function App() {

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('')

  useEffect ( () => {
    getRecipe()
    }, [wordSubmitted])

    const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=374446f2&app_key=8e9798184625b3729bc2356a86702480`);
    const data = await response.json();
    console.log(data.hits)
    setMyRecipes(data.hits);
  }
  
  const myRecipeSearch = (e) => {
    console.log(e.target.value)
    setMySearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch)
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
        <form onSubmit={finalSearch}>
        <input className="search" placeholder="Search..." onChange={myRecipeSearch} value={mySearch}></input>
        </form>
      </div>

      <div className="container">
        <button>
          <img src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/512/external-pan-home-appliances-and-kitchen-flatart-icons-flat-flatarticons.png" className='icons' width="50px" height="50px" alt="pan"/>
        </button>
      </div>


      {myRecipes.map(element => (
        <MyRecipesComponent 
        label={element.recipe.label} 
        image={element.recipe.image}
        calories={element.recipe.calories}
        ingredients={element.recipe.ingredientLines}
        link={element.recipe.url}
        />
      
      ))}



    </div>
  );
}

export default App;
