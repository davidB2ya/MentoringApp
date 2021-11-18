import React from 'react';

const Context = React.createContext(
    
    fetch('http://localhost:3001/api/session')
        .then(response => response.json())
        .then(data => console.log(data[0].id))
);

export { Context };