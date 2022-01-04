import React from 'react';
import './style/App.scss';

// Components
import DesktopNav from './components/navbar/desktop-nav';
import MobileNav from './components/navbar/mobile-nav';
import Backdrop from "./components/navbar/backdrop";
import Welcome from './components/welcome/welcome';
import Product from "./components/product/product";
import Banner from './components/banner/banner'
import Partners from "./components/partners/partners";
// import Team from "./components/team/team";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer"
import Constants from "./constants/screen-width"
// import 'bootstrap/dist/css/bootstrap.min.css';
 
class App extends React.Component {
  state = {
    userIsScrolled: false,
    mobileNavbarOpen: false,
    isMobileMode: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.userIsScrolled);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.userIsScrolled)
  }
  componentWillMount(){
    this.setScreenMode()
  }

  setScreenMode(){
    if (window.screen.width > Constants.medium){
      this.setState({isMobileMode: false})
    } else {
      this.setState({isMobileMode: true})
    }
  }

  // Detect if user is scorlled down (used for add/disable extra large navbar)
  userIsScrolled = () => {
    if (window.pageYOffset > 80) {
      this.setState({ userIsScrolled: true });
    } else {
      this.setState({ userIsScrolled: false });
    }
  }
  // On closeMobileMenu click close navbar
  closeMobileMenu = () => {
    this.setState({ mobileNavbarOpen: false });
  }
  // Mobile menu handler
  mobileMenuOpen = () => {
    this.setState({ mobileNavbarOpen: true });
  }



  render() {

    // BACKDROP RENDER
    let backdrop = <Backdrop closeMobileMenu={this.closeMobileMenu} />;
    if (this.state.mobileNavbarOpen) {
      backdrop = (
        <Backdrop closeMobileMenu={this.closeMobileMenu} isOpen={true} />
      )
    }
    // MOBILE NAVBAR RENDER
    let mobileNavbar = <MobileNav />;
    if (this.state.mobileNavbarOpen) {
      mobileNavbar = (
        <MobileNav isOpen={true} closeMobileMenu={this.closeMobileMenu} />
      )
    }
    return (
      <div className="App">
        {mobileNavbar}
        {backdrop}
        <DesktopNav
          userIsScrolled={this.state.userIsScrolled}
          mobileMenuOpen={this.mobileMenuOpen}
          isMobileMenuOpen={this.state.mobileNavbarOpen}
        />
        <Banner 
          userIsScrolled={this.state.userIsScrolled}
          isMobileMode={this.state.isMobileMode}
        />
        <Product />
        {/* <Partners /> */}
        {/* <Welcome /> */}
        <About />
        {/* <Team /> */}
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
