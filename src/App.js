import React from "react";
import Titles from "./component/title";
import Form from "./component/form";
import Weather from "./component/weather"
// import files from there respected source 
// add them into the single div element 
// should only be one div source in this render app 

class App extends React.Component {
    render() {
        return (
        
            <div>
                
                <Titles />
                <Form />
                <Weather />

            </div>
        );
    }
};

export default App;