import React from 'react';
import axios from "axios";

const Context = React.createContext();
    

const GetAllSessions = async (props) => {

    const getAllSessions = async () => {
        try{
            const response = await axios.get("http://localhost:3001/api/session")
            console.log(response);
        } catch(error){
            console.error(error);
        }
    }
    // fetch('http://localhost:3001/api/session')
    //     .then(response => response.json())
    //     .then(data => console.log(data))

    return (
        <Context.Provider
          value={{
            getAllSessions
          }}
        >
          {props.children}
        </Context.Provider>
      );
}
    


export {Context};