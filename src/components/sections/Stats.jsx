import Reveal from "@/components/animations/Reveal";
import Counter from "@/components/common/Counter";

const stats = [
  {
    value: 150,
    suffix: "+",
    label: "Properties Delivered",
  },

  {
    value: 12,
    suffix: "+",
    label: "Years Experience",
  },

  {
    value: 500,
    suffix: "+",
    label: "Happy Clients",
  },
];

export default function Stats() {
  return (
    <section className="border-y border-white/10 bg-[#063406]">
      <div className="container-custom">
        <div className="grid md:grid-cols-3">
          {stats.map((item, index) => (
            <Reveal
              key={item.label}
              delay={index * 0.15}
            >
              <div className="py-12 text-center">
                <h3 className="text-5xl font-light text-[#ffffe7]">
                  <Counter
                    end={item.value}
                    suffix={item.suffix}
                  />
                </h3>

                <p className="mt-3 text-white/60 tracking-wide">
                  {item.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}