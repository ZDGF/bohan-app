import React, {Component} from 'react';

export default class NoMatch extends Component{
  constructor(props) {
	  super(props);
	}
  componentDidMount() {
    console.log('nomatch page');
  }
  render(){
    return(
      <div>
        没有找到对应的路由模块
      </div>
    )
  }
}