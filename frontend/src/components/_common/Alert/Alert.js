import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Alert.scss';
import classNames from 'classnames/bind';
import { Alert as BAlert } from 'reactstrap';

const cx = classNames.bind(styles);

// store, base.alertVisible을 통해 alert true/false를 조절한다
class Alert extends Component {

    // alert X버튼 눌렀을 때
    dismiss = () => {
        this.props.dispatch({
            type: 'ALERT_CLOSE'
        });
    }

    // alert true된 후 자동으로 사라지기
    componentDidUpdate(prevState) {
        const { alertVisible } = this.props.base;
        if(prevState.base.alertVisible !== alertVisible) {
            if(alertVisible) {
                setTimeout(this.dismiss, 1500)
            }
        }
    }

    render() {
        const { base } = this.props;
        return (
            <BAlert
                color={base.alertType}
                isOpen={base.alertVisible}
                toggle={this.dismiss}
                className={cx('custom-alert',  base.alertType === 'success' ? 'custom-success' : null, base.alertType === 'danger' ? 'custom-danger' : null, base.alertType === 'warning' ? 'custom-warning' : null)}
            >
                {base.alertMsg}
            </BAlert>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        base: state.base
    }
}

export default connect(mapStateToProps)(Alert);