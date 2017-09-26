import React, {Component} from 'react'
import Footer from '../components/footer'
import '../style/normalize.css';
import '../style/classify.css'
import footer from '../components/footer'
import axios from 'axios'


export default class classify extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            data: {
                "category": [{
                    "id": 537,
                    "activityUrl": "",
                    "activityUrlApp": "",
                    "categoryName": "中西成药",
                    "activityPic": "",
                    "showCard": 0,
                    "categoryCode": "A",
                    "secondCategory": [{
                        "id": 544,
                        "categoryName": "神经系统用药",
                        "categoryCode": "AB",
                        "thirdCategory": [{
                            "id": 587,
                            "categoryName": "随便输入的",
                            "activityPic": "http://p8.maiyaole.com/fky/img/1499135950955.jpg",
                            "categoryCode": "ABA"
                        }, {"id": 588, "categoryName": "脑代谢改善及促智药", "activityPic": "", "categoryCode": "ABB"}, {
                            "id": 589,
                            "categoryName": "中枢兴奋药物",
                            "activityPic": "",
                            "categoryCode": "ABC"
                        }, {"id": 590, "categoryName": "镇静催眠药物", "activityPic": "", "categoryCode": "ABD"}, {
                            "id": 591,
                            "categoryName": "运动障碍性疾病药",
                            "activityPic": "",
                            "categoryCode": "ABE"
                        }, {"id": 592, "categoryName": "抗抑郁药物", "activityPic": "", "categoryCode": "ABF"}, {
                            "id": 593,
                            "categoryName": "抗偏头痛药",
                            "activityPic": "",
                            "categoryCode": "ABG"
                        }, {"id": 594, "categoryName": "抗癫痫及抗惊厥药", "activityPic": "", "categoryCode": "ABH"}, {
                            "id": 595,
                            "categoryName": "抗精神病药物",
                            "activityPic": "",
                            "categoryCode": "ABI"
                        }, {"id": 596, "categoryName": "其他", "activityPic": "", "categoryCode": "ABJ"}]
                    }, {
                        "id": 543,
                        "categoryName": "抗菌药物",
                        "categoryCode": "AA",
                        "thirdCategory": [{
                            "id": 581,
                            "categoryName": "抗生素类药物",
                            "activityPic": "",
                            "categoryCode": "AAA"
                        }, {"id": 582, "categoryName": "合成抗菌药物", "activityPic": "", "categoryCode": "AAB"}, {
                            "id": 583,
                            "categoryName": "抗真菌类药物",
                            "activityPic": "",
                            "categoryCode": "AAC"
                        }, {"id": 584, "categoryName": "抗病毒类药物", "activityPic": "", "categoryCode": "AAD"}, {
                            "id": 585,
                            "categoryName": "抗寄生虫病药",
                            "activityPic": "",
                            "categoryCode": "AAE"
                        }, {"id": 586, "categoryName": "其它抗菌药物", "activityPic": "", "categoryCode": "AAF"}]
                    }, {
                        "id": 545,
                        "categoryName": "消化系统用药",
                        "categoryCode": "AC",
                        "thirdCategory": [{
                            "id": 597,
                            "categoryName": "胃肠解痉及胃动力药",
                            "activityPic": "",
                            "categoryCode": "ACA"
                        }, {"id": 598, "categoryName": "胃肠调节抗气胀及抗炎药", "activityPic": "", "categoryCode": "ACB"}, {
                            "id": 599,
                            "categoryName": "止泻药及泻药",
                            "activityPic": "",
                            "categoryCode": "ACC"
                        }, {"id": 600, "categoryName": "抗酸药物及抗溃疡病药物", "activityPic": "", "categoryCode": "ACD"}, {
                            "id": 601,
                            "categoryName": "中药消化系统药",
                            "activityPic": "",
                            "categoryCode": "ACE"
                        }, {"id": 602, "categoryName": "其它", "activityPic": "", "categoryCode": "ACF"}]
                    }, {
                        "id": 546,
                        "categoryName": "心脑血管药",
                        "categoryCode": "AD",
                        "thirdCategory": [{
                            "id": 603,
                            "categoryName": "脑血管病用药",
                            "activityPic": "",
                            "categoryCode": "ADA"
                        }, {"id": 604, "categoryName": "复方降压药", "activityPic": "", "categoryCode": "ADB"}, {
                            "id": 605,
                            "categoryName": "抗心律失常药",
                            "activityPic": "",
                            "categoryCode": "ADC"
                        }, {"id": 606, "categoryName": "调节血脂及抗动脉硬化药", "activityPic": "", "categoryCode": "ADD"}, {
                            "id": 607,
                            "categoryName": "降压通络类中成药",
                            "activityPic": "",
                            "categoryCode": "ADE"
                        }, {"id": 608, "categoryName": "其他", "activityPic": "", "categoryCode": "ADF"}]
                    }, {
                        "id": 547,
                        "categoryName": "泌尿生殖系统用药",
                        "categoryCode": "AE",
                        "thirdCategory": [{
                            "id": 609,
                            "categoryName": "利尿药及脱水药",
                            "activityPic": "",
                            "categoryCode": "AEA"
                        }, {"id": 610, "categoryName": "前列腺疾病用药", "activityPic": "", "categoryCode": "AEB"}, {
                            "id": 611,
                            "categoryName": "清热通淋利水药",
                            "activityPic": "",
                            "categoryCode": "AEC"
                        }, {"id": 612, "categoryName": "肾病用药", "activityPic": "", "categoryCode": "AED"}, {
                            "id": 613,
                            "categoryName": "其他",
                            "activityPic": "",
                            "categoryCode": "AEE"
                        }]
                    }, {
                        "id": 548,
                        "categoryName": "呼吸系统用药",
                        "categoryCode": "AF",
                        "thirdCategory": [{
                            "id": 614,
                            "categoryName": "中药止咳平喘药",
                            "activityPic": "",
                            "categoryCode": "AFA"
                        }, {"id": 615, "categoryName": "西药止咳平喘药", "activityPic": "", "categoryCode": "AFB"}, {
                            "id": 616,
                            "categoryName": "其他",
                            "activityPic": "",
                            "categoryCode": "AFC"
                        }]
                    }, {
                        "id": 550,
                        "categoryName": "解热镇痛抗炎抗痛风",
                        "categoryCode": "AH",
                        "thirdCategory": [{
                            "id": 620,
                            "categoryName": "解热镇痛消炎药",
                            "activityPic": "",
                            "categoryCode": "AHA"
                        }, {"id": 621, "categoryName": "抗痛风药物", "activityPic": "", "categoryCode": "AHB"}, {
                            "id": 622,
                            "categoryName": "镇痛药物",
                            "activityPic": "",
                            "categoryCode": "AHC"
                        }, {"id": 623, "categoryName": "活血化淤，跌打损伤", "activityPic": "", "categoryCode": "AHD"}, {
                            "id": 624,
                            "categoryName": "抗风湿药",
                            "activityPic": "",
                            "categoryCode": "AHE"
                        }, {"id": 625, "categoryName": "骨质疏松", "activityPic": "", "categoryCode": "AHF"}, {
                            "id": 626,
                            "categoryName": "抗骨质增生",
                            "activityPic": "",
                            "categoryCode": "AHG"
                        }, {"id": 627, "categoryName": "其他辅助药物", "activityPic": "", "categoryCode": "AHH"}]
                    }, {
                        "id": 551,
                        "categoryName": "激素类用药",
                        "categoryCode": "AI",
                        "thirdCategory": [{
                            "id": 628,
                            "categoryName": "甲状腺激素类及抗甲状腺药",
                            "activityPic": "",
                            "categoryCode": "AIA"
                        }, {"id": 629, "categoryName": "胰岛素及降血糖药", "activityPic": "", "categoryCode": "AIB"}, {
                            "id": 630,
                            "categoryName": "肾上腺皮质激素类药",
                            "activityPic": "",
                            "categoryCode": "AIC"
                        }, {"id": 631, "categoryName": "性激素类药及避孕药", "activityPic": "", "categoryCode": "AID"}, {
                            "id": 632,
                            "categoryName": "其他",
                            "activityPic": "",
                            "categoryCode": "AIE"
                        }]
                    }, {
                        "id": 549,
                        "categoryName": "血液系统药物",
                        "categoryCode": "AG",
                        "thirdCategory": [{
                            "id": 617,
                            "categoryName": "止血药物及抗凝血药物",
                            "activityPic": "",
                            "categoryCode": "AGA"
                        }, {"id": 618, "categoryName": "抗贫血药物", "activityPic": "", "categoryCode": "AGB"}, {
                            "id": 619,
                            "categoryName": "其他",
                            "activityPic": "",
                            "categoryCode": "AGC"
                        }]
                    }, {
                        "id": 553,
                        "categoryName": "清热药",
                        "categoryCode": "AK",
                        "thirdCategory": [{
                            "id": 637,
                            "categoryName": "清热解毒药",
                            "activityPic": "",
                            "categoryCode": "AKA"
                        }, {"id": 638, "categoryName": "清热祛暑药", "activityPic": "", "categoryCode": "AKB"}, {
                            "id": 639,
                            "categoryName": "复方感冒药",
                            "activityPic": "",
                            "categoryCode": "AKC"
                        }, {"id": 640, "categoryName": "其他", "activityPic": "", "categoryCode": "AKD"}]
                    }, {
                        "id": 552,
                        "categoryName": "肝胆用药",
                        "categoryCode": "AJ",
                        "thirdCategory": [{
                            "id": 633,
                            "categoryName": "肝病用药",
                            "activityPic": "",
                            "categoryCode": "AJA"
                        }, {
                            "id": 634,
                            "categoryName": "利胆药、胆石溶解及排石药",
                            "activityPic": "",
                            "categoryCode": "AJB"
                        }, {"id": 635, "categoryName": "平肝祛风通络", "activityPic": "", "categoryCode": "AJC"}, {
                            "id": 636,
                            "categoryName": "其他",
                            "activityPic": "",
                            "categoryCode": "AJD"
                        }]
                    }, {
                        "id": 554,
                        "categoryName": "一般外用药",
                        "categoryCode": "AL",
                        "thirdCategory": [{
                            "id": 641,
                            "categoryName": "皮肤科",
                            "activityPic": "",
                            "categoryCode": "ALA"
                        }, {"id": 642, "categoryName": "口腔科", "activityPic": "", "categoryCode": "ALB"}, {
                            "id": 643,
                            "categoryName": "耳鼻喉科",
                            "activityPic": "",
                            "categoryCode": "ALC"
                        }, {"id": 644, "categoryName": "眼科", "activityPic": "", "categoryCode": "ALD"}, {
                            "id": 645,
                            "categoryName": "贴膏药",
                            "activityPic": "",
                            "categoryCode": "ALE"
                        }, {"id": 646, "categoryName": "痔疮药", "activityPic": "", "categoryCode": "ALF"}, {
                            "id": 647,
                            "categoryName": "其他",
                            "activityPic": "",
                            "categoryCode": "ALG"
                        }]
                    }, {
                        "id": 555,
                        "categoryName": "滋补养生",
                        "categoryCode": "AM",
                        "thirdCategory": [{
                            "id": 648,
                            "categoryName": "补益养生药",
                            "activityPic": "",
                            "categoryCode": "AMA"
                        }, {"id": 649, "categoryName": "养颜美容药", "activityPic": "", "categoryCode": "AMB"}, {
                            "id": 650,
                            "categoryName": "养心安神药",
                            "activityPic": "",
                            "categoryCode": "AMC"
                        }, {"id": 651, "categoryName": "其他", "activityPic": "", "categoryCode": "AMD"}]
                    }, {
                        "id": 556,
                        "categoryName": "维生素和矿物质",
                        "categoryCode": "AN",
                        "thirdCategory": [{
                            "id": 652,
                            "categoryName": "维生素类",
                            "activityPic": "",
                            "categoryCode": "ANA"
                        }, {"id": 653, "categoryName": "矿物质类", "activityPic": "", "categoryCode": "ANB"}, {
                            "id": 654,
                            "categoryName": "调节水、电解质及酸碱平衡类",
                            "activityPic": "",
                            "categoryCode": "ANC"
                        }, {"id": 655, "categoryName": "其他", "activityPic": "", "categoryCode": "AND"}]
                    }, {
                        "id": 557,
                        "categoryName": "妇科用药",
                        "categoryCode": "AO",
                        "thirdCategory": [{
                            "id": 656,
                            "categoryName": "妇科清热消炎药",
                            "activityPic": "",
                            "categoryCode": "AOA"
                        }, {"id": 657, "categoryName": "妇科调经补益药", "activityPic": "", "categoryCode": "AOB"}, {
                            "id": 658,
                            "categoryName": "妇科外用药",
                            "activityPic": "",
                            "categoryCode": "AOC"
                        }, {"id": 659, "categoryName": "孕、产妇用药", "activityPic": "", "categoryCode": "AOD"}, {
                            "id": 660,
                            "categoryName": "乳腺增生用药",
                            "activityPic": "",
                            "categoryCode": "AOE"
                        }, {"id": 661, "categoryName": "其他", "activityPic": "", "categoryCode": "AOF"}]
                    }, {
                        "id": 558,
                        "categoryName": "儿科用药",
                        "categoryCode": "AP",
                        "thirdCategory": [{
                            "id": 662,
                            "categoryName": "儿童补益药",
                            "activityPic": "",
                            "categoryCode": "APA"
                        }, {"id": 663, "categoryName": "儿童感冒解热镇痛", "activityPic": "", "categoryCode": "APB"}, {
                            "id": 664,
                            "categoryName": "儿童呼吸系统用药",
                            "activityPic": "",
                            "categoryCode": "APC"
                        }, {"id": 665, "categoryName": "儿童消化系统用药", "activityPic": "", "categoryCode": "APD"}, {
                            "id": 666,
                            "categoryName": "其他",
                            "activityPic": "",
                            "categoryCode": "APE"
                        }]
                    }, {
                        "id": 559,
                        "categoryName": "其他",
                        "categoryCode": "AQ",
                        "thirdCategory": [{
                            "id": 667,
                            "categoryName": "抗肿瘤药",
                            "activityPic": "",
                            "categoryCode": "AQA"
                        }, {"id": 668, "categoryName": "调节免疫功能药物", "activityPic": "", "categoryCode": "AQB"}, {
                            "id": 669,
                            "categoryName": "生物制品",
                            "activityPic": "",
                            "categoryCode": "AQC"
                        }, {"id": 670, "categoryName": "解毒药物", "activityPic": "", "categoryCode": "AQD"}, {
                            "id": 671,
                            "categoryName": "抗过敏及抗眩晕药",
                            "activityPic": "",
                            "categoryCode": "AQE"
                        }, {"id": 672, "categoryName": "特殊用药针剂类", "activityPic": "", "categoryCode": "AQF"}, {
                            "id": 774,
                            "categoryName": "药用辅料",
                            "activityPic": "",
                            "categoryCode": "AA1311"
                        }]
                    }],
                    "cardCategory": [{"id": 544, "categoryName": "神经系统用药", "categoryCode": "AB"}, {
                        "id": 543,
                        "categoryName": "抗菌药物",
                        "categoryCode": "AA"
                    }, {"id": 545, "categoryName": "消化系统用药", "categoryCode": "AC"}, {
                        "id": 546,
                        "categoryName": "心脑血管药",
                        "categoryCode": "AD"
                    }, {"id": 547, "categoryName": "泌尿生殖系统用药", "categoryCode": "AE"}, {
                        "id": 548,
                        "categoryName": "呼吸系统用药",
                        "categoryCode": "AF"
                    }, {"id": 550, "categoryName": "解热镇痛抗炎抗痛风", "categoryCode": "AH"}, {
                        "id": 551,
                        "categoryName": "激素类用药",
                        "categoryCode": "AI"
                    }, {"id": 549, "categoryName": "血液系统药物", "categoryCode": "AG"}, {
                        "id": 553,
                        "categoryName": "清热药",
                        "categoryCode": "AK"
                    }, {"id": 552, "categoryName": "肝胆用药", "categoryCode": "AJ"}, {
                        "id": 554,
                        "categoryName": "一般外用药",
                        "categoryCode": "AL"
                    }, {"id": 555, "categoryName": "滋补养生", "categoryCode": "AM"}, {
                        "id": 556,
                        "categoryName": "维生素和矿物质",
                        "categoryCode": "AN"
                    }, {"id": 557, "categoryName": "妇科用药", "categoryCode": "AO"}, {
                        "id": 558,
                        "categoryName": "儿科用药",
                        "categoryCode": "AP"
                    }, {"id": 559, "categoryName": "其他", "categoryCode": "AQ"}]
                }, {
                    "id": 538,
                    "activityUrl": "/product.html?productId=142AKCZ150300&enterpriseId=32494",
                    "activityUrlApp": "fky://product/productionDetail?productId=118491&sellerId=8353",
                    "categoryName": "医疗器械",
                    "activityPic": "http://p8.maiyaole.com/fky/img/1498626100753.jpg",
                    "showCard": 0,
                    "categoryCode": "B",
                    "secondCategory": [{
                        "id": 560,
                        "categoryName": "普通诊察器械",
                        "categoryCode": "BA",
                        "thirdCategory": [{
                            "id": 673,
                            "categoryName": "检测试剂",
                            "activityPic": "",
                            "categoryCode": "BAA"
                        }, {"id": 674, "categoryName": "验孕、排卵测试", "activityPic": "", "categoryCode": "BAB"}, {
                            "id": 675,
                            "categoryName": "血糖检测",
                            "activityPic": "",
                            "categoryCode": "BAC"
                        }, {"id": 676, "categoryName": "血压监测", "activityPic": "", "categoryCode": "BAD"}]
                    }, {
                        "id": 561,
                        "categoryName": "康复理疗",
                        "categoryCode": "BB324@",
                        "thirdCategory": [{
                            "id": 677,
                            "categoryName": "保健理疗",
                            "activityPic": "",
                            "categoryCode": "BBA"
                        }, {"id": 678, "categoryName": "按摩产品", "activityPic": "", "categoryCode": "BBB"}, {
                            "id": 679,
                            "categoryName": "理疗贴剂",
                            "activityPic": "",
                            "categoryCode": "BBC"
                        }, {"id": 680, "categoryName": "辅助器材", "activityPic": "", "categoryCode": "BBD"}]
                    }, {
                        "id": 562,
                        "categoryName": "家庭健身用品",
                        "categoryCode": "BC",
                        "thirdCategory": [{
                            "id": 681,
                            "categoryName": "小型健身用品",
                            "activityPic": "",
                            "categoryCode": "BCA"
                        }, {"id": 682, "categoryName": "运动护理品", "activityPic": "", "categoryCode": "BCB"}]
                    }, {
                        "id": 564,
                        "categoryName": "医疗专用",
                        "categoryCode": "BE",
                        "thirdCategory": [{
                            "id": 685,
                            "categoryName": "医用化验和基础设备器具",
                            "activityPic": "",
                            "categoryCode": "BEA"
                        }, {"id": 686, "categoryName": "医用相关消毒剂", "activityPic": "", "categoryCode": "BEB"}, {
                            "id": 687,
                            "categoryName": "病房护理设备及器具",
                            "activityPic": "",
                            "categoryCode": "BEC"
                        }, {"id": 688, "categoryName": "手术室设备及器具", "activityPic": "", "categoryCode": "BED"}, {
                            "id": 689,
                            "categoryName": "医用卫生材料及辅料",
                            "activityPic": "",
                            "categoryCode": "BEE"
                        }]
                    }, {
                        "id": 563,
                        "categoryName": "成人用品",
                        "categoryCode": "BD",
                        "thirdCategory": [{
                            "id": 683,
                            "categoryName": "情趣用品",
                            "activityPic": "",
                            "categoryCode": "BDA"
                        }, {"id": 684, "categoryName": "计生用品", "activityPic": "", "categoryCode": "BDB"}]
                    }],
                    "cardCategory": [{"id": 560, "categoryName": "普通诊察器械", "categoryCode": "BA"}, {
                        "id": 561,
                        "categoryName": "康复理疗",
                        "categoryCode": "BB324@"
                    }, {"id": 562, "categoryName": "家庭健身用品", "categoryCode": "BC"}, {
                        "id": 564,
                        "categoryName": "医疗专用",
                        "categoryCode": "BE"
                    }, {"id": 563, "categoryName": "成人用品", "categoryCode": "BD"}]
                }, {
                    "id": 539,
                    "activityUrl": "",
                    "activityUrlApp": "",
                    "categoryName": "中药材",
                    "activityPic": "",
                    "showCard": 0,
                    "categoryCode": "C",
                    "secondCategory": [{
                        "id": 565,
                        "categoryName": "贵细滋补",
                        "categoryCode": "CA",
                        "thirdCategory": [{
                            "id": 690,
                            "categoryName": "虫草类",
                            "activityPic": "",
                            "categoryCode": "CAA"
                        }, {"id": 691, "categoryName": "参类", "activityPic": "", "categoryCode": "CAB"}, {
                            "id": 692,
                            "categoryName": "灵芝类",
                            "activityPic": "",
                            "categoryCode": "CAC"
                        }, {"id": 693, "categoryName": "鹿茸类", "activityPic": "", "categoryCode": "CAD"}, {
                            "id": 694,
                            "categoryName": "燕窝类",
                            "activityPic": "",
                            "categoryCode": "CAE"
                        }, {"id": 695, "categoryName": "三七类", "activityPic": "", "categoryCode": "CAF"}, {
                            "id": 696,
                            "categoryName": "石斛类",
                            "activityPic": "",
                            "categoryCode": "CAG"
                        }, {"id": 697, "categoryName": "阿胶类", "activityPic": "", "categoryCode": "CAH"}, {
                            "id": 698,
                            "categoryName": "麝香类",
                            "activityPic": "",
                            "categoryCode": "CAI"
                        }, {"id": 699, "categoryName": "龙骨类", "activityPic": "", "categoryCode": "CAJ"}, {
                            "id": 700,
                            "categoryName": "蛤蟆油类",
                            "activityPic": "",
                            "categoryCode": "CAK"
                        }]
                    }, {
                        "id": 566,
                        "categoryName": "中药饮片",
                        "categoryCode": "CB",
                        "thirdCategory": [{
                            "id": 701,
                            "categoryName": "精装饮片",
                            "activityPic": "",
                            "categoryCode": "CBA"
                        }, {"id": 702, "categoryName": "中药花茶", "activityPic": "", "categoryCode": "CBB"}, {
                            "id": 703,
                            "categoryName": "统装",
                            "activityPic": "",
                            "categoryCode": "CBC"
                        }]
                    }],
                    "cardCategory": [{"id": 565, "categoryName": "贵细滋补", "categoryCode": "CA"}, {
                        "id": 566,
                        "categoryName": "中药饮片",
                        "categoryCode": "CB"
                    }]
                }, {
                    "id": 540,
                    "activityUrl": "",
                    "activityUrlApp": "",
                    "categoryName": "保健食品",
                    "activityPic": "",
                    "showCard": 0,
                    "categoryCode": "D",
                    "secondCategory": [{
                        "id": 567,
                        "categoryName": "女士保健食品",
                        "categoryCode": "DA",
                        "thirdCategory": [{
                            "id": 704,
                            "categoryName": "丰胸美体",
                            "activityPic": "",
                            "categoryCode": "DAA"
                        }, {"id": 705, "categoryName": "美容养颜", "activityPic": "", "categoryCode": "DAB"}, {
                            "id": 706,
                            "categoryName": "调节内分泌",
                            "activityPic": "",
                            "categoryCode": "DAC"
                        }, {"id": 707, "categoryName": "滋阴补血", "activityPic": "", "categoryCode": "DAD"}, {
                            "id": 708,
                            "categoryName": "孕产妇营养",
                            "activityPic": "",
                            "categoryCode": "DAE"
                        }, {"id": 709, "categoryName": "减肥瘦身", "activityPic": "", "categoryCode": "DAF"}, {
                            "id": 710,
                            "categoryName": "润肠通便",
                            "activityPic": "",
                            "categoryCode": "DAG"
                        }, {"id": 711, "categoryName": "其他", "activityPic": "", "categoryCode": "DAH"}]
                    }, {
                        "id": 568,
                        "categoryName": "男士保健食品",
                        "categoryCode": "DB",
                        "thirdCategory": [{
                            "id": 712,
                            "categoryName": "补肾强身",
                            "activityPic": "",
                            "categoryCode": "DBA"
                        }, {"id": 713, "categoryName": "解酒护肝", "activityPic": "", "categoryCode": "DBB"}, {
                            "id": 714,
                            "categoryName": "抗疲劳",
                            "activityPic": "",
                            "categoryCode": "DBC"
                        }, {"id": 715, "categoryName": "其他", "activityPic": "", "categoryCode": "DBD"}]
                    }, {
                        "id": 569,
                        "categoryName": "儿童保健食品",
                        "categoryCode": "DC",
                        "thirdCategory": [{
                            "id": 716,
                            "categoryName": "补维生素",
                            "activityPic": "",
                            "categoryCode": "DCA"
                        }, {"id": 717, "categoryName": "健脾消滞", "activityPic": "", "categoryCode": "DCB"}, {
                            "id": 718,
                            "categoryName": "营养补充",
                            "activityPic": "",
                            "categoryCode": "DCC"
                        }, {"id": 719, "categoryName": "健脑益智", "activityPic": "", "categoryCode": "DCD"}, {
                            "id": 720,
                            "categoryName": "其他",
                            "activityPic": "",
                            "categoryCode": "DCE"
                        }]
                    }, {
                        "id": 570,
                        "categoryName": "中老年保健食品",
                        "categoryCode": "DD",
                        "thirdCategory": [{
                            "id": 721,
                            "categoryName": "调节三高",
                            "activityPic": "",
                            "categoryCode": "DDA"
                        }, {"id": 722, "categoryName": "改善睡眠", "activityPic": "", "categoryCode": "DDB"}, {
                            "id": 723,
                            "categoryName": "骨骼保健",
                            "activityPic": "",
                            "categoryCode": "DDC"
                        }, {"id": 724, "categoryName": "提高免疫", "activityPic": "", "categoryCode": "DDD"}, {
                            "id": 725,
                            "categoryName": "心脏养护",
                            "activityPic": "",
                            "categoryCode": "DDE"
                        }]
                    }, {
                        "id": 571,
                        "categoryName": "综合养生",
                        "categoryCode": "DE",
                        "thirdCategory": [{
                            "id": 726,
                            "categoryName": "改善视力",
                            "activityPic": "",
                            "categoryCode": "DEA"
                        }, {"id": 727, "categoryName": "改善睡眠", "activityPic": "", "categoryCode": "DEB"}, {
                            "id": 728,
                            "categoryName": "改善胃肠道",
                            "activityPic": "",
                            "categoryCode": "DEC"
                        }, {"id": 729, "categoryName": "清热解毒", "activityPic": "", "categoryCode": "DED"}, {
                            "id": 730,
                            "categoryName": "免疫调节",
                            "activityPic": "",
                            "categoryCode": "DEE"
                        }, {"id": 731, "categoryName": "润肠通便", "activityPic": "", "categoryCode": "DEF"}]
                    }, {
                        "id": 572,
                        "categoryName": "维矿物质",
                        "categoryCode": "DF",
                        "thirdCategory": [{
                            "id": 732,
                            "categoryName": "调节钙铁锌铅",
                            "activityPic": "",
                            "categoryCode": "DFA"
                        }, {"id": 733, "categoryName": "复合维生素", "activityPic": "", "categoryCode": "DFB"}, {
                            "id": 734,
                            "categoryName": "B族维生素",
                            "activityPic": "",
                            "categoryCode": "DFC"
                        }, {"id": 735, "categoryName": "维生素C", "activityPic": "", "categoryCode": "DFD"}, {
                            "id": 736,
                            "categoryName": "维生素E",
                            "activityPic": "",
                            "categoryCode": "DFE"
                        }, {"id": 737, "categoryName": "β-胡萝卜素", "activityPic": "", "categoryCode": "DFF"}]
                    }, {
                        "id": 775,
                        "categoryName": "保健外用品",
                        "categoryCode": "B111",
                        "thirdCategory": [{
                            "id": 776,
                            "categoryName": "保健外用品",
                            "activityPic": "",
                            "categoryCode": "B1093"
                        }]
                    }],
                    "cardCategory": [{"id": 567, "categoryName": "女士保健食品", "categoryCode": "DA"}, {
                        "id": 568,
                        "categoryName": "男士保健食品",
                        "categoryCode": "DB"
                    }, {"id": 569, "categoryName": "儿童保健食品", "categoryCode": "DC"}, {
                        "id": 570,
                        "categoryName": "中老年保健食品",
                        "categoryCode": "DD"
                    }, {"id": 571, "categoryName": "综合养生", "categoryCode": "DE"}, {
                        "id": 572,
                        "categoryName": "维矿物质",
                        "categoryCode": "DF"
                    }, {"id": 775, "categoryName": "保健外用品", "categoryCode": "B111"}]
                }, {
                    "id": 541,
                    "activityUrl": "",
                    "activityUrlApp": "",
                    "categoryName": "个人护理",
                    "activityPic": "",
                    "showCard": 0,
                    "categoryCode": "E",
                    "secondCategory": [{
                        "id": 573,
                        "categoryName": "护肤用品",
                        "categoryCode": "EA",
                        "thirdCategory": [{
                            "id": 738,
                            "categoryName": "面部护理",
                            "activityPic": "",
                            "categoryCode": "EAA"
                        }, {"id": 739, "categoryName": "防晒品", "activityPic": "", "categoryCode": "EAB"}, {
                            "id": 740,
                            "categoryName": "唇部护理",
                            "activityPic": "",
                            "categoryCode": "EAC"
                        }, {"id": 741, "categoryName": "身体滋养", "activityPic": "", "categoryCode": "EAD"}, {
                            "id": 742,
                            "categoryName": "美容工具",
                            "activityPic": "",
                            "categoryCode": "EAE"
                        }]
                    }, {
                        "id": 574,
                        "categoryName": "口腔护理",
                        "categoryCode": "EB",
                        "thirdCategory": [{
                            "id": 743,
                            "categoryName": "漱口水",
                            "activityPic": "",
                            "categoryCode": "EBA"
                        }, {"id": 744, "categoryName": "牙齿美白", "activityPic": "", "categoryCode": "EBB"}, {
                            "id": 745,
                            "categoryName": "牙膏",
                            "activityPic": "",
                            "categoryCode": "EBC"
                        }, {"id": 746, "categoryName": "牙刷", "activityPic": "", "categoryCode": "EBD"}, {
                            "id": 747,
                            "categoryName": "牙线",
                            "activityPic": "",
                            "categoryCode": "EBE"
                        }]
                    }, {
                        "id": 575,
                        "categoryName": "身体护理",
                        "categoryCode": "EC",
                        "thirdCategory": [{
                            "id": 748,
                            "categoryName": "护眼用品",
                            "activityPic": "",
                            "categoryCode": "ECA"
                        }, {"id": 749, "categoryName": "护手用品", "activityPic": "", "categoryCode": "ECB"}, {
                            "id": 750,
                            "categoryName": "护足用品",
                            "activityPic": "",
                            "categoryCode": "ECC"
                        }, {"id": 751, "categoryName": "护发用品", "activityPic": "", "categoryCode": "ECD"}, {
                            "id": 752,
                            "categoryName": "沐浴用品",
                            "activityPic": "",
                            "categoryCode": "ECE"
                        }, {"id": 753, "categoryName": "祛臭止汗", "activityPic": "", "categoryCode": "ECF"}, {
                            "id": 754,
                            "categoryName": "花露水/驱蚊水/香体",
                            "activityPic": "",
                            "categoryCode": "ECG"
                        }, {"id": 755, "categoryName": "脱毛用品", "activityPic": "", "categoryCode": "ECH"}]
                    }, {
                        "id": 576,
                        "categoryName": "儿童用品",
                        "categoryCode": "ED",
                        "thirdCategory": [{
                            "id": 756,
                            "categoryName": "婴儿沐浴",
                            "activityPic": "",
                            "categoryCode": "EDA"
                        }, {"id": 757, "categoryName": "婴儿护肤", "activityPic": "", "categoryCode": "EDB"}, {
                            "id": 758,
                            "categoryName": "纸尿片",
                            "activityPic": "",
                            "categoryCode": "EDC"
                        }, {"id": 759, "categoryName": "驱蚊止痒", "activityPic": "", "categoryCode": "EDD"}, {
                            "id": 760,
                            "categoryName": "其他",
                            "activityPic": "",
                            "categoryCode": "EDE"
                        }]
                    }, {
                        "id": 577,
                        "categoryName": "女性用品",
                        "categoryCode": "EE",
                        "thirdCategory": [{
                            "id": 761,
                            "categoryName": "女性清洁护理",
                            "activityPic": "",
                            "categoryCode": "EEA"
                        }, {"id": 762, "categoryName": "孕、产妇用品", "activityPic": "", "categoryCode": "EEB"}, {
                            "id": 763,
                            "categoryName": "卫生巾/护垫/棉条",
                            "activityPic": "",
                            "categoryCode": "EEC"
                        }, {"id": 764, "categoryName": "其他", "activityPic": "", "categoryCode": "EED"}]
                    }, {
                        "id": 578,
                        "categoryName": "男性用品",
                        "categoryCode": "EF",
                        "thirdCategory": [{
                            "id": 765,
                            "categoryName": "男士洗液",
                            "activityPic": "",
                            "categoryCode": "EFA"
                        }, {"id": 766, "categoryName": "男士护肤", "activityPic": "", "categoryCode": "EFB"}, {
                            "id": 767,
                            "categoryName": "剃须用品",
                            "activityPic": "",
                            "categoryCode": "EFC"
                        }]
                    }],
                    "cardCategory": [{"id": 573, "categoryName": "护肤用品", "categoryCode": "EA"}, {
                        "id": 574,
                        "categoryName": "口腔护理",
                        "categoryCode": "EB"
                    }, {"id": 575, "categoryName": "身体护理", "categoryCode": "EC"}, {
                        "id": 576,
                        "categoryName": "儿童用品",
                        "categoryCode": "ED"
                    }, {"id": 577, "categoryName": "女性用品", "categoryCode": "EE"}, {
                        "id": 578,
                        "categoryName": "男性用品",
                        "categoryCode": "EF"
                    }]
                }, {
                    "id": 542,
                    "activityUrl": "",
                    "activityUrlApp": "",
                    "categoryName": "生活百货",
                    "activityPic": "",
                    "showCard": 0,
                    "categoryCode": "F",
                    "secondCategory": [{
                        "id": 579,
                        "categoryName": "日用百货",
                        "categoryCode": "FA",
                        "thirdCategory": [{
                            "id": 768,
                            "categoryName": "纸类",
                            "activityPic": "",
                            "categoryCode": "FAA"
                        }, {"id": 769, "categoryName": "洗涤类", "activityPic": "", "categoryCode": "FAB"}, {
                            "id": 770,
                            "categoryName": "防蚊虫类",
                            "activityPic": "",
                            "categoryCode": "FAC"
                        }, {"id": 771, "categoryName": "其他", "activityPic": "", "categoryCode": "FAD"}]
                    }, {
                        "id": 580,
                        "categoryName": "日用食品",
                        "categoryCode": "FB",
                        "thirdCategory": [{
                            "id": 772,
                            "categoryName": "国产食品",
                            "activityPic": "",
                            "categoryCode": "FBE"
                        }, {"id": 773, "categoryName": "进口食品", "activityPic": "", "categoryCode": "FBF"}]
                    }],
                    "cardCategory": [{"id": 579, "categoryName": "日用百货", "categoryCode": "FA"}, {
                        "id": 580,
                        "categoryName": "日用食品",
                        "categoryCode": "FB"
                    }]
                }, {
                    "id": 779,
                    "activityUrl": "",
                    "activityUrlApp": "",
                    "categoryName": "sd",
                    "activityPic": "",
                    "showCard": 0,
                    "categoryCode": "AS",
                    "cardCategory": []
                }, {
                    "id": 778,
                    "activityUrl": "",
                    "activityUrlApp": "",
                    "categoryName": "中西成1",
                    "activityPic": "",
                    "showCard": 0,
                    "categoryCode": "AX",
                    "cardCategory": []
                }, {
                    "id": 777,
                    "activityUrl": "",
                    "activityUrlApp": "",
                    "categoryName": "12",
                    "activityPic": "",
                    "showCard": 0,
                    "categoryCode": "E",
                    "cardCategory": []
                }, {
                    "id": 791,
                    "activityUrl": "",
                    "activityUrlApp": "",
                    "categoryName": "测试分类",
                    "activityPic": "http://p8.maiyaole.com/fky/img/1499668506284.jpg",
                    "showCard": 0,
                    "categoryCode": "aaaa",
                    "secondCategory": [{
                        "id": 792,
                        "categoryName": "二级分类01",
                        "categoryCode": "aaa",
                        "thirdCategory": [{
                            "id": 807,
                            "categoryName": "三级分类01",
                            "activityPic": "http://p8.maiyaole.com/fky/img/1499135901158.jpg",
                            "categoryCode": "aaaaa"
                        }, {
                            "id": 808,
                            "categoryName": "三级分类02",
                            "activityPic": "http://p8.maiyaole.com/fky/img/1499135959459.jpg",
                            "categoryCode": "HAB"
                        }]
                    }, {"id": 793, "categoryName": "二级分类02", "categoryCode": "HB"}, {
                        "id": 794,
                        "categoryName": "二级分类03",
                        "categoryCode": "HC"
                    }, {"id": 795, "categoryName": "二级分类04", "categoryCode": "HD"}, {
                        "id": 796,
                        "categoryName": "二级分类05",
                        "categoryCode": "HE"
                    }, {"id": 797, "categoryName": "二级分类06", "categoryCode": "HF"}, {
                        "id": 798,
                        "categoryName": "二级分类07",
                        "categoryCode": "HG"
                    }, {"id": 799, "categoryName": "测试分类08", "categoryCode": "HH"}, {
                        "id": 800,
                        "categoryName": "测试分类09",
                        "categoryCode": "HI"
                    }, {"id": 801, "categoryName": "测试分类10", "categoryCode": "HJ"}, {
                        "id": 802,
                        "categoryName": "测试分类11",
                        "categoryCode": "HK"
                    }, {"id": 803, "categoryName": "测试分类12", "categoryCode": "HL"}, {
                        "id": 804,
                        "categoryName": "测试分类13",
                        "categoryCode": "HM"
                    }, {"id": 805, "categoryName": "测试分类14", "categoryCode": "HN"}, {
                        "id": 806,
                        "categoryName": "测试分类15",
                        "categoryCode": "HO"
                    }],
                    "cardCategory": [{"id": 792, "categoryName": "二级分类01", "categoryCode": "aaa"}, {
                        "id": 793,
                        "categoryName": "二级分类02",
                        "categoryCode": "HB"
                    }, {"id": 794, "categoryName": "二级分类03", "categoryCode": "HC"}, {
                        "id": 795,
                        "categoryName": "二级分类04",
                        "categoryCode": "HD"
                    }, {"id": 796, "categoryName": "二级分类05", "categoryCode": "HE"}, {
                        "id": 797,
                        "categoryName": "二级分类06",
                        "categoryCode": "HF"
                    }, {"id": 798, "categoryName": "二级分类07", "categoryCode": "HG"}, {
                        "id": 799,
                        "categoryName": "测试分类08",
                        "categoryCode": "HH"
                    }, {"id": 800, "categoryName": "测试分类09", "categoryCode": "HI"}, {
                        "id": 801,
                        "categoryName": "测试分类10",
                        "categoryCode": "HJ"
                    }, {"id": 802, "categoryName": "测试分类11", "categoryCode": "HK"}, {
                        "id": 803,
                        "categoryName": "测试分类12",
                        "categoryCode": "HL"
                    }, {"id": 804, "categoryName": "测试分类13", "categoryCode": "HM"}, {
                        "id": 805,
                        "categoryName": "测试分类14",
                        "categoryCode": "HN"
                    }, {"id": 806, "categoryName": "测试分类15", "categoryCode": "HO"}]
                }]
            },
            leftContent: [],
            now:0,
            toggle:!1
        }
    }

    tabs(index) {
        this.setState({
            now: index,
            toggle:!1
        });
    };

    togg() {
        this.setState({
            toggle:!this.state.toggle
        });
    };

