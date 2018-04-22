import React from "react";
import Titles from "./component/title";
import Form from "./component/form";
import Weather from "./component/weather";
// import files from there respected source 
// add them into the single div element 
// should only be one div source in this render app 

const API_KEY = '02e948ff7e603a2c3411006e64927d82';


class App extends React.Component {
    // async await makes http request much easier 
    // prevent a full page refresh 'e'

    getWeather = async (e) => {
         e.preventDefault();         //  api.openweathermap.org/data/2.5/weather?q={city name},{country code}
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API_KEY}&units=metric`)
        // convert response to json

        const data = await api_call.json();
        console.log(data);

        // props are html attr 
    }
    // arrow functions allows us to use this independently 
    render() {
        return (
        
            <div>
                
                <Titles />
                {/* prop passed to  */}
                <Form getWeather={this.getWeather}/>
                <Weather />

            </div>
        );
    }
};

export default App;