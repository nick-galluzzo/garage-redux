import React from 'react';

const Aside = (props) => {
  return (
    <div className="aside">
      <div className="illustration" style={{"color": "black"}}></div>
        <img src="" alt="" />
        <h1>{props.garage}</h1>
        <p>Our garage has the most reasonable prices in town. We are the most qualified car garage this side of the Mississippi.</p>
        {props.children}
    </div>
  );
};

export default Aside;
