import React, { useState } from 'react';
import Checkbox from './Check';

function Film({ film }) {

  return (
    <li data-title={film.title} className="list-group-item d-flex justify-content-between align-items-center">
      <p><h1>{film.title}{' '}</h1>
        <span className="font-weight-bold"><h3>Director: </h3><h4>{film.director}</h4></span>
        <span className="font-weight-bold"><h3>Productor: </h3><h4>{film.producer}</h4></span>
        <span className="font-weight-bold"><h3>Release Date: </h3><h4>{film.release_date}</h4></span>
        <span className="font-weight-bold"><h3>Description: </h3><h4>{film.description}</h4></span>
      </p>
      <div>
        <Checkbox />
      </div>
    </li>
  )
}
export default Film;