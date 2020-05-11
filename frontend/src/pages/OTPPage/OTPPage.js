import React from 'react';

import { Container } from 'reactstrap';
import BeforeLoginTemplate from 'components/_templates/BeforeLoginTemplate';
import OTPPageContainer from 'containers/OTPPageContainer';

const OTPPage = () => {
    return (
        <BeforeLoginTemplate
            currentMenuTitle='otp'
            title="OTP"
            noLeftIcon={false}
            isTotalBG
        >
            <Container>
                <OTPPageContainer/>
            </Container>
        </BeforeLoginTemplate>
    )
};

export default OTPPage;