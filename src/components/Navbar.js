import React from 'react'
import { Link } from 'gatsby'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              Головна
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/program">
                Програма
              </Link>
              <Link className="navbar-item" to="/speakers">
                Спікери
              </Link>
              <Link className="navbar-item" to="/registration">
                Реєстрація
              </Link>
              <Link className="navbar-item" to="/sponsors">
                Спонсори
              </Link>
              <Link className="navbar-item" to="/about">
                Корисна інформація
              </Link>
              <Link className="navbar-item" to="/contact">
                Контакт
              </Link>
              <a className="navbar-item" href="https://en.entcourse.surgeryconf.info/">
                English version
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
