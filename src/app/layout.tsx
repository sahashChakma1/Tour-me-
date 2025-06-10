import './globals.css';
import type { Metadata } from 'next';
import Navbar from './components/Navbar'; // if alias doesn't work, use: ../../components/Navbar

export const metadata: Metadata = {
  title: 'TourMe',
  description: 'Travel with trusted locals',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
