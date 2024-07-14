import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'

// import "modern-normalize"
// import './styles/index.css'
import { persistor, store } from 'store'
import { Theme } from 'components/Theme'
import { App } from 'components/App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Theme>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Theme>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
