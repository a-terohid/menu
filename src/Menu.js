import React from 'react';

//styles 
import styles from './menu.module.scss'

//components
import MenuItem from './MenuItem';

const Menu = ({ items }) => {
  
return(
  <div className={ styles.Menu } >
    {
      items.map( (item) => <MenuItem
                              key={ item.id }
                              value={ item }
                           /> )
    }
  </div>
)

  }
export default Menu;