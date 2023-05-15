import React from 'react';
import Special2 from '../Special2/Special2';

const Brother = ({house}) => {

    return (
        <div>
            <h4>Brother</h4>
            <p><small>House : {house}</small></p>
            <section>
               <Special2></Special2>
            </section>
        </div>
    );
};

export default Brother;