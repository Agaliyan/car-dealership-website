import type { Car } from "@/data/cars"

export function CarSpecs({ car }: { car: Car }) {
  const rows: { label: string; value: string }[] = [
    { label: "Make", value: car.brand },
    { label: "Model", value: car.model },
    { label: "Year", value: String(car.year) },
    { label: "Engine", value: car.specs.engine },
    { label: "Horsepower", value: car.specs.horsepower },
    { label: "Top Speed", value: car.specs.topSpeed },
    { label: "0–100 km/h", value: car.specs.acceleration },
    { label: "Transmission", value: car.transmission },
    { label: "Drive", value: car.drive },
    { label: "Colour", value: car.colour },
    { label: "Mileage", value: car.mileage },
    { label: "Condition", value: car.condition },
  ]

  return (
    <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
      <div>
        <h2 className="text-balance text-3xl font-bold tracking-tight text-white md:text-4xl">
          Vehicle Details
        </h2>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#888888]">
          Full disclosure on every spec. If anything you need isn&apos;t listed, your consultant
          can answer in minutes.
        </p>

        {car.features.length > 0 && (
          <div className="mt-10">
            <h3 className="text-xs font-medium uppercase tracking-widest text-white">
              Notable Features
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-[#888888]">
              {car.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-1.5 size-1 shrink-0 rounded-full bg-white" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div>
        <ul>
          {rows.map((r) => (
            <li
              key={r.label}
              className="flex items-center justify-between border-b border-[#1f1f1f] py-4"
            >
              <span className="text-sm text-[#888888]">{r.label}</span>
              <span className="text-sm font-medium text-white">{r.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
