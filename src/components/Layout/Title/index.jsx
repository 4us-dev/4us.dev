import React from "react"
import Padding from "../../Padding"

export default function Header({ children }) {
  return (
    <Padding paddingVertical={10}>
      <h1>{children}</h1>
    </Padding>
  )
}
