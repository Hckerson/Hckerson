import Navbar from "./ui/navbar";
import Footer from "./ui/footer";
import FooterGate from "./ui/footer-gate";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <body className="relative min-h-screen w-full antialiased">
            <Navbar />
            <main>{children}</main>
            <FooterGate>
                <Footer />
            </FooterGate>
        </body>
    );
}
