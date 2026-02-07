export default function HeroSection() {
    return (
        <section className="relative box-border h-screen w-full">
            <div className="absolute inset-0">
                <div className="animate-slide-infinitely absolute inset-0 top-0 left-0 bg-transparent">
                    <div className="h-screen w-1/3 -translate-y-[250px] -rotate-45">
                        <div className="flex h-1/2 w-full">
                            <div className="h-full w-1/2"></div>
                            <div className="h-full w-1/2"></div>
                        </div>
                    </div>
                </div>
                <div className="animate-slide-infinitely absolute inset-0 top-0 right-0 bg-transparent delay-5000!">
                    <div className="relative h-full w-full">
                        <div className="h-screen w-1/3 -translate-y-[250px] rotate-45 absolute top-0 right-0">
                            <div className="flex h-1/2 w-full">
                                <div className="h-full w-1/2"></div>
                                <div className="h-full w-1/2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </section>
    );
}
