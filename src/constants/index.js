import {analytics,integrations,liveChat,
    kbase, omniChannel,teamCollab,autoWorkflow,logo,sharedInbox, brand,clip1,clip2,clip3,clip4,clip, envelope, telephone, shake, zero, one, two, three} from '../assets/index'

import {Branch,Carvana,ClickUp,CultureAmp,Dropbox,GoDaddy,   Hootsuite,Lydia,Sennder,WizardPins,} from '../assets/index'


export const navNav = [
    {name : "Product", link: "/product"},
    {name : "Solutions", link: "/solutions"},
    {name : "Pricing", link: "/pricing"},
    {name : "Resources", link: "/resources"},
];

export const features = [
    {icon: sharedInbox, title: "Shared Inbox" },
    {icon: teamCollab, title: " Team Collaboration" },
    {icon: kbase, title: "Knowledge Base " },
    {icon: omniChannel, title: "Omni Channel " },
    {icon: analytics, title: "Insights % Analytics " },
    {icon: autoWorkflow, title: "Automated Workflows " },
    {icon: liveChat, title: "Live Chat " },
    {icon: integrations, title: "Integrations " },
]

export const slidingCarousel = [
    {icono: Branch , company: "Branch"},
    {icono: Carvana , company: "Carvana"},
    {icono: ClickUp , company: "ClickUp"},
    {icono: CultureAmp , company: "CultureAmp"},
    {icono: Dropbox , company: "Dropbox"},
    {icono: GoDaddy , company: "GoDaddy"},
    {icono: Hootsuite , company: "Hootsuite"},
    {icono: Lydia , company: "Lydia"},
    {icono: Sennder , company: "Sennder"},
    {icono: WizardPins , company: "WizardPins"},
]



export const Videocards = [
    {   
        title1: "Automation and attention", 
        text1: "Front automatically aggregates & routes customer conversations from your channels, ensuring every message gets to the right person." 
    },
    
    {   
        title2: "Speed and Personalization", 
        text2: "With Front, personalization doesn’t slow teams down. Every conversation is surrounded by customer history, relevant data, and built-in collaboration so teams can work behind the scenes to craft better responses, faster." 
    },

    {   
        title3: "Measure customer happiness and team performance", 
        text3: "You can’t improve what you can’t measure. With a new kind of visibility into both customer experience and team efficiency, you’re always a click away from a complete, 360° view of business impact." 
    },

]



export const bestOption = [
    {imgURL: envelope, head: "Email", Sub: "Great for building relationships, but not efficient, intelligent, or scalable"},

    {imgURL: shake, head: "With Influx, No Excuses!", Sub: "Built-in collaboration. Built for personalization. Built to scale."},

    {imgURL: telephone , head: "Help Desks", Sub: "Handles high-volume well, but not built for collaboration or personalization at scale."}
]


export const StepGrid = [
    {
        imgURL: teamCollab, 
        headText: "improve customer experience",
        subtext: "Collaborate on fast, Thorough replies",
        subtext2: "With Influx, teams can work together to craft personalized responses that are fast, thorough, and on-brand. No more copy/paste, no more stepping on each other’s toes, and no more embarrassing mistakes."
    }, 

    {
        imgURL: analytics,
        headText: "drive operational efficiency",
        subtext: "Cut the busywork so your team can thrive",
        subtext2: "Replace Manual tasks with easy automations so you can assign, escalate and reply to every message on time - helping your team work more efficiently"

    },

    {
        imgURL: sharedInbox,
        headText: "increase growth",
        subtext: "Retain high value customers and client alike",
        subtext2: "Use analytics to streamline your workflow, improve customer satisfaction and support your team, the Result? Lasting relationships with customers- and a team that doesn't burn out"

    }
]


export const reviewsGradient = [
    {
        review: "Influx has revolutionized the way our team manages communications and customer interactions at Skyline Solutions. With its seamless integration and user-friendly interface, our productivity has soared. It's a game-changer for any business looking to streamline their processes.",
        name: "Emily Watson, CEO of Skyline Solutions"
    },

    {
        review: "Influx has been a lifesaver for us at StellarTech Solutions. Its comprehensive platform allows us to consolidate all communication channels and customer data into one place. The analytics provided have helped us make data-driven decisions, enhancing our customer service quality significantly.",
        name: "David Reynolds, COO of StellarTech Solutions"
    },

    {
        review: "As a growing startup, Visionary Ventures needed a tool to centralize our communications and customer management. Influx exceeded our expectations. Its intuitive interface and customization options tailored perfectly to our needs. Thanks to Influx, we've scaled efficiently without compromising on customer satisfaction.",
        name: "Mark Johnson, CEO of Visionary Ventures"
    }
]


