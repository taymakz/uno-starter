
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    { 'icon-btn': 'text-text/80 border cursor-pointer rounded-lg hover:bg-background flex items-center justify-center transition-all duration-200' },

  ],
  safelist: ['animate-ripple'],
  rules: [
    [/^bg-dot-(.*)$/, ([, color]) => ({
      'background-image': `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'><circle fill='${color}' id='pattern-circle' cx='10' cy='10' r='1.6257413380501518'></circle></svg>")`
    })],
  ],
  preflights: [
    {
      getCSS: ({ theme }) => `
   
      @keyframes ripple{
        50%{
          transform: scale(var(--scale, 1.25))
        }
      }
      .ripple{
        --size: calc(var(--baseSize, 80px) + var(--sizeStep, 64px) * var(--i, 0));
        width: var(--size);
        height: var(--size);
        opacity: calc(var(--baseOpacity, 0.25) - var(--opacityStep, 0.05) * var(--i, 0));
        animation: ${theme.animation.ripple};
      }
      
      `,
    },
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
    animation: {
      'ripple': 'ripple var(--duration, 1.5s) ease calc(var(--i, 0) * 0.1s) infinite',
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
      'collapsible-down': 'collapsible-down 0.2s ease-in-out',
      'collapsible-up': 'collapsible-up 0.2s ease-in-out',
    },

  },
})
