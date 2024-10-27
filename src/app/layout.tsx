import './globals.css';
import { IBM_Plex_Mono } from 'next/font/google';

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Bruno Rodrigues',
  description: 'Meu portfólio pessoal',
};

export default function RootLayout({ children } : { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={ibmPlexMono.className}>{children}</body>
    </html>
  );
}

