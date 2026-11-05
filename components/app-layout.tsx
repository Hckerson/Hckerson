import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import FooterGate from "@/components/ui/footer-gate";

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
