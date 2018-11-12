import React, {Component} from 'react';
import queryString from 'query-string';
import uniqid from 'uniqid';
import loading from '../loading.gif'
import GalleryItem from './GalleryItem';

class GalleryForm extends Component {

  // change query string whenever a search occures
  componentDidMount(){
    const params = queryString.parse(this.props.location.search);
    this.props.getPhotos(params.tag);
  }

  render(){

    // displaying the pictures by passing the necessary props
    const results = this.props.data;
    let pictures;
    if(results.length > 0) {
      pictures = results.map(pic => 
        <GalleryItem
          farm={pic.farm}
          server={pic.server}
          key={uniqid()}
          id={pic.id}
          secret={pic.secret}
          title={pic.title} 
        />
      ); // end map
    }
    if(this.props.loading === true){
      console.log('sal');
    }
    return (
      
      <div className="photo-container">
        <h2>Results</h2>
        <ul>

          { (pictures) ? pictures :
           <li className="not-found">
            <h3>No Results Found</h3>
            <p>Your search did not return any results. Please try again.</p>
          </li>
          }
        </ul>
      </div>
    );
  }
}

export default GalleryForm;

// conditie ? rezolv1
// : conditie2 ? rezolv2
// : niciunu