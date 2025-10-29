const CUSTOMER_SITES = {
    heimuer: {
        api: 'https://www.heimuer.tv/api.php/provide/vod',
        name: '黑木耳',
    },
    citong: {
        api: 'http://ys9.cttv.vip/api.php/provide/vod/',
        name: '刺桐',
    },
    guanwang: {
        api: 'http://gwcms.cttv.vip/api.php/provide/vod/',
        name: '官网',
    },
    yeyu: {
        api: 'https://yyff.540734621.xyz/api.php/provide/vod/',
        name: '业余',
    },
    huaweiba: {
        api: 'https://hw8.live/api.php/provide/vod/',
        name: '华为吧',
    },
    xiaohuangren: {
        api: 'https://iqyi.xiaohuangrentv.com/api.php/provide/vod/',
        name: '小黄人',
    },
    niuniu: {
        api: 'https://api.niuniuzy.me/api.php/provide/vod/',
        name: '牛牛',
    },
    yaya: {
        api: 'https://cj.yayazy.net/api.php/provide/vod/',
        name: '丫丫',
    },
    sijiu: {
        api: 'https://49zyw.com/api.php/provide/vod/',
        name: '四九',
    },
    suoni: {
        api: 'https://suoniapi.com/api.php/provide/vod/',
        name: '索尼',
    },
    feifan: {
        api: 'http://cj.ffzyapi.com/api.php/provide/vod/',
        name: '非凡',
    },
    feisu2: {
        api: 'https://www.feisuzyapi.com/api.php/provide/vod/',
        name: '飞速',
    },
    kuaikan: {
        api: 'https://www.kuaikan-api.com/api.php/provide/vod/',
        name: '快看',
    },
    xiongzhang: {
        api: 'https://xzcjz.com/api.php/provide/vod/',
        name: '熊掌',
    },
    kuache2: {
        api: 'https://caiji.kczyapi.com/api.php/provide/vod/from/kcm3u8/',
        name: '快车',
    },
    shandian3: {
        api: 'http://sdzyapi.com/api.php/provide/vod/',
        name: '闪电',
    },
    tianyi: {
        api: 'https://www.911ysw.top/tianyi.php/provide/vod/',
        name: '天翼',
    },
    huya: {
        api: 'https://www.huyaapi.com/api.php/provide/vod/',
        name: '虎牙',
    },
    modu: {
        api: 'https://caiji.moduapi.cc/api.php/provide/vod/',
        name: '魔都',
    },
    zuida: {
        api: 'http://zuidazy.me/api.php/provide/vod/',
        name: '最大',
    },
    qihu: {
        api: 'https://caiji.qhzyapi.com/api.php/provide/vod/',
        name: '奇虎',
    },
    kuaiyun: {
        api: 'https://www.kuaiyunzy.com/api.php/provide/vod/',
        name: '快云',
    },
    hongniuziyuan: {
        api: 'http://hongniuzy2.com/api.php/provide/vod/from/hnm3u8',
        name: '紅牛資源',
    },
    liangzi: {
        api: 'http://cj.lziapi.com/api.php/provide/vod/from/lzm3u8',
        name: '量子資源',
    },
    kaifangdianying: {
        api: 'http://vod-demo.onrender.com/pubdovod.php',
        name: '開放電影',
    },
    youzhiziyuanku: {
        api: 'http://api.1080zyku.com/inc/api.php/provide/vod',
        name: '优质资源库',
    },
    _39yingshi: {
        api: 'http://39kan.com/api.php/provide/vod',
        name: '39影視',
    },
    tiantangziyuan: {
        api: 'http://vipmv.cc/api.php/provide/vod',
        name: '天堂资源',
    },
    lehuoyingshi: {
        api: 'http://lehootv.com/api.php/provide/vod',
        name: '乐活影视',
    },
    tangrenjie: {
        api: 'http://tangrenjie.tv/api.php/provide/vod',
        name: '唐人街',
    },
    wolong: {
        api: 'http://collect.wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
    },
    kudian10: {
        api: 'http://kudian10.com/api.php/provide/vod',
        name: '酷点资源',
    },
    tangrenjie2: {
        api: 'http://tangrenjie.tv/api.php/provide/vod/at/xm',
        name: '唐人街',
    },
    senlin: {
        api: 'http://slapibf.com/api.php/provide/vod',
        name: '森林资源',
    },
    yingku: {
        api: 'http://api.ykapi.net/api.php/provide/vod',
        name: '影库资源网',
    },
    kuache: {
        api: 'http://caiji.kczyapi.com/api.php/provide/vod/from/kcm3u8',
        name: '快车资源',
    },
    tantan: {
        api: 'http://apittzy.com/api.php/provide/vod',
        name: '探探资源',
    },
    shandian: {
        api: 'http://sdzyapi.com/api.php/provide/vod/from/sdm3u8',
        name: '閃電資源',
    },
    jinying: {
        api: 'http://jyzyapi.com/provide/vod/from/jinyingm3u8',
        name: '金鹰资源',
    },
    guangsu: {
        api: 'http://api.guangsuapi.com/api.php/provide/vod/from/gsm3u8',
        name: '光速资源',
    },
    aosika: {
        api: 'http://aosikazy.com/api.php/provide/vod',
        name: '奥斯卡资源网',
    },
    laoya: {
        api: 'http://api.apilyzy.com/api.php/provide/vod',
        name: '老鸭资源采集',
    },
    beidouxing: {
        api: 'http://m3u8.bdxzyapi.com/api.php/provide/vod',
        name: '北斗星资源',
    },
    kudian2: {
        api: 'http://api.kuapi.cc/api.php/provide/vod',
        name: '酷点资源',
    },
    shandian2: {
        api: 'http://sdzyapi.com/api.php/provide/vod',
        name: '闪电资源',
    },
    feisu: {
        api: 'http://feisuzy.com/api.php/provide/vod',
        name: '飞速资源',
    },
    kuaibo: {
        api: 'http://www.kuaibozy.com/api.php/provide/vod',
        name: '快播资源',
    },
    aidan: {
        api: 'http://lovedan.net/api.php/provide/vod',
        name: '艾旦影视',
    },
    piaohua: {
        api: 'http://www.zzrhgg.com/api.php/provide/vod',
        name: '飘花电影',
    },
    wangmin: {
        api: 'http://prinevillesda.org/api.php/provide/vod',
        name: '网民电影',
    },
    siwa: {
        api: 'http://siwazyw.cc/api.php/provide/vod',
        name: '丝袜资源',
    },
    tiankong: {
        api: 'http://m3u8.tiankongapi.com/api.php/provide/vod/from/tkm3u8',
        name: '天空資源',
    },
    haiwai: {
        api: 'http://haiwaikan.com/api.php/provide/vod',
        name: '海外看資源',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
