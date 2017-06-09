import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './Login.less';

class Login extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount() {
    console.log('login page loaded');
  }
  render(){
    return(
      <div className={styles.loginPage}>
        login page ....
      </div>
    )
  }
}

export default CSSModules(Login,styles);