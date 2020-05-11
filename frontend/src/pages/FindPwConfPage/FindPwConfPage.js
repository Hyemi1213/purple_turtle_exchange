import React from 'react';

import AuthInfo from 'components/_base/AuthInfo';
import { Container } from 'reactstrap';
import BeforeLoginTemplate from 'components/_templates/BeforeLoginTemplate';
import FindPwConfPageContainer from 'containers/FindPwConfPageContainer';

const FindPwConfPage = () => {
    return (
        <BeforeLoginTemplate
            currentMenuTitle='password setting'
            activeIdx={1}
        >
            <Container>
                <AuthInfo
                    title='인증코드 확인'
                    content={<span>입력하신 이메일로 인증코드를 발송했습니다.<br />이메일이 수신되지 않았다면 스팸메일함을 확인하세요.</span>}
                />
                <FindPwConfPageContainer/>
            </Container>
        </BeforeLoginTemplate>
    )
};

export default FindPwConfPage;