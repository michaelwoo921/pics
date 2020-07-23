import React from 'react';

class ImageCard extends React.Component {
    constructor(props){
        super(props);
        this.state ={ spans: 0};
        this.imageRef = React.createRef();
    }

    componentDidMount(){
      this.imageRef.current.addEventListener('load', this.setSpans );

    }

    setSpans =() => {
       // console.log(this.imageRef.current.clientHeight);
       const height = this.imageRef.current.clientHeight;
       const spans = Math.ceil(height / 20);
       this.setState({spans: spans});
    }

    render(){
        const {urls, alt_description} = this.props.image;
        return(
            <img style={{ gridRowEnd: `span ${this.state.spans}`}} ref = {this.imageRef} src={urls.regular} alt={alt_description} />
        );
    }
}

export default ImageCard;