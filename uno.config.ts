
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    { 'icon-btn': 'text-text/80 border cursor-pointer rounded-lg hover:bg-background flex items-center justify-center transition-all duration-200' }
  ],

  rules: [
    [/^bg-dot-(.*)$/, ([, color]) => ({
      'background-image': `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'><circle fill='${color}' id='pattern-circle' cx='10' cy='10' r='1.6257413380501518'></circle></svg>")`
    })]
  ],
  
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        'display': 'block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1380px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0.625rem',
      },

    },

    fontFamily: {
      iranyekan: 'IRANYekan',
    },

    colors: {
      white: '#FEFEFF',
      black: '#0D0D0D',
      border: 'hsl(var(--border))',
      ring: 'hsl(var(--ring))',
      background: 'hsl(var(--background))',
      warning: 'hsl(var(--warning))',
      success: {
        DEFAULT: 'hsl(var(--success))',
        secondary: 'hsl(var(--success-secondary))',
      },
      text: 'hsl(var(--text))',
      primary: 'hsl(var(--primary))',
      secondary: 'hsl(var(--secondary))',
      destructive: 'hsl(var(--destructive))',
      muted: 'hsl(var(--muted))',


    },
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)',
    },

    keyframes: {

      'accordion-down': {
        from: { height: 0 },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: 0 },
      },
      'collapsible-down': {
        from: { height: 0 },
        to: { height: 'var(--radix-collapsible-content-height)' },
      },
      'collapsible-up': {
        from: { height: 'var(--radix-collapsible-content-height)' },
        to: { height: 0 },
      },
    },

    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
      'collapsible-down': 'collapsible-down 0.2s ease-in-out',
      'collapsible-up': 'collapsible-up 0.2s ease-in-out',
    },

  },
})
