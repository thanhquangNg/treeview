import './App.css';
import React from "react";
import Node from './components/treeview';


function App() {
  window.id = 0;
  return(
    
    <div id="container">
      <h2>Tree Data Visualization</h2>
    <Node title='root' level={0} removeNode={()=>{}} />
    </div>
    
  );
}

export default App;
