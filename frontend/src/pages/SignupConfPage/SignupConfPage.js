import React from 'react';

import AuthInfo from 'components/_base/AuthInfo';
import BeforeLoginTemplate from 'components/_templates/BeforeLoginTemplate';
import SignupConfPageContainer from 'containers/SignupConfPageContainer';

const SignupConfPage = () => {
    return (
        <BeforeLoginTemplate
            currentMenuTitle='sign up'
            activeIdx={1}
        >
            <AuthInfo
                title='인증코드 확인'
                content={<span>입력하신 이메일로 인증코드를 발송했습니다.<br/>이메일이 수신되지 않았다면 스팸메일함을 확인하세요.</span>}
            />
            <SignupConfPageContainer/>
        </BeforeLoginTemplate>
    )
}

export default SignupConfPage