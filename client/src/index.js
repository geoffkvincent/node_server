import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import 'semantic-ui-css/semantic.min.css'
import App from './components/App'
import reducers from './reducers'
import reduxThunk from 'redux-thunk'

const store = createStore( reducers, {}, applyMiddleware(reduxThunk) )

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
)