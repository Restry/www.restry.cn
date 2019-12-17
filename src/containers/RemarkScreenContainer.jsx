import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
import { useStore } from '../store';

import { toggleRemarkScreen } from '../state/actions';
import RemarkScreen from '../components/RemarkScreen';

const RemarkScreenContainer = (props) => {

  // componentDidMount() {
  //   this.initializeEscClosing();
  // }

  const [{ remarkScreen }, dispatch] = useStore();
  const toggleScreen = () => dispatch({ type: 'TOGGLE_REMARK_SCREEN' });

  const initializeEscClosing = () => {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', (e) => {
        if (remarkScreen.isActive && e.which == 27) {
          toggleScreen();
        }
      });
    }
  }

  useEffect(() => {
    initializeEscClosing();

    return () => window.removeEventListener('keydown', () => { });
  }, [remarkScreen])


  return (
    <div>
      <RemarkScreen
        isActive={remarkScreen.isActive}
        locationPathName={props.locationPathName}
        onClick={toggleScreen}
      />
      {remarkScreen.isActive && <div
        onClick={toggleScreen}
        className="c-remark-screen-overlay"
      >
      </div>}
    </div>
  )

}

const mapStateToProps = (state, ownProps) => {
  return { isActive: state.remarkScreen.isActive };
}

const mapDispatchToProps = (dispatch) => {
  return { toggleScreen: () => dispatch(toggleRemarkScreen()) };
}

export default RemarkScreenContainer;
// export default connect(mapStateToProps, mapDispatchToProps)(RemarkScreenContainer);
