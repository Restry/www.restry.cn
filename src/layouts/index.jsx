import React from 'react';
import { useStore } from '../store';
// import { connect } from "react-redux";
import Helmet from 'react-helmet';
import { Switch, Route, useParams, useLocation } from 'react-router-dom'
import Index from '../pages/index.jsx';
import Contact from '../pages/contact';
import Playground from '../pages/playground';

import '../scss/main.scss';
require("typeface-exo");
require("typeface-roboto");

import ActionButtonContainer from '../containers/ActionButtonContainer';
import RemarkScreenContainer from '../containers/RemarkScreenContainer';

import MainFooter from '../components/MainFooter';
import MainHeader from '../components/MainHeader';

const DefaultLayout = (props) => {

  let params = useParams();
  let location = useLocation();
  console.log(`useLocation:${location}`, params, location);

  const [{ remarkScreen }, dispatch] = useStore();
  const toggleScreen = () => dispatch({ type: 'TOGGLE_REMARK_SCREEN' });

  return (
    <div className="l-page-wrapper">
      <Helmet
        title="I am a front-end developer"
        meta={[{
          name: 'description',
          content: `I build web interfaces using: JavaScrip, ES2015, Babel, HTML5, CSS, CSS3, BEM, React, Gatsby, Webpack ...`
        }]}
      />

      <div className={`l-page-container ${remarkScreen.isActive && 'is-blurred'}`}>
        <MainHeader />
        <main className="l-main">


          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/contact" component={Contact} />
            <Route path="/playground/:id" component={Playground} />
          </Switch>

        </main>
        <MainFooter />
      </div>

      {
        (location.pathname === '/'
          || location.pathname === '/contact/')
        &&
        <ActionButtonContainer
          remarkScreenIsActive={remarkScreen.isActive}
          buttonClickHandler={toggleScreen}
          locationPathName={location.pathname}
        />
      }
      <RemarkScreenContainer
        locationPathName={location.pathname}
      />

    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return { remarkScreenisActive: state.remarkScreen.isActive };
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

export default DefaultLayout;
// export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);

