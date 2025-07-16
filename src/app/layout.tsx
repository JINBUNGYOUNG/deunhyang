"use client" ;

import Navigation from "../../components/navigation";
import StyledComponentsRegistry from "../../lib/registry";
import GlobalStyle from "./GlobalStyle";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle/>
          <Navigation/>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
