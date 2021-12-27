import React from 'react';

class SearchBar extends React.Component{
    state = {term: ''};

    // event handler
    onInputChange = (event) =>{
        this.setState({term: event.target.value});
    };

    // Arrow function for callbacks
    onFormSubmit = event =>{
        event.preventDefault();

        // Callback function to the app component
        this.props.onFormSubmit(this.state.term);
    };

    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className = "field">
                        <label>Video Search</label>
                        <input 
                            type = "text" 
                            value = {this.state.term}
                            // Handler below
                            onChange = {this.onInputChange}
                         />
                    </div>
                </form>
            </div>
            
        );
    }

}


export default SearchBar;