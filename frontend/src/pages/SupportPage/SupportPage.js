import React from 'react';
import { headerSupportMenu, footerMenu } from 'lib/variables';
import { Route } from 'react-router-dom';

import { Container } from 'reactstrap';
import PageTemplate from 'components/_templates/PageTemplate';
import NoticeListPageContainer from 'containers/NoticeListPageContainer';
import NoticePageContainer from 'containers/NoticePageContainer';
import TermsContainer from 'containers/TermsContainer';

const SupportPage = () => {
    return (
        <PageTemplate
            currentMenuTitle='support'
            hiddenMenuLists={headerSupportMenu}
            pcSubMenu={footerMenu}
        >
            <Container>
                <Route path='/support/notices/:id' render={(props) => <NoticePageContainer {...props} title='공지사항' />} />
                <Route exact path='/support/notices' render={(props) => <NoticeListPageContainer {...props} title='공지사항' />} />
                <Route path='/support/terms' render={(props) => <TermsContainer {...props} title='이용약관' />} />
                <Route path='/support/fee' render={(props) => <TermsContainer {...props} title='수수료안내' />} />
                <Route path='/support/privacy' render={(props) => <TermsContainer {...props} title='개인정보처리방침' />} />
            </Container>
        </PageTemplate>
    )
};

export default SupportPage;