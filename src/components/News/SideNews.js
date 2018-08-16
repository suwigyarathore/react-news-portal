import React, { Component } from 'react';
import axios from 'axios';
import SingleSide from './SingleSide';
import Error from './Error';

class SideNews extends Component {

  constructor (props) {
    super(props);
    this.state = {
      sidenews: [],
      error: false
    };
  }

  componentDidMount () {
    const url = `https://newsapi.org/v2/${ this.props.news.type }?${ this.props.news.query }&apiKey=907a0b07cc5240e59c63f4af3a2fca2d`;
    axios.get(url)
      .then(res => res.data.articles)
      .then(sidenews => this.setState({ sidenews }))
      .catch(error => this.setState({ error: true }));

  }

  renderItems () {
    return this.state.error ? <Error /> : this.state.sidenews.map(item => (
      <SingleSide key={item.url} item={item} />
    ))
  }

  render () {
    return (
      <div>
        {this.renderItems()}
      </div>
    );
  }
}

export default SideNews;
