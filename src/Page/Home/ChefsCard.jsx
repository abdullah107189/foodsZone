import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ChefsCard = ({ data }) => {
    const { id, name, picture_url, likes, years_of_experience, recipes } = data;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mt-3 mx-auto">
                <figure><img className='h-[300px] w-full' src={picture_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className='flex gap-2'>
                        <span className='font-semibold'>Likes: </span>
                        <p>{likes}</p>
                    </div>
                    <div className='flex gap-2'>
                        <span className='font-semibold'>Years of experience : </span>
                        <p>{years_of_experience} Years</p>
                    </div>
                    <div className='flex gap-2'>
                        <span className='font-semibold'>recipes:</span>
                        <p>{recipes.length} items</p>
                    </div>
                    <Link to={`/data/${id}`} className="btn btn-primary">View Recips <FaArrowRight></FaArrowRight></Link>
                </div>
            </div>
        </div>
    );
};

export default ChefsCard;