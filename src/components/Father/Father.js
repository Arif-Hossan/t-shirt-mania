import React from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Father = (props) => {
    const {house,ring} = props;
    return (
        <div>
            <h4>Father</h4>
            <p>
                <smail>House : {house}</smail>
            </p>
            <section className='flex'>
                <Myself house = {house} ring={ring}></Myself>
                <Brother house = {house}></Brother>
                <Sister house = {house}></Sister>
            </section>
        </div>
    );
};

export default Father;