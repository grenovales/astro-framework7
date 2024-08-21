import type { AstroIntegration } from 'astro';

export default function (): AstroIntegration {
    return {
      name: 'astro-framework7',
      hooks: {
        "astro:config:setup": ({ injectScript }) => {
          injectScript(
            "page",
            `import Framework7 from 'framework7';`
          );
        },
      },
    };
  }
