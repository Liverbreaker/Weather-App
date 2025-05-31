import React, {Component} from 'react';
import Cardlist from '../component/Cardlist';
import SearchBox from '../component/SearchBox';
import Scroll from '../component/Scroll';
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
		fetch('https://linsen.synology.me/getinfo')
		.then(resp=>resp.json())
		.then(weather => this.setState({location: weather.records.location}))
		.catch(err => console.log("There is something wrong: ",err.message))
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
			<Scroll>
				<Cardlist location = {filterLocations}/>
			</Scroll>
		</div>		
		);
	}	
}

export default App;
