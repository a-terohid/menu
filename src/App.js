import React , { useState } from 'react';

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
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={ categories }  />
        <Menu items={ menuItems } />
      </section>
    </main>
  );
}

export default App;
