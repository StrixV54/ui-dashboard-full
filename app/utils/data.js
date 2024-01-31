const sidebarOptions = [
  {
    label: "Dashboard",
    imageSrc: "dashboard.svg",
    isExpandable: false,
    childenOptions: [],
  },
  {
    label: "Customers",
    imageSrc: "customer.svg",
    isExpandable: true,
    childenOptions: [],
  },
  {
    label: "All reports",
    imageSrc: "report.svg",
    isExpandable: false,
    childenOptions: [],
  },
  {
    label: "Geography",
    imageSrc: "geography.svg",
    isExpandable: false,
    childenOptions: [],
  },
  {
    label: "Conversations",
    imageSrc: "conversations.svg",
    isExpandable: false,
    childenOptions: [],
  },
  {
    label: "Deals",
    imageSrc: "deal.svg",
    isExpandable: false,
    childenOptions: [],
  },
  {
    label: "Export",
    imageSrc: "export.svg",
    isExpandable: false,
    childenOptions: [],
  },
];

const listOfCustomers = [
  {
    icon: "bg-[url('/avatar02.png')] bg-[50%] bg-cover",
    name: "Chris Friedkly",
    company: "Supermarket Villanova",
    isSelected: false,
  },
  {
    icon: "bg-[url('/avatar03.png')] bg-[50%] bg-cover",
    name: "Maggie Johnson",
    company: "Oasis Organic Inc.",
    isSelected: true,
  },
  {
    icon: "bg-[url('/avatar04.png')] bg-[50%] bg-cover",
    name: "Gael Harry",
    company: "New York Finest Fruits",
    isSelected: false,
  },
  {
    icon: "bg-[url('/avatar05.png')] bg-[50%] bg-cover",
    name: "Jenna Sullivan",
    company: "Walmart",
    isSelected: false,
  },
];

const listOfDeals = [
  "Fruit2Go",
  "Marshall's MKT",
  "CCNT",
  "Joana Mini-market",
  "Little Brazil Vegan",
  "Target",
  "Organic Place",
  "Morello's",
];

const chatProfiles = [
  {
    icon: "bg-[url('/avatar03.png')]",
    isUnread: true,
  },
  {
    icon: "bg-[url('/avatar06.png')]",
    isUnread: true,
  },
  {
    icon: "bg-[url('/avatar07.png')]",
    isUnread: false,
  },
  {
    icon: "bg-[url('/avatar08.png')]",
    isUnread: false,
  },
];

export { sidebarOptions, listOfCustomers, listOfDeals, chatProfiles };
