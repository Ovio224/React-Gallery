// dependencies
import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import apiKey from './.config';
// components
import Header from './Components/Header/Header';
import GalleryForm from './Components/GalleryForm';
import NotFound from './Components/NotFound';

export default class App extends Component {

    state = {
      pics: [],
      loading: true
    }

  // fetching the data
  getPhotos = (query = 'beach') => {
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
      // main container with routes
      <BrowserRouter>
          <div className="container">
            <Route path="/" render={({history}) => <Header history={history}/>}/>
            <Switch>
              <Route exact path="/search" 
                render={({location}) => <GalleryForm 
                  location={location} 
                  data={this.state.pics} 
                  getPhotos={this.getPhotos} 
                  key={location.key} // passing a unique key so componentDidMount mounts everytime the route changes
                  loadingState={this.state.loading}
                  />}/>
              <Route exact path="/" render={() => <Redirect to="/search"/>}/>
              <Route component={NotFound} />
            </Switch>
        </div>
      </BrowserRouter>
      );
  }
}
