import React, { Component } from 'react';

class Footer extends Component {
    
   render() {
      
    var mystyle = {
        padding: '10px 10px 10px 0px',
        listStyleType: "none",
        margin: '20em 0 0 20px'

    }
    var my = {
        textAlign: 'center',
        backgroundColor: "pink",
        padding: "0px 0 0 0px",
        margin: '0px'
    }
      return (
         <div style={my}>
            <h2 style={mystyle} >Footer</h2>
         </div>
      );
   }
}
export default Footer;