export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <body className="h-screen w-full antialiased">
      <main className="h-full">{children}</main>
    </body>
  );
}
