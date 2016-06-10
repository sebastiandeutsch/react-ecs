import 'babel-core/register';
import 'babel-plugin-external-helpers-2';
import 'es5-shim/es5-sham';
import 'font-awesome-webpack';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import { Pool, Entity } from './framework'
import BookState from './state/BookState'

let pool = new Pool()

pool
  .createEntity()
  .addComponent(BookState, { title: "hallo", isbn: 1 })

pool
  .createEntity()
  .addComponent(BookState, { title: "welt", isbn: 2 })


console.log(pool)


ReactDOM.render(
  <App pool={pool}/>,
  document.getElementById('application')
);
