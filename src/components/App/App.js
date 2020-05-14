import React from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp.js';

//var business = { imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
//name: 'MarginOtto Pizzeria',
//address: '1010 Paddington Way',
//city: 'Flavortown',
//state: 'NY',
//zipCode: '10101',
//category: 'Italian',
//rating: 4.5,
//reviewCount: 90 };

//var businesses = [business, business, business, business, business, business, business, business];

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {businesses : []};
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy){
    console.log('Seacrching '+term+' in '+location+' in the order of '+sortBy);
    Yelp.searchYelp(term,location,sortBy).then((business) =>{
      this.setState({businesses : business});
    }
    );
  }

  render(){
    return (
      <div className="App">
        <div  className = "app-header">
            <h1>Businarch</h1>  
            <p>- business search</p>
        </div>
    <SearchBar searchYelp = {this.searchYelp}/>
    <BusinessList businesses = {this.state.businesses} /> 
    </div>
    );
  }
}

export default App;
