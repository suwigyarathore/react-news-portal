import React from 'react';

function NewsSingle ({ item }) {
  return (
    <div className="col s4">
      <div className="card">
        <div className="card-image">
          <img src={item.urlToImage} alt={item.title} />
        </div>
        <div className="card-content">
          <p>{item.title}</p>
        </div>
        <div className="card-action">
          <a href={item.url} target="_blank" >Full Article</a>
        </div>
      </div>
    </div>
  )
}

export default NewsSingle;
