import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './Home.less';

class Home extends Component {
	constructor(props) {
	  super(props);
	}
	componentDidMount(){
		console.log('home page loaded');
	}
	render() {
	  return (
      <div className={styles.homeWrap}>
        home page
      </div>
	  )
	}
}

export default CSSModules(Home, styles);