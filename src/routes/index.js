import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout from 'layouts/CoreLayout';
import DraftLayout from 'layouts/DraftLayout';
import HomeView from 'views/HomeView';
import AboutView from 'views/AboutView';
import GameView from 'views/GameView';
import SignupView from 'views/SignupView';

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path='about' component={AboutView} />/>
    <Route path='draft' component={DraftLayout}>
      <IndexRoute component={SignupView} />
      <Route path='signup' component={SignupView} />
    </Route>
    <Route path='game' component={GameView} />
  </Route>
);
