"use client";

import "./layout.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="manifest.webmanifest" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,user-scalable=no"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
