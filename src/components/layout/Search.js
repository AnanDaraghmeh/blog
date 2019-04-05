import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Index } from 'elasticlunr';

const Form = styled.form`
  position: relative;
  margin: 0;
`;
const Input = styled.input`
  background: var(--color-tertiary);
  font-size: 0.8rem;
  width: 100%;
  padding: 0.2rem 0.3rem;
  border-radius: 5px;
  border: 1px solid var(--color-primary);
`;

const SearchResultList = styled.ul`
  list-style: none;
  background: var(--color-tertiary);
  border-radius: 5px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 110%;
  right: 0%;
  width: 100%;
  z-index: 10;
  & li {
    font-size: 0.8rem;
    padding: 0.2rem 0.4rem;
  }
`;

export class Search extends Component {
  state = {
    query: '',
    results: []
  };

  getOrCreateIndex = () => {
    return this.index ? this.index : Index.load(this.props.searchIndex);
  };

  handleInputChange = e => {
    const query = e.target.value;
    this.index = this.getOrCreateIndex();
    this.setState({
      query,
      results: this.index
        .search(query, { expand: true })
        .map(({ ref }) => this.index.documentStore.getDoc(ref))
    });
  };

  render() {
    const { results } = this.state;
    return (
      <Form>
        <Input
          onChange={this.handleInputChange}
          value={this.state.query}
          type="text"
          placeholder="Search posts"
        />
        <SearchResultList>
          {results.map(result => {
            return (
              <li key={result.id}>
                <Link to={`/${result.slug}`}>{result.title}</Link>
              </li>
            );
          })}
        </SearchResultList>
      </Form>
    );
  }
}

export default Search;
