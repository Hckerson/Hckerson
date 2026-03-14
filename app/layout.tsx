import AppLayout from "@/components/app-layout";
import "@/public/styles/globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <AppLayout>
                <>{children}</>
            </AppLayout>
        </html>
    );
}
