import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import About from './About';
import Services from './Services';
import { Select } from 'antd';


const Option = Select.Option;

const provinceData = ['MOVIES', 'SPORTS','MUSIC','TVSHOWS'];
const cityData = {
    MOVIES: ['HollyWood', 'TollyWood', 'BollyWood', 'KollyWood'],
    SPORTS: ['Kabbadi', 'cricket', 'volleyball', 'Tennis'],
    MUSIC: ['classic', 'Melody', 'Mass', 'Folk'],
    TVSHOWS: ['Bigg Boss', 'Dhee 10', 'Pataas', 'Express Raja'],
};

class Header extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         selectedView: 'Movies'
    //     }
    // }

    state = {
        cities: cityData[provinceData[0]],
        secondCity: cityData[provinceData[0]][0],
      }
    
      handleProvinceChange = (value) => {
        this.setState({
          cities: cityData[value],
          secondCity: cityData[value][0],
        });
      }
    
      onSecondCityChange = (value) => {
        this.setState({
          secondCity: value,
        });
      }
    render() {
        var myStyle = {
            float: 'right',
            padding: '10px 10px 10px 0px',
            listStyleType: "none",
            margin: '-2em 0 0 20px'

        }
        var my = {
            textAlign: 'center',
            backgroundColor: "pink",
            padding: "50px 0 0 0px",
            margin: '0px'
        }
        const provinceOptions = provinceData.map(province => <Option key={province}>{province}</Option>);
        const cityOptions = this.state.cities.map(city => <Option key={city}>{city}</Option>);
       
        // const { selectedView } = this.state

        // const VIEWS = [
        //     {
        //         name: 'Movies',
        //         minor: ['HollyWood', 'TollyWood', 'BollyWood', 'KollyWood'],
        //         //   method: ['apple', 'orange']
        //     },
        //     {
        //         name: 'Sports',
        //         minor: ['Kabbadi', 'cricket', 'volleyball', 'Tennis'],
        //         // method: ['apple', 'orange']
        //     },
        //     {
        //         name: 'Music',
        //         minor: ['classic', 'Melody', 'Mass', 'Folk'],
        //         // method: ['apple', 'orange']
        //     },
        //     {
        //         name: 'Tv shows',
        //         minor: ['Bigg Boss', 'Dhee 10', 'Pataas', 'Express Raja'],
        //         //   method: ['cat', 'dog']
        //     }
        // ]
        // const view = VIEWS.filter(({ name }) => name === selectedView)[0]
        // const minors=view.minor.map(m => <Option>{m}</Option>)
        // const majors=VIEWS.map(({ name }) => <Option value={name}>{name}</Option>)

        return (
            <Router>
            <div>

                <ul style={my}>
                    {/* <img src={logo} className="App-logo" alt='logo'/> */}
                    <li style={myStyle}><Link to={'/Services'}>Services</Link></li>
                    <li style={myStyle}><Link to={'/About'}>About</Link></li>
                    <li style={myStyle}><Link to={'/Login'}>Login</Link></li>
                    <li style={myStyle}><Link to={'/'}>Home</Link></li>
                </ul>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/Login' component={Login} />
                    <Route exact path='/About' component={About} />
                    <Route exact path='/Services' component={Services} />
                </Switch>
                {/* <Select onChange={(e) => this.setState({ selectedView: e.target.value })} defaultValue='Movies'>
                    {majors}
                </Select> */}
                {/* {getMajorMethod()} */}
                {/* <Select defaultValue='HollyWood'>
                    {minors}
                </Select> */}
                <Select defaultValue={provinceData[0]} style={{ width: 90 }} onChange={this.handleProvinceChange}>
          {provinceOptions}
        </Select>
        <Select value={this.state.secondCity} style={{ width: 90 }} onChange={this.onSecondCityChange}>
          {cityOptions}
        </Select>

            </div>
            </Router>
        )
    }
}
export default Header;