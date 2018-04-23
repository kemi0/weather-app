import React from 'react';
//must first always import 
// dont forget to export 

class Titles extends React.Component {
    render() {
        return (
            <div>
               <h1 className="title-container__title">Weather Finder</h1>
               <p className="title-container__subtitle">Find the temperature condititon and more...</p>
            </div>
        )

    }
}
export default Titles;