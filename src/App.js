import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import apiKey from './.config';

import Header from './Components/Header/Header';
import GalleryForm from './Components/GalleryForm';
// import Test from './Components/test';

class App extends Component {

    state = {
      pics: [],
      loading: true
    }


  getPhotos = (query) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&sort=interestingness-desc&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          pics: response.data.photos.photo,
          loading: false
        }) // end setState
      }) // end then
      .catch(error => console.log(error));
  }

  render() {
    return (
      <BrowserRouter>

          <div className="container">
            <Header getPhotos={this.getPhotos}/>
            <Switch>
             <Route path="/:tag" render={({match}) => <GalleryForm match={match} data={this.state.pics}/>}/>
             {/* <Route path="/:tag" render={({match})=> <Test match={match}/>}/> */}
            </Switch>
        </div>
      </BrowserRouter>
      );
  }
}

export default App;
