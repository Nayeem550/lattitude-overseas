export default function gradiant() {
    return (
        <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-[70px] flex justify-start items-end">
            <div
                style={{
                    clipPath:
                        'polygon(0% 25.5%, 51.5% 47.38%, 45.18% 88.68%, 42.43% 39.1%, 35.49% 10.13%, 55.5% 21.25%, 80.46% 0.19%, 75.73% 32.5%, 79.75% 100%, 100% 32.5%, 65.99% 42.93%, 31.98% 53.36%, 30.77% 37.2%, 33.9% 78.9%, 2.15% 86.09%)',
                }}
                className="relative aspect-video w-[50vw] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 translate-y-11"
            />
        </div>
    );
}
