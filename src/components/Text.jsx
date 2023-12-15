import Typewriter from 'typewriter-effect';
import Avatar from './Avatar';
import React from "react";

function Text() {
  return (
    <div className='Text'>
      <h1>STOCLET Sylvain </h1><h2>
      <Typewriter 
      wrapperClassName='Typewriter__wrapper'
  options={{
    strings: [
      'Développeur Web ',
      'Front end',
      'Sérieux', 
      'Passionné'
    ],
    autoStart: true,
    loop: true,
  }}
/></h2>
<Avatar/>
    </div>
  );
};

export default Text
