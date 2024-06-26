const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./src/**/*.{html,js,svelte,ts,md}"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			}
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))"
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))"
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))"
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))"
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))"
				},
				code: {
					DEFAULT: "var(--shiki-color-background)",
					foreground: "var(--shiki-color-text)"
				},
				body: {
					DEFAULT: "hsl(var(--body))"
				}
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			fontFamily: {
				sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
				mono: ["Mononoki", ...defaultTheme.fontFamily.mono]
			},
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						"code:not(pre *)": {
							backgroundColor: "var(--shiki-color-background)",
							color: "var(--shiki-token-string)",
							padding: `0 ${theme("spacing.1")}`,
							margin: `0 ${theme("spacing[0.5]")}`,
							borderRadius: theme("borderRadius.DEFAULT"),
							border: `solid ${theme("borderWidth.2")} ${theme("colors.accent.DEFAULT")}`,
							transitionDuration: `${theme("transitionDuration.500")}`,
							transitionProperty: `${theme("transitionProperty.colors")}`,
							transitionTimingFunction: `${theme("transitionTimingFunction[in-out]")}`
						}
					}
				}
			}),
			keyframes: {
				"cursor-blink": {
					"0%, 100%": { borderColor: "hsl(var(--primary))" },
					"50%": { borderColor: "transparent" }
				}
			},
			animation: {
				"cursor-blink": "cursor-blink 1s step-end infinite"
			}
		}
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")]
};
