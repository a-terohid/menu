import React , { useState } from 'react';

//style
import styles from "./App.module.scss"

//COMPONENTS
import Categories from "./Categories";
import Menu from "./Menu";

//data
import items from './DATA';

function App() {

  //Get categories
  const AllCategories = [ "all" , ...new Set( items.map( item => item.category ) ) ]

  //STATES
  const [ menuItems , setMenuItems ] = useState( items );
  const [ categories , setCategories ] = useState( AllCategories )

  //filter function
  const FilterItems = ( category ) => {

    if( category === "all" ){
      setMenuItems(items)
      return
    }
    
    const newItems = items.filter( ( item ) => item.category === category )
    setMenuItems( newItems)
  }

  return (
    <main>
      <section className={ styles.App }  >
        <div className={ styles.name }  >
          <h2>our menu</h2>
          <div className={ styles.line } />
        </div>
        <Categories categories={ categories } FilterItems={ FilterItems }  />
        <Menu items={ menuItems } />
      </section>
    </main>
  );
}

export default App;
