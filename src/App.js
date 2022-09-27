import React   from "react";
import './App.css';
import LoadingSpinner  from './components/LoadSpinner'
import CardApp from './components/card'
//import SortCards from './components/sortby'
import Navbar from './components/navbar'

class App extends React.Component {

  
	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch(
"https://www.themealdb.com/api/json/v1/1/categories.php")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}

  
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return  <div className="App">
    <LoadingSpinner /></div> 

		return (
      
		<div>
      <div><Navbar /></div>

      <div class="container" ><CardApp cardData={items.categories} /></div>
		
    </div>
	);
}
}
export default App;
