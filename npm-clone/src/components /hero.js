import React from 'react'

const Hero = () => {
  return (
    <>
    <Section1 />
     <Section2 />
     <Section3 />
     <Section4 />
     </>
    );
}
 
const Section1 = () => {
  return (
    <div className='heroContainer'>
      <h1 className='h1Hero'>Build amazing things</h1>
      <p className='heroSmallTxt'>We're npm, Inc., the company behind Node package manager, the npm Registry, and npm CLI. We offer those to the community for free, but our day job is building and selling useful tools for developers like you.</p>
      <h2 className='h2Hero'>Take your JavaScript development up a notch</h2>
      <p className='heroSmallTxt'> Get started today for free, or step up to npm Pro to enjoy a premium JavaScript development experience, with features like private packages.</p>
      <button type='button' className="heroBtn">Sign up for free</button>
      <button type='button' className="heroBtn">Learn about pro</button>
    </div>  
    );
}

const Section2 = () => {
  return (
    <div className='heroContainer2'>
      <img className='heroImg' src="https://static.npmjs.com/attachments/ck3uweazy72ye8874y9kkxnx1-gak.png" alt="blob"/>
      <h2 className='h2HeroAlt'>Bring the best of open source to you, your team, and your company</h2>
      <p className='heroSmallTxtAlt'>Relied upon by more than 11 million developers worldwide, npm is committed to making JavaScript development elegant, productive, and safe. The free npm Registry has become the center of JavaScript code sharing, and with more than one million packages, the largest software registry in the world. Our other tools and services take the Registry, and the work you do around it, to the next level.</p>
    </div>  
    );
}

const Section3 = () => {
  return (
    <div className='heroContainer3'>
      <h2 className='h2Hero3'>We ❤ open source</h2>
      <p className='heroSmallTxtAlt'>At npm, Inc., we're proud to dedicate teams of full-time employees to operating the npm Registry, enhancing the CLI, improving JavaScript security, and other projects that support and nurture a vibrant open source community.</p>
    </div>  
    );
}

const Section4 = () => {
  return (
    <div className='heroContainer2'>
      <h2 className='h2HeroAlt'>Gratefully serving everyone from solo devs to the Fortune 500</h2>
      <img className='heroImg4' src="https://static.npmjs.com/attachments/ck49cu3ceh1sust74dkzkfn69-grey-logowall.png" alt="companies we serve"/>
    </div>  
    );
}

export default Hero;
