import React from "react"

export default ({
  children,
  padding,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  paddingHorizontal,
  paddingVertical,
}) => {
  if (paddingHorizontal) {
    paddingLeft = paddingHorizontal
    paddingRight = paddingHorizontal
  }

  if (paddingVertical) {
    paddingTop = paddingVertical
    paddingBottom = paddingVertical
  }
  return (
    <div
      style={{
        padding,
        paddingLeft,
        paddingRight,
        paddingTop,
        paddingBottom,
      }}
    >
      {children}
    </div>
  )
}
