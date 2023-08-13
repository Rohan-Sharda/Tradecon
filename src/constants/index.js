import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "pricing",
      title: "Pricing",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Intraday MoneyFlow",
      icon: web,
    },
    {
      title: "Institutional Stocks",
      icon: mobile,
    },
    {
      title: "Dynamic HeatMap",
      icon: backend,
    },
    {
      title: "Powerfull Dashboard",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    // {
    //   name: "git",
    //   icon: git,
    // },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "10 years of Back-tested data",
      // company_name: "Starbucks",
      // icon: starbucks,
      iconBg: "#383E56",
      // date: "March 202s0 - April 2021",
      points: [
        "It becomes very easy to trade with an AI-powered back-tested system, backed by 10 years of solid data, which provides you with stocks to trade based on reliable price action.",
        // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        // "Implementing responsive design and ensuring cross-browser compatibility.",
        // "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Robust System",
      // company_name: "Tesla",
      // icon: tesla,
      iconBg: "#E6DEDD",
      // date: "Jan 2021 - Feb 2022",
      points: [
        "The AI powered robust system behind the scanner avoids fake breakouts and breakdowns and so helps in identifying better trading oppertunities, making trading more effective.",
        
      ],
    },
    {
      title: "Momentum Tracker",
      // company_name: "Shopify",
      // icon: shopify,
      iconBg: "#383E56",
      // date: "Jan 2022 - Jan 2023",
      points: [
        "Tradecon tracks stocks which usually trade with high volumes, enabling traders to capture such stock rallies",
        
      ],
    },
    {
      title: "Hawk-eye view of the market",
      // company_name: "Meta",
      // icon: meta,
      iconBg: "#E6DEDD",
      // date: "Jan 2023 - Present",
      points: [
        "Tradecon offers an eagle-eyed view of the market, tracking where the big players are building up their positions along with the most bullish and the bearish sectors",
        
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Tradecon is a boon for new traders, it helped me in picking momentum stocks.",
      name: "Richa Sharma",
      // designation: "CFO",
      // company: "Acme Co",
      // image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Before Tradecon I used to randomly take trades which resulted in loss. But through this I am able to catch stocks with high volumes 💪.",
        name: "Akshat Gupta"
      // designation: "COO",
      // company: "DEF Corp",
      // image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Tradecon is definitely fantastic, but if it can provide the stocks to trade in a list format it would be great!",
      name: "Rohit Awasthi",
      // designation: "CTO",
      // company: "456 Enterprises",
      // image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Nifty-50 Index",
      description:
        "Helps in understanding where smart money is flowing in nifty-50 index.",
      tags: [
        {
          name: "Nifty-50",
          color: "blue-text-gradient",
        },
        // {
        //   name: "mongodb",
        //   color: "green-text-gradient",
        // },
        // {
        //   name: "tailwind",
        //   color: "pink-text-gradient",
        // },
      ],
      image: carrent,
      source_code_link: "https://www.tradingview.com/heatmap/stock/?color=change%7C240&dataset=NIFTY50&group=sector&size=Value.Traded%7C240",
    },
    {
      name: "Pre-Market Data",
      description:
        "Pick stocks from pre market data to identify where bulk orders are being executed",
      tags: [
        // {
        //   name: "react",
        //   color: "blue-text-gradient",
        // },
        {
          name: "Pre-Market",
          color: "green-text-gradient",
        },
        // {
        //   name: "scss",
        //   color: "pink-text-gradient",
        // },
      ],
      image: jobit,
      source_code_link: "https://www.tradingview.com/heatmap/stock/?color=premarket_change&dataset=AllIN&group=sector&size=Value.Traded%7C240",
    },
    {
      name: "Volume flow",
      description:
        "Enhance your stock picking by selecting stocks with high volumes as those have the highest momentum.",
      tags: [
        {
          name: "Volumetric flow",
          color: "blue-text-gradient",
        },
        // {
        //   name: "supabase",
        //   color: "green-text-gradient",
        // },
        // {
        //   name: "css",
        //   color: "pink-text-gradient",
        // },
      ],
      image: tripguide,
      source_code_link: "https://www.tradingview.com/heatmap/stock/?color=relative_volume_10d_calc&dataset=NIFTY50&group=sector&size=Value.Traded%7C60",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };