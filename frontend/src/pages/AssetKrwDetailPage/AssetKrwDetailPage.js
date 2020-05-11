import React from 'react';
import { headerAssetDetailsMenu } from 'lib/variables';

import { Container } from 'reactstrap';
import PageTemplate from 'components/_templates/PageTemplate';
import AssetKrwDetailPageContainer from 'containers/AssetKrwDetailPageContainer';

const AssetKrwDetailPage = () => {
    return (
        <PageTemplate
            to='/assets'
            currentMenuTitle='asset'
            menuLists={headerAssetDetailsMenu}
        >
            <Container>
                <AssetKrwDetailPageContainer/>
            </Container>
        </PageTemplate>
    )
};

export default AssetKrwDetailPage;