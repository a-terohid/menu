import React , { useState } from 'react';

import styles from "./AppStyle.module.css"

//COMPONENTS
import Categories from "./Categories";
import Menu from "./Menu";
import items from './DATA';

function App() {

  //STATES
  const [ menuItems , setMenuItems ] = useState( items );
  const [ categories , setCategories ] = useState([])

  return (
    <main>
      <section className={ styles.menu }  >
        <div className={ styles.title } >
          <h2>our menu</h2>
          <div className={ styles.underline } ></div>
        </div>
        <Categories categories={ categories }  />
        <Menu items={ menuItems } />
      </section>
    </main>
  );
}

export default App;
