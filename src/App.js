import './App.css';
import logo from './colorfol artists.png';
import hc1 from './nathaniel-tetteh-aIpJEcdLdoo-unsplash.jpg';
import hc2 from './obafemi-moyosade-zndslHAXhAw-unsplash.jpg';
import hc3 from './muhammadtaha-ibrahim-ma-aji-8ic8qXFglYg-unsplash.jpg';
import sp1 from "./et.jpg"
import sp2 from "./smmd.jpg";
import sp3 from "./balazs-ketyi-6ba_vdgx_go-unsplash (1).jpg"
import mn from "./musical-notes-sharp.svg"

import tlogo from './Coloforllogo.png'
import IconButton from './components/iconbutton';
import ps from './logo-google-playstore.svg'
import as from './logo-apple-appstore.svg'
import wb from './laptop-outline.svg'

function App() {
  return (
 <main>
    <div data-scroll>
  <div class="hc">
    <div class="nav">
      <span class="nav-logo"><img src={logo}/></span>
      <ul class="ac">
        <li><a>Events</a></li>
        <li><a>Télécharger</a></li>
        <li><a>Se conneter</a></li>
      </ul>
    </div>
    
    
    
    
    
        <div class="hs">
          <img src={mn} class="hv"/>
          <div class="lhc">
          <h2>Rejoignez des milliers de voix qui partagent le même talent</h2>
          <a><div class="fcta">Premiers pas</div></a>
        </div>  
           <div class="rhc">
          <div class="hrc hc1"><img src={hc1}/></div>
          <div class="hrc hc2"><img src={hc2}/></div>
          <div class="hrc hc3"><img src={hc3}/></div>
        </div>
  </div>

        </div>


   
<h2 class="sbt">Nos objectifs</h2>
<section class="bs">
      <div class="bsb">
        <div class="tc">
          <h3>Exposez votre talent aux yeux du monde</h3>
          <a>Distribute your podcast to the most popular listening apps, including Spotify with just a single tap—and host unlimited content completely free, forever.</a>
        </div>
        <img src={sp1}/>
        <div class="psd"></div>
      </div>
    </section>
    <section class="bs">
      <div class="bsb">
        <img src={sp2} />
        <div class="psd"></div>
        <div class="tc">
          <h3>Monetizer votre contenus</h3>
          <a>Distribute your podcast to the most popular listening apps, including Spotify with just a single tap—and host unlimited content completely free, forever.</a>
        </div>
      </div>
    </section>

    <section class="bs">
      <div class="bsb">
        <div class="tc">
          <h3>Accompagner vos prise de décisions</h3>
          <a>Distribute your podcast to the most popular listening apps, including Spotify with just a single tap—and host unlimited content completely free, forever.</a>
        </div>
        <img src={sp3} />
        <div class="psd"></div>
      </div>
    </section>

    <div className='scta'>
  <h3 className='create-h3'>Pret à laisser le monde savourer votre talent via Colorfol Artist ?</h3>
  <span className='secta'>Ajoutez votre contenus</span>
</div>

    <div className='footer'>
<span className='ftr-logo'><img src={tlogo} alt="floatings-icons" width='148' height='72'/></span>
<ul className='ftr-content'>
  <li><h3>Services</h3></li>
  <li><a>Streaming Musique et Podcasts</a></li>
  <li><a>Streaming Video</a></li>
  <li><a>Events</a></li>
  <li><a>Network Musical</a></li>
  <li><a>Reviews</a></li>
</ul>

<ul className='ftr-content'>
  <li><h3>Contacts</h3></li>
  <li><a>contact@colorfol.com</a></li>
  <li><a>(+237) 650 26 26 35</a></li>
  <li><a>Akwa - Douala - Cameroun</a></li>
  <li><a>Network Musical</a></li>
  <li><a> </a></li>
  <li><a> </a></li>
</ul>

<ul className='ftr-content'>
  <li><h3>Obtenez l'app</h3></li>
  <li>
  <IconButton title='Play Store' icon={ps}/>
      </li>
      <li>
      <IconButton title='Apple Store' icon={as}/>
     </li>
     <li>
     <IconButton title='Web player' icon={wb}/>
     </li>
</ul>
</div>



      </div>
  {/*</div>*/}
  </main>  
  );
}

export default App;
