import React from "react"
import { Link } from "gatsby"

export default () => {
  return (
    <div style={{ color: `purple` }}>
      <h1>Hello Gatsby!</h1>
      <p>What a world.</p>
      <Link to="/about/">About</Link>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}
