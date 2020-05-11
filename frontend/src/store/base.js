//localStorage에 저장하지않는다.
const initialState = {
    alertVisible: false,
    alertType: 'success',
    alertMsg: '기본',
    isLoading: false,
    currentMenu: '',
    mainMarinTop: 0,
    isMobile: false,
    defaultBase: 'eth',
    defaultQuote: 'btc',
    baseCurrency: '',
    quoteCurrency: '',
    isMypageSubMenu: false
};

const base = (state = initialState, action) => {
    switch (action.type) {
        case 'ALERT_OPEN':
            return { ...state, alertVisible: true, alertType: action.alertType, alertMsg: action.alertMsg }
        case 'ALERT_CLOSE':
            return { ...state, alertVisible: false }
        case 'IS_LOADING_OPEN':
            return { ...state, isLoading: true }
        case 'IS_LOADING_CLOSE':
            return { ...state, isLoading: false }
        case 'SAVE_CURRENT_MENU':
            return { ...state, currentMenu: action.currentMenu }
        case 'SAVE_MAIN_MARGINTOP':
            return { ...state, mainMarinTop: action.mainMarinTop }
        case 'SAVE_IS_MOBILE':
            return { ...state, isMobile: action.isMobile }
        case 'SAVE_CURRENCY':
            return { ...state, baseCurrency: action.baseCurrency, quoteCurrency: action.quoteCurrency }
        case 'YES_MYPAGE_SUB_MENU':
            return { ...state, isMypageSubMenu: true }
        case 'NO_MYPAGE_SUB_MENU':
            return { ...state, isMypageSubMenu: false }
        default:
            return state;
    }
};

export default base;
