import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import TermsForm from 'components/_base/TermsForm';

class TermsContainer extends Component {

    state = {
        pcPageTitle: ''
    }

    componentDidMount(){

        let { title } = this.props;

        this.setState({
            pcPageTitle: title
        })
    }

    render () {

        let { pcPageTitle } = this.state;

        return (
            <TermsForm
                pcPageTitle={pcPageTitle}
            />
        )
    }
};

export default withRouter(TermsContainer);