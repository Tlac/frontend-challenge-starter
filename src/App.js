import React, { Component } from 'react'; // importing react


import './App.css';

import SearchBar from './components/search_bar';
import UserList from './components/user_list';
import $ from "jquery";
var htnUsers = [];
$.getJSON('https://hackthenorth.com/fe-users.json', function(results){
    htnUsers = results
});
//console.log(htnUsers);
class App extends Component {
    //let htnUsers = $.getJSON('https://hackthenorth.com/fe-users.json');
    //console.log(htnUsers);
    constructor(props){
        super(props);


        this.state = {user_results: []};
        //this.state = {user_results: [],
        //              htn_users: $.getJSON('https://hackthenorth.com/fe-users.json')};
        this.userSearch('');
    }

    userSearch(searchString){
        //console.log({htn_users});
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
                <SearchBar onSearchTermChange={searchTerm => this.userSearch(searchTerm)}/>
                <UserList users={this.state.user_results} />
            </div>
        );
    }
}

export default App;
