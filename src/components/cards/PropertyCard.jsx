export default function PropertyCard({
  property,
}) {
  return (
    <div className="group overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="
            h-[500px]
            w-full
            object-cover
            transition
            duration-700
            group-hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 p-8">
          <span
            className="
              text-xs
              uppercase
              tracking-[0.25em]
              text-[#c6a769]
            "
          >
            {property.type}
          </span>

          <h3 className="text-2xl mt-3">
            {property.title}
          </h3>

          <p className="text-white/60 mt-2">
            {property.location}
          </p>

          <p className="mt-4 text-[#c6a769] text-xl">
            {property.price}
          </p>
        </div>
      </div>
    </div>
  );
}