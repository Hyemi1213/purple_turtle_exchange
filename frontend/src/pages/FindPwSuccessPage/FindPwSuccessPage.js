import React from 'react';

import AuthInfo from 'components/_base/AuthInfo';
import { Container } from 'reactstrap';
import BeforeLoginTemplate from 'components/_templates/BeforeLoginTemplate';
import FindPwSuccessPageContainer from 'containers/FindPwSuccessPageContainer';

const FindPwSuccessPage = () => {
    return (
        <BeforeLoginTemplate
            currentMenuTitle='password setting'
            activeIdx={2}
        >
            <Container>
                <AuthInfo
                    title='임시 비밀번호 발급 완료'
                    content={<span>발급된 비밀번호는 임시 비밀번호입니다.<br /><span style={{ color: '#FF6060', fontWeight: 600}}>로그인 후 꼭 비밀번호를 변경</span>하세요.</span>}
                />
                <FindPwSuccessPageContainer/>
            </Container>
        </BeforeLoginTemplate>
    )
};

export default FindPwSuccessPage;