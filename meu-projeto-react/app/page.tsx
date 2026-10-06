const features = [
  {
    title: "Ipsum consequat",
    description: "Nisl amet dolor sit etiam venenatis sed tortor consequat venenatis et magna tempus.",
    color: "text-rose-600",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 48 48" className="h-9 w-9 fill-current">
        <path d="M20 3h8l1.4 5.2a17 17 0 0 1 3.4 1.4l4.8-2.5 5.7 5.7-2.5 4.8a17 17 0 0 1 1.4 3.4L47 22v8l-5.2 1.4a17 17 0 0 1-1.4 3.4l2.5 4.8-5.7 5.7-4.8-2.5a17 17 0 0 1-3.4 1.4L28 49h-8l-1.4-5.2a17 17 0 0 1-3.4-1.4l-4.8 2.5-5.7-5.7 2.5-4.8a17 17 0 0 1-1.4-3.4L1 30v-8l5.2-1.4a17 17 0 0 1 1.4-3.4l-2.5-4.8 5.7-5.7 4.8 2.5a17 17 0 0 1 3.4-1.4L20 3Zm4 14a11 11 0 1 0 0 22 11 11 0 0 0 0-22Zm0 6a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" />
      </svg>
    ),
  },
  {
    title: "Magna etiam dolor",
    description: "Nibh amet dolore quis velit viverra sed blandit consequat venenatis et magna tempus.",
    color: "text-neutral-600",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 32 48" className="h-9 w-7 fill-current">
        <path d="M8 2h17L20 19h10L9 46l5-20H3L8 2Z" />
      </svg>
    ),
  },
  {
    title: "Tempus adipiscing",
    description: "Nisl amet dolor sit etiam venenatis sed blandit consequat venenatis et magna tempus.",
    color: "text-sky-400",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 48 48" className="h-9 w-9 fill-current">
        <path d="m24 2 6.7 13.6 15 2.2-10.8 10.5 2.5 14.9L24 36.2l-13.4 7 2.5-14.9L2.3 17.8l15-2.2L24 2Z" />
      </svg>
    ),
  },
];

const portfolio = [
  {
    title: "Ipsum feugiat et dolor",
    description: "Lorem ipsum dolor sit amet et viverra sed amet blandit consequat venenatis lorem blandit.",
    image: "/art/portfolio-color.svg",
    alt: "Composição colorida com plantas, formas e um gato",
  },
  {
    title: "Sed etiam lorem nulla",
    description: "Lorem ipsum dolor sit amet et viverra sed amet blandit consequat venenatis lorem blandit.",
    image: "/art/portfolio-portrait.svg",
    alt: "Ilustração de retrato com fundo rosa e formas geométricas",
  },
  {
    title: "Consequat et tempus",
    description: "Lorem ipsum dolor sit amet et viverra sed amet blandit consequat venenatis lorem blandit.",
    image: "/art/portfolio-paint.svg",
    alt: "Tintas e pincéis coloridos em uma composição artística",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-neutral-800">
      <header className="flex h-[50px] items-center justify-center">
        <a href="#" className="text-sm font-bold tracking-tight">
          Paintings
        </a>
      </header>

      <section
        aria-label="Destaque artístico"
        className="relative flex h-[68px] items-center justify-center overflow-hidden bg-sky-100"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/art/paint-banner.svg"
          alt="Pincéis e tintas em uma paleta"
          className="absolute top-[-67px] h-[205px] w-[260px] object-cover object-center sm:w-[310px]"
          width="310"
          height="205"
        />
      </section>

      <section className="px-5 pb-7 pt-7 sm:pb-8 sm:pt-8">
        <div className="mx-auto grid max-w-4xl gap-7 sm:grid-cols-3 sm:gap-8">
          {features.map((feature) => (
            <article key={feature.title} className="flex flex-col items-center text-center">
              <div className={`flex h-12 items-center justify-center ${feature.color}`}>
                {feature.icon}
              </div>
              <h2 className="mt-2 text-[11px] font-bold">{feature.title}</h2>
              <p className="mt-2 max-w-[230px] text-[9px] leading-[1.6] text-neutral-400">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <a
            href="#portfolio"
            className="flex h-[23px] min-w-[100px] items-center justify-center rounded-[2px] bg-rose-600 px-5 text-[9px] font-bold text-white transition hover:bg-rose-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
          >
            Get Started
          </a>
          <a
            href="#portfolio"
            className="flex h-[23px] min-w-[100px] items-center justify-center rounded-[2px] bg-neutral-800 px-5 text-[9px] font-bold text-white transition hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-800"
          >
            Learn More
          </a>
        </div>
      </section>

      <section id="portfolio" className="bg-neutral-100 px-4 pb-10 pt-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="relative mb-4 text-center text-[9px] font-bold after:absolute after:left-0 after:right-0 after:top-1/2 after:-z-0 after:border-t after:border-neutral-200">
            <span className="relative z-10 bg-neutral-100 px-3">My Portfolio</span>
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((item) => (
              <article key={item.title} className="overflow-hidden bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-[150px] w-full object-cover sm:h-[170px]"
                  width="480"
                  height="300"
                />
                <div className="px-3 py-3">
                  <h3 className="text-[10px] font-bold">{item.title}</h3>
                  <p className="mt-2 text-[9px] leading-[1.6] text-neutral-400">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
