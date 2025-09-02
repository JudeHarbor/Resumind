//
// import type { JSX } from 'react';
//
// const Navbar: () => JSX.Element = () =>{
//   return (
//     <div>Navbar</div>
//   )
// }
//
// export default Navbar


import { Link } from 'react-router';
import type { JSX } from 'react';

const Navbar: () => JSX.Element = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <p className="text-2x1 font-bold text-gradient">
          RESUMIND
        </p>
      </Link>
      <Link to="/upload" className="primary-button w-fit">
        Upload Resume
      </Link>
    </nav>
  )
}

export default Navbar