import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './WarningOfIE.scss';

import CustomModal from 'components/_base/CustomModal';
import Button from 'components/_common/Button';

const cx = classNames.bind(styles);

class WarningOfIE extends Component {

    state = {
        isOpen: true
    }

    onClose = () => {
        this.setState({
            isOpen: false
        })
    }

    render() {

        let { isOpen } = this.state;

        return(
            <CustomModal
                isOpen={isOpen}
                toggle={this.onClose}
                onClose={this.onClose}
                clickToSubmit={this.onClose}
                title='안내'
                noCancelBtn
                submitBtnText='확인'
                colour3
            >
                <div className={cx('wrapper')}>
                    <a className={cx('link')} href='https://www.google.com/intl/ko/chrome/' target='_blank'>Chrome 브라우저</a>에서 가장 원활하게 사이트 이용이 가능합니다.
                </div>
            </CustomModal>
        )
    }
}

export default WarningOfIE;