import './sideNav.scss';

const SideNav = () => {
  return (
    <nav className =" navbar-v nav-bg ">
      <h3 className = "text-white text-center mt-1"> Leonardo Castillo </h3>
      <h4 className = "text-white text-semigray text-center mt-1">Full-Stack Developer</h4> 
      <ul className ="list-style-none border nav-menu mt-1">
        <li className ="mt-1 text-center"><a href="#home" className ="nav-item text-white">Home</a></li>
        <li className ="mt-1 text-center"><a href="#about" className ="nav-item text-white">About</a></li>
        <li className ="mt-1 text-center"><a href="#skills" className ="nav-item text-white">Skills</a></li>
        <li className ="mt-1 text-center">
          <a href="#projects" className ="nav-item text-white">Projects</a>
        </li>
        <li className ="mt-1 text-center">
          <a href="#contact"  className ="nav-item text-white">Contact</a>
        </li>
      </ul> 
    </nav>
  );
}

export default SideNav;