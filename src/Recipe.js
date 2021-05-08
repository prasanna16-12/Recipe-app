import React from 'react';
import style from './Recipe.module.css';
import { Link } from 'react-router-dom';


const Recipe = (props) => {
    const recipe = props.props;

    return (
        <div className={style.recipe}>
            <Link to={{
                pathname: '/RecipeDetails/recipeInfo',
                state: recipe
            }}>
                <img className={style.image} src={recipe.image} alt='imageNotAvaailablr'></img>
                <h4 className={style.title}>{recipe.label}</h4>
            </Link>
        </div >
    );
}

export default Recipe;