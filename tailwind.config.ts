import type { Config } from 'tailwindcss'
export default <Partial<Config>>{
    theme: {
    extend: {
      colors: {
          'blue': '#00FF00',
          'red': '#FF00FF',
      }
    }
  }
}