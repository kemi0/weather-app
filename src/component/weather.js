import React from "react";
//must first always import 
// dont forget to export 

class Weather extends React.Component {
    render() {
        return(
            // wrapper div
         <div className="weather__info">
             {/* these are like if statements               */}
            {this.props.city && this.props.country && <p>Location: { this.props.city }, { this.props.country }</p>}
            {this.props.temperature && <p>Temperature:  { this.props.temperature }</p>}
            {this.props.humidity && <p>Humiditity: {this.props.humidity}</p>}
            {this.props.description && <p> Conditions:  { this.props.description }</p>}
            {this.props.error && <p> {this.props.error} </p>}
         </div>
        );
    }

};

export default Weather;