export const prodfeatures = [
    {
        imgURL: zero,
        headtext: "It's all on the record",
        maintext: "Keep Client feedback and context where it belongs - in your inbox. A shared view for your whole team guarantees visibility and makes retracing decisions simple. Context is never lost as communicaion history and customer information lives in one place",
        Buttons: "TEAM INBOXES",  
        Buttons2: "CUSTOMER CONTEXT"  

    },
    {
        imgURL:one,
        headtext: "Every Message is where it needs to be",
        maintext: "No more wondering who is handling what. Simple automations get message to the right owner instanty, enforce SLA's and escalate critical issues",
        Buttons: "RULES",  
        Buttons2: "ASSIGNMENTS"  

    },
    {
        imgURL: two,
        headtext: "Work together to give the VIP's the VIP treatment",
        maintext: "Comment internally on emailsto coordinate behind-the-scenes and your client wil just see one thorough reply from your team",
        Buttons: "COMMENTS",  
        Buttons2: "SHARED DRAFTS"  

    },
    {
        imgURL: three,
        headtext: "Make proactive work your competitive edge",
        maintext: "Measure respose time, erformance and trends to stay ahead of the issues and deliver the best experience",
        Buttons: "ANAYTICS",  
        Buttons2: "METRICS"  

    },
]


export const pricingBlock=[
    {
        planName: "Growth",
        planDetails: "For teams looking to streamline support workflows and improve performance",
        price: "$59",
        duration: "Billed annually, minimum 2 seats",
        cta: "Get Started",
        Subtext: "Deliver exceptional service with...",
        planList : [
            {list: "Omnichannel shared inboxes"},
            {list: "Real-time collaboration features"},
            {list: "Up to 20 rules to automate workflows"},
            {list: "Analytics on team performance, customer satisfaction, SLAs and more"},
            {list: "Built-in knowledge base, live chat with chatbots, and 50+ integrations"},

        ]

    },
    {
        planName: "Scale",
        planDetails: "For teams that need total workflow flexibility and advanced user management",
        price: "$99",
        duration: "Billed annually, minimum 20 seats",
        cta: "Talk to Sales",
        Subtext: "Get everything in Growth, plus....",
        planList : [
            {list: "Multiple workspaces for distinct teams"},
            {list: "User management with SSO, SCIM provisioning, and custom permissions"},
            {list: "No-code dynamic objects to connect backend systems and up to 200 rules"},
            {list: "Analytics by customer from your CRM"},
            {list: "Onboarding and solution design"},

        ]

    },
    {
        planName: "Premier",
        planDetails: "For teams looking for professional services and partnership to meet enterprise needs",
        price: "$229",
        duration: "Billed annually, minimum 50 seats",
        cta: "Get Started",
        Subtext: "Everything in Scale and....",
        planList : [
            {list: "Highest usage caps across all features"},
            {list: "Additional success services including Premier Onboarding"},
            {list: "Custom Build Hours including API advisory and integration development"},
            {list: "Video conferencing support"},
            {list: "Built-in knowledge base, live chat with chatbots, and 50+ integrations"},

        ]

    },



]








export const footerlinks = [
    {
        footCategory : "Product",
        links: [
            {name: "Product", link: "/"},
            {name: "Pricing", link: "/"},
            {name: "Integrations Directory", link: "/"},
            {name: "Developer Portal", link: "/"},
            {name: "Get Started", link: "/"},
            {name: "Download App", link: "/"},

        ]
    },
    {
        footCategory: "Using Front",
        links : [
            {name: "Collaboration", link: "/"},
            {name: "Workflow Automation", link: "/"},
            {name: " Analytics", link: "/"},
            {name: "Omnichanel Inbox", link: "/"},
            {name: "Knowledge Base", link: "/"},
            {name: "Live Chat", link: "/"},
            {name: "Integrations & API", link: "/"},
            {name: "Influx for Customer Support", link: "/"},
            {name: "Influx for Logistics", link: "/"},

        ]
    },

    {
        footCategory: "Resources",
        links: [
            {name: "Blog", link: "/"},
            {name: "Influx Community", link: "/"},
            {name: "Influx Academy", link: "/"},
            {name: "Help Center", link: "/"},
            {name: "Customer Stories", link: "/"},
            {name: "Channel Partnerships", link: "/"},
            {name: "Influx Admin Certification", link: "/"},
        ]
    },

    {
        footCategory: "Learn", 
        links: [
            {name: "Guide to 100% CSAT", link: "/"},
            {name: "5 tips to scale customer support", link: "/" },
            {name: "7 best customer service software", link: "/"},
            {name: "Influx's Support Report", link: "/"},
            {name: "Influx vs Zendesk", link: "/"},
            {name: "Influx vs Freshdesk", link: "/" }
        ]
    }, 

    {
        footCategory: "Company", 
        links: [
            {name: "About Us", link: "/" },
            {name: "Careers", link: "/"},
            {name: "Press", link: "/"},
            {name: "Security", link: "/"},
            {name: "Lega;", link: "/"},
            {name: "Contact Us", link:"/"}
        ]
    }
   

]


export const downFooter = [
    {name: " 2023 FrontApp, Inc. All rights reserved.", link: "/"}, 
    {name: " SaaS Services Agreement", link: "/"}, 
    {name: " Privacy Notice", link: "/"}, 
    {name: "Cookie Policy ", link: "/"}, 
    {name: "Status ", link: "/"}, 
   
]

