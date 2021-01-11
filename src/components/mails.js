

const mails = [
    {
        id: 9999999,
        from: 'aaa.aaa@example.com',
        to: ['bbb.bbb@example.com', 'ccc.ccc@example.com', 'ddd@ddd@example.com'],
        date: '1598595486',
        subject: 'Meeting',
        message: 'You are invited',
        attachment: false
    },
    {
        id: 9999998,
        from: 'bbb.bbb@example.com',
        to: ['aaa.aaa@example.com'],
        date: '1591961927',
        subject: 'Great news?',
        message: 'I just tasted the best chicken wings I have ever had',
        attachment: false
    },
    {
        id: 9999997,
        from: 'bbb.bbb@example.com',
        to: ['aaa.aaa@example.com', 'eee.eee@example.com', 'fff.fff@example.com'],
        date: '1585234808',
        subject: 'Top Cat!',
        message: 'Top Cat! The most effectual Top Cat! Who’s intellectual close friends get to call him T.C., providing it’s with dignity. Top Cat! The indisputable leader of the gang. He’s the boss, he’s a pip, he’s the championship. He’s the most tip top, Top Cat.',
        attachment: true
    },
    {
        id: 9999996,
        from: 'ccc.ccc@example.com',
        to: ['aaa.aaa@example.com'],
        date: '1605944810',
        subject: 'I never spend much time in school but I taught ladies plenty',
        message: 'I never spend much time in school but I taught ladies plenty. It’s true I hire my body out for pay, hey hey. I’ve gotten burned over Cheryl Tiegs, blown up for Raquel Welch. But when I end up in the hay it’s only hay, hey hey. I might jump an open drawbridge, or Tarzan from a vine. ’Cause I’m the unknown stuntman that makes Eastwood look so fine.',
        attachment: false
    },
    {
        id: 9999995,
        from: 'eee.eee@example.com',
        to: ['aaa.aaa@example.com', 'ddd@ddd@example.com'],
        date: '1593046060',
        subject: '80 days around the world',
        message: '80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world. Round, all around the world. Round, all around the world. Round, all around the world. ',
        attachment: false
    },
    {
        id: 9999994,
        from: 'bbb.bbb@example.com',
        to: ['aaa.aaa@example.com', 'fff.fff@example.com'],
        date: '1578945597',
        subject: "Separate the business entity from the owner",
        message: "Having a business name does not separate the business entity from the owner, which means that the owner of the business is responsible and liable for debts incurred by the business. If the business acquires debts, the creditors can go after the owner's personal possessions. A business structure does not allow for corporate tax rates. The proprietor is personally taxed on all income from the business. ",
        attachment: false
    },
    {
        id: 9999993,
        from: 'eee.eee@example.com',
        to: ['bbb.bbb@example.com', 'aaa.aaa@example.com', 'fff.fff@example.com'],
        date: '1580912492',
        subject: "Sole proprietorship",
        message: "A sole proprietorship, also known as a sole trader, is owned by one person and operates for their benefit. The owner operates the business alone and may hire employees. A sole proprietor has unlimited liability for all obligations incurred by the business, whether from operating costs or judgments against the business. All assets of the business belong to a sole proprietor, including, for example, a computer infrastructure, any inventory, manufacturing equipment, or retail fixtures, as well as any real property owned by the sole proprietor.",
        attachment: true
    },
    {
        id: 9999992,
        from: 'bbb.bbb@example.com',
        to: ['aaa.aaa@example.com', 'ddd@ddd@example.com'],
        date: '1600438739',
        subject: "Partnership",
        message: " A partnership is a business owned by two or more people. In most forms of partnerships, each partner has unlimited liability for the debts incurred by the business. The three most prevalent types of for-profit partnerships are general partnerships, limited partnerships, and limited liability partnerships.",
        attachment: false
    },
    {
        id: 9999991,
        from: 'fff.fff@example.com',
        to: ['aaa.aaa@example.com'],
        date: '1590403363',
        subject: "Corporation",
        message: "The owners of a corporation have limited liability and the business has a separate legal personality from its owners. Corporations can be either government-owned or privately owned, and they can organize either for profit or as nonprofit organizations. A privately owned, for-profit corporation is owned by its shareholders, who elect a board of directors to direct the corporation and hire its managerial staff. A privately owned, for-profit corporation can be either privately held by a small group of individuals, or publicly held, with publicly traded shares listed on a stock exchange.",
        attachment: false
    },
    {
        id: 9999990,
        from: 'bbb.bbb@example.com',
        to: ['aaa.aaa@example.com', 'ddd@ddd@example.com'],
        date: '1586655886',
        subject: "Cooperative",
        message: "Often referred to as a co-op, a cooperative is a limited-liability business that can organize as for-profit or not-for-profit. A cooperative differs from a corporation in that it has members, not shareholders, and they share decision-making authority. Cooperatives are typically classified as either consumer cooperatives or worker cooperatives. Cooperatives are fundamental to the ideology of economic democracy.",
        attachment: false
    },
    {
        id: 9999989,
        from: 'eee.eee@example.com',
        to: ['aaa.aaa@example.com', 'fff.fff@example.com'],
        date: '1579626196',
        subject: "Limited liability companies (LLC)",
        message: "Limited liability companies (LLC), limited liability partnerships, and other specific types of business organization protect their owners or shareholders from business failure by doing business under a separate legal entity with certain legal protections. In contrast, unincorporated businesses or persons working on their own are usually not as protected",
        attachment: true
    },
    {
        id: 9999988,
        from: 'fff.fff@example.com',
        to: ['ccc.ccc@example.com'],
        date: '1601566523',
        subject: "Franchises",
        message: " A franchise is a system in which entrepreneurs purchase the rights to open and run a business from a larger corporation. Franchising in the United States is widespread and is a major economic powerhouse. One out of twelve retail businesses in the United States are franchised and 8 million people are employed in a franchised business.",
        attachment: false
    },
    {
        id: 9999987,
        from: 'ccc.ccc@example.com',
        to: ['aaa.aaa@example.com', 'ddd@ddd@example.com'],
        date: '1607141553',
        subject: "A company limited by guarantee",
        message: "Commonly used where companies are formed for non-commercial purposes, such as clubs or charities. The members guarantee the payment of certain (usually nominal) amounts if the company goes into insolvent liquidation, but otherwise, they have no economic rights in relation to the company. This type of company is common in England. A company limited by guarantee may be with or without having share capital.",
        attachment: true
    },
    {
        id: 9999986,
        from: 'fff.fff@example.com',
        to: ['aaa.aaa@example.com'],
        date: '1588122201',
        subject: "A company limited by shares",
        message: "The most common form of the company used for business ventures. Specifically, a limited company is a company in which the liability of each shareholder is limited to the amount individually invested with corporations being ",
        attachment: false
    },
    {
        id: 9999985,
        from: 'eee.eee@example.com',
        to: ['aaa.aaa@example.com', 'ddd@ddd@example.com'],
        date: '1599326184',
        subject: "A company limited by guarantee with a share capital",
        message: "A hybrid entity, usually used where the company is formed for non-commercial purposes, but the activities of the company are partly funded by investors who expect a return. This type of company may no longer be formed in the UK, although provisions still exist in law for them to exist.",
        attachment: false
    },
    {
        id: 9999984,
        from: 'bbb.bbb@example.com',
        to: ['ccc.ccc@example.com'],
        date: '1599353778',
        subject: "Companies are also sometimes distinguished into public",
        message: "for legal and regulatory purposes. Public companies are companies whose shares can be publicly traded, often (although not always) on a stock exchange which imposes listing requirements/Listing Rules as to the issued shares, the trading of shares and a future issue of shares to help bolster the reputation of the exchange or particular market of exchange. Private companies do not have publicly traded shares, and often contain restrictions on transfers of shares. In some jurisdictions, private companies have maximum numbers of shareholders. ",
        attachment: false
    },
    {
        id: 9999982,
        from: 'bbb.bbb@example.com',
        to: ['bbb.bbb@example.com', 'aaa.aaa@example.com', 'fff.fff@example.com'],
        date: '1585788396',
        subject: "A parent company",
        message: "A parent company is a company that owns enough voting stock in another firm to control management and operations by influencing or electing its board of directors; the second company being deemed as a subsidiary of the parent company. The definition of a parent company differs by jurisdiction, with the definition normally being defined by way of laws dealing with companies in that jurisdiction. ",
        attachment: false
    },
    {
        id: 9999981,
        from: 'ccc.ccc@example.com',
        to: ['aaa.aaa@example.com', 'ddd@ddd@example.com'],
        date: '1582323220',
        subject: "Finance",
        message: "Finance is a field that deals with the study of investments. It includes the dynamics of assets and liabilities over time under conditions of different degrees of uncertainty and risk. Finance can also be defined as the science of money management. Finance aims to price assets based on their risk level and their expected rate of return. Finance can be broken into three different sub categories: public finance, corporate finance, and personal finance. Activities also include budgeting, forecasting and lending money, and is defined as the management of money.",
        attachment: false
    },
    {
        id: 9999980,
        from: 'fff.fff@example.com',
        to: ['aaa.aaa@example.com'],
        date: '1591251392',
        subject: "Manufacturing",
        message: "Manufacturing is the production of merchandise for use or sale using labour and machines, tools, chemical and biological processing, or formulation. The term may refer to a range of human activity, from handicraft to high tech, but is most commonly applied to industrial production, in which raw materials are transformed into finished goods on a large scale. ",
        attachment: false
    },
    {
        id: 9999979,
        from: 'eee.eee@example.com',
        to: ['bbb.bbb@example.com', 'fff.fff@example.com'],
        date: '1580286856',
        subject: "Marketing",
        message: "Marketing is defined by the American Marketing Association as the activity, set of institutions, and processes for creating, communicating, delivering, and exchanging offerings that have value for customers, clients, partners, and society at large.",
        attachment: true
    },
]

export default mails