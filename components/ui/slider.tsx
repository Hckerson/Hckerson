export default function Slider() {
    return (
        <div className="absolute top-0 h-screen w-full">
            <div className="absolute inset-0 overflow-hidden">
                <div className="animate-slide-left-to-right absolute inset-0 top-0 left-0 bg-transparent">
                    <div className="flex h-screen w-fit -translate-y-120 -rotate-45">
                        <div className="flex h-full -space-x-20">
                            <div className="blury h-full w-62.5"></div>
                            <div className="blury-01 h-full w-62.5"></div>
                        </div>
                    </div>
                </div>
                <div className="animate-slide-right-to-left absolute inset-0 top-0 right-0 bg-transparent font-normal">
                    <div className="relative h-full w-full">
                        <div className="absolute top-0 right-0 flex h-screen w-fit -translate-y-120 rotate-45">
                            <div className="flex h-full -space-x-20">
                                <div className="blury-01 h-full w-62.5"></div>
                                <div className="blury h-full w-62.5"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
