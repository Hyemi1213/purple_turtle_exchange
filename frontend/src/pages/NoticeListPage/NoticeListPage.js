import React from 'react';

import { Container } from 'reactstrap';
import PageTemplate from 'components/_templates/PageTemplate';
import PCPageTitle from 'components/_base/PCPageTitle';
import NoticeListPageContainer from 'containers/NoticeListPageContainer';

const NoticeListPage = () => {
    return (
        <PageTemplate>
            <Container>
                <PCPageTitle className={cx('pc-title')} title='공지사항' />
                <NoticeListPageContainer/>
            </Container>
        </PageTemplate>
    )
};

export default NoticeListPage;