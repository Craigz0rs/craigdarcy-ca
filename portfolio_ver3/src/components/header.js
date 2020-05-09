import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Signature from "../images/signature.svg"
import Overlay from "../images/header__overlay.svg"
import Nav from "./nav"
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const signature = (x, y) => `translate3d(${x / -175 }px,${y / -200}px,0) rotate(-5deg)`
const trans2 = (x, y) => `translate3d(${x / 85}px,${y / 1000}px,0) scale(1.1)`
const trans3 = (x, y) => `translate3d(${x / 100}px,${y / 50}px,0) scale(2) rotate(3deg)`
const trans4 = (x, y) => `translate3d(${x / 10 - 1}px,${y / 100}px,0) scale(2) rotate(-12deg) rotateY(180deg)`

function Header({currentPage, index}) {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 30, tension: 500, friction: 50 } }))
  let classes = `header header--${currentPage}`

  const classNames = () => {
    if (!index) {
      classes = classes.concat(" header--minimized")
    }
    return classes
  }

  return (
  <header 
    className={classNames()} 
    onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
  >
    <div className="grid content-wrap header__content">
      <animated.div className="header__signature-wrap" style={{ transform: props.xy.interpolate(signature) }}>
        <Link to="/" state={index ? {fromIndex: true, fromPage: false} : {fromIndex: false, fromPage: true}}>
          <Signature />
        </Link>
      </animated.div>
      <div className="header__nav-wrap">
        <Nav isIndex={index}/>
      </div>
    </div>
    <div className="header__overlay-wrap">
      <animated.div className="header__overlay header__overlay--2 header__overlay--animated" style={{ transform: props.xy.interpolate(trans3) }}>
        <Overlay />
      </animated.div>
      <animated.div className="header__overlay header__overlay--3 header__overlay--animated" style={{ transform: props.xy.interpolate(trans4) }}>
        <Overlay />
      </animated.div>
      <animated.div className="header__overlay header__overlay--1" style={{ transform: props.xy.interpolate(trans2) }}> 
        <Overlay />
      </animated.div>
    </div>
  </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
