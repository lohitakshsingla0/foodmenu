import React, {useState, useEffect} from 'react';
import './App.css';
import LoadingSpinner  from './components/LoadSpinner'
import CardApp from './components/card'
//import SortCards from './components/sortby'
import Navbar from './components/navbar'
//import SearchBar from './components/searchBar'

function App() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);
	const [dataIsLoaded, setDataIsLoaded] = useState(false);
	const [searchInput, setSearchInput] = useState('');
	//const [filteredResults, setFilteredResults] = useState([]);

    const fetchItems = async () => {
        const data  = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const dataItems = await data.json();
		console.log(dataItems.categories);			
        setItems(dataItems.categories);
		setDataIsLoaded(true);
    } 

	const sortByAscending = () => {
		var newArr = [...items];
		newArr.sort((a, b) => a.strCategory.localeCompare(b.strCategory));
		setItems(newArr)
		console.log(items);
	}

	const sortByDescending = () => {
		var newArr = [...items];
		newArr.sort((b, a) => a.strCategory.localeCompare(b.strCategory));
		setItems(newArr)
		console.log(items);
		console.log("Descending");
	}

	const searchItems = (searchValue) => {
        setSearchInput(searchValue)
		var newArr = [...items];
		if (searchInput !== '') {
			const filteredData = newArr.filter((item) => {
				return Object.values(item.strCategory).join('').toLowerCase().includes(searchInput.toLowerCase())
			})
			setItems(filteredData)
		}else{
			setItems(newArr)
		}

    }
    return (
        <>
		{!dataIsLoaded ? <div className="App">
		<LoadingSpinner /></div>  : 
		<div>
		<div><Navbar /></div>
	  	<button onClick={sortByAscending}>Sort By Ascending</button>
	  	<button onClick={sortByDescending}>Sort By Descending</button>
		<div>
		<input icon='search'
                placeholder='Search...'
                onChange={(e) => searchItems(e.target.value)}
            />
	  	</div>
		<div class="container" >
		{	items.map((item) => (
				<CardApp key={item.idCategory} cardData={item} />
			))
		}
		</div>
		  
	  </div>
	}
	</>
    )
}

export default App;