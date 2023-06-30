import { createContext, useContext, useState } from "react";

export const InventoryContext = createContext({});
import React from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";

const InventoryContextProvider = (props) => {
  const [exploreItems, setexploreItems] = useState([]);
  const {user}=useContext(AuthContext);
  const [inventoryItems,setinventoryItems]=useState([]);

  
  const getExplore = () => {
    
    axios
      .get("http://localhost:4000/api/shoeinventory/explore", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => {
        
        setexploreItems(response.data);

        console.log(response.data);
      }).catch(err=>console.log(err));
    
  };



  const getInventory = () => {
    axios
      .get("http://localhost:4000/api/shoeinventory/", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => {
        setinventoryItems(response.data);

        console.log(response.data);
      });
    
  };






 
  const value = { exploreItems, getExplore, getInventory,inventoryItems};
  return (
    <InventoryContext.Provider value={value}>
      {props.children}
    </InventoryContext.Provider>
  );
};

export default InventoryContextProvider;
