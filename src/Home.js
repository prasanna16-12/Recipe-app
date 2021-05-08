
import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';
import './Home.css';

const Home = () => {
    const APP_ID = '542b7fc2';
    const APP_KEY = '3acf255d91f3b5299984a64babfa7dfe';

    const [recipes, setRecipes] = useState([]);
    const [search, setSerach] = useState('');
    const [query, setQuery] = useState('');
    const [isRecipe ,setIsRecipe] = useState(false);
    useEffect(() => {
        getRecipes();
    }, [query]);


    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=32`);
        const data = await response.json();
        console.log(data);
        setRecipes(data.hits);
    }

    const updateSearch = (e) => {
        setSerach(e.target.value);
    }

    const getSearch = (e) => {
        e.preventDefault();
        if (search) {
            setQuery(search);
            setSerach('');
            setIsRecipe(true);
        }else{
            setIsRecipe(false);
        }
        
    }


    return (
        <div className='Home'>
            <form className='form-bar' onSubmit={getSearch}>
                <input type='text' className='search-box' placeholder='Search recipe here...' required value={search} onChange={updateSearch}></input>
                <button type='submit' className='search-btn'><i className="fas fa-search"></i></button>
            </form>
            {
                !isRecipe 
                ? 
                (<h1>Hi, find your favourite recipe...</h1>) :
                <div></div>
            }
            <div className='card-containeer'>
                
                {recipes.map((recipe, index) => {
                    return (
                        <Recipe
                            key={index}
                            props={recipe.recipe}>
                        </Recipe>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;
