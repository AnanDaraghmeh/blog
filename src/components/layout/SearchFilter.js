import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { searchTerm } from '../../redux/actions';

const Input = styled.input`
  display: none;
  margin: 1rem auto 0rem auto;
  background: var(--color-tertiary);
  font-size: 0.8rem;
  padding: 0.2rem 0.3rem;
  border-radius: 5px;
  border: 1px solid var(--color-primary);
  @media only screen and (min-width: 900px) {
    display: block;
    width: 95%;
    margin: 1rem auto;
  }
`;

export class SearchFilter extends Component {
  state = {
    searchTerm: ''
  };

  handleInputChange = e => {
    this.setState({
      searchTerm: e.target.value
    });
    this.props.searchTerm(e.target.value);
  };
  render() {
    return (
      <Input
        onChange={this.handleInputChange}
        value={this.state.searchTerm}
        type="text"
        placeholder="Search posts"
      />
    );
  }
}

export default connect(
  null,
  { searchTerm: searchTerm }
)(SearchFilter);
