import React, {Component} from 'react';
import Cardlist from '../component/Cardlist';
import SearchBox from '../component/SearchBox';
// import {robots} from './robots';
import './App.css'
// import {city} from '../weather';


class App extends Component{
	constructor(){
		super();
		this.state = {
			location: [],
			searchfield: '',
		}
	}

	componentDidMount(){
		//Grab data
		fetch('http://localhost:3000/getinfo')
		.then(resp=>resp.json())
		.then(weather => this.setState({location: weather.records.location}))
	}


	onSearchChange = (event) =>{
		this.setState({searchfield: event.target.value})
	}

	render(){
		
		const {location, searchfield} = this.state;
		const filterLocations = location.filter(location => {
			return location.locationName.includes(searchfield);
		})

		return !location.length ?
		<h1>Loading...</h1>:
		(
		<div className='tc'>
			<h1>全台縣市天氣預報</h1>
			<SearchBox searchChange = {this.onSearchChange}/>
			<Cardlist location = {filterLocations}/>
		</div>		
		);
	}	
}

export default App;
