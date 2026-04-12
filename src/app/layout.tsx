import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Common Ground — Support for Autism Families',
  description:
    'A parent support platform helping autism families find community, trusted resources, and partner-based mental health services.',
  keywords: ['autism', 'ABA', 'parent support', 'caregiver resources', 'mental health'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-surface font-body antialiased">
        {children}
      </body>
    </html>
  );
}
