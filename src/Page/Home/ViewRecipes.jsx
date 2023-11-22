import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import Recipes from './Recipes';
const ViewRecipes = () => {
    const recipesData = useLoaderData()
    // console.log('d',recipesData)
    const recipesALL = recipesData.recipes;

    const { id, picture_url, short_bio, likes, name, years_of_experience, recipes } = recipesData;
    return (
        <div>
            {/* info chefs  */}
            <div className='p-4 md:p-0'>
                <div className='md:flex md:gap-6 mx-auto shadow-lg rounded-xl bg-blue-400'>
                    <div className='md:w-[50%] w-full'>
                        <img className='w-full h-[400px] rounded-xl md:rounded-r-[50px] rounded-b-[50px] md:rounded-xl' src={picture_url} alt="" />
                    </div>
                    <div className='md:w-[50%] w-full p-3 space-y-3'>
                        <h1 className='text-3xl font-semibold text-center'>  {name}</h1>
                        <h1 className='text-2xl font-semibold text-center'>Year of experience : {years_of_experience} Years</h1>
                        <p>{short_bio}</p>
                        <div className='flex justify-between'>
                            <div>
                                <p className='font-bold'>Likes</p>
                                <p className='flex gap-2 items-center'><FaHeart className='text-red-500' /> {likes}</p>
                            </div>
                            <div>
                                <p className='font-bold'>Recipes Items</p>
                                <p className='flex gap-2 items-center'>
                                    {recipes.length} items</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-3xl mt-5'>Recipes for cooking chefs</h1>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 space-y-3 my-9'>
                    {
                        recipesALL.map(recipe => <Recipes recipe={recipe} key={recipe.recipe_id}></Recipes>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ViewRecipes;