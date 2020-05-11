import React, { Component } from 'react';
import { connect } from 'react-redux';

import BGColour from 'components/_common/BGColour';
import DeleteStatus from 'components/_base/DeleteStatus';

class DeleteStatusPageContainer extends Component {

    componentDidMount() {
    }

    clickNotToDelete = () => {
    }

    render () {

        let { isSuccess } = this.props;
        let { userEmail } = this.props.user;

        return (
            <>
                <BGColour />
                <DeleteStatus
                    isSuccess={isSuccess}
                    userEmail={userEmail}
                    clickNotToDelete={this.clickNotToDelete}
                />
            </>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(DeleteStatusPageContainer);