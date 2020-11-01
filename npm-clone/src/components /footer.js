import React from 'react'
import npm2 from './images/npm2.jpg'

const Footer = () => {
  return (
    <div className="footerTotal">
      <img className='footerImg' src={npm2} alt="npm"/>
      <div className="footerContainer">

      <div className="FooterHeadings">
        <p className='footH1'>Support</p>
        <p className='footP'>Help</p>
        <p className='footP'>Community</p>
        <p className='footP'>Advisories</p>
        <p className='footP'>Status</p>
        <p className='footP'>Contact npm</p>
      </div>

      <div className="FooterHeadings">
        <p className='footH1'>Company</p>
        <p className='footP'>About</p>
        <p className='footP'>Blog</p>
        <p className='footP'>Press</p>
      </div>

      <div className="FooterHeadings">
        <p className='footH1'>Terms & Policies</p>
        <p className='footP'>Policies</p>
        <p className='footP'>Terms of Use</p>
        <p className='footP'>Code of Conduct</p>
        <p className='footP'>Privacy</p>
      </div>
</div>
    </div>
    );
}
export default Footer;