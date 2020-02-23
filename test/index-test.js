"use strict";
const TextLintTester = require("textlint-tester");
const tester = new TextLintTester();
// rule
const rule = require("../src/index");
// ruleName, rule, { valid, invalid }
tester.run("rule", rule, {
    valid: [
        // 常用漢字（サロゲートペア除く）
        "亜哀挨愛曖悪握圧扱宛嵐安案暗以衣位囲医依委威為畏胃尉異移萎偉椅彙意違維慰遺緯域育一壱逸茨芋引印因咽姻員院淫陰飲隠韻右宇羽雨唄鬱畝浦運雲永泳英映栄営詠影鋭衛易疫益液駅悦越謁閲円延沿炎怨宴媛援園煙猿遠鉛塩演縁艶汚王凹央応往押旺欧殴桜翁奥横岡屋億憶臆虞乙俺卸音恩温穏下化火加可仮何花佳価果河苛科架夏家荷華菓貨渦過嫁暇禍靴寡歌箇稼課蚊牙瓦我画芽賀雅餓介回灰会快戒改怪拐悔海界皆械絵開階塊楷解潰壊懐諧貝外劾害崖涯街慨蓋該概骸垣柿各角拡革格核殻郭覚較隔閣確獲嚇穫学岳楽額顎掛潟括活喝渇割葛滑褐轄且株釜鎌刈干刊甘汗缶完肝官冠巻看陥乾勘患貫寒喚堪換敢棺款間閑勧寛幹感漢慣管関歓監緩憾還館環簡観韓艦鑑丸含岸岩玩眼頑顔願企伎危机気岐希忌汽奇祈季紀軌既記起飢鬼帰基寄規亀喜幾揮期棋貴棄毀旗器畿輝機騎技宜偽欺義疑儀戯擬犠議菊吉喫詰却客脚逆虐九久及弓丘旧休吸朽臼求究泣急級糾宮救球給嗅窮牛去巨居拒拠挙虚許距魚御漁凶共叫狂京享供協況峡挟狭恐恭胸脅強教郷境橋矯鏡競響驚仰暁業凝曲局極玉巾斤均近金菌勤琴筋僅禁緊錦謹襟吟銀区句苦駆具惧愚空偶遇隅串屈掘窟熊繰君訓勲薫軍郡群兄刑形系径茎係型契計恵啓掲渓経蛍敬景軽傾携継詣慶憬稽憩警鶏芸迎鯨隙劇撃激桁欠穴血決結傑潔月犬件見券肩建研県倹兼剣拳軒健険圏堅検嫌献絹遣権憲賢謙鍵繭顕験懸元幻玄言弦限原現舷減源厳己戸古呼固股虎孤弧故枯個庫湖雇誇鼓錮顧五互午呉後娯悟碁語誤護口工公勾孔功巧広甲交光向后好江考行坑孝抗攻更効幸拘肯侯厚恒洪皇紅荒郊香候校耕航貢降高康控梗黄喉慌港硬絞項溝鉱構綱酵稿興衡鋼講購乞号合拷剛傲豪克告谷刻国黒穀酷獄骨駒込頃今困昆恨根婚混痕紺魂墾懇左佐沙査砂唆差詐鎖座挫才再災妻采砕宰栽彩採済祭斎細菜最裁債催塞歳載際埼在材剤財罪崎作削昨柵索策酢搾錯咲冊札刷刹拶殺察撮擦雑皿三山参桟蚕惨産傘散算酸賛残斬暫士子支止氏仕史司四市矢旨死糸至伺志私使刺始姉枝祉肢姿思指施師恣紙脂視紫詞歯嗣試詩資飼誌雌摯賜諮示字寺次耳自似児事侍治持時滋慈辞磁餌璽鹿式識軸七叱失室疾執湿嫉漆質実芝写社車舎者射捨赦斜煮遮謝邪蛇勺尺借酌釈爵若弱寂手主守朱取狩首殊珠酒腫種趣寿受呪授需儒樹収囚州舟秀周宗拾秋臭修袖終羞習週就衆集愁酬醜蹴襲十汁充住柔重従渋銃獣縦叔祝宿淑粛縮塾熟出述術俊春瞬旬巡盾准殉純循順準潤遵処初所書庶暑署緒諸女如助序叙徐除小升少召匠床抄肖尚招承昇松沼昭宵将消症祥称笑唱商渉章紹訟勝掌晶焼焦硝粧詔証象傷奨照詳彰障憧衝賞償礁鐘上丈冗条状乗城浄剰常情場畳蒸縄壌嬢錠譲醸色拭食植殖飾触嘱織職辱尻心申伸臣芯身辛侵信津神唇娠振浸真針深紳進森診寝慎新審震薪親人刃仁尽迅甚陣尋腎須図水吹垂炊帥粋衰推酔遂睡穂錘随髄枢崇数据杉裾寸瀬是井世正生成西声制姓征性青斉政星牲省凄逝清盛婿晴勢聖誠精製誓静請整醒税夕斥石赤昔析席脊隻惜戚責跡積績籍切折拙窃接設雪摂節説舌絶千川仙占先宣専泉浅洗染扇栓旋船戦煎羨腺詮践箋銭銑潜線遷選薦繊鮮全前善然禅漸膳繕狙阻祖租素措粗組疎訴塑遡礎双壮早争走奏相荘草送倉捜挿桑巣掃曹曽爽窓創喪痩葬装僧想層総遭槽踪操燥霜騒藻造像増憎蔵贈臓即束足促則息捉速側測俗族属賊続卒率存村孫尊損遜他多汰打妥唾堕惰駄太対体耐待怠胎退帯泰堆袋逮替貸隊滞態戴大代台第題滝宅択沢卓拓託濯諾濁但達脱奪棚誰丹旦担単炭胆探淡短嘆端綻誕鍛団男段断弾暖談壇地池知値恥致遅痴稚置緻竹畜逐蓄築秩窒茶着嫡中仲虫沖宙忠抽注昼柱衷酎鋳駐著貯丁弔庁兆町長挑帳張彫眺釣頂鳥朝脹貼超腸跳徴嘲潮澄調聴懲直勅捗沈珍朕陳賃鎮追椎墜通痛塚漬坪爪鶴低呈廷弟定底抵邸亭貞帝訂庭逓停偵堤提程艇締諦泥的笛摘滴適敵溺迭哲鉄徹撤天典店点展添転塡田伝殿電斗吐妬徒途都渡塗賭土奴努度怒刀冬灯当投豆東到逃倒凍唐島桃討透党悼盗陶塔搭棟湯痘登答等筒統稲踏糖頭謄藤闘騰同洞胴動堂童道働銅導瞳峠匿特得督徳篤毒独読栃凸突届屯豚頓貪鈍曇丼那奈内梨謎鍋南軟難二尼弐匂肉虹日入乳尿任妊忍認寧熱年念捻粘燃悩納能脳農濃把波派破覇馬婆罵拝杯背肺俳配排敗廃輩売倍梅培陪媒買賠白伯拍泊迫剝舶博薄麦漠縛爆箱箸畑肌八鉢発髪伐抜罰閥反半氾犯帆汎伴判坂阪板版班畔般販斑飯搬煩頒範繁藩晩番蛮盤比皮妃否批彼披肥非卑飛疲秘被悲扉費碑罷避尾眉美備微鼻膝肘匹必泌筆姫百氷表俵票評漂標苗秒病描猫品浜貧賓頻敏瓶不夫父付布扶府怖阜附訃負赴浮婦符富普腐敷膚賦譜侮武部舞封風伏服副幅復福腹複覆払沸仏物粉紛雰噴墳憤奮分文聞丙平兵併並柄陛閉塀幣弊蔽餅米壁璧癖別蔑片辺返変偏遍編弁便勉歩保哺捕補舗母募墓慕暮簿方包芳邦奉宝抱放法泡胞俸倣峰砲崩訪報蜂豊飽褒縫亡乏忙坊妨忘防房肪某冒剖紡望傍帽棒貿貌暴膨謀頰北木朴牧睦僕墨撲没勃堀本奔翻凡盆麻摩磨魔毎妹枚昧埋幕膜枕又末抹万満慢漫未味魅岬密蜜脈妙民眠矛務無夢霧娘名命明迷冥盟銘鳴滅免面綿麺茂模毛妄盲耗猛網目黙門紋問匁冶夜野弥厄役約訳薬躍闇由油喩愉諭輸癒唯友有勇幽悠郵湧猶裕遊雄誘憂融優与予余誉預幼用羊妖洋要容庸揚揺葉陽溶腰様瘍踊窯養擁謡曜抑沃浴欲翌翼拉裸羅来雷頼絡落酪辣乱卵覧濫藍欄吏利里理痢裏履璃離陸立律慄略柳流留竜粒隆硫侶旅虜慮了両良料涼猟陵量僚領寮療瞭糧力緑林厘倫輪隣臨瑠涙累塁類令礼冷励戻例鈴零霊隷齢麗暦歴列劣烈裂恋連廉練錬呂炉賂路露老労弄郎朗浪廊楼漏籠六録麓論和話賄脇惑枠湾腕"
    ],
    invalid: [
        // single match
        {
            text: "髙",
            errors: [
                {
                    message: "「髙」はJIS X 2013範囲外の文字です。",
                    line: 1,
                    column: 1
                }
            ]
        },
        // multiple match
        // JIS X 2013範囲外文字を適当に100文字
        {
            text: `㐀㐁㐅㐌㐖㐜㐡㐤㐧㐨㐩㐪㐭㐯㐰㐱㐲㐳㐴㐶㐸㐹㐺㐻㐼㑁㑂㑃㑄㑅㑆㑉㑊㑋㑌㑍㑎㑐㑑㑒㑓㑗㑘㑙㑚㑛㑜㑞㑟㑣㑤㑥㑦㑧㑮㑯㑱㑳㑴㑵㑶㑷㑸㑹㑻㑼㑽㑾㑿㒀㒁㒂㒃㒄㒅㒆㒇㒈㒉㒊㒋㒌㒍㒎㒑㒓㒔㒕㒖㒙㒚㒛㒜㒝㒞㒟㒠㒡㒤㒥`,
            errors: [
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㐀」はJIS X 2013範囲外の文字です。",
                    "index": 0,
                    "line": 1,
                    "column": 1,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㐁」はJIS X 2013範囲外の文字です。",
                    "index": 1,
                    "line": 1,
                    "column": 2,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㐅」はJIS X 2013範囲外の文字です。",
                    "index": 2,
                    "line": 1,
                    "column": 3,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㐌」はJIS X 2013範囲外の文字です。",
                    "index": 3,
                    "line": 1,
                    "column": 4,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㐖」はJIS X 2013範囲外の文字です。",
                    "index": 4,
                    "line": 1,
                    "column": 5,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㐜」はJIS X 2013範囲外の文字です。",
                    "index": 5,
                    "line": 1,
                    "column": 6,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㐡」はJIS X 2013範囲外の文字です。",
                    "index": 6,
                    "line": 1,
                    "column": 7,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㐤」はJIS X 2013範囲外の文字です。",
                    "index": 7,
                    "line": 1,
                    "column": 8,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㐧」はJIS X 2013範囲外の文字です。",
                    "index": 8,
                    "line": 1,
                    "column": 9,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㐨」はJIS X 2013範囲外の文字です。",
                    "index": 9,
                    "line": 1,
                    "column": 10,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㐩」はJIS X 2013範囲外の文字です。",
                    "index": 10,
                    "line": 1,
                    "column": 11,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㐪」はJIS X 2013範囲外の文字です。",
                    "index": 11,
                    "line": 1,
                    "column": 12,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㐭」はJIS X 2013範囲外の文字です。",
                    "index": 12,
                    "line": 1,
                    "column": 13,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㐯」はJIS X 2013範囲外の文字です。",
                    "index": 13,
                    "line": 1,
                    "column": 14,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㐰」はJIS X 2013範囲外の文字です。",
                    "index": 14,
                    "line": 1,
                    "column": 15,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㐱」はJIS X 2013範囲外の文字です。",
                    "index": 15,
                    "line": 1,
                    "column": 16,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㐲」はJIS X 2013範囲外の文字です。",
                    "index": 16,
                    "line": 1,
                    "column": 17,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㐳」はJIS X 2013範囲外の文字です。",
                    "index": 17,
                    "line": 1,
                    "column": 18,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㐴」はJIS X 2013範囲外の文字です。",
                    "index": 18,
                    "line": 1,
                    "column": 19,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㐶」はJIS X 2013範囲外の文字です。",
                    "index": 19,
                    "line": 1,
                    "column": 20,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㐸」はJIS X 2013範囲外の文字です。",
                    "index": 20,
                    "line": 1,
                    "column": 21,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㐹」はJIS X 2013範囲外の文字です。",
                    "index": 21,
                    "line": 1,
                    "column": 22,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㐺」はJIS X 2013範囲外の文字です。",
                    "index": 22,
                    "line": 1,
                    "column": 23,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㐻」はJIS X 2013範囲外の文字です。",
                    "index": 23,
                    "line": 1,
                    "column": 24,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㐼」はJIS X 2013範囲外の文字です。",
                    "index": 24,
                    "line": 1,
                    "column": 25,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑁」はJIS X 2013範囲外の文字です。",
                    "index": 25,
                    "line": 1,
                    "column": 26,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑂」はJIS X 2013範囲外の文字です。",
                    "index": 26,
                    "line": 1,
                    "column": 27,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑃」はJIS X 2013範囲外の文字です。",
                    "index": 27,
                    "line": 1,
                    "column": 28,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑄」はJIS X 2013範囲外の文字です。",
                    "index": 28,
                    "line": 1,
                    "column": 29,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑅」はJIS X 2013範囲外の文字です。",
                    "index": 29,
                    "line": 1,
                    "column": 30,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑆」はJIS X 2013範囲外の文字です。",
                    "index": 30,
                    "line": 1,
                    "column": 31,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑉」はJIS X 2013範囲外の文字です。",
                    "index": 31,
                    "line": 1,
                    "column": 32,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑊」はJIS X 2013範囲外の文字です。",
                    "index": 32,
                    "line": 1,
                    "column": 33,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑋」はJIS X 2013範囲外の文字です。",
                    "index": 33,
                    "line": 1,
                    "column": 34,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑌」はJIS X 2013範囲外の文字です。",
                    "index": 34,
                    "line": 1,
                    "column": 35,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑍」はJIS X 2013範囲外の文字です。",
                    "index": 35,
                    "line": 1,
                    "column": 36,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑎」はJIS X 2013範囲外の文字です。",
                    "index": 36,
                    "line": 1,
                    "column": 37,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑐」はJIS X 2013範囲外の文字です。",
                    "index": 37,
                    "line": 1,
                    "column": 38,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑑」はJIS X 2013範囲外の文字です。",
                    "index": 38,
                    "line": 1,
                    "column": 39,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑒」はJIS X 2013範囲外の文字です。",
                    "index": 39,
                    "line": 1,
                    "column": 40,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑓」はJIS X 2013範囲外の文字です。",
                    "index": 40,
                    "line": 1,
                    "column": 41,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑗」はJIS X 2013範囲外の文字です。",
                    "index": 41,
                    "line": 1,
                    "column": 42,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑘」はJIS X 2013範囲外の文字です。",
                    "index": 42,
                    "line": 1,
                    "column": 43,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑙」はJIS X 2013範囲外の文字です。",
                    "index": 43,
                    "line": 1,
                    "column": 44,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑚」はJIS X 2013範囲外の文字です。",
                    "index": 44,
                    "line": 1,
                    "column": 45,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑛」はJIS X 2013範囲外の文字です。",
                    "index": 45,
                    "line": 1,
                    "column": 46,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑜」はJIS X 2013範囲外の文字です。",
                    "index": 46,
                    "line": 1,
                    "column": 47,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑞」はJIS X 2013範囲外の文字です。",
                    "index": 47,
                    "line": 1,
                    "column": 48,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑟」はJIS X 2013範囲外の文字です。",
                    "index": 48,
                    "line": 1,
                    "column": 49,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑣」はJIS X 2013範囲外の文字です。",
                    "index": 49,
                    "line": 1,
                    "column": 50,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑤」はJIS X 2013範囲外の文字です。",
                    "index": 50,
                    "line": 1,
                    "column": 51,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑥」はJIS X 2013範囲外の文字です。",
                    "index": 51,
                    "line": 1,
                    "column": 52,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑦」はJIS X 2013範囲外の文字です。",
                    "index": 52,
                    "line": 1,
                    "column": 53,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑧」はJIS X 2013範囲外の文字です。",
                    "index": 53,
                    "line": 1,
                    "column": 54,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑮」はJIS X 2013範囲外の文字です。",
                    "index": 54,
                    "line": 1,
                    "column": 55,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑯」はJIS X 2013範囲外の文字です。",
                    "index": 55,
                    "line": 1,
                    "column": 56,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑱」はJIS X 2013範囲外の文字です。",
                    "index": 56,
                    "line": 1,
                    "column": 57,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑳」はJIS X 2013範囲外の文字です。",
                    "index": 57,
                    "line": 1,
                    "column": 58,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑴」はJIS X 2013範囲外の文字です。",
                    "index": 58,
                    "line": 1,
                    "column": 59,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑵」はJIS X 2013範囲外の文字です。",
                    "index": 59,
                    "line": 1,
                    "column": 60,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑶」はJIS X 2013範囲外の文字です。",
                    "index": 60,
                    "line": 1,
                    "column": 61,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑷」はJIS X 2013範囲外の文字です。",
                    "index": 61,
                    "line": 1,
                    "column": 62,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑸」はJIS X 2013範囲外の文字です。",
                    "index": 62,
                    "line": 1,
                    "column": 63,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑹」はJIS X 2013範囲外の文字です。",
                    "index": 63,
                    "line": 1,
                    "column": 64,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑻」はJIS X 2013範囲外の文字です。",
                    "index": 64,
                    "line": 1,
                    "column": 65,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑼」はJIS X 2013範囲外の文字です。",
                    "index": 65,
                    "line": 1,
                    "column": 66,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑽」はJIS X 2013範囲外の文字です。",
                    "index": 66,
                    "line": 1,
                    "column": 67,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑾」はJIS X 2013範囲外の文字です。",
                    "index": 67,
                    "line": 1,
                    "column": 68,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㑿」はJIS X 2013範囲外の文字です。",
                    "index": 68,
                    "line": 1,
                    "column": 69,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㒀」はJIS X 2013範囲外の文字です。",
                    "index": 69,
                    "line": 1,
                    "column": 70,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㒁」はJIS X 2013範囲外の文字です。",
                    "index": 70,
                    "line": 1,
                    "column": 71,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㒂」はJIS X 2013範囲外の文字です。",
                    "index": 71,
                    "line": 1,
                    "column": 72,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㒃」はJIS X 2013範囲外の文字です。",
                    "index": 72,
                    "line": 1,
                    "column": 73,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㒄」はJIS X 2013範囲外の文字です。",
                    "index": 73,
                    "line": 1,
                    "column": 74,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㒅」はJIS X 2013範囲外の文字です。",
                    "index": 74,
                    "line": 1,
                    "column": 75,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㒆」はJIS X 2013範囲外の文字です。",
                    "index": 75,
                    "line": 1,
                    "column": 76,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㒇」はJIS X 2013範囲外の文字です。",
                    "index": 76,
                    "line": 1,
                    "column": 77,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㒈」はJIS X 2013範囲外の文字です。",
                    "index": 77,
                    "line": 1,
                    "column": 78,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㒉」はJIS X 2013範囲外の文字です。",
                    "index": 78,
                    "line": 1,
                    "column": 79,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㒊」はJIS X 2013範囲外の文字です。",
                    "index": 79,
                    "line": 1,
                    "column": 80,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㒋」はJIS X 2013範囲外の文字です。",
                    "index": 80,
                    "line": 1,
                    "column": 81,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㒌」はJIS X 2013範囲外の文字です。",
                    "index": 81,
                    "line": 1,
                    "column": 82,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㒍」はJIS X 2013範囲外の文字です。",
                    "index": 82,
                    "line": 1,
                    "column": 83,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㒎」はJIS X 2013範囲外の文字です。",
                    "index": 83,
                    "line": 1,
                    "column": 84,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㒑」はJIS X 2013範囲外の文字です。",
                    "index": 84,
                    "line": 1,
                    "column": 85,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㒓」はJIS X 2013範囲外の文字です。",
                    "index": 85,
                    "line": 1,
                    "column": 86,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㒔」はJIS X 2013範囲外の文字です。",
                    "index": 86,
                    "line": 1,
                    "column": 87,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㒕」はJIS X 2013範囲外の文字です。",
                    "index": 87,
                    "line": 1,
                    "column": 88,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㒖」はJIS X 2013範囲外の文字です。",
                    "index": 88,
                    "line": 1,
                    "column": 89,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㒙」はJIS X 2013範囲外の文字です。",
                    "index": 89,
                    "line": 1,
                    "column": 90,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㒚」はJIS X 2013範囲外の文字です。",
                    "index": 90,
                    "line": 1,
                    "column": 91,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㒛」はJIS X 2013範囲外の文字です。",
                    "index": 91,
                    "line": 1,
                    "column": 92,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㒜」はJIS X 2013範囲外の文字です。",
                    "index": 92,
                    "line": 1,
                    "column": 93,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㒝」はJIS X 2013範囲外の文字です。",
                    "index": 93,
                    "line": 1,
                    "column": 94,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㒞」はJIS X 2013範囲外の文字です。",
                    "index": 94,
                    "line": 1,
                    "column": 95,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㒟」はJIS X 2013範囲外の文字です。",
                    "index": 95,
                    "line": 1,
                    "column": 96,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㒠」はJIS X 2013範囲外の文字です。",
                    "index": 96,
                    "line": 1,
                    "column": 97,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㒡」はJIS X 2013範囲外の文字です。",
                    "index": 97,
                    "line": 1,
                    "column": 98,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㒤」はJIS X 2013範囲外の文字です。",
                    "index": 98,
                    "line": 1,
                    "column": 99,
                    "severity": 2
                },
                {
                    "type": "lint",
                    "ruleId": "rule",
                    "message": "「㒥」はJIS X 2013範囲外の文字です。",
                    "index": 99,
                    "line": 1,
                    "column": 100,
                    "severity": 2
                }
            ]
        },

    ]
});