// 获取数据
    componentDidMount() {

    }

    render() {
        var sty = {paddingBottom:'0.4rem'}
        return (
            <div>
                <header className="header">
                    <div className="search_contaienr">
                        <a href="/search.html?redirecturl=%2Fclassify.html"><input id="search_input" className="search_input" type="text" placeholder="药品名/拼音缩写/厂家"  /></a>
                    </div>
                </header>
                <div className="classify">
                    {
                        (this.state.data.category && this.state.data.category.length) &&
                            <div className="classify_box">
                            <div className="classify-tab ui_verscrollpl">
                                <div className="cont">
                                    <i className="strip" style={{top:this.state.now * 1.24 + 'rem'}}></i>
                                    <ul>
                                        {this.state.data.category.map((item, index) => (
                                            <li onClick={this.tabs.bind(this,index)} key={index} className={this.state.now == index ? 'active' : ''}>{item.categoryName}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="classify-right">
                            {
                                this.state.data.category.map((value, i) => (
                                    <div key={i} className={this.state.now == i ? 'classify-content animated ui_verscrollpl active' : 'classify-content animated ui_verscrollpl'}>
                                        <div className="classify-wrapper">

                                            {value.activityPic&&
                                            <div className="add-pic" data-activityUrl={value.activityUrl} data-activityUrlApp={value.activityUrlApp}>
                                                <a><img src={value.activityPic} alt="" /></a>
                                            </div>
                                            }
                                            {value.showCard == 0 && value.cardCategory && value.cardCategory.length&&
                                            <div className="category" style={{paddingBottom:value.cardCategory.length>6?'0.4rem':'10px'}}>
                                                <ul style={{maxHeight:this.state.toggle?(Math.ceil(value.cardCategory.length / 3) * 40 + 10) / 37.5 + 'rem':'1.6rem'}}>
                                                    {value.cardCategory.map((item, n) => (
                                                        <li className={ n == 0 ? 'active':''} key={n}>
                                                            <a href="#{item.categoryCode}">{item.categoryName}</a>
                                                        </li>
                                                    ))}
                                                </ul>
                                                {value.cardCategory && value.cardCategory.length > 6&&
                                                <div className={this.state.toggle ?'toggle-btn rotate':'toggle-btn'} onClick={this.togg.bind(this)}>
                                                    <i></i>
                                                </div>
                                                }
                                            </div>
                                            }
                                            { value.secondCategory && value.secondCategory.length &&
                                            <div className="category-wrapper">
                                                {
                                                    value.secondCategory.map((item, n) => (
                                                        <dl key={n} name="{item.categoryCode}" id="{item.categoryCode}">
                                                            <dt>{item.categoryName}</dt>
                                            {item.thirdCategory && item.thirdCategory.length &&
                                                <div className="cont">
                                                {
                                                    item.thirdCategory.map((val, m) => (
                                                        <dd key={m}>
                                                            <a href="/result_product.html?product2ndLMCode={val.categoryCode}">
                                                                <img src={val.activityPic} alt=""/>
                                                                <p>{val.categoryName}</p>
                                                            </a>
                                                        </dd>
                                                    ))
                                                }
                                                </div>
                                            }
                                        </dl>
                                                ))
                                                }
                                    </div>
                                        }
                                </div>
                                 </div>
                            ))}
                          </div>
                 </div>
                }
                </div>
                <Footer></Footer>
            </div>
        )
    }
}