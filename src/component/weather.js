import React from "react";
//must first always import 
// dont forget to export 

class Weather extends React.Component {
    render() {
        return(
            // wrapper methods.. wrapping a className inside an tag to give it styling
            //div w/ className not 'class'
            // first break lines up 
            // keep variables together 
            // break up variables that need different coloring

         <div className="weather__info">
             {/* these are like if statements               */}
            { 
                this.props.city && this.props.country && <p className="weather__key">Location:
                    <span className="weather__value"> { this.props.city }, { this.props.country } </span>
                     </p>
            }
            {
                this.props.temperature && <p className="weather__key">Temperature:  
                 <span className="weather__value"> { this.props.temperature }</span>
                </p>
            }
            {
                this.props.humidity && <p className="weather__key">Humiditity: 
                <span className="weather__value"> {this.props.humidity} </span>
                </p>
                }
            {
                this.props.description && <p className="weather__key"> Conditions:  
                <span className="weather__value"> { this.props.description } </span>
                </p>
            }
            {this.props.error && <p className="weather__error"> {this.props.error} </p>}
         </div>
        );
    }

};

export default Weather;