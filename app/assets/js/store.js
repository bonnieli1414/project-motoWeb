"use strict"
// 門市資料物件
const StoreData = {
    "Motorola 掛招經銷商門市": {
        "縣市": ["台北市", "新北市", "台中市", "台南市", "高雄市"],
        "門市":
            [
                "京鑫通訊 - 台北市士林區天母西路77號 / 02-2876-8966",
                "全民通信 - 新北市三重區正義北路360號 / 02-8981-8989",
                "佶事通訊 - 新北市新店區北新路三段140號 / 02-2915-0000",
                "巨將通訊器材行 - 新北市新莊區民安路162號 / 02-2202-9898",
                "欣通電話器材行 - 新北市新店區北新路二段161號 / 02-2917-6655",
                "龍昇通訊社 - 新北市三重區三和路二段2號 / 02-2977-8277",
                "勁宇通信行 - 台中市西區民生路37-1號 / 04-2227-7118",
                "尚欣通訊行 - 台南市中西區永華路一段54號 / 06-2281826",
                "大志通訊有限公司 - 高雄市仁武區鳳仁路42號 / 07-3723758",
                "寶碁有限公司 - 高雄市鳳山區五甲二路598之1號 / 07-8412858",
                "大中通信科技有限公司 - 高雄市鳳山區光復路一段69號 / 07-7470622",
                "南站通信 - 高雄市前金區成功一路435號 / 07-2619777"
            ]
    },
    "全省": ["台灣大哥大 掛招門市 / 0809-000-852 / 02-6606-2999"],
    "經銷門市": {
        "北區": [
            "六角通訊 - 新竹縣竹東鎮東寧路三段81號一樓 / 0973-629-168",
            "手機屋 - 新竹縣竹東鎮東寧路三段92號一樓 / 0968-901-399",
            "台灣行動屋 - 管理部 - 桃園市中壢區忠孝路52號 / 0908-951-988",
            "台灣行動屋 - 莊敬一店 - 桃園市中壢區莊敬路125號 / 03-4512275",
            "台灣行動屋 - 莊敬二店 - 桃園市中壢區莊敬路900號 / 03-4631959",
            "台灣行動屋 - 莊敬三店 - 桃園市中壢區莊敬路122-1號 / 03-4553969",
            "台灣行動屋 - 榮民店 - 桃園市中壢區榮民路99號 / 03-4357666",
            "台灣行動屋 - 忠孝一店 - 桃園市中壢區忠孝路63號 / 03-4625158",
            "台灣行動屋 - 忠孝二店 - 桃園市中壢區忠孝路52號 / 03-4615331",
            "台灣行動屋 - 忠孝三店 - 桃園市中壢區忠孝路59號 / 03-4631035",
            "台灣行動屋 - 中華店 - 桃園市中壢區中華路一段178號 / 03-4525595",
            "台灣行動屋 - 龍東 - 桃園市中壢區龍東里龍東路315號1樓 / 0985-466-433",
            "台灣行動屋 - 龍東店 - 桃園市中壢區龍東路317號 / 03-4659299",
            "台灣行動屋 - 過嶺店 - 桃園市中壢區松義路116號 / 03-4200996",
            "台灣行動屋 - 中山東店 - 桃園市中壢區中山東路三段206號 / 03-4561303",
            "台灣行動屋 - 桃園中山店 - 桃園市桃園區中山路939號 (櫃號：D04) / 03-3692066",
            "台灣行動屋 - 龍安店 - 桃園市桃園區龍安街83號 / 03-2170505",
            "台灣行動屋 - 永安一店 - 桃園市桃園區永安路335號 / 0908-153-525",
            "台灣行動屋 - 廣福店 - 桃園市八德區廣福路73號 / 03-3611515",
            "台灣行動屋 - 福國店 - 桃園市八德區大同里福國北街82號1樓 / 03-3760696",
            "台灣行動屋 - 義勇店 - 桃園市八德區大義里義勇街112號1樓 / 03-3777119",
            "台灣行動屋 - 大江店 - 桃園市中壢區中園路二段501號GB樓 / 03-4680555",
            "台灣行動屋 - 平鎮店 - 桃園市平鎮區南東路57-1號1 / 0908-169-556",
            "向東通訊 - 萬隆店 - 台北市文山區羅斯福路五段206-3號 / 0983-884-158",
            "向東通訊 - 南港店 - 台北市南港區忠孝東路六段36號 / 0968-417-157",
            "向東通訊 - 光華店 - 台北市中山區松江路9之1號 / 0908-622-628",
            "向東通訊 - 板橋店 - 新北市板橋區民族路75號 / 0908-951-391",
            "向東通訊 - 蘆洲店 - 新北市蘆洲區三民路595號 / 0963-271-115",
            "向東通訊 - 三重店 - 新北市三重區新路三段18號之1 / 0908-282-957",
            "向東通訊 - 中壢店 - 桃園市中壢區中正路331號 / 0973-588-686",
            "向東通訊 - 新竹店 - 新竹市北區西大路463號 / 0917-898-090",
            "凱盛通訊 - 新北市鶯歌區永明街73-2號 / 0966-833-553",
            "聯強國際 - 新北市三峽區文化路4號 / 02-86743154",
            "祥辰通訊 - 新竹縣竹東鎮東寧路三段94號一樓 / 0968-895-988",
            "凱一科技 - 台北市萬華區桂林路119號 / 02-23831551",
            "凱一科技 - 桃園市大園區大園村中華路67號 / 03-3869111",
            "凱旋科技 - 新北市樹林區中山路一段200號 / 02-26810668",
            "凱誠通訊 - 桃園市龜山區文化二路88號 / 02-24625053",
            "凱誠通訊 - 新竹市北區西大路522號 / 03-5245111",
            "撼動通訊 - 永和中山店 - 新北市永和區中正路1號 / 02-29291863",
            "撼動通訊 - 永和中正店 - 新北市永和區中正路1號 / 02-89418915",
            "撼動通訊 - 永和成功店 - 新北市永和區成功路二段80號 / 02-29431234",
            "撼動通訊 - 新莊幸福店 - 新北市新莊區幸福路19號 / 02-22777599",
            "撼動通訊 - 中和員山店 - 新北市中和區員山路213號 / 02-22256611",
            "撼動通訊 - 中和景平店 - 新北市中和區景平路537號  / 02-22498811",
            "撼動通訊 - 中和景新店 - 新北市中和區景新街398號 / 02-29436600",
            "撼動通訊 - 中和興南店 - 新北市中和區興南路一段187號 / 02-29492211",
            "飆手機 - 新北樹林店 - 新北市樹林區太原街13號 / 02-86868111",
            "飆手機 - 板橋板新店 - 新北去板橋區板新路106號 / 02-89535551",
            "飆手機 - 中壢中正店 - 桃園市中壢區中正路341號 / 03-2811588",
            "飆手機 - 內立環中東店 - 桃園區中壢區環中東路39號 / 03-4612171",
            "飆手機 - 桃園中正店 - 桃園市桃園區中正路618號 / 03-3253377",
            "扣扣打手機店 - 宜蘭市光復路67-1號 / 0923-288-269",
            "中華通信 - 宜蘭縣羅東鎮中正路5號 / 03-9543808",
            "宜蘭神農大哥大 - 宜蘭縣宜蘭市神農路1段240號 / 03-9367789",
            "神腦通訊 - 宜蘭市中山路三段292號 / 03-9313788",
            "大呼小叫 - 宜蘭市東港路二段385號 / 03-9386860",
            "台灣行動星 - 桃園市桃園區桃鶯路193號 / 03-3637713",
            "手機網通中正店 - 桃園市中壢區中正路379號 / 03-4920880",
            "震旦通訊 - 台北成功店 - 台北市內湖區成功路四段59之1號 / (02)8792-1688",
            "震旦通訊 - 北投光明店 - 台北市北投市光明路132之5號 / (02)2894-9281",
            "震旦通訊 - 新莊民安店 - 新北市新莊區民安路145號 / (02)2208-0828",
            "震旦通訊 - 新莊公園店 - 新北市新莊區公園路9號 / (02)8993-5178",
            "震旦通訊 - 淡水中正店 - 新北市淡水區中正東路53號1樓 / (02)2629-5500",
            "震旦通訊 - 淡水竹圍店 - 新北市淡水區民族路18號 / (02)2808-3225",
            "震旦通訊 - 台北北安店 - 台北市中山區北安路618號 / (02)2532-2345",
            "震旦通訊 - 台北松山店 - 台北市信義區松山路477號1樓 / (02)2759-5608",
            "震旦通訊 - T和平旗艦 - 台北市中正區和平西路一段13號2樓 / (02)2321-1716",
            "震旦通訊 - 台北康寧店 - 台北市內湖區康寧路三段217巷1號 / (02)2631-4499",
            "震旦通訊 - 汐止忠孝店 - 新北市汐止區忠孝東路五段227號1樓 / (02)2649-9293",
            "震旦通訊 - 基隆義二店 - 基隆市中正區義二路37號 / (02)2426-5686",
            "震旦通訊 - 新大坪林店 - 新北市新店區北新路3段132號 / (02)2918-9988",
            "震旦通訊 - 板橋中山二店 - 新北市板橋區中山路二段7號 / (02)2952-8949",
            "震旦通訊 - 中和中山店 - 新北市中和區景平路665號 / (02)2244-5211",
            "震旦通訊 - 基隆愛三店 - 基隆市仁愛區愛三路24號1樓 / (02)2426-5459",
            "震旦通訊 - 泰山明志店 - 新北市泰山區明志路一段157號 / (02)2296-0209",
            "震旦通訊 - 台北松仁店 - 台北市信義區松仁路216號 / (02)2758-8289",
            "震旦通訊 - 汐止康寧店 - 新北市汐止區康寧街399號 / (02)2693-3527",
            "震旦通訊 - 基隆七堵店 - 基隆市七堵區明德一路202號 / (02)2455-6898",
            "震旦通訊 - 世貿旗艦店 - 台北市信義區信義路五段2號 / (02)8786-6518",
            "震旦通訊 - 羅東公正店 - 宜蘭縣羅東鎮公正路83-1號1.2樓 / (03)955-2679",
            "震旦通訊 - 羅東興東店 - 宜蘭縣羅東鎮興東路151號1樓 / (03)953-1133",
            "震旦通訊 - 羅東中正店 - 宜蘭縣羅東鎮中正路22號 / (03)956-5126",
            "震旦通訊 - 宜蘭中山店 - 宜蘭縣宜蘭市中山路三段60號1樓 / (03)936-5367",
            "震旦通訊 - 宜蘭礁溪店 - 宜蘭縣礁溪鄉中山路一段177號 / (03)987-3791",
            "震旦通訊 - 湖口中正店 - 新竹縣湖口鄉中正路一段41號 / (03)599-0499",
            "震旦通訊 - 新竹西大店 - 新竹市北區西大路445號 / (03)528-4308",
            "震旦通訊 - 桃園中華店 - 桃園市中華路36號1樓 / (03)335-9119",
            "震旦通訊 (大潤發門市) - 新北景平店 - 新北市中和區景平路182號B2 / (02)2949-2051",
            "震旦通訊 (大潤發門市) - 台北南湖店 - 台北市內湖區舊宗路一段188號 / (02)2794-0997",
            "震旦通訊 (大潤發門市) - 台北中崙店 - 台北市中山區八德路2段306號B2 / (02)8772-7829",
            "震旦通訊 (大潤發門市) - 新北土城店 - 新北市土城區永安街25號 / (02)8076-3155",
            "震旦通訊 (大潤發門市) - 新北中和店 - 新北市中和區中山路二段228號 / (02)8241-2777",
            "震旦通訊 (大潤發門市) - 新北碧潭店 - 新北市新店區環河路22號B1 / (02)8914-7367",
            "震旦通訊 (大潤發門市) - 新竹忠孝店 - 新竹市東區忠孝路300號 / (03)561-8166",
            "震旦通訊 (大潤發門市) - 新竹湳雅店 - 新竹市北區湳雅街97號 / (03)535-2866",
            "震旦通訊 (大潤發門市) - 桃園八德店 - 桃園市八德區介壽路二段148號 / (03)377-6977",
            "震旦通訊 (大潤發門市) - 桃園中壢店 - 桃園市中壢區中北路二段468號 / (03)437-9666",
            "震旦通訊 (大潤發門市) - 桃園平鎮店 - 桃園市平鎮區南東路57-1號 / (03)439-9318",
            "ANTNEX - 新光三越信義A9門市(法雅客內) - 台北市信義區松壽路9號地下2樓 / (02)2720-5021",
            "ANTNEX - 新光三越南西門市(法雅客內) - 台北市南京西路12號9F / 0907-279-859",
            "ANTNEX - 新光三越台北站前(法雅客內) - 台北市忠孝西路一段66號10樓 / (02)2311-3756"
        ],
        "中區": [
            "Yes通訊 - 台中市大雅區民生路一段123號 / 04-25687123",
            "Yes通訊 - 台中市豐原區向陽路116號 / 04-25291717",
            "天贊通訊 - 總店 - 台中市大甲區蔣公路308號 / 04-26802188",
            "天贊通訊 - 梧棲店 - 台中市梧棲區文化路二段137號 / 04-26582969",
            "天贊通訊 - 中山店 - 台中市大甲區中山路1段993-3號 / 04-26760268",
            "天贊通訊 - 899手機館 - 台中市沙鹿區北勢東路533號 / 04-26322808",
            "向東通訊 - 苗栗店 - 苗栗市中正路513號 / 0963-216-006",
            "向東通訊 - 一中店 - 台中市北區錦南街19-16號 / 0983-921-908",
            "向東通訊 - 向上店 - 台中市西區向上路一段370號 / 0980-614-778",
            "向東通訊 - 河南店 - 台中市西屯區河南路二段492號 / 0979-055-948",
            "向東通訊 - 中清店 - 台中市北屯區中清路二段110號 / 0909-626-245",
            "向東通訊 - 彰化店 - 彰化市曉陽路51號 / 0909-467-673",
            "東東通信 - 台中市大甲區順天路225號 / 04-26887662",
            "揚昇通訊 - 台中市大甲區光明路17號 / 04-26879200",
            "智慧王 - 台中市南屯區黎明路2段313號1樓 / 04-22555288",
            "智慧王 - 台中市外埔區甲后路369號1樓 / 04-26839955",
            "智慧王 - 台中市南屯區黎明路二段311號1樓 / 0908-612-655",
            "智慧王 - 彰化縣埔心鄉員鹿路2段368號1樓 / 04829-5555",
            "智慧王 - 彰化縣田中鎮中州路1段72號1樓 / 04875-6655",
            "智慧王 - 南投縣南投市三合三路61號1樓 / 049-2205789",
            "智慧王 - 南投縣名間鄉南雅街149之3號1樓 / 049-2738558",
            "智慧王 - 南投縣竹山鎮集山路3段846號1樓 / 049-2655777",
            "智慧王 - 南投縣水里鄉中正路70號1樓 / 049-2871193",
            "嘉新通訊 - 中正門市 - 台中市霧峰區中正路925號 / 04-23391115",
            "嘉新通訊 - 草屯旗艦店 - 南投縣草屯鎮中山街163號 / 04-92318158",
            "嘉新通訊 - 民族門市 - 南投是民族路133號 / 049-2245606",
            "嘉新通訊 - 復興門市 - 南投市復興路201號 / 049-2220006",
            "嘉新通訊 - 埔里門市 - 南投縣埔里鎮忠孝路145號 / 049-2423080",
            "嘉新通訊 - 草屯中正門市 - 南投縣草屯鎮中正路863號1樓 / 049-2362656",
            "瀧盈通訊 - 中正一店 - 彰化縣員林市中正路546號 / 04-8327588",
            "瀧盈通訊 - 中正二店 - 彰化縣員林市中正路561號 / 04-8392666",
            "瀧盈通訊 - 中正三店 - 彰化縣員林市中正路451號 / 04-8357290",
            "瀧盈通訊 - 靜修店 - 彰化縣員林市靜修路65號 / 04-8337586",
            "瀧盈通訊 - 彰水店 - 彰化縣溪湖鎮彰水路三段477號 / 04-8819183",
            "瀧盈通訊 - 星手機店 - 彰化縣員林市中正路563號 / 04-8392666",
            "震旦通訊 - 豐原三民店 - 台中市豐原區三民路152號 / (04)2523-0695",
            "震旦通訊 - 豐原向陽店 - 台中市豐原區向陽路290號1樓 / (04)2512-0939",
            "震旦通訊 - 草屯中正店 - 南投縣草屯鎮中正路749號 / (049)230-4808",
            "震旦通訊 - 員林民族店 - 彰化縣員林鎮民族街1號 / (04)832-9040",
            "震旦通訊 - 彰化曉陽店 - 彰化縣彰化市曉陽路19號 / (04)728-9649",
            "震旦通訊 - 田中員集店 - 彰化縣田中鎮員集路二段350號1樓 / (04)875-8855",
            "震旦通訊 - 沙鹿中山店 - 台中市沙鹿區中山路427號 / (04)2663-0516",
            "震旦通訊 - 北斗中華店 - 彰化縣北斗鎮中華路290號1樓 / (04)878-2055",
            "震旦通訊 - 台中中清店 - 台中市北屯區中清路二段670號1樓 / (04)2295-6797",
            "震旦通訊 - 大里塗城店 - 台中市大里區中興路一段318-1號1樓 / (04)2493-2280",
            "震旦通訊 - 太平中興店 - 台中市太平區中興路132.134號 / (04)2279-6688",
            "震旦通訊 - 台中建成店 - 台中市南區台中路230號1樓 / (04)2287-0538",
            "震旦通訊 - 斗六中山店 - 雲林縣斗六市太平路245號1樓 / (05)537-2050",
            "震旦通訊 - 斗南延平店 - 雲林縣斗南鎮新興街228號 / (05)595-4949",
            "震旦通訊 - 虎尾光復店 - 雲林縣虎尾鎮光復路330號1樓 / (05)631-3198",
            "震旦通訊 - 斗六民生店 - 雲林縣斗六市民生南路33號 / (05)537-7625",
            "震旦通訊 - 西螺建興店 - 雲林縣西螺鎮建興路257號1樓 / (05)587-9377",
            "震旦通訊 - 虎尾中正店 - 雲林縣虎尾鎮中正路292號1樓 / (05)633-1036",
            "震旦通訊 - 北港文化店 - 雲林縣北港鎮文化路75號 / (05)782-5307",
            "震旦通訊 (大潤發門市) - 苗栗頭份店 - 苗栗縣頭份市自強路230號 / (037)590-797",
            "震旦通訊 (大潤發門市) - 彰化員林店 - 彰化縣埔心鄉瓦南村中山路319號 / (04)838-5358",
            "震旦通訊 (大潤發門市) - 台中忠明店 - 台中市北區忠明路499號 / (04)2202-8868",
            "震旦通訊 (大潤發門市) - 雲林斗南店 - 雲林縣斗南鎮西岐里文化街119巷21號 / (05)596-3321",
            "ANTNEX - 新光三越中港門市(法雅客內) - 台中市西屯區台灣大道三段301號9樓 / (04)2252-1152"
        ],
        "南區": [
            "KH高飛網通 - KH覺民 - 高雄市三民區覺民路168號1樓 / 07-3983308",
            "KH高飛網通 - KH自由 - 高雄市三民區自由一路119號1樓 / 07-3113119",
            "Miko 米可3C - 國華門市 - 嘉義市西區國華街322-10號 / 05-2277269",
            "Miko 米可3C - 和意門市 - 台南市中西區和意路62號 / 06-2159990",
            "Miko 米可3C - 仁德門市 - 台南市仁德區中正路二段1257號 / 06-2493888",
            "Miko 米可3C - 永康門市 - 台南市永康區中華二路336號 / 06-2528898",
            "Miko 米可3C - 海佃門市 - 台南市安南區海佃路一段203號 / 06-3508666",
            "Miko 米可3C - 佳里門市 - 台南市佳里區光復路194號 / 06-7220355",
            "Miko 米可3C - 中華東門市 - 台南市東區中華東路三段12號1樓 / 06-2905123",
            "Miko 米可3C - 五甲門市 - 高雄市鳳山區五甲三路58號 / 07-8230555",
            "Miko 米可3C - 巨蛋門市 - 高雄市左營區博愛二路672號 / 07-5589688",
            "Miko 米可3C - 楠梓德賢門市 - 高雄市楠梓區德賢路236-2號1樓 / 07-3646088",
            "Miko 米可3C - 大昌門市 - 高雄市三民區大昌二路495號1樓 / 07-3983665",
            "巨寶通訊 - 和平店 - 高雄市新興區和平一路195號 / 07-2256967",
            "巨寶通訊 - 自由店 - 高雄市左營區新庄仔路734號 / 07-5560983",
            "巨寶通訊 - 楠梓店 - 高雄市楠梓區建楠路230號 / 07-3550697",
            "巨寶通訊 - 五甲店 - 高雄市鳳山區五甲三路173號 / 07-8126563",
            "巨寶通訊 - 陽明店 - 高雄市三民區陽明路75號 / 07-3855905",
            "巨寶通訊 - 小港店 - 高雄市小港區漢民路707號 / 07-8069656",
            "巨寶通訊 - 一心店 - 高雄市前鎮區一心二路77號 / 07-5366005",
            "尚欣通訊行 - 台南市中西區永華路一段54號 / 06-2281826",
            "帝谷通信 - 嘉義市東區嘉義市東洋新村9號 / 05-2784023",
            "帝泰通信 - 嘉義吳鳳南路135號 / 05-2254676",
            "飛訊電訊 - 嘉義市東區吳鳳北路84號 / 05-2251888",
            "飛訊電訊 - 嘉義市東區林森東路251號 / 05-2751888",
            "飛訊電訊 - 嘉義市西區民族路531號 / 05-2251888",
            "展晟通信 - 嘉義仁愛路460號 / 05-2166088",
            "翔宇通訊 - 嘉義新生門市 - 嘉義市東區新生路325號 / 05-2765299",
            "震旦通訊 - 嘉義吳鳳店 - 嘉義市東區光華路57號 / (05)225-5758",
            "震旦通訊 - 嘉義民生店 - 嘉義市西區民生北路192號 / (05)225-0551",
            "震旦通訊 - 嘉義垂楊店 - 嘉義市西區垂楊路479號1樓 / (05)227-4188",
            "震旦通訊 - 嘉義頭橋店 - 嘉義縣民雄鄉福樂村建國路三段126-1號 / (05)220-6686",
            "震旦通訊 - 民雄文化店 - 嘉義縣民雄鄉文化路30之4號1-3樓 / (05)206-2622",
            "震旦通訊 - 嘉義新民店 - 嘉義市西區新民路816號1樓 / (05)286-9840",
            "震旦通訊 - 朴子山通店 - 嘉義縣朴子市山通路210、212號1樓 / (05)370-8071",
            "震旦通訊 - 新營延平店 - 台南市新營區延平路74號 / (06)633-5883",
            "震旦通訊 - 新營民治店 - 台南市新營區民治路61-1號 / (06)635-1918",
            "震旦通訊 - 嘉義民族店 - 嘉義市西區民族路514號 / (05)222-4121",
            "震旦通訊 - 嘉義新生店 - 嘉義市東區新生路794號 / (05)275-5506",
            "震旦通訊 - 嘉義民族二店 - 嘉義市東區民族路188號1樓 / (05)227-0580",
            "震旦通訊 - 學甲中山店 - 台南市學甲區中山路108-4號1.2.3樓 / (06)783-0380",
            "震旦通訊 - 嘉義中埔店 - 嘉義縣中埔鄉和興村中山路五段887號1樓 / (05)239-6996",
            "震旦通訊 - 新營民治二店 - 台南市新營區民治路368號1樓 / (06)656-6711",
            "震旦通訊 - 佳里光復店 - 台南市佳里區光復路319號1樓 / (06)723-7072",
            "震旦通訊 - 佳里延平店 - 台南市佳里區延平路305號 / (06)721-5257",
            "震旦通訊 - 麻豆興中店 - 台南市麻豆區興中路119號 / (06)571-0359",
            "震旦通訊 - 新營三民店 - 台南市新營區三民路88之1號1樓 / (06)632-4079",
            "震旦通訊 - 台南文賢店 - 台南市北區文賢路265.267號 / (06)259-6299",
            "震旦通訊 - 歸仁中山店 - 台南市歸仁區中山路一段524號 / (06)230-7419",
            "震旦通訊 - 新市中正店 - 台南市新市區中正路143之5號 / (06)589-1015",
            "震旦通訊 - 台南林森店 - 台南市東區林森路二段50號 / (06)276-0525",
            "震旦通訊 - 善化中山店 - 台南市善化區中山路209號 / (06)583-0281",
            "震旦通訊 - 永康二王店 - 台南市永康區中山南路570號1樓 / (06)204-4286",
            "震旦通訊 - 仁德中山店 - 台南市仁德區中山路629號1樓 / (06)279-1389",
            "震旦通訊 - 台南西門二店 - 台南市中西區西門路一段709號 / (06)228-4938",
            "震旦通訊 - 台南金華店 - 台南市南區金華路二段198號 / (06)263-6007",
            "震旦通訊 - 永康大灣店 - 台南市永康區大灣路518號 / (06)272-7187",
            "震旦通訊 - 台南海佃店 - 台南市安南區海佃路一段136號1-3樓 / (06)280-1001",
            "震旦通訊 - 台南西門店 - 台南市中西區西門路二段138號 / (06)226-2626",
            "震旦通訊 - 岡山仁壽店 - 高雄市岡山區仁壽路27號1樓 / (07)625-8466",
            "震旦通訊 - 岡山岡山店 - 高雄市岡山區岡山路316號 / (07)622-8197",
            "震旦通訊 - 台南崇學店 - 台南市東區崇學路103號1~3樓 / (06)260-4269",
            "震旦通訊 - 岡山前峰店 - 高雄市岡山區前峰路124-126號 / (07)625-6355",
            "震旦通訊 - 高雄林森店 - 高雄市新興區林森一路243-1號 / (07)235-0911",
            "震旦通訊 - 高雄河東店 - 高雄市前金區河東路305號1樓 / (07)291-7355",
            "震旦通訊 - 高雄三多店 - 高雄市前鎮區三多三路173號 / (07)339-4451",
            "震旦通訊 - 高雄覺民店 - 高雄市三民區覺民路164號 / (07)380-2076",
            "震旦通訊 - 高雄瑞隆店 - 高雄市前鎮區瑞隆路413號1樓 / (07)715-1536",
            "震旦通訊 - 高雄文信店 - 高雄市鼓山區文信路343號 / (07)550-5538",
            "震旦通訊 - 高雄楠梓店 - 高雄市楠梓區鳳楠路270-1號 / (07)351-1336",
            "震旦通訊 - 高雄加昌店 - 高雄市楠梓區加昌路837號1F / (07)360-0756",
            "震旦通訊 - 內埔廣濟店 - 屏東縣內埔鄉內田村廣濟路241號1樓 / (08)769-2960",
            "震旦通訊 - 東港中正店 - 屏東縣東港鎮中正路196號1樓 / (08)833-1036",
            "震旦通訊 - 屏東復興店 - 屏東縣屏東市復興路120號 / (08)751-6289",
            "震旦通訊 - 屏東廣東二店 - 屏東縣屏東市廣東路53號 / (08)723-5399",
            "震旦通訊 - 澎湖馬公店 - 澎湖縣馬公市中華路49號1樓 / (06)927-4875",
            "震旦通訊 - 澎湖中正店 - 澎湖縣馬公市中正路79號1樓 / (06)926-9676",
            "震旦通訊 - 屏東廣東店 - 屏東縣屏東市廣東路690-1號1樓 / (08)738-0200",
            "震旦通訊 - 潮州新生店 - 屏東縣潮州鎮新生路34號 / (08)789-7188",
            "震旦通訊 (大潤發門市) - 嘉義嘉義店 - 嘉義市西區博愛路二段281號 / (05)233-8300",
            "震旦通訊 (大潤發門市) - 台南佳里店 - 台南市佳里區民安里同安寮80之2號 / (06)723-8980",
            "震旦通訊 (大潤發門市) - 台南台南店 - 台南市北區臨安路二段310號 / (06)228-2168",
            "震旦通訊 (大潤發門市) - 高雄鳳山店 - 高雄市鳳山區文化路59號 / (07)799-6980",
            "ANTNEX - SOGO門市 - 高雄市前鎮區三多三路217號10樓 / (07)335-1281"
        ],
        "東區": [
            "震旦通訊 - 花蓮建國店 - 花蓮縣吉安鄉建國路一段40之6號1樓 / (03)846-5588",
            "震旦通訊 - 台東新生店 - 台東縣台東市新生路253號 / (089)342-393",
            "震旦通訊(大潤發門市) - 台東台東店 - 台東縣台東市中興路三段592號 / (089)233-809"
        ]
    }
}

