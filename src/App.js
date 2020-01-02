import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Map from './components/Map/Map';






class App extends Component {

  componentDidMount = () => {
    fetch(`http://localhost:4000/api/rivers`)
      .then(res => res.json())
      .then(data => {
        this.setState({rivers: []})
      })
  }
  render() {
    return (
      <div className="homepage">
        <div className="header">
          <Header/>
        </div>
        <div className="homepageContent">
            <SearchBar />
        </div>
        <div class="box">
          <div class="row"> 
             <Map/>
          </div>
          <div class="row">
                <div class="col-md-8 col-lg-6">
                  <div class="row">
                    <div class="col-2"><img class="img-thumbnail" /></div>
                    <div class="col-6" >
                      <h4 class="job__title"> River</h4>   
                    </div>
                  </div>
                </div>
               <div class="col-10 col-md-3 col-lg-3 ml-auto">
                <button class="btn btn-primary">Start Visit</button>
            </div> 
            <div class="col-sm-12 col-md-2 col-lg-1">
              <div class="job__star"><a href="/" data-toggle="tooltip" data-placement="top" title="Save to favourites" class="job__star__link"><i class="fa fa-star"></i></a></div>
            </div>
        </div>
     </div>
      </div>
    );
  }
}
export default App;