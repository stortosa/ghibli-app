import React from 'react';

const date = new Date().getFullYear();

const Footer = () => (  
<footer><p className="mt-4 p2 text-center">Todos los derechos reservados &copy; {date}</p>
  </footer>
)

export default Footer;