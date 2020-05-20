import React from 'react';
import { useStore } from '../store';
// import { connect } from "react-redux";
import Helmet from 'react-helmet';
import { Switch, Route, useParams, useLocation } from 'react-router-dom'
import Index from '../pages/index.jsx';
import Contact from '../pages/contact';
import Playground from '../pages/playground';
import Book from '../pages/book';
import Doc from '../pages/doc';
import ToolBox from '../pages/toolbox';


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
  // console.log(`useLocation:${location}`, params, location);

  const [{ remarkScreen }, dispatch] = useStore();
  const toggleScreen = () => dispatch({ type: 'TOGGLE_REMARK_SCREEN' });

  return (
    <div className="l-page-wrapper">
      <Helmet
        title="程序设计助手小工具(Restry)"
        meta={[{
          name: 'description',
          content: `程序设计助手小工具 支持: JavaScrip, ES2015, Babel, HTML5, CSS, CSS3, BEM, React, Gatsby, Webpack ...`
        }]}
      />

      <div className={`l-page-container ${remarkScreen.isActive && 'is-blurred'}`}>
        <MainHeader />
        <main className="l-main">


          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/contact" component={Contact} />
            <Route path="/toolbox" component={ToolBox} />
            
            <Route path="/playground" component={Playground} />
            <Route path="/book/:id" component={Book} />
            <Route path="/doc/:bookId/:id" component={Doc} />
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

