import React from 'react';

//styles
import styles from "./MenuItem.module.scss"

const MenuItem = ({ value }) => {

    //destructuring
    const { id , title , img , desc , price } = value;

    return (
        <div className={ styles.Menu } >
            <img src={ img } alt={ title } className={ styles.img }  />
            <div className={ styles.info } >
                <div className={ styles.top } >
                    <h2>{ title }</h2>
                    <h3>{ price }</h3>
                </div>
                <div className={ styles.line }></div>
                <p>{ desc }</p>
            </div>
        </div>
    );
};

export default MenuItem;