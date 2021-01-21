export const menuItems = [
    {
        id: 1,
        label: "menuitems.overview.text",
        isTitle: true
    },

    {
        id: 2,
        label: "menuitems.overview.list.dashboard.text",
        icon: "ri-dashboard-line",
        isMenuCollapsed: true,
        subItems: [
            {
                id: 2.1,
                label: 'menuitems.overview.list.dashboard.default',
                link: '/'
            }
        ]
    },
    {
        id: 3,
        label: "menuitems.overview.list.accounts.text",
        icon: "ri-message-2-line",
        isMenuCollapsed: true,
        subItems: [
            {
                id: 3.1,
                label: 'menuitems.overview.list.accounts.checkingsavings',
                link: '/'
            },
            {
                id: 3.2,
                label: 'menuitems.overview.list.accounts.retirement',
                link: '/'
            }
        ]
    },
    {
        id: 4,
        label: "menuitems.overview.list.networth",
        icon: "ri-message-2-line",
        link: ''
    },
    {
        id: 5,
        label: "menuitems.overview.list.transactions",
        icon: "ri-dashboard-line",
        link: ''
    },

    {
        id: 6,
        label: "menuitems.banking.text",
        isTitle: true
    },

    {
        id: 7,
        label: "menuitems.banking.list.cashflow",
        icon: "ri-dashboard-line",
        link: ''
    },
    {
        id: 8,
        label: "menuitems.banking.list.budgeting",
        icon: "ri-dashboard-line",
        link: ''
    },
    {
        id: 9,
        label: "menuitems.banking.list.bills",
        icon: "ri-dashboard-line",
        link: ''
    },

    {
        id: 10,
        label: "menuitems.planning.text",
        isTitle: true
    },
    {
        id: 11,
        label: "menuitems.tools.text",
        isTitle: true
    },
    {
        id: 12,
        label: "menuitems.investing.text",
        isTitle: true
    }

];

