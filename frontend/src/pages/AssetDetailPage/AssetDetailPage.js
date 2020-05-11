import React from 'react';
import { headerAssetDetailsMenu } from 'lib/variables';

import { Container } from 'reactstrap';
import PageTemplate from 'components/_templates/PageTemplate';
import AssetDetailPageContainer from 'containers/AssetDetailPageContainer';

const AssetDetailPage = () => {
    return (
        <PageTemplate
            to='/assets'
            currentMenuTitle='asset'
            menuLists={headerAssetDetailsMenu}
        >
            <Container>
                <AssetDetailPageContainer/>
            </Container>
        </PageTemplate>
    )
};

export default AssetDetailPage;