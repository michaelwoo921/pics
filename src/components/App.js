import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../api/unsplash';


// uHbL7a_ZWe0jkK8oai_-KoDyLIY5DTWzLKoEbdNjhXA

class App extends React.Component {
    state ={images: []};

    onSearchSubmit= async (term) => {
     
      const response = await unsplash.get('/search/photos', {
          params: { query: term}
      })
      
      this.setState({images: response.data.results});

    }

    render(){
        return (
            <div className="ui container">
                <SearchBar onSearchSubmit ={this.onSearchSubmit}/>
                <ImageList images ={this.state.images} />
            </div>
        );
    }
  
};

export default App;