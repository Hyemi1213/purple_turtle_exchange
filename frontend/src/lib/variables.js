import tradeIcon from 'static/images/menu_trade.svg';
import walletIcon from 'static/images/menu_wallet.svg';
import historyIcon from 'static/images/menu_history.svg';
import unfinishedIcon from 'static/images/menu_unfinished_tx.svg';
import privateTxIcon from 'static/images/menu_private_tx.svg';
import settingIcon from 'static/images/menu_setting.svg';
import logoutIcon from 'static/images/menu_logout.svg';
import listIcon from 'static/images/menu_list.svg';
import loginIcon from 'static/images/menu_login.svg';
import signupIcon from 'static/images/signup_icon.svg';
import pwIcon from 'static/images/pw_icon.svg';
import secutiryIcon from 'static/images/security_icon.svg';
import secutiryCodeIcon from 'static/images/security_code_icon.svg';
import otpIcon from 'static/images/otp_icon.svg';
import deleteUserIcon from 'static/images/delete_user_icon.svg';
import noticeIcon from 'static/images/notice_icon.svg';
import privacyIcon from 'static/images/privacy_icon.svg';
import termsIcon from 'static/images/terms_icon.svg';
import feeIcon from 'static/images/fee_icon.svg';

const menuMobile = [{
    title: '거래소',
    value: 'trade',
    icon: tradeIcon,
    location: '/trade'
}, {
    title: '나의 지갑',
    value: 'myWallet',
    icon: walletIcon,
    location: '/assets'
}, {
    title: '거래 내역',
    value: 'History',
    icon: historyIcon,
    location: '/mypage/transaction_history'
}, {
    title: '미체결 내역',
    value: 'unfinishedList',
    icon: unfinishedIcon,
    location: '/mypage/unfinished_transaction'
}, {
    title: '입출금 내역',
    value: 'privateTxList',
    icon: privateTxIcon,
    location: '/mypage/asset_history'
}, {
    title: '마이페이지',
    value: 'mypage',
    icon: settingIcon,
    location: '/mypage/security'

}, {
    title: '로그아웃',
    value: 'logout',
    icon: logoutIcon
}, {
    title: '공지사항',
    value: 'support',
    icon: listIcon,
    location: '/support/notices'
}];

const menuPC = [{
    title: '거래소',
    value: 'trade',
    location: '/trade'
}, {
    title: '나의 지갑',
    value: 'myWallet',
    location: '/assets'
}, {
    title: '마이페이지',
    value: 'mypage',
    location: '/mypage'
}, {
    title: '로그아웃',
    value: 'logout',
    location: '/'
}];

const menuWithoutLogin = [{
    title: '거래소',
    value: 'trade',
    icon: tradeIcon,
    location: '/trade'
}, {
    title: '로그인',
    value: 'login',
    icon: loginIcon,
    location: '/login'
}, {
    title: '회원가입',
    value: 'signup',
    icon: signupIcon,
    location: '/signup'
}];

const pcMypageSubMenu = [{
    title: '거래 내역',
    value: 'transaction_history',
    location: '/mypage/transaction_history',
    icon: historyIcon
}, {
    title: '입출금 내역',
    value: 'asset_history',
    location: '/mypage/asset_history',
    icon: privateTxIcon,
}, {
    title: '미체결 내역',
    value: 'unfinished_transaction',
    location: '/mypage/unfinished_transaction',
    icon: unfinishedIcon
}];

const footerMenu = [{
    title: '공지사항',
    value: 'support',
    location: '/support/notices',
    icon: noticeIcon
}, {
    title: '이용약관',
    value: 'terms',
    location: '/support/terms',
    icon: privacyIcon
}, {
    title: '개인정보처리방침',
    value: 'privacy',
    location: '/support/privacy',
    icon: termsIcon
}, {
    title: '수수료안내',
    value: 'fee',
    location: '/support/fee',
    icon: feeIcon
}]

const tradeMenu = [{
    name: '매수',
    value: 'buy',
    colour: '#13CE66'

}, {
    name: '매도',
    value: 'sell',
    colour: '#FF6060'

}]

const transacMenu = [{
    name: '전체',
    value: 'all'
}, {
    name: '매수',
    value: 'buy'
}, {
    name: '매도',
    value: 'sell'
}];

