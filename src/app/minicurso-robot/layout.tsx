import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mini-Curso Robot Publicador 24/7 (Beta Privada) | Talento con Tarifa',
  description: 'Acceso privado para Beta Testers del Mini-Curso Robot Publicador 24/7 con GitHub Actions.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function MinicursoRobotLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
