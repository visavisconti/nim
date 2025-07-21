Nim is a free and open-source personal website template built with Next.js 15, React 19, Tailwind CSS v4, and Motion. Designed for developers, designers, and founders, it combines minimalism with delightful animated components powered by [Motion-Primitives](https://motion-primitives.com).

## Features

- Minimal one-page portfolio layout.
- Blog support with MDX.
- Responsive and accessible design.
- Easy to use
- [Motion-Primitives](https://motion-primitives.com) for animated components.

## To Dos
### **Farben und Token in `tailwind.config.mjs` definieren**

```js
// tailwind.config.mjs
export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: {
          light: '#ece4d2',
          dark: '#110b1d',
        },
        card: {
          light: '#e7d4bf',
          dark: '#18181b',
        },
        text: {
          light: '#1e293b',
          dark: '#f8facf',
        },
        border: {
          light: '#e2e8f0',
          dark: '#3f3f46',
        },
        textFaded: {
          light: '#64748b',
          dark: '#a1a1aa',
        }
      }
    }
  }
}
```
(Hier kannst du natürlich auch weitere Farben, Opazitäten, Schatten usw. ergänzen.)

### **2. Diese Farben konsequent im Markup nutzen**

**Beispiel für Klassen:**
```jsx

  
    ...
  

```