const sortCrypto = [{
    name: '전체목록',
    value: 'default'
}, {
    name: '이름순',
    value: 'name'
}, {
    name: '보유순',
    value: 'asset'
}];

const historyMenu =[{
    name: '전체내역',
    value: 'all'
}, {
    name: '입금내역',
    value: 'deposit'
}, {
    name: '출금내역',
    value: 'withdrawl'
}];

const exchangeHistory = [{
    name: '시장체결',
    value: 'tradeHistory',
    colour: '#C569FE'
}, {
    name: '나의 체결',
    value: 'myTradeHistory',
    colour: '#13CE66'
}, {
    name: '나의 미체결',
    value: 'myUnfinishedTradeHistory',
    colour: '#FF6060'
}];

const headerMypageMenu = [{
    title: '거래 내역',
    location: '/mypage/transaction_history',
    icon: historyIcon
}, {
    title: '입출금 내역',
    location: '/mypage/asset_history',
    icon: privateTxIcon
}, {
    title: '미체결 내역',
    location: '/mypage/unfinished_transaction',
    icon: unfinishedIcon
}, {
    title: '비밀번호변경',
    location: '/mypage/change_password',
    icon: pwIcon
}, {
    title: '보안 인증',
    location: '/mypage/security',
    icon: secutiryIcon
}, {
    title: '보안비밀번호변경',
    location: '/mypage/change_securitycode',
    icon: secutiryCodeIcon
}, {
    title: 'OTP설정',
    location: '/mypage/otp',
    icon: otpIcon
}, {
    title: '회원탈퇴 신청',
    location: '/mypage/delete',
    icon: deleteUserIcon
}]

const headerExMenu = [{
    title: '상세',
    value: 'detail'
}, {
    title: '주문',
    value: 'order'
}, {
    title: '주문내역',
    value: 'history'
}];

const headerAssetListMenu = [{
    title: '화폐 목록',
    value: 'currency'
}];

const headerAssetDetailsMenu = [{
    title: '입금',
    value: 'deposit'
}, {
    title: '출금',
    value: 'withdrawl'
}, {
    title: '입출금 내역',
    value: 'history'
}];

const headerSupportMenu = [{
    title: '공지사항',
    location: '/support/notices'
}, {
    title: '이용약관',
    location: '/support/terms'
}, {
    title: '수수료안내',
    location: '/support/fee'
}, {
    title: '개인정보처리방침',
    location: '/support/privacy'
}];

const transactionHistoryTableHeadPC = [{
    title: '일시'
}, {
    title: '종류'
}, {
    title: '마켓'
}, {
    title: '수량'
}, {
    title: '가격'
}, {
    title: '총액'
}, {
    title: '수수료'
}, {
    title: '정산금액'
}] ;

const unfinishedTransactionTableHeadPC = [{
    title: '일시'
}, {
    title: '종류'
}, {
    title: '마켓'
}, {
    title: '수량'
}, {
    title: '가격'
}, {
    title: '미체결수량'
}, {
    title: '취소'
}];

const historyTxTableHeadPC = [{
    title: '일시'
}, {
    title: '종류'
}, {
    title: '수량'
}, {
    title: '거래ID'
}, {
    title: '상태'
}]

const mytradeExtraMenu = [{
    title: '체결내역',
    value: 'finished'
}, {
    title: '미체결 내역',
    value: 'unfinished'
}];

const homeTable = [{
    title: '코인명',
    value: 'pair'
}, {
    title: '현재가',
    value: 'price'
}, {
    title: '변동률',
    value: 'change'
}, {
    title: '거래량',
    value: 'volumn'
}];


const homeTablePC = homeTable.concat([{
    title: '최고가',
    value: 'highest'
}, {
    title: '최저가',
    value: 'lowest'
}]);

export { menuMobile, menuPC, pcMypageSubMenu, transacMenu, sortCrypto, historyMenu, exchangeHistory, tradeMenu, footerMenu, headerMypageMenu, headerExMenu, headerAssetListMenu, headerAssetDetailsMenu, headerSupportMenu, menuWithoutLogin, transactionHistoryTableHeadPC, unfinishedTransactionTableHeadPC, historyTxTableHeadPC, mytradeExtraMenu, homeTable, homeTablePC };