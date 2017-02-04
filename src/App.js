import React, { Component } from 'react';

import './App.css';


import ReactDOM from 'react-dom';456

import SearchBar from './components/search_bar';
import UserList from './components/user_list';
import $ from "jquery";
class App extends Component {
  constructor(props){
      super(props);

      this.state = {user_results: []};

      this.userSearch('');
    }

    userSearch(searchString){
      //$.getJSON('https://api.myjson.com/bins/pgxi9', (data) => {
      $.getJSON('https://hackthenorth.com/fe-users.json', (data) => {
        //data is the JSON string
        //alert(data[0].company);
          function getResults(userInfo) {
            let userName = userInfo.name.toLowerCase();
            searchString = searchString.toLowerCase();
            return userName.includes(searchString);
            //return userInfo.name == searchString;
        }

        data = data.filter(getResults);
          this.setState({user_results : data});
      });
    }
    render() {
      return (
        <div> 
          <SearchBar onSearchTermChange = {searchTerm => this.userSearch(searchTerm)}/>
          <UserList users = {this.state.user_results} />
        </div>
      );
    }
}

export default App;
