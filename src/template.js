import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

class Template extends Component {
   render() {
      return (
         <div>
           <Header/>
           <Footer/>
         </div>
      );
   }
}
export default Template;