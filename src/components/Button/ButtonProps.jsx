import React from 'react'

const ButtonProps = ({classButton, title , href}) => {
  return (
    <button className={`${classButton}`}>
      <a href={href} className=''>{title}</a>
    </button>
  )
}

export default ButtonProps
