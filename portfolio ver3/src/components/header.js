import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState, useEffect} from "react"
import Signature from "../images/signature.svg"
import Overlay from "../images/header__overlay.svg"
import Nav from "./nav"
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const signature = (x, y) => `translate3d(${x / -175 }px,${y / -200}px,0) rotate(-5deg)`
const trans2 = (x, y) => `translate3d(${x / 85}px,${y / 1000}px,0) scale(1.1)`
const trans3 = (x, y) => `translate3d(${x / 100}px,${y / 50}px,0) scale(2) rotate(3deg)`
const trans4 = (x, y) => `translate3d(${x / 10 - 1}px,${y / 100}px,0) scale(2) rotate(-12deg) rotateY(180deg)`

function Header({currentPage}) {
  const [isIndex, setIsIndex] = useState(false)
  const [triggerResize, setTriggerResize] = useState(false)
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 30, tension: 500, friction: 50 } }))
  const toggleIsIndex = () => setIsIndex(!isIndex)
  const toggleTriggerResize = () => setTriggerResize(!triggerResize)
  useEffect(() => {
    if(currentPage === "/") {
      toggleIsIndex()
    }
  }, [])
  
  return (
    <header 
      className={isIndex ? "header header--animated header--full" : "header header--no-animate header--minimized"} 
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <div className="grid content-wrap header__content">
        <animated.div className="header__signature-wrap" style={isIndex ? { transform: props.xy.interpolate(signature) } : {}}>
          <Signature />
        </animated.div>
        <div className="header__nav-wrap">
          <Nav 
            currentPage={currentPage}
            isIndex={isIndex}
          />
        </div>
      </div>
      <div className="header__overlay-wrap">
        <animated.div className="header__overlay header__overlay--2 header__overlay--animated" style={{ transform: props.xy.interpolate(trans3) }}>
          <Overlay />
        </animated.div>
        <animated.div className="header__overlay header__overlay--3 header__overlay--animated" style={{ transform: props.xy.interpolate(trans4) }}>
          <Overlay />
        </animated.div>
        <animated.div className="header__overlay header__overlay--1" style={isIndex? { transform: props.xy.interpolate(trans2) } : {}}> 
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
