import '@fortawesome/fontawesome-free/css/all.min.css';
import { Inter } from 'next/font/google';
import './globals.css';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'La Sensación Orquesta',
  description: 'Haz tu evento inolvidable con la mejor música en vivo.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
              <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />

              
      </head>


      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
