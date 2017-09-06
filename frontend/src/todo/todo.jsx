import React, { Component } from 'react';
import axios from 'axios';

import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

export default props => (
  <div>
      <PageHeader
          name='Tasks'
          small='Register'
      />
      <TodoForm />
      <TodoList />
  </div>
)
