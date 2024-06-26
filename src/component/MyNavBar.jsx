import logo from "../assets/wired-lineal-27-globe.gif";
import search from "../assets/wired-flat-19-magnifier-zoom-search.gif";

import { useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  Form,
  Button,
} from "react-bootstrap";
import { useNavigate, NavLink } from "react-router-dom";

const MyNavBar = (props) => {
  const [city, setCity] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setSearchUser(city);
    const searchedCities =
      JSON.parse(localStorage.getItem("searched-cities")) ||
      [];

    const updatedCities = [...searchedCities, city];

    localStorage.setItem(
      "searched-cities",
      JSON.stringify(updatedCities)
    );

    navigate(`/weatherpage/:${city}`);
  };
  return (
    <Navbar className="bg-dark">
      <Container
        fluid
        className="d-flex flex-column flex-md-row"
      >
        <NavLink to="/" className="nav-link text-white">
          <img src={logo} alt="" fluid className="logo" />
          Check weather of the city
        </NavLink>
        <Nav className=" my-2 my-lg-0 text-white"></Nav>

        <Form
          onSubmit={(e) => handleSubmit(e)}
          className="d-flex align-items-center"
        >
          <Form.Control
            type="search"
            placeholder="Search city..."
            className="me-2"
            aria-label="Search"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Button type="submit" variant="btn">
            <img
              src={search}
              alt=""
              className="img-fluid w-25"
            />
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
};
export default MyNavBar;
