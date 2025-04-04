/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		fontFamily: {
			Cute: ["Rouge Script", "cursive"], // Custom cursive font
		},
		animation: {
			fadeIn: 'fadeIn 1s ease-out',
			fadeOut: 'fadeOut 10s ease-out',
			fadeInandOut: 'fadeInandOut ease-in-out',
			float: 'float 4s ease-in-out infinite',
			float2: 'float2 4s ease-in-out infinite',
			bounce: "bounce 0.9s infinite ease-in-out",
			star1: "star1 1s ease-in-out infinite",			
			star2: "star2 2s ease-in-out infinite",			
			pulse2: "pulse2 800ms ease-out",
			shake: 'shake 0.3s ease-in-out',
			"Lighten-1": "Lighten 4s ease-in",
			"Lighten-2": "Lighten 3s ease-in",
			falling: 'falling ease-in',
		},
		keyframes: {
			float:{
			 '0%': { transform: 'translateY(6px)' },
			 '50%': { transform: 'translateY(0px)' }, 
			 '100%': { transform: 'translateY(6px)' }, 
			},
			float2:{
				'0%': { transform: 'translateY(10px)' },
				'50%': { transform: 'translateY(0px)' }, 
				'100%': { transform: 'translateY(10px)' }, 
			   },
			falling:{
				'0%': { transform: 'translateY(0px) rotate(0deg)', opacity: 1 },
				'100%': { transform: 'translateY(600px) rotate(360deg)', opacity: 0 }, 
			   },
			pulse2:{
				'0%': {opacity: '0.3',transform: 'scale(0.8)' },
				'100%': { transform: 'scale(1.5)',opacity:'0' }, 
			   },
			fadeIn: {
			  '0%': { opacity: '0', transform: 'translateY(50px)' },
          	'100%': { opacity: '1', transform: 'translateY(0)' }, 
			},
			fadeOut: {
				'0%': { opacity: '1' },
				'100%': { opacity: '0' }, 
			  },
			fadeInandOut: {
				'0%': {  opacity: '0', transform: 'translateY(50px)' },
				'25%': { opacity: '1', transform: 'translateY(0)' }, 
				'75%': { opacity: '1', transform: 'translateY(0)' }, 
				'100%': { opacity: '0', transform: 'translateY(-50px)' }, 
			  },
			  star1: {
				'0%': {  opacity: '0', transform: 'scale(1)' },
				'50%': { opacity: '1', transform: 'scale(1.5)' }, 
				'100%': { opacity: '0', transform: 'scale(1)' }, 
			  },
			  star2: {
				'0%': {  opacity: '0' },
				'50%': { opacity: '1' }, 
				'100%': { opacity: '0' }, 
			  },
			bounce: {
			 "0%": { transform: "translateY(0)" },
			 "50%": { transform: "translateY(15px)" },
			 "100%": { transform: "translateY(0)" },
			},
			shake: {
				'0%': { transform: 'translateX(0)' },
				'25%': { transform: 'translateX(-4px)' },
				'50%': { transform: 'translateX(4px)' },
				'75%': { transform: 'translateX(-4px)' },
				'100%': { transform: 'translateX(0)' },
			  },
			   meteor: {
				'10%' : { opacity: '1' },
				'80%' : { left: '10%', top: '90px', opacity: '0' }
			  },
			  Lighten: {
				'10%' : { opacity: '1' },
				'80%' : { opacity: '0.2' }
			  }
		},
  		colors: {
  			'purpleX-200': '#E8D5FF',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-bg))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

