import { Metadata } from 'next';
import '@/styles/reset.css';
import '@/styles/global.css';

export const metadata: Metadata = {
  title: 'Mu Ye — Software Engineer',
};
 
export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}