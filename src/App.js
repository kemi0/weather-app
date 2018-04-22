import React from "react";
import Titles from "./component/title";
import Form from "./component/form";
import Weather from "./component/weather";
// import files from there respected source 
// add them into the single div element 
// should only be one div source in this render app 
// state is an object /lives within a componenet/responisble for changing data/button clicks/submitting a form/ submitting application that changes

const API_KEY = '02e948ff7e603a2c3411006e64927d82';


class App extends React.Component {
    state = {
        // initial state
        // state changes once we click the button 
        // what we need from the api call to openmap
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }

        // async await makes http request much easier 
        // prevent a full page refresh 'e'
    getWeather = async (e) => {

         e.preventDefault(); 
         const city = e.target.elements.city.value;
         const country = e.target.elements.country.value;

                                            //  api.openweathermap.org/data/2.5/weather?q={city name},{country code}
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
        // convert response to json

        const data = await api_call.json();
        console.log(data);

        // set the values of the the state
        // this.state.temperature = aldkhfa  
        // never directly manipulate the state bad BAD bad practice instead use setState OBj
        this.setState({
            // nothing to see here just sorting my api call 
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: ''
            // now getting it to show in my weather componenet
        })

       
    }
    // arrow functions allows us to use 'this' independently 
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