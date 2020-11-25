import React from "react"
import Nav from "react-bootstrap/Nav"

const Header = () => {
  return (
    <header className="headerContainer container">
      <div className="row">
        <div className="col-10">
          <h2 className="headerName">Teresa Pierce</h2>
          <h3 className="headerTitle">Full Stack Developer | Digital Expert</h3>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/portfolio" eventKey="link-1">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/resume" eventKey="link-2">Resume</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact" eventKey="link-3">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  )
}

export default Header