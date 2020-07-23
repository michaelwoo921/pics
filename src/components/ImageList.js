import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = function(props){
   
    const images =   props.images.map(image => {
      //  return ( <img src= {image.urls.regular} alt={image.alt_description} key = {image.id} />);
        return <ImageCard key={image.id} image={image} />;
    });

return <div className="image-list"> {images }</div>

    

};
export default ImageList;