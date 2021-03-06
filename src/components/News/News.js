import React, { Component } from 'react';
import NewsSingle from './NewsSingle';
import Error from './Error';

class News extends Component {

  constructor (props) {
    super(props);
    this.state = {
      news: [],
      error: false
    };
  }

  componentDidMount () {
    const url = `https://newsapi.org/v2/${ this.props.news.type }?${ this.props.news.query }&apiKey=907a0b07cc5240e59c63f4af3a2fca2d`;
    fetch(url)
      .then(res => res.json())
      .then(data => data.articles)
      .then(news => this.setState({ news }))
      .catch(error => this.setState({ error: true }));
  }

  renderItems () {
    return this.state.error ? <Error /> : this.state.news.map(item => (
      <NewsSingle key={item.url} item={item} />
    ))
  }

  render () {
    return (
      <div className="row">
        {this.renderItems()}
      </div>
    );
  }
}

export default News;
