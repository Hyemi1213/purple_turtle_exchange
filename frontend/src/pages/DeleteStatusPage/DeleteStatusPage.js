import React from 'react';

import { Container } from 'reactstrap';
import PageTemplate from 'components/_templates/PageTemplate';
import DeleteStatusPageContainer from 'containers/DeleteStatusPageContainer';

const DeleteStatusPage = () => {
    return (
        <PageTemplate>
            <Container>
                <DeleteStatusPageContainer/>
            </Container>
        </PageTemplate>
    )
};

export default DeleteStatusPage;