import AppLayout from "@/components/app-layout";

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
