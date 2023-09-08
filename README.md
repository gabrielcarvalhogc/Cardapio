# Casa da Massa

Bem-vindo à Casa da Massa, o seu refúgio gastronômico para uma autêntica experiência italiana. Situado em um charmoso e acolhedor ambiente, nosso restaurante é um pedaço da Itália no coração da cidade.

## Descrição

A página de um restaurante criada em React com TypeScript, com o foco no uso e aprendizado das bibliotecas `react-dom` e `react-router-dom`.

## Recursos

- **Tecnologia**: Utilizamos HTML, CSS, React e TypeScript para criar esta aplicação.
- **Bibliotecas**: Para aprimorar a funcionalidade e a aparência, utilizamos as seguintes bibliotecas:
  - `react-dom`
  - `react-router-dom`
  - `classNames`
  - `react-icons`


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
