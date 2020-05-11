import React, { Component } from 'react';
import styles from './Dimmer.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

//형태
// <Dimmer onClick={클릭이벤트} className={클래스}/>

class Dimmer extends Component {
  componentDidMount() {
    // hides scroll-y
    document.body.style.overflowY = 'hidden';
  }  

  componentWillUnmount() {
    // shows scroll-y
    document.body.style.overflowY = 'auto';
  }
  
  render() {
    const { onClick, className, backgroundColour, ...rest } = this.props;
    
    return (
     
        <div
          onClick={onClick}
          className={cx('dimmer', className)}
          style={{ background: backgroundColour}}
          {...rest}
        >
        </div>
      
    )
  }

}

export default Dimmer;