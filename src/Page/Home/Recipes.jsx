import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Recipes = ({ recipe }) => {
    const [favorite, setFavorite] = useState(true)

    const { recipe_name, image_url, ingredients, cooking_method, rating, } = recipe;
    return (
        <div className='md:p-0 p-3'>
            <div className="card md:w-72 h-full w-full bg-base-100 shadow-xl glass">
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p><span className='font-semibold'>Ingredients</span> {ingredients}</p>
                    <p><span className='font-semibold'>Ingredients</span> {ingredients}</p>
                    <p><span className='font-semibold'>Cooking Method :</span> {cooking_method}</p>
                    <p><span className='font-semibold'>Rating :</span> {rating}</p>
                </div>
                <div className='card-footer'>
                    <button onClick={() => setFavorite(!favorite)} className='btn btn-ghost bg-blue-400 w-full'>
                        {favorite ? "Add Favorite" : "remove Favorite"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Recipes;