/**
 * WebMCP (navigator.modelContext) tool registration for in-browser AI agents.
 * Safely no-ops on browsers that do not implement navigator.modelContext yet.
 */

const PUBLIC_PAGES = {
  home: "/",
  howItWork: "/howItWork",
  Impact: "/Impact",
  trust: "/trust",
  faq: "/faq",
  dating_tips: "/dating_tips",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
  security: "/security",
  cookies: "/cookies",
  "child-safety": "/child-safety",
  "delete-account": "/delete-account",
};

const PRYVO_PUBLIC_INFO = {
  name: "Pryvo",
  developer: "Traincape Technologies Pvt Ltd",
  location: "New Delhi, India",
  category: "18+ Dating Application",
  platform: "Android (com.pryvo)",
  pricingV1: "Free (zero hidden subscriptions or paywalls in v1)",
  supportEmail: "pryvo@traincapetech.in",
  website: "https://pryvo.traincapetech.in",
  links: {
    howItWorks: "https://pryvo.traincapetech.in/howItWork",
    about: "https://pryvo.traincapetech.in/Impact",
    contact: "https://pryvo.traincapetech.in/contact",
    privacy: "https://pryvo.traincapetech.in/privacy",
    terms: "https://pryvo.traincapetech.in/terms",
    trustAndSafety: "https://pryvo.traincapetech.in/trust",
    childSafety: "https://pryvo.traincapetech.in/child-safety",
    deleteAccount: "https://pryvo.traincapetech.in/delete-account",
    llmsTxt: "https://pryvo.traincapetech.in/llms.txt",
    markdownHomepage: "https://pryvo.traincapetech.in/index.md",
    mcpServerCard: "https://pryvo.traincapetech.in/.well-known/mcp/server-card.json",
  },
};

export function registerWebMCPTools() {
  if (
    typeof navigator === "undefined" ||
    !navigator.modelContext ||
    typeof navigator.modelContext.registerTool !== "function"
  ) {
    return;
  }

  const tools = [
    {
      name: "get_pryvo_info",
      description:
        "Returns structured overview information about Pryvo (18+ dating app by Traincape Technologies Pvt Ltd), including safety policies, pricing, support email, and official links.",
      inputSchema: {
        type: "object",
        properties: {},
        additionalProperties: false,
      },
      execute: async () => ({
        content: [
          {
            type: "text",
            text: JSON.stringify(PRYVO_PUBLIC_INFO, null, 2),
          },
        ],
      }),
    },
    {
      name: "navigate_pryvo_page",
      description:
        "Navigates the current browser tab to a public Pryvo page (home, howItWork, Impact, trust, faq, dating_tips, contact, privacy, terms, security, cookies, child-safety, delete-account).",
      inputSchema: {
        type: "object",
        properties: {
          page: {
            type: "string",
            enum: Object.keys(PUBLIC_PAGES),
            description: "The public Pryvo page to navigate to.",
          },
        },
        required: ["page"],
        additionalProperties: false,
      },
      execute: async ({ page } = {}) => {
        const path = PUBLIC_PAGES[page];
        if (!path) {
          return {
            content: [
              {
                type: "text",
                text: `Unknown page "${page}". Valid pages: ${Object.keys(PUBLIC_PAGES).join(", ")}`,
              },
            ],
            isError: true,
          };
        }
        window.history.pushState({}, "", path);
        window.dispatchEvent(new PopStateEvent("popstate"));
        return {
          content: [
            {
              type: "text",
              text: `Navigated to https://pryvo.traincapetech.in${path}`,
            },
          ],
        };
      },
    },
    {
      name: "subscribe_pryvo_newsletter",
      description:
        "Subscribes an email address to Pryvo dating app updates and safety tips.",
      inputSchema: {
        type: "object",
        properties: {
          email: {
            type: "string",
            format: "email",
            description: "Valid email address to subscribe.",
          },
        },
        required: ["email"],
        additionalProperties: false,
      },
      execute: async ({ email } = {}) => {
        if (!email || typeof email !== "string" || !email.includes("@")) {
          return {
            content: [
              { type: "text", text: "Please provide a valid email address." },
            ],
            isError: true,
          };
        }
        try {
          const response = await fetch(
            "https://dating-app-backend-19lb.onrender.com/api/newsletter/subscribe",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email: email.trim(), source: "webmcp" }),
            }
          );
          const data = await response.json().catch(() => ({}));
          return {
            content: [
              {
                type: "text",
                text: response.ok
                  ? `Subscribed ${email.trim()} to Pryvo updates.`
                  : data?.message || `Subscription request returned HTTP ${response.status}.`,
              },
            ],
            isError: !response.ok,
          };
        } catch (err) {
          return {
            content: [
              {
                type: "text",
                text: `Failed to subscribe: ${err?.message || "Network error"}`,
              },
            ],
            isError: true,
          };
        }
      },
    },
  ];

  for (const tool of tools) {
    try {
      navigator.modelContext.registerTool(tool);
    } catch {
      // Ignore duplicate registration or browser-specific rejections
    }
  }
}
