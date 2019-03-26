import React from 'react'
import { Provider } from 'react-redux'
import {  createAppContainer } from 'react-navigation';

import { configureStore } from './store'

import ChatApp from './components/ChatApp'

const ChatRoot = createAppContainer(ChatApp);

const store = configureStore()

const App = () =>
  <Provider store={store}>
    <ChatRoot />
  </Provider>

export default App