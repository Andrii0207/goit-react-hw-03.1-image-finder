import { Component } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import './Searchbar.css';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.query.trim() === '') {
      return alert('Please, enter correct query');
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchFormButton">
            <BiSearchAlt2 style={{ width: '20px', height: '20px' }} />
            <span className="SearchFormButtonLabel">Search</span>
          </button>

          <input
            className="SearchFormInput"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
