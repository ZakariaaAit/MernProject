import React from 'react'
import { Routes, Route, Link } from "react-router-dom"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import "bootstrap/dist/css/bootstrap.min.css"
import AddReview from "./components/add-review"
import MoviesList from "./components/movies-list"
import Movie from "./components/movie"
import Login from "./components/login"



function App() {
  const [user, setUser] = React.useState(null)
  async function login(user = null) {// default user to null
    setUser(user)
  }
  async function logout() {
    setUser(null)
  }

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Movie Reviews</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href={"/movies"}>Movie</Nav.Link>
            {true ? (
              <Nav.Link>
                <a onClick={<logout/>}>Logout User</a>
              </Nav.Link>
            ) : (
              <Nav.Link href={"/login"}>Login</Nav.Link>
            )}

          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route exact path={["/", "/movies"]} component={<MoviesList/>}>
        </Route>
        <Route path="/movies/:id/review" render={(props) =>
          <AddReview {...props} user={user} />
        }>
        </Route>
        <Route path="/movies/:id/" render={(props) =>
          <Movie {...props} user={user} />
        }>
        </Route>
        <Route path="/login" render={(props) =>
          <Login {...props} login={login} />
        }>
        </Route>
      </Routes>

    </div>
  );
}
export default App;