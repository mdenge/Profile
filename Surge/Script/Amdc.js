#!name=BlockAmdc
#!desc=block amdc
#!author=ddgksf2013
#!repo=https://github.com/ddgksf2013/Scripts
#!source=https://github.com/ddgksf2013/Scripts/blob/master/amdc.js
#!version=400bfc1
#!updatetime=2024-11-06

const version = 'V1.0.10';

var ua=$request.headers["User-Agent"]||$request.headers["user-agent"];/(AMap|Cainiao|%E9%A3%9E%E7%8C%AA%E6%97%85%E8%A1%8C|%E5%96%B5%E8%A1%97|%E5%A4%A9%E7%8C%AB|Alibaba|Hema4iPhone|Moon|DMPortal)/.test(ua)?$done({body:"none"}):$done({});
