import Image from "next/image";

const services = [
  { name: "Netflix", logo: "/streaming/netflix.svg", width: 80, height: 22 },
  { name: "Disney+", logo: "/streaming/disney-plus.svg", width: 96, height: 22 },
  { name: "Max", logo: "/streaming/max.svg", width: 48, height: 22 },
  { name: "Prime Video", logo: "/streaming/prime-video.svg", width: 72, height: 28 },
  { name: "Apple TV+", logo: "/streaming/apple-tv-plus.svg", width: 64, height: 22 },
];

export function StreamingServices() {
  return (
    <section className="border-t border-border bg-background-secondary px-6 py-12 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1200px] text-center">
        <p className="mb-8 text-sm text-text-secondary">Supported streaming services</p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-35 grayscale">
          {services.map((service) => (
            <Image
              key={service.name}
              src={service.logo}
              alt={service.name}
              width={service.width}
              height={service.height}
              className="h-5 w-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
