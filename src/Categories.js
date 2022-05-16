import React from 'react';

//style
import styles from './categories.module.scss'

const Categories = ({ categories , FilterItems }) => {
    return (
        <div className={ styles.categories } >
            {
                categories.map( ( category , index ) => <button
                                                           key={index}
                                                           onClick={ () => FilterItems( category ) } 
                                                        >{category}</button> )
            }
        </div>
    );
};

export default Categories;