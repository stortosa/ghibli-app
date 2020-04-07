import React, { useEffect, useState, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Movies from './Components/Movies';

import './css/bootstrap.min.css';

function App() {

  useEffect(() => {
    pingApi();
  }, []);

  const [films, saveFilms] = useState([]);

  const pingApi = async () => {
    const data = await fetch('https://ghibliapi.herokuapp.com/films/')
    // console.log(data)

    const films = await data.json();
    //console.log(films);

    saveFilms(films);
  }

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/ghibliList" render={() => (
          <Movies films={films} />
        )} />
        <Route exact path="/home" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
