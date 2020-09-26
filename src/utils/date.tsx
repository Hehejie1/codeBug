
type ITime = string | Date | number;

// 根据生日的月份和日期，计算星座。
//  return "魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯".substr(m*2-(d < Number('211')+19)*2, 2);
export const getAstro = (month:number,day:number) => {    
    var s="魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯";
    var arr=[20,19,21,21,21,22,23,23,23,23,22,22];
    return s.substr(month*2-(day<arr[month-1]?2:0),2);
}


// 获取标准时间
export const momment =  (fmt: string, timestamp?: any):string => {
    let _data = new Date();
    if (timestamp === null || timestamp === undefined) {
        _data = new Date();
    } else if (typeof timestamp === "number") {
        _data = new Date(timestamp);
    } else {
        _data = new Date(Number(timestamp));
    }

    let _o: any = {
        "M+": _data.getMonth() + 1,
        "d+": _data.getDate(),
        "h+": _data.getHours(),
        "m+": _data.getMinutes(),
        "s+": _data.getSeconds(),
        "q+": Math.floor((_data.getMonth() + 3) / 3),
        "S+": String(_data.getMilliseconds()).padStart(3,'0'),
    }
    if (/(y+)/.test(fmt)){
        fmt = fmt.replace(RegExp.$1, (_data.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in _o){
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (_o[k]) : (("00" + _o[k]).substr(("" + _o[k]).length)));
        }
    }
    return fmt;
}

// 获取标准时间
export const getTime =  (time?: Date):string => {
    let _data = new Date();
    let _o: any = {
        "Y": _data.getFullYear(),
        "M": _data.getMonth() + 1,
        "q": Math.floor((_data.getMonth() + 3) / 3),
        "d": _data.getDate(),
        "D": _data.getDay(),
        "h": _data.getHours(),
        "m": _data.getMinutes(),
        "s": _data.getSeconds(),
        "S": _data.getMilliseconds(),
    }
    return _o;
}


/**
 * 日期字符转为时间戳
 */
export const timeStrToTimestamp = (timeStr: string) => {
    timeStr = timeStr.substring(0, 19);
    timeStr = timeStr.replace(/-/g, '/');
    return new Date(timeStr).getTime();
}
/**
 * 判断当前时间在某个时间段内
 */
export const timeBetween = (beginTime: ITime, endTime: ITime) => {
    if (typeof beginTime === "string") {
        beginTime = timeStrToTimestamp(beginTime);
    }
    if (typeof endTime === "string") {
        endTime = timeStrToTimestamp(endTime);
    }
    var now = new Date().getTime();
    if (now > beginTime && now < endTime) {
        return true;
    } else {
        return false;
    }
}
/**
 *传入时间字符串，转为：月.日 时：分
*/
export const subMothTime = (time: string) => {
    var timestamp = timeStrToTimestamp(time);
    /**
     * 使用方式
     * time : 2019-04-24 10:10:10,
     * 结果: 04.24 10:10
     * 
     */
    return momment("MM.dd hh:mm", timestamp);
}
/**
 *传入时间字符串，转为：格式化时间
*/
export const subTimeStr = (time: string, fwt: string) => {
    var timestamp = timeStrToTimestamp(time);
    return momment(fwt, timestamp);
}
// //将秒数转换为时分秒格式
export const formatHFS = (value: string) => {
    var theTime: number = parseInt(value); // 秒
    var middle = 0; // 分
    var hour = 0; // 小时

    if (theTime > 60) {
        middle = parseInt(String(theTime / 60));
        theTime = parseInt(String(theTime % 60));
        if (middle > 60) {
            hour = parseInt(String(middle / 60));
            middle = parseInt(String(middle % 60));
        }
    }
    var result = "" + parseInt(String(theTime)) + "秒";
    if (middle > 0) {
        result = "" + parseInt(String(middle)) + "分" + result;
    }
    if (hour > 0) {
        result = "" + parseInt(String(hour)) + "小时" + result;
    }
    return result;
}