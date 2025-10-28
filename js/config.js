// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
// 注意：PASSWORD 环境变量是必需的，所有部署都必须设置密码以确保安全
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000  // 验证有效期（90天，约3个月）
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
    heimuer4: {
        api: 'https://json.heimuer.xyz',
        name: '黑木耳',
    },
    ffzy4: {
        api: 'http://ffzy5.tv',
        name: '非凡影视',
    },
    tyyszy4: {
        api: 'https://tyyszy.com',
        name: '天涯资源',
    },
    ckzy4: {
        api: 'https://www.ckzy1.com',
        name: 'CK资源',
    },
    zy3604: {
        api: 'https://360zy.com',
        name: '360资源',
    },
    wolong4: {
        api: 'https://wolongzyw.com',
        name: '卧龙资源',
    },
    cjhw4: {
        api: 'https://cjhwba.com',
        name: '新华为',
    },
    dbzy4: {
        api: 'https://dbzy.com',
        name: '豆瓣资源',
    },
    haiwai2: {
        api: 'https://haiwaikan.com/api.php/provide/vod/',
        name: '海外看',
    },
    _360: {
        api: 'https://360zy.com/api.php/provide/vod/',
        name: '360',
    },
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
    uku2: {
        api: 'https://api.ukuapi.com/api.php/provide/vod/',
        name: 'U酷',
    },
    haohua: {
        api: 'https://hhzyapi.com/api.php/provide/vod',
        name: '豪华',
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速',
    },
    sijiu: {
        api: 'https://49zyw.com/api.php/provide/vod/',
        name: '四九',
    },
    suoni: {
        api: 'https://suoniapi.com/api.php/provide/vod/',
        name: '索尼',
    },
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod/',
        name: 'ikun',
    },
    feifan: {
        api: 'http://cj.ffzyapi.com/api.php/provide/vod/',
        name: '非凡',
    },
    liangzi2: {
        api: 'https://cj.lziapi.com/api.php/provide/vod/',
        name: '量子',
    },
    baofeng: {
        api: 'https://bfzyapi.com/api.php/provide/vod/',
        name: '暴风',
    },
    hongniu: {
        api: 'https://www.hongniuzy2.com/api.php/provide/vod/',
        name: '红牛',
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
    yinghua2: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod/',
        name: '樱花',
    },
    wolong2: {
        api: 'https://collect.wolongzyw.com/api.php/provide/vod/',
        name: '卧龙',
    },
    piaohua2: {
        api: 'http://www.ahjiuman.com/api.php/provide/vod/at/json',
        name: '飘花',
    },
    tianyi: {
        api: 'https://www.911ysw.top/tianyi.php/provide/vod/',
        name: '天翼',
    },
    huya: {
        api: 'https://www.huyaapi.com/api.php/provide/vod/',
        name: '虎牙',
    },
    baidu2: {
        api: 'https://api.apibdzy.com/api.php/provide/vod/',
        name: '百度',
    },
    piaoling: {
        api: 'https://p2100.net/api.php/provide/vod/',
        name: '飘零',
    },
    wujin: {
        api: 'https://api.wujinapi.com/api.php/provide/vod/',
        name: '无尽',
    },
    subo: {
        api: 'https://subocaiji.com/api.php/provide/vod/',
        name: '速博',
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
    huohu: {
        api: 'https://hhzyapi.com/api.php/provide/vod/',
        name: '火狐',
    },
    xinlang: {
        api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod/',
        name: '新浪',
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
    kudian: {
        api: 'http://api.kuapi.cc/api.php/provide/vod',
        name: '酷点资源',
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
    uku: {
        api: 'http://api.ukuapi.com/api.php/provide/vod',
        name: 'U酷资源',
    },
    beidouxing: {
        api: 'http://m3u8.bdxzyapi.com/api.php/provide/vod',
        name: '北斗星资源',
    },
    yinghua: {
        api: 'http://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '樱花资源网',
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
    baidu: {
        api: 'http://api.apibdzy.com/api.php/provide/vod',
        name: '百度资源',
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

// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;


// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
