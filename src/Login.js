import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { Select } from 'antd';


const Option = Select.Option;

class Login extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       champions: [],
//     };
//   }


//   componentWillMount() {
//     fetch('http://localhost:8081/createOrUpdateGroups')
//     .then((response) => response.json())
//     .then((champions) => {
//       this.setState({ champions })
//       // console.log('setState: ', this.state.champions);
//     })
//   }

//   filter(e){
//     this.setState({filter: e.target.value})
//   }

//   filterChamp(e){
//     this.setState({filterChamp: e.target.value})
//   }


//   render() {
//     let champions = this.state.champions;
//     // console.log(champions);
//     // console.log('props: ', this.props);

//     if(this.state.filter){
//       champions = champions.filter( champion =>
//       champion.description
//       )
//     }

//     if(this.state.filterChamp){
//       champions = champions.filter( champion =>
//       champion.users.userId
//    )
//     }

//     return (
//       <div>
//         <select onChange={this.filterChamp.bind(this)} value={this.state.filterChamp}>
//           <option value="">All Champs</option>
//           <option value="Assassin">Assassin</option>
//           <option value="Fighter">Fighter</option>
//           <option value="Mage">Mage</option>
//           <option value="Marksman">Marksman</option>
//           <option value="Support">Support</option>
//           <option value="Tank">Tank</option>
//         </select>

//         <input type="text"
//                placeholder="search for a champ"
//                onChange={this.filter.bind(this)}
//         />
//       <ul className="champ-list">
//         {champions.map(champion => {
//           return <li key={champion.users.userId} className="col-xs-3">
//             <div>
//               <Link to={`/champ/${champion.users.mobileNumber}`} >
//               {/* <img src={`http://ddragon.leagueoflegends.com/cdn/7.5.2/img/champion/${champion.table.image.full}`} /> */}
//               </Link>
//               </div>
//               <Link to={`/${champion.users.userId}`} >
//             <h3>{champion.users.key}</h3>
//             <h4>{champion.userId}</h4>
//             </Link>
//           </li>
//         })}
//       </ul>
//       </div>
//     );
//   }
// }
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

// class Login extends Component {
    constructor(){
        super();
        this.state={
            data:[],
        }
    }
    componentDidMount()
    {
        fetch('http://localhost:8080/createOrUpdateGroups').
        then((Response)=>Response.json()).
        then((findresponse) => 
        {
            //  console.log(findresponse);
                this.setState({
                    data:findresponse,
                })
            })
        }
        
   render() {
    //    console.log(this.state.data, '1235')
    const provinceData = this.state.data.map((data1,i)=>{
        return data1._id;
    })
    console.log(provinceData)
    const provinceOptions = provinceData.map(province => <Option key={province}>{province}</Option>);
      return (
        <div>
            {
                // this.state.data.map((dynamicData,key)=>
                <div>
                   {/* <select defaultValue={this.state.data[0]}><option> {dynamicData.userId}</option></select>
                   <select><option> {dynamicData.geo}</option></select>
                    */}
                    <Select
                    placeholder='Select'
                    style={{ width: 250}}>
          {provinceOptions}
        </Select>
        <Select
                    placeholder='Select'
                    style={{ width: 250}}>
          {provinceOptions}
        </Select>
                </div>
                // ) 
            }
            <p>Footer</p>
            </div>
      )
   }
}
export default Login;

// export default Login;