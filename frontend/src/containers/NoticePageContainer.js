import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveCurrentMenu } from 'lib/functions';
import NoticeForm from 'components/_base/NoticeForm';

class NoticePageContainer extends Component {

    state = {
        notice: []
    }

    componentDidMount() {

        saveCurrentMenu(this.props.dispatch, this.props.title);
        
        this.setState({
            notice: this.props.notices.filter((list, idx) => {
                return list.idx == this.props.match.params.id
            })
        })
    }


    // 이 부분은 공지사항 데이터 어떻게 뿌려주냐에 따라 달라짐

    //공지사항 이전 게시글로 이동
    clickToPrev = () => {
        let { notice } = this.state;
        let { notices } = this.props;
    }

    //공지사항 다음 게시글로 이동
    clickToNext = () => {

    }

    render () {

        let { notice } = this.state;

        return (
            <NoticeForm
                notice={notice}
                clickToPrev={this.clickToPrev}
                clickToNext={this.clickToNext}
            />
        )
    }
};

const mapStateToProps = (state) => {
    return {
        notices: state.notices
    }
}

export default connect(mapStateToProps)(withRouter(NoticePageContainer));