import React from 'react';
import FooterBottom from './footer-bottom';
import FooterTop from './footer-top';


const Footer:React.FC = () => {
  return (
    <div className='footer'>
      <div className="footerbg">
            <FooterTop />
      </div>
      <FooterBottom />
    </div>
  )
}

export default Footer;



