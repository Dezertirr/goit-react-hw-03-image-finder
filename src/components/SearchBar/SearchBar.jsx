
import { Component } from "react";
import {getSearchPhotoAPI} from '../APIservice/APIService.js'

class SearchBar extends Component {


    

    render () {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <input
                
                type='text'
                placeholder="Photo Search"
                value={this.props.query}
                onChange={this.props.handleChange} />
                <button type="submit">Search</button>
            </form>
        )
    }
}
export default SearchBar;