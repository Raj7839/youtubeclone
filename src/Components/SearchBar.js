import React from 'react';




class SearchBar extends React.Component{
    state={term:''}

    onInputChange = (e) => {
        e.preventDefault();
        this.setState({term:e.target.value});
    }

    onSubmitEvent=(e)=>{
        e.preventDefault();

        this.props.onTermSubmit(this.state.term)

    }

    render(){
        return(
            <div className="search-bar ui segment">
                <form className='ui form' onSubmit={this.onSubmitEvent}>
                    <div className="field">
                        <label> Search Videos </label>
                        <input type='text' value={this.state.term} onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;