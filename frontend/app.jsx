
import React from 'react';
import ReactDOM from 'react-dom'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');


  ReactDOM.render(
    <div>
      <img src="https://media2.giphy.com/media/11sBLVxNs7v6WA/giphy.gif?cid=790b76115d1683c6725574516fc51390&rid=giphy.gif">
      </img>
      <br /><br />
      <marquee behavior="alternate" direction="" scrollamount='20'>
        <h1>YAY!</h1>
      </marquee>
    </div>
    , root
  );
})