import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>VIMM Framework - Open Source Streaming for Hive</title>
        <meta name="description" content="Build your own streaming platform on the Hive blockchain with our comprehensive, open-source framework." />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}