import React from 'react';

function Article({ title, date = 'January 1, 1970', preview, minutes }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{getMinutes(minutes)}</p>
    </article>
  )

  function getMinutes(n) {
    if(n < 30) {
      const cups = Math.ceil(n / 5);
      const totalCups = []
      for(let i=0; i<=cups; i++) {
        totalCups.push('☕️');
      }
      totalCups.join('');
      return `${totalCups} ${n} min read`
    }
  }
}

export default Article;