import React, { Component } from 'react';
import SingleSide from './SingleSide';
import axios from 'axios';

class SideNews extends Component {

  constructor (props) {
    super(props);
    this.state = {
      sidenews: []
    };
  }

  componentDidMount () {
    const url = `https://newsapi.org/v2/${ this.props.news.type }?${ this.props.news.query }&apiKey=907a0b07cc5240e59c63f4af3a2fca2d`;
    axios.get(url)
      .then(res => res.data.articles)
      .then(sidenews => this.setState({ sidenews }))
      .catch(error => console.error(error));

  }

  renderItems () {
    return this.state.sidenews.map(item => (
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
