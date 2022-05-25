import React from "react";

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>BP.</div>
        <nav>
          <ul>
            <li>
              <a href='/'>about</a>
            </li>
            <li>
              <a href='/'>skills</a>
            </li>
            <li>
              <a href='/'>projects</a>
            </li>
            <li className='btn'>
              <a href='/'>hire me</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
