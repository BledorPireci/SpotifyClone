import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
import TrackContextProvider from "./components/Context/TrackContext";

window.getToken = function() {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")
    // window.localStorage.clear();
    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

        window.location.hash = ""
        window.localStorage.setItem("token", token)
    }

    return token;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <TrackContextProvider>
          <App/>
      </TrackContextProvider>
  </React.StrictMode>
);


