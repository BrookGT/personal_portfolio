export const theme = {
    colors: {
        primary: {
            DEFAULT: "#10b981", // emerald-500
            dark: "#059669", // emerald-600
            light: "#34d399", // emerald-400
        },
        secondary: {
            DEFAULT: "#06b6d4", // cyan-500
            dark: "#0891b2", // cyan-600
            light: "#22d3ee", // cyan-400
        },
        accent: {
            DEFAULT: "#f59e0b", // amber-500
            dark: "#d97706", // amber-600
            light: "#fbbf24", // amber-400
        },
    },
    fonts: {
        heading: "var(--font-display)",
        body: "var(--font-inter)",
    },
    breakpoints: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
    },
} as const;
