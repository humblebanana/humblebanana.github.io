const cardContainer = document.getElementById('card-container');
const categoryButtons = document.querySelectorAll('.category-btn');

const cardContents = [
    { 
        title: '什么是企业价值(EV)?', 
        content: '企业价值代表了公司对所有投资者的价值。计算公式为:EV = 股权价值 + 债务 + 优先股 + 少数股东权益 - 现金。它反映了收购公司所需的全部成本。', 
        category: 'valuation'
    },
    { 
        title: '什么是EBITDA?', 
        content: 'EBITDA是指未计利息、税项、折旧及摊销前的利润。它反映了公司的经营现金流，常用于比较不同资本结构和税收环境下的公司表现。', 
        category: 'financial'
    },
    { 
        title: '什么是DCF?', 
        content: 'DCF(贴现现金流)是一种估值方法，通过预测公司未来现金流并将其折现到现值来确定公司价值。它考虑了货币的时间价值，被认为是最准确的估值方法之一。', 
        category: 'valuation'
    },
    { 
        title: '什么是LBO?', 
        content: 'LBO(杠杆收购)是指买方主要通过举债来收购目标公司。LBO模型用于分析此类交易的财务影响和回报。它通常由私募股权公司进行，目标是通过提高运营效率和偿还债务来增加股东价值。', 
        category: 'transaction'
    },
    { 
        title: '什么是并购协同效应?', 
        content: '并购协同效应指两家公司合并后产生的额外价值，通常包括收入协同效应(如交叉销售)和成本协同效应(如裁员、合并重复部门)。实现协同效应是许多并购交易的主要动机。', 
        category: 'transaction'
    },
    { 
        title: '什么是WACC?', 
        content: 'WACC(加权平均资本成本)是公司各种资本来源的成本的加权平均值，常用作DCF模型中的贴现率。它反映了公司融资的整体成本，考虑了债务和股权融资的比例及其各自的成本。', 
        category: 'financial'
    },
    { 
        title: '什么是可比公司分析?', 
        content: '可比公司分析是一种估值方法，通过比较目标公司与类似公司的财务指标（如EV/EBITDA、P/E比率）来确定其价值。这种方法基于市场对类似公司的估值来推断目标公司的价值。', 
        category: 'valuation'
    },
    { 
        title: '什么是并购溢价?', 
        content: '并购溢价是收购方为获得目��公司控制权而支付的超过目标公司当前市场价值的金额。溢价通常反映了预期的协同效应、控制权价值或战略价值。', 
        category: 'transaction'
    },
    { 
        title: '什么是EPS?', 
        content: 'EPS(每股收益)是公司净利润除以流通在外的普通股数量。它是衡量公司盈利能力的重要指标，常用于股票估值和比较不同公司的表现。', 
        category: 'financial'
    },
    { 
        title: '什么是P/E比率?', 
        content: 'P/E比率(市盈率)是公司股价与每股收益的比值。它反映了投资者愿意为公司每一美元收益支付的价格，常用于评估股票是否被高估或低估。', 
        category: 'valuation'
    },
    { 
        title: '什么是ROE?', 
        content: 'ROE(股本回报率)是净利润除以股东权益，衡量公司利用股东投资创造利润的能力。高ROE通常表示公司有效地利用了股东资金。', 
        category: 'financial'
    },
    { 
        title: '什么是ROA?', 
        content: 'ROA(资产回报率)是净利润除以总资产，衡量公司利用所有资产创造利润的能力。它反映了公司的整体运营效率。', 
        category: 'financial'
    },
    { 
        title: '什么是NPV?', 
        content: 'NPV(净现值)是��个项目所有未来现金流的现值之和减去初始投资成本。正NPV表示项目值得投资，因为它会创造价值。', 
        category: 'valuation'
    },
    { 
        title: '什么是IRR?', 
        content: 'IRR(内部收益率)是使项目NPV等于零的贴现率。它反映了投资的预期回报率，常用于比较不同投资机会。', 
        category: 'valuation'
    },
    { 
        title: '什么是营运资本?', 
        content: '营运资本是公司日常运营所需的资金，通常定义为流动资产减去流动负债。良好的营运资本管理对公司的短期偿债能力和运营效率至关重要。', 
        category: 'financial'
    },
    { 
        title: '什么是自由现金流?', 
        content: '自由现金流是公司经营活动产生的现金减去资本支出后的剩余现金。它代表了公司可用于派发股息、回购股票或偿还债务的现金，是公司价值的重要驱动因素。', 
        category: 'financial'
    },
    { 
        title: '什么是杠杆比率?', 
        content: '杠杆比率衡量公司使用债务融资的程度，常见的包括债务/EBITDA比率和债务/权益比率。高杠杆可能带来更高回报，但也增加了财务风险。', 
        category: 'financial'
    },
    { 
        title: '什么是流动比率?', 
        content: '流动比率是流动资产除以流动负债，衡量公司的短期偿债能力。比率大于1表示公司有足够的短期资产来覆盖短期负债。', 
        category: 'financial'
    },
    { 
        title: '什么是Beta系数?', 
        content: 'Beta系数衡量一只股票相对于整体市场的波动性。Beta大于1表示股票波动性高于市场，小于1则表示波动性低于市场。它在资本资产定价模型(CAPM)中用于计算期望回报率。', 
        category: 'financial'
    },
    { 
        title: '什么是资本资产定价模型(CAPM)?', 
        content: 'CAPM是一个用于计算资产预期回报率的模型。公式为：期望回报率 = 无风险利率 + Beta * (市场回报率 - 无风险利率)。它考虑了资产的系统性风险。', 
        category: 'valuation'
    },
    { 
        title: '什么是股息贴现模型(DDM)?', 
        content: 'DDM是一种股票估值方法，基于未来预期股息的现值来确定股票价值。它特别适用于评估稳定支付股息的成熟公司。', 
        category: 'valuation'
    },
    { 
        title: '什么是资产负债表?', 
        content: '资产负债表是反映公司在特定时点财务状况的报表，包括资产、负债和股东权益。它遵循会计等式：资产 = 负债 + 股东权益。', 
        category: 'financial'
    },
    { 
        title: '什么是利润表?', 
        content: '利润表summarizes总结了公司在特定期间的收入、成本和费用，最终得出净利润或净亏损。它反映了公司的盈利能力。', 
        category: 'financial'
    },
    { 
        title: '什么是现金流量表?', 
        content: '现金流量表记录了公司在特定期间的现金流入和流出，分为经营活动、投资活动和筹资活动三部分。它反映了公司的现金生成能力。', 
        category: 'financial'
    },
    { 
        title: '什么是商誉?', 
        content: '商誉是无形资产的一种，代表了收购价格超过被收购公司可辨认净资产公允价值的部分。它反映了品牌价值、客户关系等难以量化的资产。', 
        category: 'financial'
    },
    { 
        title: '什么是资本支出(CapEx)?', 
        content: '资本支出是公司用于购买、升级和维护实物资产（如设备、厂房或建筑物）的支出。它通常在资产负债表上资本化，而不是在利润表上费用化。', 
        category: 'financial'
    },
    { 
        title: '什么是折旧?', 
        content: '折旧是长期资产价值随时间减少的会计方法。它将资产成���分摊到其使用寿命期间，反映了资产的磨损和贬值。', 
        category: 'financial'
    },
    { 
        title: '什么是摊销?', 
        content: '摊销类似于折旧，但适用于无形资产（如专利、版权）。它将无形资产的成本在其使用寿命内系统地分配。', 
        category: 'financial'
    },
    { 
        title: '什么是EBIT?', 
        content: 'EBIT（息税前利润）是公司的经营利润，不考虑利息和所得税费用。它反映了公司的核心经营盈利能力，常用于公司间比较。', 
        category: 'financial'
    },
    { 
        title: '什么是NOPAT?', 
        content: 'NOPAT（税后净营业利润）是EBIT减去税费后的利润。它代表了如果公司没有债务时的盈利能力，常用于计算自由现金流。', 
        category: 'financial'
    },
    { 
        title: '什么是边际成本?', 
        content: '边际成本是增加一单位产出所需的额外成本。了解边际成本对于定价和生产决策至关重要。', 
        category: 'financial'
    },
    { 
        title: '什么是规模经济?', 
        content: '规模经济指随着生产规模扩大，平均成本下降的现象。它是许多并购交易的驱动因素之一。', 
        category: 'transaction'
    },
    { 
        title: '什么是垂直整合?', 
        content: '垂直整合是指公司通过控制供应链的不同阶段来扩张的策略。它可以提高效率，但也可能增加复杂性和成本。', 
        category: 'transaction'
    },
    { 
        title: '什么是水平整合?', 
        content: '水平整合是指公司收购同一行业的竞争对手。这种策略旨在增加市场份额、实现规模经济或减少竞争。', 
        category: 'transaction'
    },
    { 
        title: '什么是杜邦分析?', 
        content: '杜邦分析是一种财务分析方法，将ROE分解为净利润率、资产周转率和财务杠杆三个组成部分。它有助于深入了解公司的盈利能力来源。', 
        category: 'financial'
    },
    { 
        title: '什么是优先股?', 
        content: '优先股是一种特殊类型的股票，在股息支付和清算时优先于普通股。它通常没有投票权，但提供固定的股息。', 
        category: 'financial'
    },
    { 
        title: '什么是可转换债券?', 
        content: '可转换债券是一种可以转换为发行公司股票的债券。它为投资者提供了债券的安全性和潜在的股票升值收益。', 
        category: 'financial'
    },
    { 
        title: '什么是期权?', 
        content: '���权是一种金融衍生品，赋予持有人在特定日期或之前以特定价格买入（看涨期权）或卖出（看跌期权）标的资产的权利，但不是义务。', 
        category: 'financial'
    },
    { 
        title: '什么是做空?', 
        content: '做空是一种投资策略，投资者借入股票并立即卖出，希望日后以更低的价格买回。它是对股票价格下跌的押注。', 
        category: 'financial'
    },
    { 
        title: '什么是IPO?', 
        content: 'IPO（首次公开募股）是私人公司首次向公众发行股票的过程。它允许公司筹集资金并为现有股东提供流动性。', 
        category: 'transaction'
    },
    { 
        title: '什么是尽职调查?', 
        content: '尽职调查是在重大商业交易（如并购）中对目标公司进行全面审查的过程。它涉及财务、法律、运营等多个方面的详细调查。', 
        category: 'transaction'
    },
    { 
        title: '什么是SWOT分析?', 
        content: 'SWOT分析是评估公司优势(Strengths)、劣势(Weaknesses)、机会(Opportunities)和威胁(Threats)的战略规划工具。它有助于制定商业策略。', 
        category: 'transaction'
    },
    { 
        title: '什么是敏感性分析?', 
        content: '敏感性分析是研究不同变量对特定财务指标影响的技术。它帮助分析师了解哪些因素对模型结果影响最大。', 
        category: 'valuation'
    },
    { 
        title: '什么是情景分析?', 
        content: '情景分析是评估不同可能情况下公司或投资表现的技术。它通常包括最佳、最差和基本情景，有助于理解潜在风险和回报。', 
        category: 'valuation'
    },
    { 
        title: '什么是Monte Carlo模拟?', 
        content: 'Monte Carlo模拟是一种使用随机采样来获得数值结果的计算算法。在金融中，它常用于评估投资组合风险和资产定价。', 
        category: 'valuation'
    }
];

function getCategoryColor(category) {
    switch(category) {
        case 'valuation':
            return '#FFF0D0'; // 淡金色
        case 'financial':
            return '#E0F0E0'; // 淡绿色
        case 'transaction':
            return '#E0F0FF'; // ���蓝色
        default:
            return '#FFFFFF'; // 白色
    }
}

function createCard(title, content, category) {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.backgroundColor = getCategoryColor(category);
    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front">
                <h3>${title}</h3>
            </div>
            <div class="card-back">
                <p>${content}</p>
            </div>
        </div>
    `;
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
    return card;
}

function displayCards(category) {
    cardContainer.innerHTML = ''; // 清空容器
    const filteredCards = category === 'all' ? cardContents : cardContents.filter(card => card.category === category);
    filteredCards.forEach(cardContent => {
        const card = createCard(cardContent.title, cardContent.content, cardContent.category);
        cardContainer.appendChild(card);
    });
}

// 为类别按钮添加点击事件
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        displayCards(category);
    });
});

// 初始显示所有卡片
displayCards('all');