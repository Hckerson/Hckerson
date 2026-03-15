import Navbar from "./ui/navbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <body className="relative h-screen w-full antialiased">
            <Navbar />
            <main className="">{children}</main>
        </body>
    );
}
