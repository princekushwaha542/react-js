import React from 'react'

const Navbar = (props) => {
    function ChangeTheme(){
      props.setTheme(props.theme === "light" ? "dark" : "light");
    }
  return (
    <div>
      <button onClick={ChangeTheme}>Toggle Theme</button>
    </div>
  )
}

export default Navbar
