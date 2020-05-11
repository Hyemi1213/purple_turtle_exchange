import React from 'react';

import { Container } from 'reactstrap';
import PageTemplate from 'components/_templates/PageTemplate';
import AssetKrwSuccessPageContainer from 'containers/AssetKrwSuccessPageContainer';

const AssetKrwSuccessPage = () => {
    return (
        <PageTemplate
            currentMenuTitle='asset'
            to='/assets/krw'
        >
            <Container>
                <AssetKrwSuccessPageContainer/>
            </Container>
        </PageTemplate>
    )
};

export default AssetKrwSuccessPage;