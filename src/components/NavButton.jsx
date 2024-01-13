import React from "react"



function NavButton(props) {

  return (
    <a
      aria-label={props.label}
      href={props.id}>
      {props.content}
    </a>

  )
}

export default NavButton
