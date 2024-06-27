import React from "react"
import { Provider } from "react-redux"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import "styles"
import App from "components/App"
import { store } from "store"
import Theme from "components/Theme"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Theme>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Theme>
    </Provider>
  </React.StrictMode>
)
