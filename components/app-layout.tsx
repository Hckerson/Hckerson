import "@/public/styles/globals.css";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <body className="h-screen w-full antialiased">
            <Navbar />
            <main className="h-full">{children}</main>
            <Footer />
        </body>
    );
}
