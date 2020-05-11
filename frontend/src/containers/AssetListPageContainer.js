import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { saveCurrentMenu, sortCondition } from 'lib/functions';

import AssetListForm from 'components/_base/AssetListForm';
import MainBG from 'components/_base/MainBG';

class AssetListPageContainer extends Component {

    state = {
        search: '',
        sortLists: [{
            title: '이름순',
            titleVal: 'name',
            isSorted: false
        }, {
            title: '보유량',
            titleVal: 'amount',
            isSorted: false
        }, {
            title: '즐겨찾기',
            isFav: true,
            titleVal: 'fav',
            isSorted: false
        }],
        assetLists: []
    }

    componentDidMount(){
        saveCurrentMenu(this.props.dispatch, this.props.title);

        this.getAssetLists();
        this.getKrwInfo();
    }

    //보유 원화 정보 가져오기 요청
    getKrwInfo = () => {
        this.setState({
            koreanAssetInfo: [{
                title: '나의 보유금액',
                content: 3654123,
                semiContent: 'krw'
            }]
        })
    }


    //보유 암호화폐 리스트 가져오기 요청
    getAssetLists = () => {
        this.setState({
            assetLists: [{
                title: '비트코인',
                semiTitle: 'bitcoin',
                assetValue: 'btc',
                isFav: true,
                assetsInfo: [{
                    title: '보유금액',
                    content: 1.000001284,
                    semiContent: 'btc'
                }, {
                    title: '원화가치',
                    content: 1234.12345678,
                    semiContent: 'krw'
                }]
            }, {
                title: '이더리움',
                semiTitle: 'ethereum',
                assetValue: 'eth',
                isFav: false,
                assetsInfo: [{
                    title: '보유금액',
                    content: 4.000001284,
                    semiContent: 'eth'
                }, {
                    title: '원화가치',
                    content: 1234.12345678,
                    semiContent: 'krw'
                }]
            }, {
                title: '비트코인',
                semiTitle: 'bitcoin',
                assetValue: 'btc',
                isFav: true,
                assetsInfo: [{
                    title: '보유금액',
                    content: 3.000001284,
                    semiContent: 'btc'
                }, {
                    title: '원화가치',
                    content: 1234.12345678,
                    semiContent: 'krw'
                }]
            }, {
                title: '이더리움',
                semiTitle: 'ethereum',
                assetValue: 'eth',
                isFav: false,
                assetsInfo: [{
                    title: '보유금액',
                    content: 0.000001284,
                    semiContent: 'eth'
                }, {
                    title: '원화가치',
                    content: 1234.12345678,
                    semiContent: 'krw'
                }]
            }, {
                title: '비트코인',
                semiTitle: 'bitcoin',
                assetValue: 'btc',
                isFav: true,
                assetsInfo: [{
                    title: '보유금액',
                    content: 0.000001284,
                    semiContent: 'btc'
                }, {
                    title: '원화가치',
                    content: 1234.12345678,
                    semiContent: 'krw'
                }]
            }, {
                title: '이더리움',
                semiTitle: 'ethereum',
                assetValue: 'eth',
                isFav: false,
                assetsInfo: [{
                    title: '보유금액',
                    content: 9.000001284,
                    semiContent: 'eth'
                }, {
                    title: '원화가치',
                    content: 1234.12345678,
                    semiContent: 'krw'
                }]
            }]
        })
    }

    //정렬기능
    handleSort = (val) => {


        //sort arrow나 즐겨찾기 별에 색상 변경
        this.setState(prevState => ({
            sortLists: prevState.sortLists.map((list, idx) => {
                return list.titleVal == val.titleVal ? { ...list, isSorted: !list.isSorted } : list
            })
        }));

        if(val.titleVal == 'fav') {
            this.handleSortFavs()
        }else if(val.titleVal == 'name') {
            if (val.isSorted) {
                this.setState(prevState => ({
                    assetLists: prevState.assetLists.sort((a, b) => {

                        return sortCondition(a.semiTitle, b.semiTitle);
                    })
                }));
            } else {
                this.setState(prevState => ({
                    assetLists: prevState.assetLists.sort((a, b) => {
                        return sortCondition(b.semiTitle, a.semiTitle);
                    })
                }));
            }
        }else if(val.titleVal == 'amount') {
            if (val.isSorted) {
                this.setState(prevState => ({
                    assetLists: prevState.assetLists.sort((a, b) => {
                        return sortCondition(a.assetsInfo[0].content, b.assetsInfo[0].content);
                    })
                }));
            } else {
                this.setState(prevState => ({
                    assetLists: prevState.assetLists.sort((a, b) => {
                        return sortCondition(b.assetsInfo[0].content, a.assetsInfo[0].content);
                    })
                }));
            }
        }
    }

    //즐겨찾기 정렬
    handleSortFavs = (val) => {
        let { sortLists } = this.state;
        
        if (!sortLists.filter((list) => list.titleVal == val).isSorted) {
            this.setState(prevState => ({
                assetLists: prevState.assetLists.sort((a, b) => {
                    return sortCondition(a.isFav, b.isFav)
                })
            }))
        } else {
            this.setState(prevState => ({
                assetLists: prevState.assetLists.sort((a, b) => {
                    return sortCondition(b.isFav, a.isFav)
                })
            }))
        }
    }

    //asset 즐겨찾기 설정/해제
    handleAssetFav = (val) => {
        this.setState(prevState => ({
            assetLists: prevState.assetLists.map((list, idx) => {
                return list.semiTitle == val ? {...list, isFav: !list.isFav } : list
            })
        }))
    }

    //asset 클릭 시 상세 페이지로 이동
    clickToDetailPage = (val) => {

        this.props.dispatch({
            type: 'CURRENT_ASSET',
            assetSymbol: val
        });

        this.props.history.push(`/assets/${val}`);
    }

    // krw 상세 페이지로 이동
    clickToKrwPage = () => {
        this.props.history.push(`/assets/krw`);
    }

    // 암호화폐 리스트 검색하기
    clickToSearch = (e) => {
        e.preventDefault();
    }

    // 인풋 onChange
    handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        this.setState({
            [name]: value
        });
    }

    render () {

        let { koreanAssetInfo, assetLists, search, sortLists } = this.state;

        let { isMobile } = this.props.base;

        return (
            <>
                <MainBG
                    height={23.8}
                    isMobileOnly
                />
                <AssetListForm
                    className='g-content-padding-top'
                    koreanAssetInfo={koreanAssetInfo}
                    sortLists={sortLists}
                    assetLists={assetLists}
                    search={search}
                    handleInput={this.handleInput}
                    handleSort={this.handleSort}
                    handleAssetFav={this.handleAssetFav}
                    clickToDetailPage={this.clickToDetailPage}
                    clickToKrwPage={this.clickToKrwPage}
                    isMobile={isMobile}
                    clickToSearch={this.clickToSearch}
                />
            </>
        )
    }
};

const mapStateToProps = (state) => {
    return{
        base: state.base
    }
}

export default connect(mapStateToProps)(withRouter(AssetListPageContainer));