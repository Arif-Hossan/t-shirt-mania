import React, { createContext, useState } from 'react';
import './Grandpa.css';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

//context API instead of props drilling
export const RingContext = createContext('Matir Ring');
export const MoneyContext = createContext(555);

const Grandpa = () => {
    const [money,setMoney]=useState(555);
    const house = 7;
    const ring = 'Diamond Ring';
    return (
        <RingContext.Provider value="Dadir Ring">
            <MoneyContext.Provider value ={[money,setMoney]}>
            <div className='grandpa'>
            <h2>Grandpa</h2>
            <p>
                <smail>House : {house}</smail>
            </p>
            <section className='flex'>
                <Father house = {house} ring = {ring}></Father>
                <Uncle house = {house}></Uncle>
                <Aunty house = {house}></Aunty>
            </section>
        </div>
            </MoneyContext.Provider>
        </RingContext.Provider>
    );
};

export default Grandpa;