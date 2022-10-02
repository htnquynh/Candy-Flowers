import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'

export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto'],
        serif: ['DFVN Maglite'],
      },
      color: {
        primary: {
          500: '#49271D'
        }
      }
    },
    container: {
      center: true,
      padding: {
        'DEFAULT': '1rem',
        'sm': '2rem',
        'lg': '4rem',
        'xl': '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
})