const isMobile = () => {
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || w <= 992;
}

//현재 날짜시간 구하기 (yyyy-mm-dd hh-mm-ss)
const addZero = (n) => {
    return n < 10 ? '0' + n : n
}

const stampToDate = (timestamp) => {
    var date = new Date(timestamp * 1000);
    return `${date.getFullYear().toString()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())} ${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`
}

const stampToOnlyDay = (timestamp) => {
    var date = new Date(timestamp * 1000);
    return `${date.getFullYear().toString()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`
}

//몇월며칠에서 "며칠"을 구함
const pickOnlyDay = (date) => {
    //slice는 array/string, date는 숫자일 수도 있으므로 string 타입으로 변환 후 slice 함수 실행
    let day = `${date}`.slice(-2);

    // 01, 02, .. 이런 형태일 수도 있으므로 숫자 타입으로 다시 변환
    day = day * 1;
    return day;
}

const timeFormat = (time) => {
    const regex = /\b(([ap][m]) (1[0-2]|0?[1-9]):([0-5][0-9]))/;
    return regex.test(time);
}

const isIE = () => {
    if (document.documentMode || /Edge/.test(navigator.userAgent)) {
        return true;
    }else {
        return false;
    }
}

const emailRegex = (value) => {
    const regex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    return regex.test(value);
}

const passwordRegex = (value) => {
    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[`~_|;:'<>,\\/&%#@!"\-?)(}{\][.*$^]).{8,}$/;
    return regex.test(value);
}

const commasEveryThousand = (value) => {
    if (value == '0') {
        return '0'
    } else {
        var parts = value.toString().split(".");
        return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
    }
}

const clearZero = (value) => {
    if (value == '0') {
        return '0'
    } else {
        return value.replace(/(0+$)/, "").replace(/\.$/, "")
    }
}

const allowOnePeriod = (value) => {
    const regex = /^[0-9,]*\.?[0-9,]*$/;
    return regex.test(value);
}

const onlyNumber = (value) => {
    const regex = /^[0-9]*$/;
    return regex.test(value);
}

const isNumber = (value) => {
    const regex = /\d/;
    return regex.test(value);
}

const isUppercase = (value) => {
    const regex = /[A-Z]/;
    return regex.test(value);
}

const isLowercase = (value) => {
    const regex = /[a-z]/;
    return regex.test(value);
}

const isSpecialcase = (value) => {
    const regex = /[`~_|;:'<>,\\/&%#@!"\-?)(}{\][.*$^]/;
    return regex.test(value);
}

const sortCondition = (a, b) => {
    if (a < b) {
        return 1;
    }
    if (a > b) {
        return -1;
    }
    return 0;
}

const saveCurrentMenu = (func, val) => {
    func({
        type: 'SAVE_CURRENT_MENU',
        currentMenu: val
    })
}

export {
    isMobile, stampToDate, timeFormat, stampToOnlyDay, addZero, pickOnlyDay, isIE, emailRegex, passwordRegex, commasEveryThousand, allowOnePeriod, clearZero, onlyNumber, sortCondition, isNumber, isUppercase, isLowercase, isSpecialcase, saveCurrentMenu };