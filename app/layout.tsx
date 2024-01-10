'use client'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './globals.css'

import { ThemeProvider } from '@mui/material';

import theme from './theme';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </body>
    </html>
  )
}
