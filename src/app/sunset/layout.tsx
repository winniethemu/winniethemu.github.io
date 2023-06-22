import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CSS Sunset',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}