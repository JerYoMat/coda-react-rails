import React from 'react';

const Logo = ({
  width='60px',
  className = 'app-logo',
  height='65px',
  viewBox = '0 -5.5 32 32',
}) =>
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g id='top-left'>
  <path d="M0.513184,13.2156L0.54834,12.5166L4.55835,12.4785C4.84717,8.28442,7.67236,5.20239,11.5413,4.47046L11.5493,0.508545C11.8704,0.508545,11.7593,0.514404,12.1033,0.514404L12.0862,13.0854Z
  M11.5364,5.32544C8.82837,6.17944,8.44434,10.7385,8.39526,12.3965L11.4343,12.4146Z"/>
</g>
<g id='top-right'>
  <path d="M23.4873,13.2156C23.4722,11.6836,23.4521,13.9236,23.4521,12.5166L19.4412,12.4785C19.1523,8.28442,16.3284,5.20239,12.4592,4.47046L12.4502,0.508545L11.8972,0.514404L11.9143,13.0854C15.8943,13.0854,19.4082,13.2156,23.4873,13.2156Z
  M12.4644,5.32544C15.1724,6.17944,15.5552,10.7385,15.6052,12.3965L12.5662,12.4146Z"/>
</g>
<g id='bottom-left'>
  <path d="M0.512939,12.7876C0.528076,14.3196,0.548096,12.0796,0.548096,13.4866L4.55811,13.5247C4.84692,17.7188,7.67212,20.8008,11.541,21.5327L11.5491,25.4946L12.103,25.4888L12.0859,12.9177Z
  M11.5361,20.6777C8.82813,19.8237,8.44409,15.2646,8.39502,13.6067L11.4341,13.5886Z"/>
</g>
<g id='bottom-right'>
<path d="M23.4871,12.7876L23.4519,13.4866L19.4409,13.5247C19.1521,17.7188,16.3281,20.8008,12.459,21.5327L12.45,25.4946L11.897,25.4888L11.9141,12.9177C15.894,12.9177,19.408,12.7876,23.4871,12.7876Z
M12.4641,20.6777C15.1721,19.8237,15.5549,15.2646,15.605,13.6067L12.5659,13.5886Z"/>
</g>
</svg>

export default Logo;
