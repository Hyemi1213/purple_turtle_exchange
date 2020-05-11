import React from 'react';
import { headerExMenu } from 'lib/variables';

import { Container } from 'reactstrap';
import PageTemplate from 'components/_templates/PageTemplate';
import TradeDetailPageContainer from 'containers/TradeDetailPageContainer';

const TradeDetailPage = () => {
    return (
        <PageTemplate
            currentMenuTitle='exchange'
            menuLists={headerExMenu}
            to='/trade'
        >
            <Container>
                <TradeDetailPageContainer/>
            </Container>
        </PageTemplate>
    )
};

export default TradeDetailPage;