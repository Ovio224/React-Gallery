import React, {Component} from 'react';
import queryString from 'query-string';
import uniqid from 'uniqid';
import GalleryItem from './GalleryItem';

class GalleryForm extends Component {

  // change query string whenever a search occures
  componentDidMount(){
    const params = queryString.parse(this.props.location.search);
    this.props.getPhotos(params.tag);
  }

  render(){
    const names = queryString.parse(this.props.location.search).tag;
    // displaying the pictures by passing the necessary props
    const results = this.props.data;
    let pictures;
    if(results.length > 0) {
      pictures = results.map(pic => 
        <GalleryItem
          farm={pic.farm}
          server={pic.server}
          key={uniqid()} // totally inecessary unique id dependancy
          id={pic.id}
          secret={pic.secret}
          title={pic.title} 
        />
      ); // end map
    } else if(this.props.loadingState){
      pictures = <img className="loading" src={(require('../assets/loading.gif'))} alt="Loading..." /> // loading gif
    }

    return (
      <div className="photo-container">
        { (names) ? // display the name of the tag
        <h2>Pics of {names}s</h2>
        : <h2>Pictures</h2>
        }
        <ul>
          { (pictures) ? pictures : // display either the pictures or no results
           <li className="not-found">
            <h3>No Results Found</h3>
            <p>Your search did not return any results. Please try again.</p>
          </li>
          }
        </ul>
        { (names) ? 
        <span className="footer">	&copy;  Oh, I can see that you are liking <strong>{names}s</strong>, aren't you?</span>
        : <span className="footer">  Hello there, I hope you like <strong>pictures</strong>. Go ahead, search for something!</span>
        }
      </div>
    );
  }
}

export default GalleryForm;

// conditie ? rezolv1
// : conditie2 ? rezolv2
// : niciunu