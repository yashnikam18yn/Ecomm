import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Footer() {
  return (
    <div class='footer_body'>
    <footer class="footer">
  <div class="footer__addr">
    <h1 class="footer__logo">E-Comm</h1>
        
    <h2>Contact</h2>
    
    <address>
      5534 Omkar Patil 9021575657<br></br>
          
      <a class="footer__btn" href="mailto:example@gmail.com">Email Us</a>
    </address>
  </div>
  
  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title">Media</h2>

      <ul class="nav__ul">
        <li>
          <a href="/">Online</a>
        </li>

        <li>
          <a href="/">Print</a>
        </li>
            
        <li>
          <a href="/">Alternative Ads</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item nav__item--extra">
      <h2 class="nav__title">Technology</h2>
      
      <ul class="nav__ul nav__ul--extra">
        <li>
          <a href="/">Bootstrap</a>
        </li>
        
        <li>
          <a href="/">React js</a>
        </li>
        
        <li>
          <a href="/">Node js</a>
        </li>
        
        <li>
          <a href="/">Express</a>
        </li>
        
        <li>
          <a href="/">Mongodb Compass</a>
        </li>
        
        <li>
          <a href="/">HTML,css,JavaScript</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item">
      <h2 class="nav__title">Legal</h2>
      
      <ul class="nav__ul">
        <li>
          <a href="/">Privacy Policy</a>
        </li>
        
        <li>
          <a href="/">Terms of Use</a>
        </li>
        
        <li>
          <a href="/">Sitemap</a>
        </li>
      </ul>
    </li>
  </ul>
  
  <div class="legal">
    <p>&copy; 2023 E-Comm. All rights reserved.</p>
    
    <div class="legal__links">
      <span>Made By <span class="heart">♥</span> Omkar Patil </span>
    </div>
    <div class="legal__links">
    <a href="/"><WhatsAppIcon/></a> 
    </div>
    <div class="legal__links">
    <a href="/"><FacebookIcon/></a> 
    </div>
    <div class="legal__links">
    <a href="/"><TwitterIcon/></a> 
    </div>
    <div class="legal__links">
    <a href="/"> <InstagramIcon/></a>   
    </div>
  </div>
</footer>
</div>
  )
}
