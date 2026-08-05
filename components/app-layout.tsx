import Navbar from "./ui/navbar";
import Footer from "./ui/footer";

// Server component. It was marked "use client" while using no client-side
// APIs, which put a client boundary at the document root; Navbar declares
// "use client" itself and is the only part that needs it.
export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        // `min-h-screen`, not `h-screen` — a fixed viewport height clipped
        // every page whose content ran past the fold.
        <body className="relative min-h-screen w-full antialiased">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </body>
    );
}
