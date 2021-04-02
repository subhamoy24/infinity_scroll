import React from 'react';
import styled from 'styled-components';

// const Input = styled.input`
//   height: 2.5rem;
//   width: 20rem;
//   margin-top: 1em;
//   outline: none;
//   text-indent: 1em;
//   font-size: 1em;

//   ::placeholder {
//     font-size: .8em;
//   }
// `;

// const Button = styled.button`
//   height: 2.5rem;
//   padding: 0 1em;
//   outline: none;
//   cursor: pointer;
//   background: #222;
//   border: none;
//   color: #fff;
//   font-size: 1em;
// `;

export const Heading = () => {

  return (
    <header className="header-section">
<div className="container">
<div class="row">
<div class="col-lg-4 col-md-3">
<div class="logo">
<h2 class="site-logo">Riddle</h2>
</div>
</div>
<div class="col-lg-8 col-md-9">
<a href="" class="site-btn header-btn">Get in touch</a>
</div>
</div>
</div>
</header>
  )
}
