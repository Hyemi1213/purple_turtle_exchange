import React from 'react';

import { Container } from 'reactstrap';
import PageTemplate from 'components/_templates/PageTemplate';
import DeleteStatusPageContainer from 'containers/DeleteStatusPageContainer';

const DeleteSuccessPage = () => {
    return (
        <PageTemplate>
            <Container>
                <DeleteStatusPageContainer isSuccess={true}/>
            </Container>
        </PageTemplate>
    )
};

export default DeleteSuccessPage;