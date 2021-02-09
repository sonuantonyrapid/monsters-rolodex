import React,{ Component } from "react";
import './App.css';

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";


class App extends Component{

    state = {
      monsters:[],
      searchData:''
    };


    searchHandler = (searchData) => {

      this.setState({searchData:searchData});

    };

    componentDidMount(){

      fetch('https://jsonplaceholder.typicode.com/users').then(response=>{

        return response.json();

      }).then(responseData=>{

        const monsters = responseData.map((item)=>{

          return {username:item.username,name:item.name,email:item.email};
    
        });

        this.setState({monsters:monsters});

      });

    }


    render(){

      const {monsters,searchData} = this.state;

      let filteredMonsters = [...monsters];

      if(searchData){

        filteredMonsters = monsters.filter(item=>{

          return item.name.toLowerCase().includes(searchData.toLowerCase());
  
        });
       

      }

      return (
        <div className="App">
          <h1>Monsters Rolodex</h1>
          <SearchBox searchHandler={this.searchHandler} searchData={this.state.searchData}/>
          <CardList list={filteredMonsters}/>
        </div>
      );

    }

}

export default App;
