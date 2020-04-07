import React, { useState, useEffect, Fragment } from 'react';
import Film from './Film';

function Movies({ films }) {
  // console.log(films)

  return (
    <Fragment>
      <h1 className="text-center"> Ghibli Studio Films </h1>
      <ul className="list-group mt-5">
        {films.map((film, idx) => (
          <Film key={film.id} film={film}/>
        ))}
      </ul>
    </Fragment >
  )
}

export default Movies;