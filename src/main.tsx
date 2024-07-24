import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'
import { persistor, store } from 'store'
import { Theme } from 'components/Theme'
import { App } from 'components/App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={<div>Loading........</div>} persistor={persistor}>
      <Theme>
        <BrowserRouter basename="/mv">
          <App />
        </BrowserRouter>
      </Theme>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
)
