import React, { Component } from 'react';
import { connect } from 'react-redux';

import FindPwSuccessForm from 'components/_base/FindPwSuccessForm';

class FindPwSuccessPageContainer extends Component {

    state = {
        code: 'asdf'
    }

    // 복사된 후 callback
    afterCopy = (txt, result) => {
        if(result) {
            this.props.dispatch({
                type: 'ALERT_OPEN',
                alertType: 'success',
                alertMsg: '복사되었습니다.'
            });
        }else {
            this.props.dispatch({
                type: 'ALERT_OPEN',
                alertType: 'danger',
                alertMsg: '복사에 실패하였습니다.'
            });
        }
    }

    render () {

        let { code } = this.state;

        return (
            <FindPwSuccessForm
                afterCopy={this.afterCopy}
                code={code}
            />
        )
    }
};

export default connect()(FindPwSuccessPageContainer);