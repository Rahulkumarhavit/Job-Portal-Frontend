"use client"
import { createTheme, MantineProvider } from '@mantine/core'
import React from 'react'

const theme = createTheme({});

function MantProvider({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MantineProvider theme={theme}>
      {children}
    </MantineProvider>
  )
}

export default MantProvider