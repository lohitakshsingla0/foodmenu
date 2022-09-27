import React from "react";
import SortCards from './sortby'
import './navbar.css'

export default function Navbar() {
  return (
    <div class="topnav">
      <h1>Food Lists</h1>
      <SortCards />
      <div class="search-container">
      <form>
      <input type="text" placeholder="Search.." name="search"></input>
      <button type="submit"  name="search"><i class="fa fa-search">search</i></button>
    </form>
    </div>
    </div>
  );
}