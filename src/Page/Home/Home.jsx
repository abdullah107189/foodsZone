import React, { useEffect, useState } from 'react';
import ChefsCard from './ChefsCard';

const Home = () => {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/data`)
            .then(res => res.json())
            .then(data => setDatas(data))
            .catch(error => console.log(error.message))
    }, [])
    return (
        <div>
            <h1 className='text-2xl text-center my-3'>Chinese Chefs list here</h1>
            <div className='grid xl:grid-cols-3 md:grid-cols-2 gap-3'>
                {
                    datas.map(data => <ChefsCard data={data} key={data.id}></ChefsCard>)
                }
            </div>
        </div>
    );
};

export default Home;