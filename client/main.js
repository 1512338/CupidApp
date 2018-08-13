import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.html';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('app'));
});
