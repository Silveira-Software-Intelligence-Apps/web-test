import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Barbearia Teste Melhoria — Curitiba',
  description: 'Barbearia premium com 15 anos em Curitiba',
  keywords: 'Barbearia Teste Melhoria, barbearia, barbearia Curitiba, Curitiba, melhor barbearia, barbearia profissional',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Barbearia Teste Melhoria',
    description: 'Barbearia Teste Melhoria — barbearia em Curitiba. Barbearia premium com 15 anos em Curitiba',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Barbearia Teste Melhoria',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
