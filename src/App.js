import logo from './img/logo.svg';
import banner from './img/screen-mockups.svg';
import pepleIcon from './img/icon-communities.svg';
import messages from './img/icon-messages.svg';
import disktop from './img/bg-section-top-desktop-1.svg';
import disktopm from './img/illustration-grow-together.svg';
import disktopbottom from './img/bg-section-bottom-desktop-1.svg';
import bannerbottom from './img/illustration-flowing-conversation.svg';
import bannerbot from './img/bg-section-top-desktop-1.svg';
import brand from './img/illustration-grow-together.svg';
import brandbottm from './img/bg-section-bottom-desktop-1.svg';
import './style/main.css'

function App() {
  return (
    <>
    <div class="container">
        <div class="header-block">
            <img src={logo} height="20px" alt="BMW" />
            <button class="btn-trynow">
                Try now
            </button>
            <div class="build-block">
                <h1>Build the community your fans will love</h1>
                <br/>
                <div class="row justify-content-center">
                    <div class="col-10 col-sm-8">
                        <div class="para-section">
                            <span>huddle re-images the way we build communities. you have

                                voice,but so doed your
                                audience.creatre
                                connections with ur users are you engage in genuine discussion.</span>
                            <br/>
                            <br/>
                            <button class="but-start py-2 px-5">
                                get start for free
                            </button>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
            </div>
        </div>
      </div>

      <section class="container">
        <img class="w-100" src={banner} loading="lazy"  alt="banner"/>
       </section>
       <br/><br/>
      <section class="container">
        <div class="row">
            <div class="col-12 col-sm-6 col-md-6">
                <div class="number-card">
              <img src={pepleIcon} alt='imgpop'/>
                    <h1>1.4k+</h1>
                    <p>comminuties form</p>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-md-6">
                <div class="number-card">
              <img src={messages} alt='imgpop'/>
                    <h1>2.7m+</h1>
                    <p>message sent</p>
                </div>
            </div>
        </div>
    </section>
      
    <div>
        <img class="w-100" src={disktop} alt='imgpop'/>
        <section class="sec-4">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-6">
                        <h1>Grow Together</h1>
                        <p style={{color:'black'}}>Generate meaningful discussion with your audience and build a storng, loyal communities.</p>
                    </div>
                    <div class="col-12 col-sm-6 col-md-6">
                <img class="w-100" src={disktopm} alt='imgpop'/>
                    </div>
                </div>
            </div>
        </section>
        <img class="w-100" src={disktopbottom} alt='imgpop'/>
      </div>
      
      <div class="my-5">
        <section class="sec-4" style={{ backgroundColor:'white'}}>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-6">
                <img class="w-100" src={bannerbottom} alt="banerimage"/>
                    </div>
                    <div class="col-12 col-sm-6 col-md-6">
                        <h1>flowring conservation</h1>
                        <p style={{color:'black'}}>you wouldn' paginate a conservation in real life,so why do it online?.</p>
                    </div>

                </div>
            </div>
        </section>
          </div>
          
          <div>
              <img class="w-100" src={bannerbot} alt="banerimage"/>
        <section class="sec-4">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-6">
                        <h1>Your users</h1>
                              <p style={{color:'black'}}>Generate meaningful discussion with your audience and build a storng, loyal communities.</p>
                    </div>
                    <div class="col-12 col-sm-6 col-md-6">
                              <img class="w-100" src={brand} alt="logo"/>
                    </div>
                </div>
            </div>
        </section>
              <img src={brandbottm} alt="banerimage"/>
    </div>

    </>
  );
}



export default App;
