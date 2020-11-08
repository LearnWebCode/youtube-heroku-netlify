import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Link, NavLink, Switch } from "react-router-dom"
import Home from "./components/Home"
import Animal from "./components/Animal"
import About from "./components/About"
import Secret from "./components/Secret"

function App() {
  return (
    <BrowserRouter>
      <header className="bg-light pt-3">
        <div className="container">
          <h1 className="display-1">Our Amazing App</h1>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <NavLink to="/animal/meowsalot" className="nav-link" activeClassName="active">
                Meowsalot
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/animal/barksalot" className="nav-link" activeClassName="active">
                Barksalot
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/animal/purrsloud" className="nav-link" activeClassName="active">
                Purrsloud
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/secret" className="nav-link" activeClassName="active">
                Secret
              </NavLink>
            </li>
          </ul>
        </div>
      </header>

      <div className="container py-3 py-md-5">
        <Switch>
          <Route path="/animal/:name">
            <Animal />
          </Route>
          <Route path="/secret">
            <Secret />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>

      <footer className="border-top pt-3">
        <p className="small text-center text-muted">
          <Link className="text-muted mr-1" to="/">
            Home
          </Link>{" "}
          |{" "}
          <Link className="text-muted ml-1" to="/about">
            About Us
          </Link>
        </p>
      </footer>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))
