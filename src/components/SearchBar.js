import React from 'react';

class SearchBar extends React.Component {
    state = {term: ''};

    onFormSubmit = (event)=> {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.term);

    }




    render(){
        return(
            <form className="ui form" onSubmit = {this.onFormSubmit }>
                <div className="field">
                    <label> Enter Search Term</label>
                    <input type="text" value = {this.state.term} onChange ={e => this.setState({term: e.target.value})} />
                </div>
               
            </form>
        );
            
    
    }
};

export default SearchBar;