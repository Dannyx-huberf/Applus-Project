import Reveal from "@/components/animations/Reveal";

export default function ServiceBlock({
  service,
  reverse = false,
}) {
  return (
    <div
      className={`
        grid
        lg:grid-cols-2
        gap-16
        items-center
        ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
      `}
    >
      {/* Text */}

      <Reveal>
        <div>
          <span
            className="
              uppercase
              text-sm
              tracking-[0.3em]
              text-[#1E5712]
            "
          >
            Service
          </span>

          <h3
            className="
              mt-5
              text-4xl
              md:text-5xl
              font-display
              text-[#1E5712]
            "
          >
            {service.title}
          </h3>

          <p
            className="
              mt-6
              text-white/70
              leading-8
              max-w-xl
            "
          >
            {service.description}
          </p>
        </div>
      </Reveal>

      {/* Image */}

      <Reveal delay={0.2}>
        <div className="overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="
              h-[550px]
              w-full
              object-cover
              transition
              duration-700
              hover:scale-105
            "
          />
        </div>
      </Reveal>
    </div>
  );
}