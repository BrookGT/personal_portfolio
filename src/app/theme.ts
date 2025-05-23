export const theme = {
    colors: {
        primary: {
            DEFAULT: "#8B5CF6", // purple-500
            dark: "#7C3AED", // purple-600
            light: "#A78BFA", // purple-400
        },
        secondary: {
            DEFAULT: "#3B82F6", // blue-500
            dark: "#2563EB", // blue-600
            light: "#60A5FA", // blue-400
        },
        accent: {
            DEFAULT: "#2563EB", // blue-600
            dark: "#1D4ED8", // blue-700
            light: "#3B82F6", // blue-500
        },
    },
    fonts: {
        heading: "var(--font-inter)",
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
