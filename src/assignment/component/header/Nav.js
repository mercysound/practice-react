import { Link } from "react-router-dom";
import Lgbutton from "../button/Lgbutton";
import "./Navstyle.module.css"


const Nav = () => {
  return (
    <>
    <div className='underline'>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand fs-3 fw-bold" href={0}>teach:able</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4 ">
              {/* <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle active" href={0} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Features
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href={0}>Action</a></li>
                    <li><a className="dropdown-item" href={0}>Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href={0}>Something else here</a></li>
                  </ul>
                </li> */}
                {/* <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href={0}>Price</a>
                </li> */}
                <li className="nav-item">
                  <Link to="/" className="nav-link active" >Teachable Page</Link>
                </li>
                <li className="nav-item">
                  <Link to="/todoapp" className="nav-link active" >TodoApp is here </Link>
                </li>
                <li className="nav-item">
                  <Link to="/usestate" className="nav-link active" >Sign-up page</Link>
                </li>
                <li className="nav-item">
                  <Link to="/countries" className="nav-link active" >Countries</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle active" href={0} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Resources
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href={0}>Action</a></li>
                    <li><a className="dropdown-item" href={0}>Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href={0}>Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link disabled">Disabled</a> */}
                </li>
              </ul>
                <div className="d-flex align-items-center ">
                {/* <div className="nav-item">
                </div> */}
                  <a href="" className="text-dark me-3">Price</a>
                <button className="btn btn-success btn-md p-3"> Start for free</button>
                </div>
                {/* <button className="btn btn-success btn-outline-success text-light" type="submit">Search</button> */}
            </div>
          </div>
        </nav>
      </div>
    <hr  className='p-0 m-0 fw-bold'/>
    </div>
    </>
  )
}

export default Nav;