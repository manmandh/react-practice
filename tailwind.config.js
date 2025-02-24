/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
				'primary-600': ['Inter-600'],
				'primary-500': ['Inter-500'],
				'primary-400': ['Inter-400'],
			},
      colors: {
        'primary': '#000',
        'secondary': '#262626',
        'infor' : '#3897F0',
        'bgc-banner': '#E7FAFE',
        'transparent-blue': 'rgba(231, 249, 253, 0)',
        'light-blue': '#E7F9FD',
        'bgc-opacity': 'rgba(0, 0, 0, 0.05)',
        'orange': '#FF7967',
      },
      screens: {
        'custom-900': '900px',
        'custom-940': '940px',
        'custom-440': '440px',
        'custom-500': '500px',
        'custom-530': '530px',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #E7F9FD 100%)',
      },
    },
  },
  plugins: [],
}
