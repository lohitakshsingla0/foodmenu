import React, {useState, useEffect} from 'react';
import './App.css';
import LoadingSpinner  from './components/LoadSpinner'
import CardApp from './components/card'
import Navbar from './components/navbar'


function App() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);
	const [defaultItems, setDefaultItems] = useState([]);
	const [dataIsLoaded, setDataIsLoaded] = useState(false);
	const [searchInput, setSearchInput] = useState('');
	//const [filteredResults, setFilteredResults] = useState([]);

    const fetchItems = async () => {
        const data  = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const dataItems = await data.json();
		//console.log(dataItems.categories);			
        setItems(dataItems.categories);
		setDefaultItems(dataItems.categories);
		setDataIsLoaded(true);
    } 

	const sortByAscending = () => {
		var newArr = [...defaultItems];
		newArr.sort((a, b) => a.strCategory.localeCompare(b.strCategory));
		setItems(newArr)
		console.log(items);
	}

	const sortByDescending = () => {
		var newArr = [...defaultItems];
		newArr.sort((b, a) => a.strCategory.localeCompare(b.strCategory));
		setItems(newArr)
		console.log(items);
		console.log("Descending");
	}

	const searchItems = (searchValue) => {
        setSearchInput(searchValue)
		var newArr = [...defaultItems];
		var newArraDefaultItems = [...defaultItems];
		if (searchInput !== '') {
			const filteredData = newArr.filter((item) => {
				return Object.values(item.strCategoryDescription).join('').toLowerCase().includes(searchInput.toLowerCase())
			})
			setItems(filteredData)
		}else{
			setItems(newArraDefaultItems)
		}

    }
    return (
        <>
		{!dataIsLoaded ? <div className="App">
		<LoadingSpinner /></div>  : 
		<div class="outer-container">
			<div><Navbar /></div>
			<div class="button-search-wrapper">
				<div class="button-container">
					<button onClick={sortByAscending}><span>Sort By Ascending</span></button>
					<button onClick={sortByDescending}><span>Sort By Descending</span></button>
				</div>
				<div class = "input-container">
					<input icon='search' 
							placeholder='Search...' required
							onChange={(e) => searchItems(e.target.value) }
						/>
				</div>
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