//localStorage에 저장하지않는다.
const initialState = {
    currentAssetName: '',
    currentAssetSymbol: '',
    // krw 원화 입출금 나타내기위해 필요, withdrawl/deposit
    currentStauts: 'withdrawl',
};

const asset = (state = initialState, action) => {
    switch (action.type) {
        case 'CURRENT_ASSET':
            return { ...state, currentAssetName: action.asset, currentAssetSymbol: action.assetSymbol }
        case 'CURRENT_STATUS':
            return { ...state, currentStauts: action.status }
        default:
            return state;
    }
};

export default asset;
