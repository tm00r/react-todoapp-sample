import React, { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";


export const Layout: React.FC = () => {

  const navigate = useNavigate();
  const path = useLocation().pathname;

  useEffect(() => {
    if (path == "/"){
      return navigate("/todo");
    }
  }, [navigate]);

return (

  <div className="container">

    <header>
      <div className="header__container header">
        <ul className="header__links list">
          {/* <li className="list__item"><Link to="/">Home</Link></li> */}
          <li className="list__item"><Link className="header__link" to="/todo">To Do List</Link></li>
          {/* <li className="list__item"><Link to="/about">About</Link></li> */}
        </ul>
      </div>
    </header>

    <main>
      <div className="main__container main">
        <Outlet />
      </div>
    </main>

    <footer>
      <div className="footer__container footer">
        React - Todo app sample - Spring 2022
      </div>
    </footer>

  </div>

)

};