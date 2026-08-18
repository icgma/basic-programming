// 多元课程图谱数据（知识/能力/问题/思政四类）
// 内容基于课程实际教学文件生成。
window.MULTILAYER_GRAPH = {
  "ability": {
    "coverage_note": "基础 4 项 / 进阶 3 项 / 挑战 3 项，覆盖从装环境到做期末项目的完整路径。",
    "description": "这门课一步步带你练出 10 项能力。基础 4 项保证你能上手，进阶 3 项让你能独立干活，挑战 3 项是为有余力的同学准备的。点开任一项，能看到它对应哪几节课、课上练什么、怎么算学到了。",
    "graph_type": "ability",
    "links": [
      {
        "detail": "环境就绪且会用AI解释报错后，才能进入变量与字符串编码",
        "id": "prog-A1-A2",
        "relation": "进阶",
        "source": "A1",
        "target": "A2"
      },
      {
        "detail": "能处理文本后，进入列表字典的结构化组织",
        "id": "prog-A2-A3",
        "relation": "进阶",
        "source": "A2",
        "target": "A3"
      },
      {
        "detail": "有了数据结构，才能用循环条件函数批量控制",
        "id": "prog-A3-A4",
        "relation": "进阶",
        "source": "A3",
        "target": "A4"
      },
      {
        "detail": "控制逻辑封装成函数后，进入文件持久化",
        "id": "prog-A4-A5",
        "relation": "进阶",
        "source": "A4",
        "target": "A5"
      },
      {
        "detail": "能落盘保存数据后，进入网页网络采集",
        "id": "prog-A5-A6",
        "relation": "进阶",
        "source": "A5",
        "target": "A6"
      },
      {
        "detail": "从网页采集升级到微博/公众号批量采集",
        "id": "prog-A6-A7",
        "relation": "进阶",
        "source": "A6",
        "target": "A7"
      },
      {
        "detail": "采集到的原始数据进入清洗分词情感分析",
        "id": "prog-A7-A8",
        "relation": "进阶",
        "source": "A7",
        "target": "A8"
      },
      {
        "detail": "采集的结构化记录可直接进DataFrame统计",
        "id": "prog-A7-A9",
        "relation": "进阶",
        "source": "A7",
        "target": "A9"
      },
      {
        "detail": "文本分析结果进入统计聚合与可视化",
        "id": "prog-A8-A9",
        "relation": "进阶",
        "source": "A8",
        "target": "A9"
      },
      {
        "detail": "采集能力支撑综合项目数据来源",
        "id": "prog-A7-A10",
        "relation": "汇聚",
        "source": "A7",
        "target": "A10"
      },
      {
        "detail": "文本分析能力支撑综合项目分析结果",
        "id": "prog-A8-A10",
        "relation": "汇聚",
        "source": "A8",
        "target": "A10"
      },
      {
        "detail": "统计可视化能力支撑综合项目展示",
        "id": "prog-A9-A10",
        "relation": "汇聚",
        "source": "A9",
        "target": "A10"
      },
      {
        "id": "sup-setup-A1",
        "relation": "支撑",
        "source": "setup",
        "target": "A1"
      },
      {
        "id": "sup-ai-A1",
        "relation": "支撑",
        "source": "ai",
        "target": "A1"
      },
      {
        "id": "sup-variables-A2",
        "relation": "支撑",
        "source": "variables",
        "target": "A2"
      },
      {
        "id": "sup-string-A2",
        "relation": "支撑",
        "source": "string",
        "target": "A2"
      },
      {
        "id": "sup-list-A3",
        "relation": "支撑",
        "source": "list",
        "target": "A3"
      },
      {
        "id": "sup-dict-A3",
        "relation": "支撑",
        "source": "dict",
        "target": "A3"
      },
      {
        "id": "sup-for-A4",
        "relation": "支撑",
        "source": "for",
        "target": "A4"
      },
      {
        "id": "sup-ifelse-A4",
        "relation": "支撑",
        "source": "ifelse",
        "target": "A4"
      },
      {
        "id": "sup-function-A4",
        "relation": "支撑",
        "source": "function",
        "target": "A4"
      },
      {
        "id": "sup-fileio-A5",
        "relation": "支撑",
        "source": "fileio",
        "target": "A5"
      },
      {
        "id": "sup-json-A5",
        "relation": "支撑",
        "source": "json",
        "target": "A5"
      },
      {
        "id": "sup-excel-A5",
        "relation": "支撑",
        "source": "excel",
        "target": "A5"
      },
      {
        "id": "sup-requests-A6",
        "relation": "支撑",
        "source": "requests",
        "target": "A6"
      },
      {
        "id": "sup-bs4-A6",
        "relation": "支撑",
        "source": "bs4",
        "target": "A6"
      },
      {
        "id": "sup-github-A6",
        "relation": "支撑",
        "source": "github",
        "target": "A6"
      },
      {
        "id": "sup-crawl-A7",
        "relation": "支撑",
        "source": "crawl",
        "target": "A7"
      },
      {
        "id": "sup-weibo-A7",
        "relation": "支撑",
        "source": "weibo",
        "target": "A7"
      },
      {
        "id": "sup-wechat-A7",
        "relation": "支撑",
        "source": "wechat",
        "target": "A7"
      },
      {
        "id": "sup-metadata-A7",
        "relation": "支撑",
        "source": "metadata",
        "target": "A7"
      },
      {
        "id": "sup-clean-A8",
        "relation": "支撑",
        "source": "clean",
        "target": "A8"
      },
      {
        "id": "sup-regex-A8",
        "relation": "支撑",
        "source": "regex",
        "target": "A8"
      },
      {
        "id": "sup-segment-A8",
        "relation": "支撑",
        "source": "segment",
        "target": "A8"
      },
      {
        "id": "sup-sentiment-A8",
        "relation": "支撑",
        "source": "sentiment",
        "target": "A8"
      },
      {
        "id": "sup-dataframe-A9",
        "relation": "支撑",
        "source": "dataframe",
        "target": "A9"
      },
      {
        "id": "sup-trend-A9",
        "relation": "支撑",
        "source": "trend",
        "target": "A9"
      },
      {
        "id": "sup-project-A10",
        "relation": "支撑",
        "source": "project",
        "target": "A10"
      }
    ],
    "nodes": [
      {
        "assessment_method": "量化评估：(1)命令行运行 python --version 与 pip list 截图可见已装 pandas/requests/beautifulsoup4；(2)配置国内镜像源(pip config set global.index-url)成功；(3)提交《AI协作记录》1份，含真实报错原文+AI建议+最终采纳的修复步骤三段式记录。三项全过=达成，缺镜像源配置=部分达成，环境无法运行=未达成。",
        "id": "A1",
        "level": "基础",
        "module": "m1",
        "name": "环境配置与AI协作能力",
        "supported_kp_ids": [
          "setup",
          "ai"
        ],
        "target_ilo": "ILO1 AI辅助编程与Python导论 / ILO2 IDE环境配置",
        "training_task": "W2课堂任务：安装Python(Anaconda)+Lingma/Trae，配置国内镜像源；用AI工具解释1个真实安装报错(如pip安装失败/PATH未配置)并记录AI建议与采纳的修复步骤。题库W2基础题1(新闻阅读量互动率计算)作为环境验证用例。",
        "weeks": "Week 1-2",
        "ab_code": "ab_env_tool"
      },
      {
        "assessment_method": "量化评估：能独立完成题库W3基础题1全流程(去空格strip+去标签replace+统计len+关键词in判断)；字符串方法使用≥4种(strip/replace/split/join/find任选)；代码无硬编码(标题作为变量输入而非写死在逻辑里)；互动率计算保留4位小数正确。4项满足3项=达成。",
        "id": "A2",
        "level": "基础",
        "module": "m1",
        "name": "基础数据运算与文本处理能力",
        "supported_kp_ids": [
          "variables",
          "string"
        ],
        "target_ilo": "ILO3 数据类型与运算",
        "training_task": "题库W2-W3：基础题1计算新闻阅读量互动率(点赞+评论)/阅读量；基础题1新闻标题处理(去首尾空格、去【重磅】标签、统计长度、判断含'经济'关键词)；f-string格式化记者信息。",
        "weeks": "Week 2-3",
        "ab_code": "ab_basic_syntax"
      },
      {
        "assessment_method": "量化评估：能创建含10条标题的列表并完成增删改查(append/remove/pop/sort各演示1次)；字典存储5条新闻含5个字段(标题/来源/时间/阅读量/关键词列表)结构正确；使用dict.get()安全访问缺失键不抛KeyError；列表嵌套字典层级取值正确。4项满足3项=达成。",
        "id": "A3",
        "level": "基础",
        "module": "m1",
        "name": "结构化数据组织能力",
        "supported_kp_ids": [
          "list",
          "dict"
        ],
        "target_ilo": "ILO4 数据结构",
        "training_task": "题库W4-W5：创建新闻标题列表做增删改查排序；设计字典存储5条完整新闻(标题/来源/时间/阅读量/关键词列表)并实现增删改查；列表嵌套字典表示结构化记录。",
        "weeks": "Week 4-5",
        "ab_code": "ab_data_struct"
      },
      {
        "assessment_method": "量化评估：(1)for循环+列表推导式批量处理≥20条记录；(2)if-elif-else实现≥3类分类规则(如政治/经济/体育)；(3)把重复逻辑封装成≥2个函数(含参数与return)；(4)while循环验证输入含'quit'退出条件避免死循环。4项全满足=达成，3项=部分达成。",
        "id": "A4",
        "level": "进阶",
        "module": "m2",
        "name": "流程控制与逻辑抽象能力",
        "supported_kp_ids": [
          "for",
          "ifelse",
          "function"
        ],
        "target_ilo": "ILO5 流程控制 / ILO6 函数",
        "training_task": "题库W6-W8：遍历新闻列表统计标题字数、列表推导式筛标题>20字新闻、计算平均阅读量；while循环验证用户输入(输入quit退出)；按关键词分类新闻(政治/经济/体育)；封装新闻处理函数(计算平均长度、按关键词筛选、统计类别数量)。",
        "weeks": "Week 6-8",
        "ab_code": "ab_flow_control"
      },
      {
        "assessment_method": "量化评估：(1)用with语句安全读写文件(不裸open)；(2)JSON读写中文不乱码(ensure_ascii=False，indent=2)；(3)CSV/Excel读写≥10条记录且字段完整；(4)实现追加模式('a'或DictWriter)不覆盖原数据。4项满足3项=达成。",
        "id": "A5",
        "level": "进阶",
        "module": "m3",
        "name": "数据持久化能力",
        "supported_kp_ids": [
          "fileio",
          "json",
          "excel"
        ],
        "target_ilo": "ILO7 文件操作与数据读写 / ILO8 Python库的应用",
        "training_task": "题库W9-W10：创建新闻CSV(≥10条)读取后保存为JSON；实现新闻数据追加写入；pandas读取Excel做筛选统计后保存为新Excel。对标项目检查清单：raw_news.json/processed_news.json/word_frequency.json三类数据文件落盘。",
        "weeks": "Week 9-10",
        "ab_code": "ab_file_data"
      },
      {
        "assessment_method": "量化评估：(1)requests.get设置User-Agent与timeout参数；(2)BeautifulSoup用find/find_all/select提取标题+链接≥20条；(3)声明遵守robots.txt(代码注释或报告说明)；(4)从GitHub克隆项目并读懂README配置运行成功；(5)采集循环含time.sleep频率控制。5项满足4项=达成。",
        "id": "A6",
        "level": "进阶",
        "module": "m4",
        "name": "网页数据采集能力",
        "supported_kp_ids": [
          "requests",
          "bs4",
          "github"
        ],
        "target_ilo": "ILO9 网页数据抓取基础 / ILO10 GitHub开源工具应用",
        "training_task": "题库W11-W12：requests发送GET请求(设User-Agent/timeout)，BeautifulSoup解析HTML提取标题链接保存CSV；注册GitHub账号搜索克隆weiboSpider项目，读懂README配置运行。对标W11课后作业：抓取新闻网站首页标题/链接/时间存CSV。",
        "weeks": "Week 11-12",
        "ab_code": "ab_web_crawl"
      },
      {
        "assessment_method": "量化评估(对标期末项目数据采集完整性20分项)：(1)独立完成≥200条数据采集(对标W15期末项目硬要求，组4新华社2982条为挑战量级)；(2)提取标题/发布时间/点赞/评论/转发≥5个字段结构化；(3)异常防御覆盖网络超时/空响应/字段缺失三类；(4)time.sleep频率自律；(5)采集报告含方法/数据量/问题三段。5项满足4项=达成，数据<100条=未达成(检查清单扣10分)。",
        "id": "A7",
        "level": "挑战",
        "module": "m4",
        "name": "社交媒体批量采集能力",
        "supported_kp_ids": [
          "crawl",
          "weibo",
          "wechat",
          "metadata"
        ],
        "target_ilo": "ILO9 网页数据抓取基础 / ILO10 GitHub开源工具应用",
        "training_task": "期末项目数据来源任务：采集热点话题微博≥100条(对标组4新华社2982条挑战量级)或主流媒体公众号(人民日报/央视)近一个月≥30篇；整理标题/时间/点赞/评论/转发为结构化记录。对标W12-W13课后作业与项目检查清单数据采集完整性。",
        "weeks": "Week 12-13",
        "ab_code": "ab_social_collect"
      },
      {
        "assessment_method": "量化评估：(1)regex正确去除URL/话题标签/HTML标签三类噪声(re.sub至少2个模式)；(2)jieba分词+停用词过滤后Counter词频Top20输出；(3)情感极性判断给出正/负/中性三分布占比；(4)清洗步骤先于分词(顺序正确，否则分词污染)。4项全满足=达成。",
        "id": "A8",
        "level": "挑战",
        "module": "m4",
        "name": "文本处理与语义分析能力",
        "supported_kp_ids": [
          "clean",
          "regex",
          "segment",
          "sentiment"
        ],
        "target_ilo": "ILO11 文本数据预处理",
        "training_task": "题库W14：jieba.lcut分词+停用词过滤(len>1且不在停用词表)+Counter词频统计Top10；对采集的微博/公众号数据用regex去URL/话题标签/HTML标签后做情感词抽取(if规则法或词典法判断正/负/中性)。对标项目检查清单data_processor模块。",
        "weeks": "Week 14",
        "ab_code": "ab_text_analysis"
      },
      {
        "assessment_method": "量化评估(对标项目检查清单可视化与报告)：(1)DataFrame完成groupby分组聚合+时间序列统计；(2)生成≥3种可视化图表(词云/柱状图/趋势图，dpi≥150，中文显示正常)；(3)trend监测给出'某主题X日内热度变化'具体结论；(4)分析报告含数据概况/高频词/热点话题/结论四段。4项满足3项=达成。",
        "id": "A9",
        "level": "挑战",
        "module": "m5",
        "name": "数据统计与可视化能力",
        "supported_kp_ids": [
          "dataframe",
          "trend"
        ],
        "target_ilo": "ILO8 Python库的应用 / ILO11 文本数据预处理",
        "training_task": "题库W10 pandas统计+期末项目可视化：DataFrame按日groupby聚合互动量(sum/mean)，生成词云图+高频词柱状图+词频趋势图(dpi≥150，中文字体配置)，trend监测给出'某主题在X日内热度变化'结论。对标项目检查清单visualization模块与output图表。",
        "weeks": "Week 14-16",
        "ab_code": "ab_data_viz"
      },
      {
        "assessment_method": "量化评估(对标项目检查清单100分制：技术40+分析35+展示25)：(1)代码模块化(main/crawler/data_processor/visualization/config五文件分离)；(2)函数≤50行、嵌套≤3层、重复代码已提取函数；(3)异常处理覆盖网络超时/文件IO/数据解析三类；(4)README含项目介绍/使用方法/依赖说明完整可复现；(5)数据≥200条；(6)答辩10-15分钟含背景/技术方案/核心代码/结果/总结。6项满足5项=达成；代码无法运行直接-20分(检查清单常见扣分点)。",
        "id": "A10",
        "level": "挑战",
        "module": "m5",
        "name": "综合项目工程能力",
        "supported_kp_ids": [
          "project"
        ],
        "target_ilo": "ILO11 文本数据预处理(综合收束) / 期末项目汇报",
        "training_task": "期末项目(W15-16)：完成采集→清洗→分析→可视化→报告全流程，对标项目检查清单。模块化代码(main/crawler/data_processor/visualization/config分离)，README完整可复现，数据≥200条，答辩PPT 10-15页。对标组4新华社多平台分析、组6广州日报舆情、组2电影数据可视化12种ECharts实际产出。",
        "weeks": "Week 15-16",
        "ab_code": "ab_project"
      }
    ]
  },
  "ideology": {
    "coverage_note": "8 个点：主流媒体与舆论、数据采集法律边界、隐私保护、AI 诚信、技术向善。",
    "description": "学这门课不只是学技术，也会碰到一些取舍：抓数据能不能随便抓、AI 帮写的代码算不算自己的、主流媒体的数据该怎么用。这 8 个点就是课程里会聊到的那些价值问题。",
    "graph_type": "ideology",
    "links": [
      {
        "detail": "第1周导论用人民日报/央视案例建立主流媒体舆论生态认知后，进而在W13公众号采集中理解主流媒体作为中国特色社会主义新闻事业主体的传播策略",
        "id": "link-ide-01-02",
        "relation": "认知递进：从舆论生态认知到新闻事业性质认同",
        "source": "ideology_01",
        "target": "ideology_02",
        "type": "ideology_to_ideology"
      },
      {
        "detail": "认知主流媒体后进入W11-W12爬虫，技术能力上升即须认识采集的法律红线与公共利益豁免边界",
        "id": "link-ide-02-03",
        "relation": "伦理前置：能力越强责任越大",
        "source": "ideology_02",
        "target": "ideology_03",
        "type": "ideology_to_ideology"
      },
      {
        "detail": "G3讲稿中四条法律红线之后即转入隐私三级红绿灯，从守法底线到主动脱敏",
        "id": "link-ide-03-04",
        "relation": "从合规到伦理：法律红线→隐私保护主动作为",
        "source": "ideology_03",
        "target": "ideology_04",
        "type": "ideology_to_ideology"
      },
      {
        "detail": "G3讲稿末尾引导用AI审计爬虫合规，G4讲稿承接为学术诚信三级规范，形成完整AI伦理链",
        "id": "link-ide-04-05",
        "relation": "工具伦理深化：合规审计→学术诚信声明",
        "source": "ideology_04",
        "target": "ideology_05",
        "type": "ideology_to_ideology"
      },
      {
        "detail": "组4新华社项目数据量大但被扣采集规范分（缺爬虫源码），反推开源采集工具需正确署名与合规使用",
        "id": "link-ide-05-06",
        "relation": "诚信延伸：AI使用声明→开源代码署名",
        "source": "ideology_05",
        "target": "ideology_06",
        "type": "ideology_to_ideology"
      },
      {
        "detail": "G4讲稿强调AI输出需人判断，进入W14文本分析强调分词/情感算法的可解释性，避免黑盒误导舆论认知",
        "id": "link-ide-06-07",
        "relation": "责任在人原则贯穿：从署名到算法透明",
        "source": "ideology_06",
        "target": "ideology_07",
        "type": "ideology_to_ideology"
      },
      {
        "detail": "前述认知与伦理在期末项目中汇聚为技术赋能新闻判断而非替代的新闻专业主义立场",
        "id": "link-ide-07-08",
        "relation": "育人闭环：认知与伦理→技术向善专业实践",
        "source": "ideology_07",
        "target": "ideology_08",
        "type": "ideology_to_ideology"
      },
      {
        "detail": "第1周主流媒体舆论生态认知思政切入AI辅助编程导论节点，思政锚点-课程知识点1对1支撑",
        "id": "link-ide-01-ai",
        "relation": "思政↔知识点",
        "source": "ideology_01",
        "target": "ai",
        "type": "ideology_to_kp"
      },
      {
        "detail": "主流媒体舆论生态认知思政锚定W13微信公众号采集场景节点",
        "id": "link-ide-01-wechat",
        "relation": "思政↔知识点",
        "source": "ideology_01",
        "target": "wechat",
        "type": "ideology_to_kp"
      },
      {
        "detail": "数据采集法律合规思政锚定Requests请求工具节点",
        "id": "link-ide-03-requests",
        "relation": "思政↔知识点",
        "source": "ideology_03",
        "target": "requests",
        "type": "ideology_to_kp"
      },
      {
        "detail": "数据采集法律合规思政锚定批量爬取微博/公众号场景节点（time.sleep频率自律落点）",
        "id": "link-ide-03-crawl",
        "relation": "思政↔知识点",
        "source": "ideology_03",
        "target": "crawl",
        "type": "ideology_to_kp"
      },
      {
        "detail": "隐私保护与数据伦理思政锚定社交媒体元数据解析节点（用户名/地理字段脱敏落点）",
        "id": "link-ide-04-metadata",
        "relation": "思政↔知识点",
        "source": "ideology_04",
        "target": "metadata",
        "type": "ideology_to_kp"
      },
      {
        "detail": "隐私保护与数据伦理思政锚定微博数据采集场景节点",
        "id": "link-ide-04-weibo",
        "relation": "思政↔知识点",
        "source": "ideology_04",
        "target": "weibo",
        "type": "ideology_to_kp"
      },
      {
        "detail": "AI使用学术诚信思政锚定AI辅助编程工具节点（课程方法论起点即立规范）",
        "id": "link-ide-05-ai",
        "relation": "思政↔知识点",
        "source": "ideology_05",
        "target": "ai",
        "type": "ideology_to_kp"
      },
      {
        "detail": "开源协作与署名诚信思政锚定GitHub开源协作工具节点",
        "id": "link-ide-06-github",
        "relation": "思政↔知识点",
        "source": "ideology_06",
        "target": "github",
        "type": "ideology_to_kp"
      },
      {
        "detail": "算法透明与舆论引导思政锚定受众情感词抽取场景节点",
        "id": "link-ide-07-sentiment",
        "relation": "思政↔知识点",
        "source": "ideology_07",
        "target": "sentiment",
        "type": "ideology_to_kp"
      },
      {
        "detail": "算法透明与舆论引导思政锚定中文分词与关键词工具节点",
        "id": "link-ide-07-segment",
        "relation": "思政↔知识点",
        "source": "ideology_07",
        "target": "segment",
        "type": "ideology_to_kp"
      },
      {
        "detail": "技术向善与新闻专业主义思政锚定期末项目整合节点（育人闭环）",
        "id": "link-ide-08-project",
        "relation": "思政↔知识点",
        "source": "ideology_08",
        "target": "project",
        "type": "ideology_to_kp"
      },
      {
        "detail": "组4新华社多平台分析项目同时体现舆论生态认知与技术向善专业主义两个思政点",
        "id": "link-ide-01-08",
        "relation": "思政↔知识点",
        "source": "ideology_01",
        "target": "project",
        "type": "ideology_to_kp"
      }
    ],
    "nodes": [
      {
        "case": "第1周课程导论展示人民日报、央视新闻等主流媒体数据分析案例；第13周微信公众号采集以人民日报/央视新闻公众号为采集对象，分析主流媒体发布规律与传播策略。优质思政资源：人民日报客户端数据、央视新闻公众号内容矩阵。",
        "id": "ideology_01",
        "intervention": "第1周导论课嵌入主流媒体案例讨论10分钟；第13周公众号采集实验以主流媒体为对象，实验后写200字反思：主流媒体为何在多平台保持议题一致性。",
        "pathway": "从ai(AI辅助编程)切入→第1周认知主流媒体的数据新闻实践→第13周通过wechat(微信公众号数据采集)理解主流媒体议题设置→达成认知：主流媒体是社交媒体舆论生态的定盘星。",
        "related_kp_ids": [
          "ai",
          "wechat",
          "project"
        ],
        "resource": "人民日报客户端、央视新闻公众号、新华社全媒报道矩阵",
        "tags": [
          "课程思政",
          "主流媒体",
          "舆论生态"
        ],
        "title": "主流媒体舆论生态认知",
        "value_goal": "理解主流媒体在社交媒体舆论生态中的引领作用，建立「算法时代主流声音不可缺位」的专业认知，培养对网络舆论场的清醒判断力。",
        "weeks": "Week 1, Week 13"
      },
      {
        "case": "组4新华社多平台分析项目（新华社微博2982条+公众号数据），揭示国家级媒体多平台分众传播逻辑——微博偏突发时政短资讯、公众号偏民生深度长阅读。该组评为A轨、学术规范度极高。优质思政资源：新华社多平台报道矩阵。",
        "id": "ideology_02",
        "intervention": "以组4项目为范例讲评10分钟，要求学生回答：为何同一新闻事件在微博和公众号呈现不同形态，这反映了什么传播理念。",
        "pathway": "从trend(选题趋势监测)切入→以组4项目分析新华社跨平台传播差异→达成认知：中国特色社会主义新闻事业坚持正确导向与分众传播相统一，技术让主流声音更精准触达不同受众。",
        "related_kp_ids": [
          "trend",
          "metadata",
          "project"
        ],
        "resource": "新华社「两微一端」、组4新华社多平台分析项目",
        "tags": [
          "课程思政",
          "中国特色新闻事业",
          "主流媒体"
        ],
        "title": "中国特色社会主义新闻事业理解",
        "value_goal": "通过主流媒体多平台传播实证，理解中国特色社会主义新闻事业「党媒姓党、正面宣传为主、分众传播」的内在逻辑，建立专业归属感与政治认同。",
        "weeks": "Week 13-16"
      },
      {
        "case": "G3《数据采集合规与隐私保护》讲稿四条法律红线：个人信息保护法、网络安全法、数据安全法、反不正当竞争法；要求先读robots.txt、每次请求间隔≥1秒（time.sleep(1)）；人民网robots.txt案例：Disallow:/admin/ Allow:/news/。",
        "id": "ideology_03",
        "intervention": "第12周引入G3讲稿，布置延伸任务⭐⭐解读一份目标网站robots.txt；期末项目提交须含robots.txt合规声明与sleep证据，5项合规自检未全打勾者扣采集规范分。",
        "pathway": "从requests(Requests请求)切入→第11-12周认识HTTP请求的技术边界→对照G3讲稿四条法律红线与robots.txt→达成认知：技术能力必须服从法律边界，学生作业不属公共利益豁免。",
        "related_kp_ids": [
          "requests",
          "bs4",
          "github",
          "crawl",
          "weibo"
        ],
        "resource": "G3数据采集合规讲稿、《个人信息保护法》《网络安全法》《数据安全法》《反不正当竞争法》、peopleapp.com/robots.txt",
        "tags": [
          "课程思政",
          "数据合规",
          "法律红线",
          "robots.txt",
          "time.sleep"
        ],
        "title": "数据采集法律合规",
        "value_goal": "建立数据采集法律红线意识，理解四部法律对个人信息、未公开数据、跨境传输、商业数据的禁令，养成「先看robots.txt、再写爬虫」的职业习惯。",
        "weeks": "Week 11-13"
      },
      {
        "case": "G3讲稿隐私三级红绿灯：🟢完全公开（主流媒体公众号文章、政府公告、人民网新闻）允许；🟡半公开（微博公开话题，不含个人信息）用但需脱敏——df['user_name']=df['user_name'].apply(lambda x: x[0]+'**'+x[-1])，df.drop(columns=['lat','lng'])；🔴个人信息（真实姓名、住址、电话、身份证）禁止。",
        "id": "ideology_04",
        "intervention": "第12-13周实验课后提交脱敏脚本截图；期末项目报告中需单列「伦理处理」段落说明数据来源级别与脱敏措施，缺者伦理分扣完。",
        "pathway": "从metadata(社交媒体元数据解析)切入→第12-13周在weibo/wechat采集后识别字段中的隐私风险→对照G3三级红绿灯执行脱敏→达成认知：隐私保护是数据伦理底线，🟡数据主动脱敏是专业素养而非可选步骤。",
        "related_kp_ids": [
          "weibo",
          "wechat",
          "metadata",
          "clean",
          "project"
        ],
        "resource": "G3讲稿隐私三级红绿灯表、脱敏代码模板",
        "tags": [
          "课程思政",
          "隐私保护",
          "数据伦理",
          "脱敏",
          "三级红绿灯"
        ],
        "title": "隐私保护与数据伦理",
        "value_goal": "掌握隐私三级红绿灯分级标准，学会在采集与清洗阶段主动识别并脱敏个人信息，理解「数据可用但人不可被识别」的伦理底线。",
        "weeks": "Week 12-13"
      },
      {
        "case": "G4《学术诚信与AI使用声明》讲稿：🟢绿区（解释代码、排查报错、推荐函数、检查规范）不需标注；🟡黄区（AI生成复杂函数、核心算法、改造开源代码）必须代码注释标注；🔴红区（整段AI生成项目、复制讲不清、AI伪造数据）学术不端。标注模板含工具版本、协作模式、帮助内容、本人独立完成部分。组4项目README即为标注典范。",
        "id": "ideology_05",
        "intervention": "第15周引入G4讲稿；期末项目代码须含AI协作声明注释块，报告须含「AI使用声明」段落并附AI_dialogues.md；组4项目README作为示范样例展示。",
        "pathway": "从ai(AI辅助编程)切入→第1周建立「AI是学习伙伴非代写工具」认知→第15周对照G4三级规范确定项目中的AI使用边界→达成认知：AI时代学术诚信核心是透明标注与独立判断，「智能辅助、责任在人」。",
        "related_kp_ids": [
          "ai",
          "function",
          "github",
          "project"
        ],
        "resource": "G4学术诚信讲稿、AI协作声明标注模板、汕大指南§5-05智能辅助责任在人",
        "tags": [
          "课程思政",
          "学术诚信",
          "AI三级规范",
          "标注模板",
          "责任在人"
        ],
        "title": "AI使用学术诚信",
        "value_goal": "建立AI使用三级规范认知，掌握黄区标注模板，理解「不标注=学术不端=全课0分」的硬性后果，把AI从「免责金牌」转为「被规范的协作者」。",
        "weeks": "Week 1, Week 15"
      },
      {
        "case": "G3讲稿用Lingma审计爬虫合规（提示词：请审计这段爬虫代码，列出是否包含频率控制、是否处理用户隐私字段、是否考虑robots.txt、给出3条改进建议）；G4讲稿六个用AI但不算作弊的姿势之一是「让AI审计你的合规性」；组4项目以开源微博爬虫为底但独立完成分析判断。",
        "id": "ideology_06",
        "intervention": "第12周实验引入Lingma合规审计提示词模板，要求学生提交AI审计报告截图；期末项目评分将开源依赖声明纳入文档完整性维度。",
        "pathway": "从ai(AI辅助编程)切入→G3讲稿「让Lingma做合规审计」→对照G4六个安全姿势（解释、排查、检查、生成初稿自重写50%、审计合规、辅助综述）→达成认知：AI是伦理审计工具而非偷工减料捷径，用AI守住合规底线。",
        "related_kp_ids": [
          "ai",
          "requests",
          "crawl",
          "weibo",
          "project"
        ],
        "resource": "G3讲稿AI合规审计提示词、G4讲稿六个安全姿势卡片",
        "tags": [
          "课程思政",
          "AI合规审计",
          "技术向善",
          "白盒验证"
        ],
        "title": "技术向善与AI合规审计",
        "value_goal": "学会用AI反向审计自身代码的合规性与伦理性，理解「技术向善」不是口号而是可执行的代码审查实践。",
        "weeks": "Week 12, Week 15"
      },
      {
        "case": "第14周文本分析可对比不同主流媒体（人民日报vs央视）的用词差异与情感倾向，但词典法/规则法有其局限——若分词与情感判断不经人工校验，可能放大噪声或误判舆论。组4项目用jieba+TF-IDF+聚类但人工维护停用词表过滤「新华社」「记者」等无偏噪词，体现了算法结果需人工把关。",
        "id": "ideology_07",
        "intervention": "第14周实验要求对比两家主流媒体标题词频并人工校验情感词典；期末项目情感分析结论须附人工抽样校验样本（≥20条）证明非黑盒。",
        "pathway": "从segment(中文分词与关键词)与sentiment(受众情感词抽取)切入→第14周认识算法对舆论分析的双刃性→在项目用人工停用词表与抽样校验修正→达成认知：技术放大主流声音也放大噪声，新闻专业判断不可被算法替代。",
        "related_kp_ids": [
          "clean",
          "segment",
          "sentiment",
          "trend"
        ],
        "resource": "第14周文本预处理教案、组4项目停用词表维护实践",
        "tags": [
          "课程思政",
          "算法透明",
          "新闻专业主义",
          "情感分析",
          "人工校验"
        ],
        "title": "算法透明与舆论引导责任",
        "value_goal": "理解中文分词与情感分析算法不是中立工具，其结果直接影响舆论判断，须以人工校验保证算法不扭曲主流舆论认知。",
        "weeks": "Week 14-16"
      },
      {
        "case": "组4新华社多平台分析、组6广州日报舆情分析等期末项目，以编程能力服务真实传播问题；课程考核代码质量、分析深度、创新性而非单纯代码量，体现「会写代码更要会判断」。",
        "id": "ideology_08",
        "intervention": "第15-16周项目汇报设置「选题价值」评分维度（占分析深度25%的一部分）；要求每组汇报说明数据来源合规、AI使用声明、伦理处理三段，缺一不可进入答辩。",
        "pathway": "从project(期末项目整合)切入→W15-16整合全课程能力→以主流媒体真实问题驱动→对照组4项目范例→达成认知：编程是新闻人赋能工具，技术向善体现在以正确选题、合规数据、透明算法服务公共利益。",
        "related_kp_ids": [
          "project",
          "crawl",
          "clean",
          "segment",
          "dataframe",
          "trend"
        ],
        "resource": "组4新华社多平台分析项目、组6广州日报舆情分析项目、期末项目检查清单",
        "tags": [
          "课程思政",
          "技术向善",
          "新闻专业主义",
          "期末项目",
          "价值闭环"
        ],
        "title": "技术向善与新闻专业主义价值闭环",
        "value_goal": "在期末项目整合中体认Python赋能而非替代新闻判断，建立「数据驱动报道、人文校验结论」的专业主义立场，完成课程育人价值闭环。",
        "weeks": "Week 15-16"
      }
    ]
  },
  "knowledge_extension": {
    "coverage_note": "已为锚点清单中全部26个知识节点(for/dict/list/string/regex/ifelse/json/dataframe/crawl/metadata/clean/sentiment/trend/ai/setup/variables/function/fileio/excel/requests/bs4/github/weibo/wechat/segment/project)逐一补全汕大指南§4-03④知识图谱要求缺失的四类元素:learning_objective(对接大纲ILO表11单元,标注L2/L3层级)、resources(关联真实周次教案/课件/代码示例/Exa文献/数据集路径,均经Glob/ls核验存在)、quiz_ids(对应课堂练习题库.py实际周次分块题目,采用w{N}_q{M}编号)、四类布尔标签(is_key/is_difficult/is_exam/is_ideology)。无臆造新知识点id。tags改造说明:在保留现有tags数组基础上新增四个布尔字段,便于图谱页面四类筛选(P3-6)。思政标记覆盖8个节点(ai/setup/github/weibo/wechat/crawl/project及部分场景)。题库覆盖说明:W12-W13采集场景、W14文本分析场景、W15-16项目场景在现有题库中为代码示例/综合练习,w12-w16 quiz_ids引用对应综合题,与题库现状一致;metadata/trend/regex/clean/sentiment等场景节点主要落在W14及之后,已关联W14分词题或对应周次综合题。资源路径均基于D:\\STU\\开课\\基础编程下实际存在的文件,Exa文献来自course-references/weekXX/(已确认week03-15均有文档)。遗漏项:部分节点(如regex)在题库中无独立题目,已标注为关联W14清洗综合题,后续P3-5题库扩展时可补充regex专项题。",
    "description": "对标汕头大学智慧课程建设指南§4-03④知识图谱元素要求:每个知识点包含名称、简述、学习目标、关联资源、测验题等元素,并标记重点/难点/考点/思政四类标签。本图谱为知识图谱节点的字段补全层(knowledge_extension),在现有26个节点(summary/programming/media/code/tags基础上)新增 learning_objective(对接大纲ILO表11单元,标注L2/L3层级)、resources(链接周次教案/课件/代码示例/Exa文献/数据集实际路径)、quiz_ids(对应课堂练习题库.py周次分块题目w{N}_q{M})、以及四类布尔标签 is_key/is_difficult/is_exam/is_ideology。所有引用节点id严格来自锚点清单26个之一,内容基于16周计划/大纲ILO/题库/期末项目/思政锚点,未臆造课程中不存在的内容。",
    "graph_type": "knowledge_extension",
    "links": [
      {
        "id": "supports-for",
        "relation": "支撑",
        "source": "for",
        "target": "for"
      },
      {
        "id": "supports-dict",
        "relation": "支撑",
        "source": "dict",
        "target": "dict"
      },
      {
        "id": "supports-list",
        "relation": "支撑",
        "source": "list",
        "target": "list"
      },
      {
        "id": "supports-string",
        "relation": "支撑",
        "source": "string",
        "target": "string"
      },
      {
        "id": "supports-regex",
        "relation": "支撑",
        "source": "regex",
        "target": "regex"
      },
      {
        "id": "supports-ifelse",
        "relation": "支撑",
        "source": "ifelse",
        "target": "ifelse"
      },
      {
        "id": "supports-json",
        "relation": "支撑",
        "source": "json",
        "target": "json"
      },
      {
        "id": "supports-dataframe",
        "relation": "支撑",
        "source": "dataframe",
        "target": "dataframe"
      },
      {
        "id": "supports-crawl",
        "relation": "支撑",
        "source": "crawl",
        "target": "crawl"
      },
      {
        "id": "supports-metadata",
        "relation": "支撑",
        "source": "metadata",
        "target": "metadata"
      },
      {
        "id": "supports-clean",
        "relation": "支撑",
        "source": "clean",
        "target": "clean"
      },
      {
        "id": "supports-sentiment",
        "relation": "支撑",
        "source": "sentiment",
        "target": "sentiment"
      },
      {
        "id": "supports-trend",
        "relation": "支撑",
        "source": "trend",
        "target": "trend"
      },
      {
        "id": "supports-ai",
        "relation": "支撑",
        "source": "ai",
        "target": "ai"
      },
      {
        "id": "supports-setup",
        "relation": "支撑",
        "source": "setup",
        "target": "setup"
      },
      {
        "id": "supports-variables",
        "relation": "支撑",
        "source": "variables",
        "target": "variables"
      },
      {
        "id": "supports-function",
        "relation": "支撑",
        "source": "function",
        "target": "function"
      },
      {
        "id": "supports-fileio",
        "relation": "支撑",
        "source": "fileio",
        "target": "fileio"
      },
      {
        "id": "supports-excel",
        "relation": "支撑",
        "source": "excel",
        "target": "excel"
      },
      {
        "id": "supports-requests",
        "relation": "支撑",
        "source": "requests",
        "target": "requests"
      },
      {
        "id": "supports-bs4",
        "relation": "支撑",
        "source": "bs4",
        "target": "bs4"
      },
      {
        "id": "supports-github",
        "relation": "支撑",
        "source": "github",
        "target": "github"
      },
      {
        "id": "supports-weibo",
        "relation": "支撑",
        "source": "weibo",
        "target": "weibo"
      },
      {
        "id": "supports-wechat",
        "relation": "支撑",
        "source": "wechat",
        "target": "wechat"
      },
      {
        "id": "supports-segment",
        "relation": "支撑",
        "source": "segment",
        "target": "segment"
      },
      {
        "id": "supports-project",
        "relation": "支撑",
        "source": "project",
        "target": "project"
      },
      {
        "id": "ideology-ai",
        "relation": "思政关联",
        "source": "ai",
        "target": "ai"
      },
      {
        "id": "ideology-crawl",
        "relation": "思政关联",
        "source": "crawl",
        "target": "crawl"
      },
      {
        "id": "ideology-weibo",
        "relation": "思政关联",
        "source": "weibo",
        "target": "weibo"
      },
      {
        "id": "ideology-wechat",
        "relation": "思政关联",
        "source": "wechat",
        "target": "wechat"
      },
      {
        "id": "ideology-github",
        "relation": "思政关联",
        "source": "github",
        "target": "github"
      },
      {
        "id": "ideology-project",
        "relation": "思政关联",
        "source": "project",
        "target": "project"
      },
      {
        "id": "ideology-setup",
        "relation": "思政关联",
        "source": "setup",
        "target": "setup"
      }
    ],
    "nodes": [
      {
        "code": "for page in range(1, 6):\n    records.extend(fetch_page(page))",
        "is_difficult": true,
        "is_exam": true,
        "is_ideology": false,
        "is_key": true,
        "learning_objective": "ILO单元5.2 for循环 L3：应用for循环对列表和字典进行批量处理；能使用range()与列表推导式筛选新闻数据",
        "name": "For 循环",
        "node_id": "for",
        "quiz_ids": [
          "w6_q1",
          "w6_q2",
          "w6_q3"
        ],
        "resources": {
          "code": "教学资源/代码示例/第06周_for循环实例.py",
          "course_ref": "course-references/week06/python-list-comprehension-the-complete-guide-with-examples-c45d6",
          "ppt": "教学资源/PPT/第 06 周_for 循环_本科生版.md",
          "plan": "01_教学大纲与计划/16周课程计划.md#第6周for循环"
        },
        "tags": [
          "循环",
          "批量",
          "翻页"
        ],
        "tags_extra": {
          "is_difficult": true,
          "is_exam": true,
          "is_ideology": false,
          "is_key": true
        }
      },
      {
        "code": "post = {\"title\": \"AIGC 观察\", \"likes\": 1824}\nprint(post[\"likes\"])",
        "is_difficult": true,
        "is_exam": true,
        "is_ideology": false,
        "is_key": true,
        "learning_objective": "ILO单元4.2 字典及其操作 L3：应用字典存储和管理结构化新闻数据，能完成嵌套字典的增删改查",
        "name": "字典 (Dict)",
        "node_id": "dict",
        "quiz_ids": [
          "w5_q1",
          "w5_q2",
          "w5_q3"
        ],
        "resources": {
          "code": "教学资源/代码示例/第05周_字典操作代码示例.py",
          "ppt": "教学资源/PPT/第 05 周_字典及其操作_本科生版.md",
          "plan": "01_教学大纲与计划/16周课程计划.md#第5周字典及其操作"
        },
        "tags": [
          "键值",
          "字段",
          "结构化"
        ],
        "tags_extra": {
          "is_difficult": true,
          "is_exam": true,
          "is_ideology": false,
          "is_key": true
        }
      },
      {
        "code": "titles = [\"平台治理\", \"算法推荐\", \"AIGC\"]\nfor title in titles:\n    print(title)",
        "is_difficult": false,
        "is_exam": true,
        "is_ideology": false,
        "is_key": true,
        "learning_objective": "ILO单元4.1 列表及其操作 L3：操作执行列表的创建、索引、切片、添加、删除、排序等操作",
        "name": "列表 (List)",
        "node_id": "list",
        "quiz_ids": [
          "w4_q1",
          "w4_q2",
          "w4_q3"
        ],
        "resources": {
          "code": "教学资源/代码示例/第04周_列表操作代码示例.py",
          "course_ref": "course-references/week04/python-lists-a-complete-guide-with-examples-openpython-60f2b",
          "ppt": "教学资源/PPT/第 04 周_列表及其操作_本科生版.md",
          "plan": "01_教学大纲与计划/16周课程计划.md#第4周列表及其操作"
        },
        "tags": [
          "集合",
          "顺序",
          "记录"
        ],
        "tags_extra": {
          "is_difficult": false,
          "is_exam": true,
          "is_ideology": false,
          "is_key": true
        }
      },
      {
        "code": "title = \"  #热搜# AIGC 写作工具  \"\nclean = title.strip().replace(\"#\", \"\")",
        "is_difficult": false,
        "is_exam": true,
        "is_ideology": false,
        "is_key": true,
        "learning_objective": "ILO单元3.2 字符串操作 L3：应用字符串的切片、拼接、格式化等操作处理新闻文本",
        "name": "字符串操作",
        "node_id": "string",
        "quiz_ids": [
          "w3_q1",
          "w3_q2",
          "w3_q3"
        ],
        "resources": {
          "code": "教学资源/代码示例/第03周_新闻文本处理实例.py",
          "course_ref": "course-references/week03/python-string-methods-40-with-real-examples-9c9e5",
          "ppt": "教学资源/PPT/第 03 周_字符串操作与变量_本科生版.md",
          "guide": "教学资源/AI应用指南/第03周_AI在字符串处理中的应用.md",
          "plan": "01_教学大纲与计划/16周课程计划.md#第3周字符串操作与变量"
        },
        "tags": [
          "文本",
          "清洗",
          "替换"
        ],
        "tags_extra": {
          "is_difficult": false,
          "is_exam": true,
          "is_ideology": false,
          "is_key": true
        }
      },
      {
        "code": "clean = re.sub(r\"http\\S+|#.+?#\", \" \", text)",
        "is_difficult": true,
        "is_exam": true,
        "is_ideology": false,
        "is_key": true,
        "learning_objective": "ILO单元11.2 文本清洗 L3：应用文本清洗方法处理社交媒体数据中的噪音（正则去URL/标签/特殊字符）",
        "name": "正则表达式",
        "node_id": "regex",
        "quiz_ids": [
          "w14_q1"
        ],
        "resources": {
          "ppt": "教学资源/PPT/第 14 周_文本数据预处理与分析_本科生版.md",
          "plan": "01_教学大纲与计划/16周课程计划.md#第14周文本数据预处理与分析"
        },
        "tags": [
          "模式匹配",
          "去噪",
          "标题"
        ],
        "tags_extra": {
          "is_difficult": true,
          "is_exam": true,
          "is_ideology": false,
          "is_key": true
        }
      },
      {
        "code": "if score > 0:\n    label = \"positive\"\nelse:\n    label = \"non-positive\"",
        "is_difficult": false,
        "is_exam": true,
        "is_ideology": false,
        "is_key": true,
        "learning_objective": "ILO单元5.1 条件语句 L3：应用if单分支、双分支、多分支语句对代码流程进行控制",
        "name": "If / Else 条件",
        "node_id": "ifelse",
        "quiz_ids": [
          "w7_q1",
          "w7_q2",
          "w7_q3"
        ],
        "resources": {
          "code": "教学资源/代码示例/第07周_while循环与条件语句代码示例.py",
          "ppt": "教学资源/PPT/第 07 周_while 循环与条件语句_本科生版.md",
          "plan": "01_教学大纲与计划/16周课程计划.md#第7周while循环与条件语句"
        },
        "tags": [
          "判断",
          "规则",
          "极性"
        ],
        "tags_extra": {
          "is_difficult": false,
          "is_exam": true,
          "is_ideology": false,
          "is_key": true
        }
      },
      {
        "code": "payload = response.json()\nprint(payload[\"data\"][\"title\"])",
        "is_difficult": false,
        "is_exam": true,
        "is_ideology": false,
        "is_key": true,
        "learning_objective": "ILO单元7.1 文件读写 L3：操作文本文件、CSV文件、JSON文件的读取和写入",
        "name": "JSON 数据",
        "node_id": "json",
        "quiz_ids": [
          "w9_q1"
        ],
        "resources": {
          "code": "教学资源/代码示例/第09周_文件操作与数据读写代码示例.py",
          "ppt": "教学资源/PPT/第 09 周_文件操作与数据读写_本科生版.md",
          "plan": "01_教学大纲与计划/16周课程计划.md#第9周文件操作与数据读写"
        },
        "tags": [
          "接口",
          "结构化",
          "API"
        ],
        "tags_extra": {
          "is_difficult": false,
          "is_exam": true,
          "is_ideology": false,
          "is_key": true
        }
      },
      {
        "code": "df = pd.DataFrame(records)\ndaily = df.groupby(\"date\")[\"likes\"].sum()",
        "is_difficult": true,
        "is_exam": true,
        "is_ideology": false,
        "is_key": true,
        "learning_objective": "ILO单元8.1 库的导入与使用 L3 + 单元8.2：执行pandas库导入并完成Excel数据的读取、筛选、分组统计与保存",
        "name": "Pandas DataFrame",
        "node_id": "dataframe",
        "quiz_ids": [
          "w10_q1"
        ],
        "resources": {
          "code": "教学资源/代码示例/第10周_pandas基础代码示例.py",
          "ppt": "教学资源/PPT/第 10 周_Python 库与 Excel 数据处理_本科生版.md",
          "plan": "01_教学大纲与计划/16周课程计划.md#第10周python库与excel数据处理"
        },
        "tags": [
          "表格",
          "统计",
          "聚合"
        ],
        "tags_extra": {
          "is_difficult": true,
          "is_exam": true,
          "is_ideology": false,
          "is_key": true
        }
      },
      {
        "code": "for keyword in keywords:\n    results.extend(fetch_keyword(keyword))",
        "is_difficult": true,
        "is_exam": true,
        "is_ideology": true,
        "is_key": true,
        "learning_objective": "ILO单元10.2 微博数据采集 L3 + 单元9.2：操作使用GitHub开源工具与requests完成多关键词/多页批量采集，遵循数据采集伦理",
        "name": "批量爬取微博 / 公众号",
        "node_id": "crawl",
        "quiz_ids": [
          "w11_q1",
          "w12_q1"
        ],
        "resources": {
          "ppt": "教学资源/PPT/第 11 周_网页爬虫基础_本科生版.md",
          "plan": "01_教学大纲与计划/16周课程计划.md#第12周github与微博数据采集"
        },
        "tags": [
          "采集",
          "自动化",
          "翻页"
        ],
        "tags_extra": {
          "is_difficult": true,
          "is_exam": true,
          "is_ideology": true,
          "is_key": true
        }
      },
      {
        "code": "metrics = {\"likes\": item[\"likes\"], \"shares\": item[\"shares\"]}",
        "is_difficult": true,
        "is_exam": true,
        "is_ideology": false,
        "is_key": false,
        "learning_objective": "ILO单元10.2/10.3 L3：操作从开源工具返回数据中拆出点赞、转发、评论、发布时间等核心指标并处理缺失值",
        "name": "社交媒体元数据解析",
        "node_id": "metadata",
        "quiz_ids": [
          "w12_q1",
          "w13_q1"
        ],
        "resources": {
          "ppt": "教学资源/PPT/第 12 周_GitHub 与微博数据采集_本科生版.md",
          "plan": "01_教学大纲与计划/16周课程计划.md#第12-13周"
        },
        "tags": [
          "互动量",
          "字段提取",
          "平台数据"
        ],
        "tags_extra": {
          "is_difficult": true,
          "is_exam": true,
          "is_ideology": false,
          "is_key": false
        }
      },
      {
        "code": "title = re.sub(r\"\\s+\", \" \", title).strip()",
        "is_difficult": false,
        "is_exam": true,
        "is_ideology": false,
        "is_key": true,
        "learning_objective": "ILO单元11.2 文本清洗 L3：应用文本清洗方法处理社交媒体数据中的噪音（去模板/去噪声/统一格式）",
        "name": "新闻标题文本清洗",
        "node_id": "clean",
        "quiz_ids": [
          "w14_q1"
        ],
        "resources": {
          "ppt": "教学资源/PPT/第 14 周_文本数据预处理与分析_本科生版.md",
          "plan": "01_教学大纲与计划/16周课程计划.md#第14周文本数据预处理与分析"
        },
        "tags": [
          "标题",
          "预处理",
          "规范化"
        ],
        "tags_extra": {
          "is_difficult": false,
          "is_exam": true,
          "is_ideology": false,
          "is_key": true
        }
      },
      {
        "code": "if any(word in text for word in negative_words):\n    label = \"negative\"",
        "is_difficult": true,
        "is_exam": true,
        "is_ideology": false,
        "is_key": true,
        "learning_objective": "ILO单元11 文本数据预处理 L3：应用词典法/规则法进行简单情感分析，提取评论中的情绪线索",
        "name": "受众情感词抽取",
        "node_id": "sentiment",
        "quiz_ids": [
          "w14_q1"
        ],
        "resources": {
          "ppt": "教学资源/PPT/第 14 周_文本数据预处理与分析_本科生版.md",
          "plan": "01_教学大纲与计划/16周课程计划.md#第14周文本数据预处理与分析"
        },
        "tags": [
          "情感",
          "评论",
          "反馈"
        ],
        "tags_extra": {
          "is_difficult": true,
          "is_exam": true,
          "is_ideology": false,
          "is_key": true
        }
      },
      {
        "code": "trend = df.groupby(\"day\")[\"comments\"].mean().reset_index()",
        "is_difficult": true,
        "is_exam": false,
        "is_ideology": false,
        "is_key": false,
        "learning_objective": "ILO期末项目整合 L3：应用DataFrame时间分组与聚合，从多天/多账号数据提取选题热度变化信号",
        "name": "选题趋势监测",
        "node_id": "trend",
        "quiz_ids": [
          "w15_q1"
        ],
        "resources": {
          "plan": "01_教学大纲与计划/16周课程计划.md#第15-16周期末项目汇报",
          "project_template": "03_作业与评估/期末项目模板.py",
          "case": "教学资源/实践案例/Final_project_demo"
        },
        "tags": [
          "趋势",
          "时间序列",
          "选题"
        ],
        "tags_extra": {
          "is_difficult": true,
          "is_exam": false,
          "is_ideology": false,
          "is_key": false
        }
      },
      {
        "code": "prompt = \"解释这段代码为什么报错，并给出可验证的修复步骤\"",
        "is_difficult": false,
        "is_exam": false,
        "is_ideology": true,
        "is_key": true,
        "learning_objective": "ILO单元1.1 AI编程工具概述 L2：理解AI辅助编程的概念、优势及Lingma、Trae等工具的使用方法",
        "name": "AI 辅助编程",
        "node_id": "ai",
        "quiz_ids": [],
        "resources": {
          "guide": "02_教学策略与指南/AI编程工具使用指南.md",
          "strategy": "02_教学策略与指南/AI工具基础语法教学应用策略.md",
          "code": "教学资源/第1周_课堂演示代码.py",
          "ppt": "教学资源/PPT/第 01 周_课程导论与 AI 编程概述_本科生版.md",
          "plan": "01_教学大纲与计划/16周课程计划.md#第1周课程导论与ai编程概述"
        },
        "tags": [
          "课程导论",
          "Lingma",
          "协作"
        ],
        "tags_extra": {
          "is_difficult": false,
          "is_exam": false,
          "is_ideology": true,
          "is_key": true
        }
      },
      {
        "code": "python --version\npip install pandas requests beautifulsoup4",
        "is_difficult": false,
        "is_exam": false,
        "is_ideology": true,
        "is_key": true,
        "learning_objective": "ILO单元2.1 Python与AI工具安装 L3：操作实施Python、Lingma IDE的安装和启动，解决编程环境的配置问题",
        "name": "环境配置",
        "node_id": "setup",
        "quiz_ids": [
          "w2_q1",
          "w2_q2",
          "w2_q3"
        ],
        "resources": {
          "homework": "03_作业与评估/Week02_环境配置报告_作业说明.md",
          "ppt": "教学资源/PPT/第 02 周_环境配置与基础语法_本科生版.md",
          "plan": "01_教学大纲与计划/16周课程计划.md#第2周环境配置与基础语法入门"
        },
        "tags": [
          "安装",
          "解释器",
          "依赖"
        ],
        "tags_extra": {
          "is_difficult": false,
          "is_exam": false,
          "is_ideology": true,
          "is_key": true
        }
      },
      {
        "code": "title = \"AI 新闻\"\nviews = 1280\nis_hot = True",
        "is_difficult": false,
        "is_exam": true,
        "is_ideology": false,
        "is_key": true,
        "learning_objective": "ILO单元3.1 数字与运算符 L3 + 单元1.3：理解变量、数据类型、运算符；操作执行数值运算、比较运算、逻辑运算",
        "name": "变量与数据类型",
        "node_id": "variables",
        "quiz_ids": [
          "w2_q1",
          "w2_q2",
          "w2_q3",
          "w3_q1"
        ],
        "resources": {
          "code": "教学资源/代码示例/第02周_数字运算与类型转换代码示例.py",
          "ppt": "教学资源/PPT/第 02 周_环境配置与基础语法_本科生版.md",
          "plan": "01_教学大纲与计划/16周课程计划.md#第2-3周"
        },
        "tags": [
          "变量",
          "类型",
          "基础语法"
        ],
        "tags_extra": {
          "is_difficult": false,
          "is_exam": true,
          "is_ideology": false,
          "is_key": true
        }
      },
      {
        "code": "def parse_post(item):\n    return {\"title\": item[\"title\"], \"likes\": item[\"likes\"]}",
        "is_difficult": false,
        "is_exam": true,
        "is_ideology": false,
        "is_key": true,
        "learning_objective": "ILO单元6.2 自定义函数 L3 + 单元6.1：应用def语句实现自定义函数提高代码复用性，操作range/len/sorted等内置函数",
        "name": "函数封装",
        "node_id": "function",
        "quiz_ids": [
          "w8_q1",
          "w8_q2",
          "w8_q3"
        ],
        "resources": {
          "code": "教学资源/代码示例/第08周_函数代码示例.py",
          "ppt": "教学资源/PPT/第 08 周_函数_本科生版.md",
          "plan": "01_教学大纲与计划/16周课程计划.md#第8周函数"
        },
        "tags": [
          "封装",
          "复用",
          "模块化"
        ],
        "tags_extra": {
          "is_difficult": false,
          "is_exam": true,
          "is_ideology": false,
          "is_key": true
        }
      },
      {
        "code": "with open(\"comments.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(text)",
        "is_difficult": false,
        "is_exam": true,
        "is_ideology": false,
        "is_key": true,
        "learning_objective": "ILO单元7.1 文件读写 L3：操作文本文件、CSV文件、JSON文件的读取和写入（含with语句、编码处理）",
        "name": "文件读写",
        "node_id": "fileio",
        "quiz_ids": [
          "w9_q1"
        ],
        "resources": {
          "code": "教学资源/代码示例/第09周_文件操作与数据读写代码示例.py",
          "ppt": "教学资源/PPT/第 09 周_文件操作与数据读写_本科生版.md",
          "plan": "01_教学大纲与计划/16周课程计划.md#第9周文件操作与数据读写"
        },
        "tags": [
          "保存",
          "归档",
          "复现"
        ],
        "tags_extra": {
          "is_difficult": false,
          "is_exam": true,
          "is_ideology": false,
          "is_key": true
        }
      },
      {
        "code": "df.to_excel(\"report.xlsx\", index=False)",
        "is_difficult": false,
        "is_exam": true,
        "is_ideology": false,
        "is_key": true,
        "learning_objective": "ILO单元7.2 Excel数据处理 L3 + 单元8.1：操作使用openpyxl/pandas完成Excel数据的读取、增删改写和保存",
        "name": "CSV / Excel 数据",
        "node_id": "excel",
        "quiz_ids": [
          "w10_q1"
        ],
        "resources": {
          "code": "教学资源/代码示例/第10周_pandas基础代码示例.py",
          "dataset": "教学资源/数据集/teaching_subsets",
          "ppt": "教学资源/PPT/第 10 周_Python 库与 Excel 数据处理_本科生版.md",
          "plan": "01_教学大纲与计划/16周课程计划.md#第10周python库与excel数据处理"
        },
        "tags": [
          "表格",
          "输出",
          "共享"
        ],
        "tags_extra": {
          "is_difficult": false,
          "is_exam": true,
          "is_ideology": false,
          "is_key": true
        }
      },
      {
        "code": "response = requests.get(url, headers=headers, timeout=10)",
        "is_difficult": false,
        "is_exam": true,
        "is_ideology": true,
        "is_key": true,
        "learning_objective": "ILO单元9.2 静态网页数据爬取 L3：操作使用requests和BeautifulSoup库完成静态网页数据爬取",
        "name": "Requests 请求",
        "node_id": "requests",
        "quiz_ids": [
          "w11_q1"
        ],
        "resources": {
          "code": "教学资源/代码示例/第11周_网页爬虫基础代码示例.py",
          "course_ref": "course-references/week11/python-requests-beautifulsoup-csdn-2573a",
          "ppt": "教学资源/PPT/第 11 周_网页爬虫基础_本科生版.md",
          "plan": "01_教学大纲与计划/16周课程计划.md#第11周网页爬虫基础"
        },
        "tags": [
          "HTTP",
          "请求",
          "爬虫"
        ],
        "tags_extra": {
          "is_difficult": false,
          "is_exam": true,
          "is_ideology": true,
          "is_key": true
        }
      },
      {
        "code": "soup = BeautifulSoup(html, \"html.parser\")\ntitles = [h.get_text(strip=True) for h in soup.select(\"h2\")]",
        "is_difficult": true,
        "is_exam": true,
        "is_ideology": false,
        "is_key": true,
        "learning_objective": "ILO单元9.2 静态网页数据爬取 L3：操作使用BeautifulSoup解析HTML，find/find_all/select提取标题链接正文",
        "name": "BeautifulSoup 解析",
        "node_id": "bs4",
        "quiz_ids": [
          "w11_q1"
        ],
        "resources": {
          "code": "教学资源/代码示例/第11周_网页爬虫基础代码示例.py",
          "course_ref": "course-references/week11/beautiful-soup-documentation-beautiful-soup-4-14-3-documen-6fed1",
          "ppt": "教学资源/PPT/第 11 周_网页爬虫基础_本科生版.md",
          "plan": "01_教学大纲与计划/16周课程计划.md#第11周网页爬虫基础"
        },
        "tags": [
          "HTML",
          "解析",
          "网页"
        ],
        "tags_extra": {
          "is_difficult": true,
          "is_exam": true,
          "is_ideology": false,
          "is_key": true
        }
      },
      {
        "code": "git clone https://github.com/example/repo.git",
        "is_difficult": false,
        "is_exam": false,
        "is_ideology": true,
        "is_key": true,
        "learning_objective": "ILO单元10.1 GitHub使用基础 L2：理解GitHub的作用，能够搜索、下载和使用开源项目（读README、识别依赖）",
        "name": "GitHub 开源协作",
        "node_id": "github",
        "quiz_ids": [
          "w12_q1"
        ],
        "resources": {
          "course_ref": "course-references/week12/dataabc-weibospider-b76e9",
          "ppt": "教学资源/PPT/第 12 周_GitHub 与微博数据采集_本科生版.md",
          "plan": "01_教学大纲与计划/16周课程计划.md#第12周github与微博数据采集"
        },
        "tags": [
          "开源",
          "仓库",
          "协作"
        ],
        "tags_extra": {
          "is_difficult": false,
          "is_exam": false,
          "is_ideology": true,
          "is_key": true
        }
      },
      {
        "code": "for keyword in keywords:\n    results.extend(fetch_weibo(keyword))",
        "is_difficult": true,
        "is_exam": true,
        "is_ideology": true,
        "is_key": true,
        "learning_objective": "ILO单元10.2 微博数据采集 L3：操作使用GitHub开源工具（weiboSpider）抓取微博文本数据，遵循数据采集合规性",
        "name": "微博数据采集",
        "node_id": "weibo",
        "quiz_ids": [
          "w12_q1"
        ],
        "resources": {
          "course_ref": "course-references/week12/dataabc-weibospider-b76e9",
          "ppt": "教学资源/PPT/第 12 周_GitHub 与微博数据采集_本科生版.md",
          "plan": "01_教学大纲与计划/16周课程计划.md#第12周github与微博数据采集"
        },
        "tags": [
          "舆情",
          "热点",
          "采集"
        ],
        "tags_extra": {
          "is_difficult": true,
          "is_exam": true,
          "is_ideology": true,
          "is_key": true
        }
      },
      {
        "code": "articles = parse_wechat_list(html)\nsave_json(articles, \"wechat_articles.json\")",
        "is_difficult": true,
        "is_exam": true,
        "is_ideology": true,
        "is_key": true,
        "learning_objective": "ILO单元10.3 微信公众号数据采集 L3：操作使用开源工具抓取微信公众号文章数据，采集人民日报/央视新闻等主流媒体公众号",
        "name": "微信公众号数据采集",
        "node_id": "wechat",
        "quiz_ids": [
          "w13_q1"
        ],
        "resources": {
          "course_ref": "course-references/week13/capsane-wechatarticlespider-aba9a",
          "ppt": "教学资源/PPT/第 13 周_微信公众号数据采集_本科生版.md",
          "plan": "01_教学大纲与计划/16周课程计划.md#第13周微信公众号数据采集"
        },
        "tags": [
          "公众号",
          "主流媒体",
          "内容采样"
        ],
        "tags_extra": {
          "is_difficult": true,
          "is_exam": true,
          "is_ideology": true,
          "is_key": true
        }
      },
      {
        "code": "words = jieba.lcut(clean_text)\nkeywords = [w for w in words if len(w) > 1]",
        "is_difficult": true,
        "is_exam": true,
        "is_ideology": false,
        "is_key": true,
        "learning_objective": "ILO单元11.1 中文分词 L3：操作使用jieba库进行中文分词和停用词过滤，完成词频统计与TF-IDF关键词提取",
        "name": "中文分词与关键词",
        "node_id": "segment",
        "quiz_ids": [
          "w14_q1"
        ],
        "resources": {
          "course_ref": "course-references/week14/fxsjy-jieba-3e73f",
          "ppt": "教学资源/PPT/第 14 周_文本数据预处理与分析_本科生版.md",
          "plan": "01_教学大纲与计划/16周课程计划.md#第14周文本数据预处理与分析"
        },
        "tags": [
          "分词",
          "关键词",
          "文本分析"
        ],
        "tags_extra": {
          "is_difficult": true,
          "is_exam": true,
          "is_ideology": false,
          "is_key": true
        }
      },
      {
        "code": "project = {\n    \"question\": \"某主流媒体的传播策略\",\n    \"data\": records,\n    \"analysis\": report\n}",
        "is_difficult": true,
        "is_exam": false,
        "is_ideology": true,
        "is_key": true,
        "learning_objective": "ILO期末项目整合 L3：整合采集、清洗、分析、可视化与汇报，围绕真实传播问题组织完整社交媒体文本数据项目",
        "name": "期末项目整合",
        "node_id": "project",
        "quiz_ids": [
          "w15_q1",
          "w16_q1"
        ],
        "resources": {
          "project_template": "03_作业与评估/期末项目模板.py",
          "topics": "教学资源/期末项目选题库.py",
          "demo": "教学资源/实践案例/Final_project_demo",
          "plan": "01_教学大纲与计划/16周课程计划.md#第15-16周期末项目汇报"
        },
        "tags": [
          "综合项目",
          "汇报",
          "课程收束"
        ],
        "tags_extra": {
          "is_difficult": true,
          "is_exam": false,
          "is_ideology": true,
          "is_key": true
        }
      }
    ]
  },
  "problem": {
    "coverage_note": "基本 6 题 / 组合 6 题 / 复杂 6 题，题目都来自课堂练习和课后作业的真实场景。",
    "description": "这里收集了 18 个你会真实碰到的任务，按难度分三档：基本题用一两个知识点就能做，组合题要把几节课的东西串起来，复杂题接近期末项目那种规模。每道题都附了参考思路，卡住时可以看。",
    "graph_type": "problem",
    "links": [
      {
        "detail": "从单一批量遍历,进阶到清洗后结构化落盘,引入字符串清洗与文件读写。",
        "id": "link-B1-C1",
        "relation": "进阶:遍历→批量清洗存盘",
        "source": "p-basic-01",
        "target": "p-combo-01"
      },
      {
        "detail": "单条字符串清洗逻辑,在组合级扩展为对整条列表的批量应用。",
        "id": "link-B3-C1",
        "relation": "进阶:单条清洗→批量清洗",
        "source": "p-basic-03",
        "target": "p-combo-01"
      },
      {
        "detail": "文件读写从单条记录,扩展到清洗后的批量记录集合。",
        "id": "link-B6-C1",
        "relation": "进阶:单条读写→批量落盘",
        "source": "p-basic-06",
        "target": "p-combo-01"
      },
      {
        "detail": "pandas 从基本统计,进阶为完整的数据处理与结果保存链路。",
        "id": "link-B5-C2",
        "relation": "进阶:函数统计→pandas分组",
        "source": "p-basic-05",
        "target": "p-combo-02"
      },
      {
        "detail": "条件判断从阅读量分级,升级为基于分词的评论情感极性判断。",
        "id": "link-B4-C6",
        "relation": "进阶:条件分级→情感判断",
        "source": "p-basic-04",
        "target": "p-combo-06"
      },
      {
        "detail": "通用网页爬虫能力,迁移到微博平台的结构化数据采集。",
        "id": "link-C3-C4",
        "relation": "进阶:通用爬虫→平台采集",
        "source": "p-combo-03",
        "target": "p-combo-04"
      },
      {
        "detail": "微博采集结果作为人民日报传播策略完整分析的数据基础。",
        "id": "link-C4-X1",
        "relation": "进阶:采集→完整分析项目",
        "source": "p-combo-04",
        "target": "p-complex-01"
      },
      {
        "detail": "微博单平台采集,扩展为微博+公众号双平台对比采集。",
        "id": "link-C4-X2",
        "relation": "进阶:单平台→多平台对比",
        "source": "p-combo-04",
        "target": "p-complex-02"
      },
      {
        "detail": "分词与情感分析能力,组合进热点事件舆情演化分析。",
        "id": "link-C5-X3",
        "relation": "进阶:分词→舆情演化",
        "source": "p-combo-05",
        "target": "p-complex-03"
      },
      {
        "detail": "评论情感打标方法,在舆情演化中按时间序列展开。",
        "id": "link-C6-X3",
        "relation": "进阶:情感判断→情感演变",
        "source": "p-combo-06",
        "target": "p-complex-03"
      },
      {
        "detail": "函数从单一统计,进阶为封装采集/清洗/分析的完整趋势监测系统。",
        "id": "link-B5-X4",
        "relation": "进阶:单函数→函数化系统",
        "source": "p-basic-05",
        "target": "p-complex-04"
      },
      {
        "detail": "pandas 表格处理能力,迁移到 B 轨可视化工具的统计后端。",
        "id": "link-C2-X6",
        "relation": "进阶:统计→可视化工具",
        "source": "p-combo-02",
        "target": "p-complex-06"
      },
      {
        "detail": "单平台完整分析能力,整合为可交付的期末综合项目。",
        "id": "link-X1-X5",
        "relation": "进阶:单平台分析→完整项目",
        "source": "p-complex-01",
        "target": "p-complex-05"
      },
      {
        "detail": "人民日报与新华社两个复杂项目同为主流媒体分析,方法互通、可横向对照选题与策略差异。",
        "id": "link-X1-X2",
        "relation": "横向关联:同级主流媒体分析",
        "source": "p-complex-01",
        "target": "p-complex-02"
      }
    ],
    "nodes": [
      {
        "context": "给定5条新闻标题列表(如'中国经济持续向好发展''科技创新引领发展'等),用 for 循环遍历统计每条标题字数,并用列表推导式筛选字数超过20字的标题,计算平均标题长度。源自课堂练习题库第6周基础题/进阶题。",
        "id": "p-basic-01",
        "level": "基本",
        "related_kp_ids": [
          "for",
          "list"
        ],
        "target_ability": "A4",
        "teacher_answer": [
          "用 for i, title in enumerate(titles, 1) 遍历, len(title) 统计字数并打印序号+标题",
          "列表推导式 long_titles = [t for t in titles if len(t) > 20] 筛选长标题",
          "avg = sum(len(t) for t in titles) / len(titles) 计算平均标题长度",
          "量化验收:5条标题全部输出字数,长标题筛选结果正确,平均长度数值合理"
        ],
        "title": "给定5条新闻标题列表(如'中国经济持续向好发展''科技创新引"
      },
      {
        "context": "创建一个新闻字典(标题/来源/发布时间/阅读量/关键词列表),完成修改阅读量、添加作者字段、用 get() 安全获取不存在的评论数。源自课堂练习题库第5周基础题1。",
        "id": "p-basic-02",
        "level": "基本",
        "related_kp_ids": [
          "dict",
          "variables"
        ],
        "target_ability": "A3",
        "teacher_answer": [
          "用字典字面量 news = {'title':..., 'source':'人民日报', 'views':150000, 'keywords':['经济','GDP']} 创建结构化记录",
          "news['views'] = 160000 修改阅读量, news['author'] = '张记者' 添加字段",
          "comments = news.get('comments', 0) 安全访问,键不存在返回0而非报错",
          "量化验收:增删改查四项操作均执行,dict 最终含6个键,get 返回0"
        ],
        "title": "创建一个新闻字典(标题/来源/发布时间/阅读量/关键词列表)"
      },
      {
        "context": "给定带噪声的新闻标题 ' 【重磅】中国经济2024年增长5.2%，创近年新高！ ',完成去首尾空格、去【重磅】模板标签、统计长度、判断是否含'经济'关键词。源自课堂练习题库第3周基础题1。",
        "id": "p-basic-03",
        "level": "基本",
        "related_kp_ids": [
          "string"
        ],
        "target_ability": "A2",
        "teacher_answer": [
          "title.strip() 去首尾空格",
          "title.replace('【重磅】', '') 去模板标签",
          "len(title_no_tag) 统计长度, '经济' in title_no_tag 返回布尔判断关键词",
          "量化验收:输出清洗后标题、长度数值、关键词判断True/False三项结果"
        ],
        "title": "给定带噪声的新闻标题 ' 【重磅】中国经济2024年增长5."
      },
      {
        "context": "根据阅读量对新闻进行四级分级:>=100000爆款/>=50000热门/>=10000普通/<10000冷门,封装成 classify_news(views) 函数并循环测试样例。源自课堂练习题库第7周基础题1。",
        "id": "p-basic-04",
        "level": "基本",
        "related_kp_ids": [
          "ifelse",
          "function"
        ],
        "target_ability": "A4",
        "teacher_answer": [
          "if-elif-else 四级阈值分支: views>=100000 返回'爆款', elif>=50000 '热门', elif>=10000 '普通', else '冷门'",
          "封装为 def classify_news(views) 提高复用性",
          "for v in [150000,80000,30000,5000] 循环测试打印分级",
          "量化验收:4个测试样例分别命中爆款/热门/普通/冷门四级"
        ],
        "title": "根据阅读量对新闻进行四级分级:>=100000爆款/>=50"
      },
      {
        "context": "给定新闻字典列表(含title/views/category字段),编写三个函数:计算平均阅读量、查找最热门新闻、按类别筛选新闻。源自课堂练习题库第8周基础题1。",
        "id": "p-basic-05",
        "level": "基本",
        "related_kp_ids": [
          "function",
          "list"
        ],
        "target_ability": "A4",
        "teacher_answer": [
          "def calculate_average_views(news_list): 空列表返回0,否则 sum(n['views'] for n in news_list)/len",
          "def find_hottest_news(news_list): max(news_list, key=lambda n: n['views']) 找最热",
          "def filter_by_category(news_list, category): 列表推导 [n for n in news_list if n.get('category')==category]",
          "量化验收:三函数均返回正确结果,空列表不报错"
        ],
        "title": "给定新闻字典列表(含title/views/category"
      },
      {
        "context": "将一个新闻字典列表保存为JSON文件,再读回内存,最后转存为CSV文件。源自课堂练习题库第9周基础题。",
        "id": "p-basic-06",
        "level": "基本",
        "related_kp_ids": [
          "json",
          "fileio",
          "excel"
        ],
        "target_ability": "A5",
        "teacher_answer": [
          "json.dump(data, f, ensure_ascii=False, indent=2) 保存JSON,ensure_ascii=False防中文乱码",
          "json.load(f) 读回内存数据",
          "csv.DictWriter 写CSV, encoding='utf-8-sig' 防Excel打开乱码, newline='' 防空行",
          "量化验收:生成news.json和news.csv两文件,读回数据条数与原始一致"
        ],
        "title": "将一个新闻字典列表保存为JSON文件,再读回内存,最后转存为"
      },
      {
        "context": "给定10条带模板前缀(如【快讯】)和首尾空格噪声的新闻标题列表,用循环批量清洗,组装成结构化字典列表(含title/clean_title/length),存为JSON文件。组合第3周字符串清洗与第9周文件读写。",
        "id": "p-combo-01",
        "level": "组合",
        "related_kp_ids": [
          "list",
          "string",
          "json",
          "fileio"
        ],
        "target_ability": "A5",
        "teacher_answer": [
          "for title in titles 遍历列表, 对每条执行 strip()+replace('【快讯】','') 清洗",
          "清洗结果组装成 [{'title':原, 'clean_title':清洗, 'length':len}] 字典列表",
          "json.dump(records, f, ensure_ascii=False, indent=2) 落盘保存",
          "量化验收:10条全部清洗,JSON文件含10条记录,每条clean_title无模板无多余空格"
        ],
        "title": "给定10条带模板前缀(如【快讯】)和首尾空格噪声的新闻标题列"
      },
      {
        "context": "读取一个新闻数据Excel文件,用 pandas 按来源分组统计阅读量的count/sum/mean,按总阅读量排序后保存为新Excel。源自课堂练习题库第10周pandas练习。",
        "id": "p-combo-02",
        "level": "组合",
        "related_kp_ids": [
          "dataframe",
          "excel",
          "fileio"
        ],
        "target_ability": "A5",
        "teacher_answer": [
          "df = pd.read_excel('news.xlsx') 读取, df.head()/info() 检查数据",
          "source_stats = df.groupby('source')['views'].agg(['count','sum','mean']) 分组统计",
          "source_stats.sort_values('sum', ascending=False) 按总阅读量排序",
          "source_stats.to_excel('source_stats.xlsx') 保存结果",
          "量化验收:输出各来源统计表,新Excel含count/sum/mean三列且按sum降序"
        ],
        "title": "读取一个新闻数据Excel文件,用 pandas 按来源分组"
      },
      {
        "context": "用 requests 抓取某新闻网站列表页(带请求头和超时),BeautifulSoup 解析提取新闻标题和链接,for 循环翻2-3页采集,结果存为CSV文件。组合第11周爬虫基础与课后作业。",
        "id": "p-combo-03",
        "level": "组合",
        "related_kp_ids": [
          "requests",
          "bs4",
          "fileio",
          "for"
        ],
        "target_ability": "A6",
        "teacher_answer": [
          "requests.get(url, headers={'User-Agent':'Mozilla/5.0'}, timeout=10) 发请求, for page in range(1,4) 翻页",
          "soup = BeautifulSoup(resp.text, 'html.parser'); titles = [h.get_text(strip=True) for h in soup.select('h2')] 解析",
          "csv.DictWriter 写入 title/link/date 字段, encoding='utf-8-sig'",
          "合规:先查 robots.txt,加 time.sleep(1) 频率自律,不抓取登录后内容",
          "量化验收:采集≥20条标题,CSV文件字段完整无乱码"
        ],
        "title": "用 requests 抓取某新闻网站列表页(带请求头和超时)"
      },
      {
        "context": "使用 weiboSpider 等GitHub开源工具采集某热点话题微博(至少100条),从返回的嵌套结构中解析点赞/评论/转发/发布时间字段,整理为结构化JSON。组合第12周开源采集与元数据解析。",
        "id": "p-combo-04",
        "level": "组合",
        "related_kp_ids": [
          "github",
          "weibo",
          "metadata",
          "json",
          "fileio"
        ],
        "target_ability": "A7",
        "teacher_answer": [
          "git clone weiboSpider 仓库,读README了解配置文件与运行方式, pip install -r requirements.txt",
          "从嵌套字段提取 metrics = {'likes':item['attitudes_count'], 'comments':item['comments_count'], 'pub_time':item['created_at']}",
          "json.dump(records, f, ensure_ascii=False) 存结构化记录, 同时记录采集日志(时间/数量/异常)",
          "合规:遵守个人信息保护法,不采集用户隐私字段(头像/地理位置等),隐私三级红绿灯判定",
          "量化验收:采集≥100条,JSON含likes/comments/pub_time等字段,采集日志可追溯"
        ],
        "title": "使用 weiboSpider 等GitHub开源工具采集某热"
      },
      {
        "context": "对采集的微博文本用 jieba 分词,用正则去除URL和话题标签噪声,过滤停用词和单字,用 Counter 统计前10高频词。组合第14周文本预处理。",
        "id": "p-combo-05",
        "level": "组合",
        "related_kp_ids": [
          "segment",
          "clean",
          "regex",
          "ifelse"
        ],
        "target_ability": "A8",
        "teacher_answer": [
          "text = re.sub(r'http\\S+|#.+?#', ' ', text) 用正则去URL和话题标签噪声",
          "words = jieba.lcut(text) 分词",
          "filtered = [w for w in words if len(w) > 1 and w not in stopwords] 过滤停用词和单字(if条件)",
          "Counter(filtered).most_common(10) 统计高频词",
          "量化验收:输出前10高频词及词频,分词结果无单字无停用词无URL"
        ],
        "title": "对采集的微博文本用 jieba 分词,用正则去除URL和话题"
      },
      {
        "context": "对一批微博评论清洗后用jieba分词,基于正负情感词典用规则法打正/负/中性标签,统计三类比例。组合第14周情感分析基础。",
        "id": "p-combo-06",
        "level": "组合",
        "related_kp_ids": [
          "sentiment",
          "segment",
          "ifelse",
          "string"
        ],
        "target_ability": "A8",
        "teacher_answer": [
          "text.lower().strip() 清洗标准化, jieba.lcut 分词",
          "if any(w in pos_words for w in tokens): label='positive' elif any(w in neg_words): label='negative' else 'neutral' 规则判定",
          "统计 labels 列表的正负中性计数与比例",
          "量化验收:每条评论有标签,输出三类比例(如正45%/负30%/中性25%)"
        ],
        "title": "对一批微博评论清洗后用jieba分词,基于正负情感词典用规则"
      },
      {
        "context": "采集人民日报微博近1个月内容与互动数据(≥200条),清洗标题后分词提取关键词,做情感倾向分析,按发布时间统计互动趋势,输出发布时间规律+互动效果+高频词分析报告。对标期末项目选题库选题1,参考组4新华社2982条实样。",
        "id": "p-complex-01",
        "level": "复杂",
        "related_kp_ids": [
          "weibo",
          "metadata",
          "clean",
          "segment",
          "sentiment",
          "dataframe",
          "trend"
        ],
        "target_ability": "A10",
        "teacher_answer": [
          "用开源工具采集人民日报微博≥200条,提取发布时间/点赞/评论/转发等metadata字段",
          "clean 去模板噪声, segment 分词生成词云与高频词, sentiment 情感分布统计",
          "dataframe 按发布小时/日期分组,trend 输出互动量时间序列与发布时间规律",
          "撰写分析报告:发布时间规律(如早8点/晚8点峰值)、互动效果、高频主题词三项发现",
          "合规:采集频率自律,不采集用户隐私,数据仅用于学术研究",
          "量化验收:≥200条数据,词云图+趋势图+报告三项产出"
        ],
        "title": "采集人民日报微博近1个月内容与互动数据(≥200条),清洗标"
      },
      {
        "context": "采集新华社微博+微信公众号同一时期内容,对比两平台内容差异、传播效果、用户互动,输出平台策略差异结论。对标期末项目选题库选题3与组4新华社多平台分析实样。",
        "id": "p-complex-02",
        "level": "复杂",
        "related_kp_ids": [
          "weibo",
          "wechat",
          "metadata",
          "clean",
          "dataframe",
          "segment"
        ],
        "target_ability": "A10",
        "teacher_answer": [
          "双平台分别采集,统一字段schema(标题/发布时间/互动量),标注platform字段后合并",
          "clean 清洗标题, dataframe 合并后 groupby('platform') 统计互动均值与发文频率",
          "segment 分词对比两平台用词差异,识别平台内容风格特征",
          "输出平台策略差异结论:如微博偏即时短文+高互动,公众号偏深度长文+高阅读",
          "量化验收:双平台各≥100条,对比表含发文量/平均互动/高频词差异"
        ],
        "title": "采集新华社微博+微信公众号同一时期内容,对比两平台内容差异、"
      },
      {
        "context": "采集某热点事件(如高考/春节档电影)微博讨论数据,分析讨论热度曲线、正负情感随时间演变、识别情感转折点。对标期末项目选题库选题5/7。",
        "id": "p-complex-03",
        "level": "复杂",
        "related_kp_ids": [
          "weibo",
          "clean",
          "segment",
          "sentiment",
          "dataframe",
          "trend",
          "ifelse"
        ],
        "target_ability": "A10",
        "teacher_answer": [
          "采集事件相关微博及评论, clean 清洗文本噪声",
          "segment 分词, sentiment 按发布时间逐条打情感标签",
          "dataframe 按日聚合正/负/中性比例, trend 输出讨论热度曲线",
          "识别情感转折点(如某日负面比例突增),结合事件时间线解释舆情演化",
          "量化验收:热度曲线图+情感比例堆叠图+转折点标注三项产出"
        ],
        "title": "采集某热点事件(如高考/春节档电影)微博讨论数据,分析讨论热"
      },
      {
        "context": "多天采集多家主流媒体(人民日报/新华社/央视新闻)微博,用函数封装采集/清洗/分析流程,监测各媒体选题热度变化,辅助编辑部决策。对标 trend 选题趋势监测场景与 function 函数封装。",
        "id": "p-complex-04",
        "level": "复杂",
        "related_kp_ids": [
          "crawl",
          "metadata",
          "clean",
          "segment",
          "dataframe",
          "trend",
          "function"
        ],
        "target_ability": "A10",
        "teacher_answer": [
          "function 封装三模块: def fetch_keyword(kw) 采集、 def clean_title(t) 清洗、 def analyze_trend(df) 分析",
          "for 循环多关键词多日采集,多媒体账号批量处理",
          "dataframe 按 day+topic 分组聚合, trend 输出选题热度变化",
          "输出编辑部决策支持结论:如某话题热度上升建议跟进",
          "量化验收:3家媒体×多日数据,趋势图+决策建议两项产出"
        ],
        "title": "多天采集多家主流媒体(人民日报/新华社/央视新闻)微博,用函"
      },
      {
        "context": "完成一个完整期末数据新闻项目:选题→数据采集(≥200条)→清洗→分词/关键词提取→情感/趋势分析→可视化→3000字报告+汇报PPT。对标期末项目全部要求与组4实样。",
        "id": "p-complex-05",
        "level": "复杂",
        "related_kp_ids": [
          "project",
          "weibo",
          "clean",
          "segment",
          "sentiment",
          "dataframe",
          "trend",
          "function",
          "fileio",
          "ai"
        ],
        "target_ability": "A10",
        "teacher_answer": [
          "明确研究问题,数据来源合规(≥200条),记录采集日志可追溯",
          "完整分析链: clean 清洗→segment 分词→sentiment 情感→dataframe+trend 趋势, function 封装各步骤",
          "可视化:词云图+统计图表(ECharts/wordcloud), ai 辅助调试与报告润色但不替代分析判断",
          "交付:3000字报告(PDF)+汇报PPT(15-20页)+源代码+原始数据+采集日志",
          "量化验收:评分对标数据采集完整性20%+代码质量20%+分析深度25%+汇报20%+创新15%"
        ],
        "title": "完成一个完整期末数据新闻项目:选题→数据采集(≥200条)→"
      },
      {
        "context": "开发一个新闻数据可视化工具(B轨):读取Excel/JSON新闻数据,用函数封装多维度统计(按来源/类别/时间),生成ECharts图表配置,前端渲染交互式仪表盘。对标组2电影数据可视化12种ECharts与B轨工具开发能力。",
        "id": "p-complex-06",
        "level": "复杂",
        "related_kp_ids": [
          "dataframe",
          "excel",
          "json",
          "function",
          "project"
        ],
        "target_ability": "A10",
        "teacher_answer": [
          "pd.read_excel/read_json 读取数据, function 封装按来源/类别/时间多维度统计函数",
          "生成ECharts option 配置JSON(柱状/饼图/折线等),前端渲染交互式图表",
          "工程化:配置解耦(数据路径入配置文件)、异常防御(空数据/缺字段处理)、README文档",
          "交付:可运行工具+使用说明+示例数据,支持用户上传自有数据生成图表",
          "量化验收:≥3种图表类型,配置解耦,异常输入不崩溃,README可复现"
        ],
        "title": "开发一个新闻数据可视化工具(B轨):读取Excel/JSON"
      }
    ]
  }
};
