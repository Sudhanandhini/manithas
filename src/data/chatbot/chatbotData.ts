import { SOLUTION_LINKS, WHAT_WE_DO } from "@/src/components/NavBar/navData";

export type ChatOption = { label: string; href: string; description: string; keywords: string[] };
export type ChatCategory = {
    key: string;
    label: string;
    icon: string;
    aliases: string[];
    intro: string;
    options: ChatOption[];
};

// Extra search phrases per option, keyed by the option's label, so free-text
// questions ("I want to create a payment app") can find the right service
// even when the words don't appear in the label or short nav description.
const KEYWORDS: Record<string, string[]> = {
    // Web Application / Solutions
    "Alumni": ["alumni", "graduate", "alumni network", "alumni directory", "college network"],
    "eLibrary": ["library", "elibrary", "books", "book catalog", "borrow", "lending", "digital library"],
    "Subscription Module": ["payment", "payment app", "billing", "renewal", "subscription", "membership", "fees", "dues", "recurring payment", "online payment"],
    "Employee Records": ["employee", "staff", "attendance", "payroll", "leave tracking", "hr", "salary", "hr software"],
    "Online Assessment Test": ["test", "exam", "quiz", "assessment", "certificate", "certification", "online exam"],
    "Custom Web Application": ["custom software", "crm", "erp", "portal", "workflow", "enterprise app", "booking app", "payment app", "custom app", "business application"],

    // Web Development
    "React Development": ["react", "spa", "single page app", "interactive website", "frontend"],
    "HTML & CSS Development": ["html", "css", "static site", "custom markup", "static website"],
    "E-Commerce Development": ["ecommerce", "e-commerce", "online store", "online shop", "sell online", "cart", "checkout"],
    "Custom Web Development": ["custom website", "bespoke website", "website from scratch"],
    "WooCommerce Development": ["woocommerce", "wordpress store", "wp shop"],
    "Shopify Development": ["shopify", "shopify store"],
    "WordPress Development": ["wordpress", "wp website", "cms website"],
    "Landing Page": ["landing page", "campaign page", "single page site", "ad page"],
    "Website Maintenance": ["maintenance", "website updates", "backups", "website support", "fix website"],
    "Website Redesign": ["redesign", "revamp", "refresh website", "old website", "update design"],
    "Responsive Web Design": ["responsive", "mobile friendly", "mobile website"],

    // Hosting & Maintenance
    "Linux Hosting": ["linux hosting", "linux server"],
    "Web Hosting": ["web hosting", "website hosting", "host my website"],
    "Email Hosting": ["email hosting", "mail hosting", "host email"],
    "Cloud & VPS Hosting": ["cloud hosting", "vps", "vps hosting", "dedicated resources", "scalable hosting"],

    // Business E-Mail
    "Microsoft 365": ["microsoft 365", "office 365", "outlook"],
    "Google Workspace": ["google workspace", "gmail", "g suite"],
    "Web Email": ["web email", "webmail", "browser email"],

    // Industry Solutions
    "Tours and Travels": ["travel", "tour", "travel agency", "tour booking"],
    "Hotel & Resort": ["hotel", "resort", "reservation", "room booking"],
    "Healthcare": ["healthcare", "clinic", "hospital", "patient", "doctor"],
    "Corporate": ["corporate website", "company website", "business website"],
    "Education": ["school website", "college website", "education website", "institute website"],
    "Real Estate & Construction": ["real estate", "property", "construction", "builder", "listing website"],
};

const withKeywords = ({ label, href, description }: { label: string; href: string; description: string }): ChatOption => ({
    label,
    href,
    description,
    keywords: KEYWORDS[label] ?? [],
});

const flatten = (categoryLabel: string): ChatOption[] => {
    const category = WHAT_WE_DO.find((c) => c.label === categoryLabel);
    if (!category) return [];
    return category.columns.flat().map(withKeywords);
};

export const CHAT_CATEGORIES: ChatCategory[] = [
    {
        key: "web-application",
        label: "Web Application",
        icon: "fas fa-laptop-code",
        aliases: ["web application", "web app", "application", "custom application", "software"],
        intro: "We build custom web applications for real business workflows. Here's what we offer:",
        options: SOLUTION_LINKS.map(withKeywords),
    },
    {
        key: "web-development",
        label: "Web Development",
        icon: "fas fa-code",
        aliases: ["web development", "website development", "website", "web design"],
        intro: "We build websites on the platform that fits your business best. Here's what we offer:",
        options: flatten("Web Development"),
    },
    {
        key: "hosting",
        label: "Hosting & Maintenance",
        icon: "fas fa-server",
        aliases: ["hosting", "maintenance", "server", "cloud", "vps"],
        intro: "We keep your website fast, secure, and always online. Here's what we offer:",
        options: flatten("Hosting & Maintenance"),
    },
    {
        key: "business-email",
        label: "Business E-Mail",
        icon: "fas fa-envelope",
        aliases: ["business email", "business e-mail", "email", "e-mail", "mail"],
        intro: "Professional email hosted on your own domain. Here's what we offer:",
        options: flatten("Business E-Mail"),
    },
    {
        key: "industry-solutions",
        label: "Industry Solutions",
        icon: "fas fa-industry",
        aliases: ["industry solutions", "industry solution", "industries", "industry"],
        intro: "Industry-specific websites built for the way your sector works. Here's what we offer:",
        options: flatten("Industry Solutions"),
    },
];

export const GREETING_WORDS = ["hi", "hii", "hiii", "hello", "hey", "hai", "helo", "good morning", "good afternoon", "good evening"];

export const CLOSING_WORDS = [
    "bye", "goodbye", "good bye", "thank you", "thanks", "thank u", "thankyou",
    "ok thanks", "no thanks", "that's all", "thats all", "nothing else", "no more questions"
];

const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// Word-boundary match so short phrases ("hi") don't fire on unrelated words
// that merely contain those letters ("which", "shipping", "history"...).
export const containsPhrase = (text: string, phrase: string): boolean =>
    new RegExp(`\\b${escapeRegExp(phrase)}\\b`, "i").test(text);

export const findCategoryByText = (text: string): ChatCategory | undefined => {
    return CHAT_CATEGORIES.find((cat) => cat.aliases.some((alias) => containsPhrase(text, alias)));
};

// Scores every option by how many of its label/keyword phrases show up in the
// user's text, so loosely-worded questions ("I want to create a payment app")
// still surface the most relevant service instead of falling through to "no match".
export const findOptionByText = (text: string): { category: ChatCategory; option: ChatOption; score: number } | undefined => {
    let best: { category: ChatCategory; option: ChatOption; score: number } | undefined;

    for (const category of CHAT_CATEGORIES) {
        for (const option of category.options) {
            let score = 0;
            if (containsPhrase(text, option.label)) score += 3;
            for (const phrase of option.keywords) {
                if (containsPhrase(text, phrase)) score += 2;
            }
            if (score > 0 && (!best || score > best.score)) {
                best = { category, option, score };
            }
        }
    }

    return best;
};
