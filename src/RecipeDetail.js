import React from 'react'
import RecipeDetailStyle from './RecipeDetail.module.css'

const RecipeDetail = (props) => {

    const recipeInfo = props.location.state;
    console.log(recipeInfo);

    return (
        <div className={RecipeDetailStyle.recipeDetail}>

            <div className={RecipeDetailStyle.head}>
                <div style={{ padding: '8px', backgroundColor: 'white', marginRight: '2rem', borderRadius: '1rem' }}>
                    <img className={RecipeDetailStyle.headImage} src={recipeInfo.image} alt={recipeInfo.label}></img>
                </div>
                <div className={RecipeDetailStyle.headInfo}>
                    <h1 className={RecipeDetailStyle.label}>{recipeInfo.label}</h1>
                    <a className={RecipeDetailStyle.link} href={recipeInfo.url}><span className={RecipeDetailStyle.smallText}>source</span>{recipeInfo.source}</a>
                    <div className={RecipeDetailStyle.headSubInfo}>
                        <div className={RecipeDetailStyle.infoCard}>
                            <h5>Yields</h5>
                            <h2>{recipeInfo.yield}</h2>
                        </div>
                        <div className={RecipeDetailStyle.infoCard}>
                            <h5>{'calories (kcal)'}</h5>
                            <h2>{Number(recipeInfo.calories).toFixed(3)}</h2>

                        </div>
                    </div>
                    <div className={RecipeDetailStyle.tagsContainer}>
                        {
                            recipeInfo.healthLabels.map((data) => {

                                return (
                                    <span className={RecipeDetailStyle.tags}>{data}</span>
                                );
                            })
                        }
                    </div>
                </div>

            </div>
            <div className={RecipeDetailStyle.body}>
                <div className={RecipeDetailStyle.ingredient}>
                    <h2 className={RecipeDetailStyle.Heading}>Ingredient</h2>
                    <ul>
                        {
                            recipeInfo.ingredients.map((lines) => {
                                return (
                                    <li className={RecipeDetailStyle.lines}>{lines.text}<span className={RecipeDetailStyle.tags} style={{marginLeft:'1rem',padding:'.1rem .5rem'}}>{Number(lines.weight).toFixed(0) + " gm"}</span></li>
                                );
                            })
                        }
                    </ul>
                </div>
                <div className={RecipeDetailStyle.nutrients}>
                    <div className={RecipeDetailStyle.nutrientContainer}>
                        {
                            recipeInfo.digest.map((nutrient) => {
                                return (
                                    <span className={RecipeDetailStyle.tags} style={{ position: 'relative' }}>{nutrient.label}<span style={{ right: '0%', position: 'absolute', marginRight: '8px' }}>{Number(nutrient.total).toFixed(2) + ' ' + nutrient.unit }</span> </span>
                                );
                            })
                        }
                    </div>
                </div>
            </div>

            <div>
            </div>
        </div>
    )
}


export default RecipeDetail;