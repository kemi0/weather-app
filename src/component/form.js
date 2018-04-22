import React from "react";
//must first always import 
// dont forget to export 

class Form extends React.Component {
    render() {
        return(
         <form onSubmit={this.props.getWeather}>
             <input type="text" name="city" placeholder="City..."/>
             <input type="text" name="ountry" placeholder="Country..."/>
             <button>Get Weather</button>
        </form>
        );
    }

};

export default Form;