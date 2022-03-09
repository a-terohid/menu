import React from 'react';

import styles from "./AppStyle.module.css"

const Menu = ({ items }) => {
    return (
      <div className='section-center'>
      {items.map(( menuItem ) => {
        const { id , title , img , desc , price } = menuItem;
        return (
          <article key={ id } className={ styles.menu_item }>
            <img src={ img } alt={ title } className={ styles.photo } />
            <div className={ styles.item_info }>
              <header>
                <h4>{ title }</h4>
                <h4 className={ styles.price } >${ price }</h4>
              </header>
              <p className={ styles.item_text } >{ desc }</p>
            </div>
          </article>
        );
      })}
    </div>
    );
};

export default Menu;