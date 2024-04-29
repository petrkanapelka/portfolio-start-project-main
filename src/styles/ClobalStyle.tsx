import { createGlobalStyle } from "styled-components";
import { myTheme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: all 0.2s ease;
    }
    body {
        margin: 0;
        font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif;-webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${myTheme.colors.font};
        line-height: 1.2;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',monospace;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
    }

    section {
        padding: 100px 0;
    }

    section:nth-of-type(odd) {
        background-color: ${myTheme.colors.primaryBg};
    }

    section:nth-of-type(even) {
        background-color: ${myTheme.colors.secondaryBg};
    }
    `