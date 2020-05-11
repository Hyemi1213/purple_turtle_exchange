import React from 'react';

import AuthInfo from 'components/_base/AuthInfo';
import { Container } from 'reactstrap';
import BeforeLoginTemplate from 'components/_templates/BeforeLoginTemplate';
import FindPwPageContainer from 'containers/FindPwPageContainer';

const FindPwPage = () => {
    return (
        <BeforeLoginTemplate
            currentMenuTitle='password setting'
            activeIdx={0}
        >
            <Container>
                <AuthInfo
                    title='비밀번호 재설정'
                    content='회원가입에 사용하신 이메일을 입력해주세요.'
                />
                <FindPwPageContainer/>
            </Container>
        </BeforeLoginTemplate>
    )
};

export default FindPwPage;