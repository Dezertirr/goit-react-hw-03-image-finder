
import { Component } from "react";
import {getSearchPhotoAPI} from '../APIservice/APIService.js'
import styles from './SearchBar.module.css'

class SearchBar extends Component {


    

    render () {
        return (
            <div className={styles.SearchBar}>
            <form className={styles.SearchBarForm} onSubmit={this.props.handleSubmit}>
                <input
                className={styles.SearchBarInput}
                type='text'
                placeholder="Photo Search"
                value={this.props.query}
                onChange={this.props.handleChange} />
                <button className={styles.SearchBarButton} type="submit">Search</button>
            </form>
            </div>
        )
    }
}
export default SearchBar;