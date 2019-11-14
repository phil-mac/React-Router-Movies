import React, { useState } from 'react';
import {Route, Switch} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';


const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <Route path='/' render={props => <SavedList {...props} list={savedList} />} />
      {/* <SavedList list={savedList} {props => ...props}/> */}
      <Switch>
        <Route exact path='/'><MovieList /></Route>
        {/* <Route path='/movies/:id' component={Movie} /> */}
        <Route path='/movies/:id' render={props => <Movie {...props} addToSavedList={addToSavedList}/>}/>

      </Switch>
    </div>
  );
};

export default App;
