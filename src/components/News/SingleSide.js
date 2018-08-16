import React from 'react';

function SingleSide ({ item }) {
  return (<div>
    <div className="divider"></div>
    <a href={item.url} target="_blank">
      <div className="section">
        <h5>{item.source.name}</h5>
        <p>{item.title}</p>
      </div>
    </a>
  </div>);
}

export default SingleSide;
