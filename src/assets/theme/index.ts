import { createGlobalStyle, ThemePattern } from "styled-components";
import { darkTheme } from "./dark";
import { lightTheme } from "./light";
import { PalletModel } from "./pallet-model";

export * from './pallet-model';

declare module 'styled-components' {
    export interface ThemePattern {
        pallet: ThemePatternPallet;
    }
}

interface GlobalStyleProps {
    readonly theme: PalletModel;
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        background-color: ${props => props.theme.backgroundColor};
        color: ${props => props.theme.primaryColor};
        font-family: sans-serif;

        width: 100%;
        height: 100vh;
    }

    a {
        text-decoration: none;
        cursor: pointer;
        color: inherit;

        &:hover {
            text-decoration: underline;
        }

        &:active {
            text-decoration: none;
        }
    }

    #root {
        height: 100vh;
    }
`

export interface ThemePatternPallet {
    light: PalletModel
    dark: PalletModel
}

export const theme = {
    pallet: {
        light: lightTheme,
        dark: darkTheme
    }
} as ThemePattern
