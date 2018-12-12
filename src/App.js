// dependencies
import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import apiKey from './config';
import orderBy from 'lodash/orderBy';
// components
import Header from './Components/Header/Header';
import GalleryForm from './Components/GalleryForm';
import NotFound from './Components/NotFound';

const invertDirection = {
  asc: 'desc',
  desc: 'asc'
}

export default class App extends Component {

    state = {
      pics: [],
      picsToBeLoaded: [],
      loading: true,
      sortDirection: 'desc',
      counter: 1
    }

  // fetching the data
  getPhotos = (query = 'beach') => {
    this.setState({loading: true});
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&sort=interestingness-desc&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          pics: response.data.photos.photo,
          loading: false
        }); // end setState
      }) // end then
      .catch(error => console.log(error));
  }

  handleSort(){
    this.setState(prevstate => ({
      sortDirection: prevstate.pics === this.state.pics ? invertDirection[this.state.sortDirection] : 'asc', 
      pics: orderBy(this.state.pics, ['title'], this.state.sortDirection)
    }));
  }

  getMorePics(query = 'beach'){
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&sort=interestingness-desc&per_page=24&page=${this.state.counter + 1}&format=json&nojsoncallback=1`)
      .then(response => {
        console.log(response);
        this.setState({
          counter: this.state.counter + 1,
          pics: this.state.pics.concat(response.data.photos.photo)
        }); // end setState
      }) // end then
      .catch(error => console.log(error));
  }

  render() {
    return (
      // main container with routes
      <BrowserRouter>
        <div className="container">
          <Route exact path="/search" render={({history}) => <Header history={history}/>}/>
          <Switch>
            <Route exact path="/search" 
                render={({location}) => <GalleryForm 
                  handleSort={this.handleSort.bind(this)}
                  getMorePics={this.getMorePics.bind(this)}
                  location={location} 
                  data={this.state.pics} 
                  getPhotos={this.getPhotos} 
                  key={location.key} // passing a unique key so componentDidMount mounts everytime the route changes !important
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
