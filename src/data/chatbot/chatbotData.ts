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
    "Online Assessment ": ["test", "exam", "quiz", "assessment", "certificate", "certification", "online exam"],
    "Online Assessment": ["test", "exam", "quiz", "assessment", "certificate", "certification", "online exam"],
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

export const GREETING_WORDS = ["hi", "hii", "hiii", "hello", "hey", "hai", "helo"];

// Time-of-day greetings, with common typos/short forms, mapped to the period
// so the bot can echo it back ("Good evening!") instead of a generic reply.
export const TIME_GREETINGS: { period: string; patterns: string[] }[] = [
    { period: "morning", patterns: ["good morning", "gud morning", "good moring", "goodmorning", "morning"] },
    { period: "afternoon", patterns: ["good afternoon", "gud afternoon", "goodafternoon", "afternoon"] },
    { period: "evening", patterns: ["good evening", "good evenning", "gud evening", "goodevening", "evening", "evenning"] },
    { period: "night", patterns: ["good night", "gud night", "goodnight"] },
];

// Small talk the bot should answer directly instead of falling through to the
// "couldn't find a match" reply, like any greeting-style chatbot would.
export const SMALL_TALK: { patterns: string[]; reply: string }[] = [
    { patterns: ["how are you", "how are u", "how r u", "hows it going", "how's it going", "how you doing", "how are you doing"], reply: "I'm doing good, thanks for asking! 😊" },
    { patterns: ["who are you", "what's your name", "whats your name"], reply: "I'm the Manithas Assistant — here to help you find the right service." },
];

// Phrases that hand the conversation off to lead capture (name, email, what
// they need) instead of just linking to the contact page.
export const ENQUIRY_TRIGGER_WORDS = [
    "talk to our team", "talk to team", "contact", "contact us", "get in touch",
    "enquiry", "enquire", "inquiry", "inquire", "get a quote", "quote", "call me", "callback",
];

export const LEAD_CANCEL_WORDS = ["cancel", "never mind", "nevermind", "stop", "skip"];

export const CLOSING_WORDS = [
    "bye", "goodbye", "good bye", "thank you", "thanks", "thank u", "thankyou",
    "ok thanks", "no thanks", "that's all", "thats all", "nothing else", "no more questions"
];

// Levenshtein edit distance, used to tolerate typos ("evenning", "aplication").
const editDistance = (a: string, b: string): number => {
    const dp: number[][] = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
    for (let j = 0; j <= b.length; j++) dp[0][j] = j;
    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            dp[i][j] = a[i - 1] === b[j - 1]
                ? dp[i - 1][j - 1]
                : 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
        }
    }
    return dp[a.length][b.length];
};

// How many typo'd characters we tolerate, scaled to word length so short
// words ("hi", "how") still require an exact match and stay unambiguous.
const typoBudget = (word: string): number => {
    if (word.length <= 3) return 0;
    if (word.length <= 6) return 1;
    return 2;
};

const tokenize = (text: string): string[] => text.toLowerCase().match(/[a-z0-9']+/g) ?? [];

// Ignores minor spelling mistakes: matches a (possibly multi-word) phrase
// against the user's text word-by-word within a typo budget, so "good
// evenning" still finds "good evening" and "aplication" still finds "application".
export const containsPhrase = (text: string, phrase: string): boolean => {
    const phraseWords = phrase.toLowerCase().trim().split(/\s+/);
    const tokens = tokenize(text);

    for (let i = 0; i <= tokens.length - phraseWords.length; i++) {
        if (phraseWords.every((pw, j) => editDistance(tokens[i + j], pw) <= typoBudget(pw))) {
            return true;
        }
    }

    if (phraseWords.length > 1) {
        const joined = phraseWords.join("");
        if (tokens.some((t) => editDistance(t, joined) <= typoBudget(joined))) return true;
    }

    return false;
};

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