// 建立門市據點的物件樣板，建構式
function StoreTemplate(selectEl, showEl, selectData, showData) {
    this.selectEl = selectEl
    this.showEl = showEl
    this.selectData = selectData
    this.showData = showData
}
// 資料，依照選單篩選資料
StoreTemplate.prototype.filterData = function (value) {
    const filterInfo = this.showData.filter((item) => {
        return item.includes(value)
    })
    this.showElToHTML(filterInfo)
}
// 畫面：下拉選單
StoreTemplate.prototype.selectElToHTML = function () {
    let str
    this.selectData.forEach((item) => {
        str += `<option value="${item}">${item}</option>`
    })
    this.selectEl.html(str)
}
// 畫面，資訊顯示
StoreTemplate.prototype.showElToHTML = function (output) {
    let str = ""
    output.forEach((item) => {
        const words = item.split('/');
        // "\("：匹配英文小括號，將()去除
        let tel = words[1].replace(/\(|\（|/g, '')
        tel = tel.replace(/\)|\）/g, '-')
        // 刪除電話號碼開頭的0
        tel = tel.substring(1)
        str += `<li>${words[0]}/<a href="tel:+886-${tel}" style="display: inline;">${words[1]}</a></li>`
    })
    this.showEl.html(str)
}
// change事件，變更篩選地區
StoreTemplate.prototype.storeChange = function () {
    $(this.selectEl).change(e => {
        const value = e.target.value
        this.filterData(value)
    })
}

// new出motoStore實體物件
const motoStore = new StoreTemplate($('#countySelect'), $('#countyData'), StoreData["Motorola 掛招經銷商門市"]["縣市"], StoreData["Motorola 掛招經銷商門市"]["門市"])
motoStore.selectElToHTML()
motoStore.filterData('台北市')
motoStore.storeChange()
// 先做資料處理，物件轉陣列
const objData = {
    key: [],
    value: []
}
for (const [key, value] of Object.entries(StoreData["經銷門市"])) {
    objData.key.push(key)
    objData.value.push(value)
}
// new出phoneStore實體物件
const phoneStore = new StoreTemplate($('#areaSelect'), $('#areaData'), objData.key, objData.value)
phoneStore.selectElToHTML()

phoneStore.filterData = function () {
    this.selectData.forEach((item, index) => {
        if (item === this.selectEl.val()) {
            phoneStore.showElToHTML(this.showData[index])
        }
    })
}
phoneStore.filterData()

phoneStore.storeChange = function () {
    this.selectEl.change(e => {
        const value = e.target.value
        this.filterData(value)
    })
}
phoneStore.storeChange()
