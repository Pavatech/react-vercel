const courses = [
  {
    title: "Curso de HTML",
    description: "Aprenda a estruturar páginas e criar a base da web.",
    image: "/img/html.svg",
    alt: "Ícone de código HTML",
  },
  {
    title: "Curso de CSS",
    description: "Dê vida às suas páginas com estilos e layouts modernos.",
    image: "/img/css.svg",
    alt: "Ícone de estilos CSS",
  },
  {
    title: "Curso de JS",
    description: "Crie experiências interativas com JavaScript.",
    image: "/img/js.svg",
    alt: "Ícone de JavaScript",
  },
  {
    title: "Curso de GAMES",
    description: "Conheça os fundamentos para criar seus próprios jogos.",
    image: "/img/games.svg",
    alt: "Ícone de controle de videogame",
  },
  {
    title: "Curso de Robótica",
    description: "Explore robótica, lógica e tecnologia na prática.",
    image: "/img/robot.svg",
    alt: "Ícone de robô",
  },
  {
    title: "Curso de DESIGN",
    description: "Transforme ideias em interfaces visuais marcantes.",
    image: "/img/design.svg",
    alt: "Ícone de design",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 sm:flex-row">
          <a href="#" className="text-xl font-bold tracking-tight">
            🏫 ESCOLA DE INFORMÁTICA 📕
          </a>
          <nav aria-label="Navegação principal" className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-slate-200">
            <a className="transition hover:text-cyan-300" href="#cursos">
              Produtos
            </a>
            <a className="transition hover:text-cyan-300" href="#html">
              Cursos HTML
            </a>
            <a className="transition hover:text-cyan-300" href="#javascript">
              Cursos JS
            </a>
            <a className="transition hover:text-cyan-300" href="#sobre">
              Sobre
            </a>
          </nav>
        </div>
      </header>

      <section className="relative isolate overflow-hidden bg-gradient-to-br from-indigo-950 via-blue-900 to-cyan-800 text-white">
        <div className="mx-auto grid min-h-[440px] max-w-7xl items-center gap-10 px-6 py-14 md:grid-cols-2 md:py-20">
          <div className="order-2 md:order-1">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Aprenda. Crie. Transforme.
            </p>
            <h1 className="text-5xl font-black tracking-tight sm:text-6xl">UTFPR</h1>
            <h2 className="mt-4 max-w-xl text-2xl font-semibold text-blue-100 sm:text-3xl">
              A melhor escola de Informática
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-blue-100/80">
              Desenvolva novas habilidades e prepare-se para criar o futuro com tecnologia.
            </p>
            <a
              href="#cursos"
              className="mt-8 inline-flex rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950 shadow-lg shadow-cyan-950/20 transition hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Informações
            </a>
          </div>
          <div className="order-1 flex justify-center md:order-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/banner.svg"
              alt="Ilustração de aprendizado de tecnologia"
              className="w-full max-w-lg drop-shadow-2xl"
              width="520"
              height="360"
            />
          </div>
        </div>
      </section>

      <main id="cursos" className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
            Nossos cursos
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Encontre seu próximo desafio
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Aprenda no seu ritmo com cursos para explorar as áreas mais criativas da informática.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <article
              id={index === 0 ? "html" : index === 2 ? "javascript" : undefined}
              key={course.title}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/10"
            >
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 p-7">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={course.image}
                  alt={course.alt}
                  className="h-full w-full object-contain transition group-hover:scale-105"
                  width="180"
                  height="140"
                />
              </div>
              <div className="flex flex-1 flex-col items-start p-6">
                <h3 className="text-xl font-bold">{course.title}</h3>
                <p className="mt-2 flex-1 leading-6 text-slate-600">{course.description}</p>
                <a
                  href="#sobre"
                  className="mt-5 inline-flex rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                >
                  Informações
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer id="sobre" className="bg-slate-950 px-6 py-9 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
          <p className="text-sm text-slate-300">
            © {new Date().getFullYear()} Escola de Informática UTFPR
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/"
              aria-label="Instagram"
              className="rounded-full bg-white/10 p-2.5 transition hover:bg-white/20"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.5-3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/"
              aria-label="Facebook"
              className="rounded-full bg-white/10 p-2.5 transition hover:bg-white/20"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4Z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/"
              aria-label="YouTube"
              className="rounded-full bg-white/10 p-2.5 transition hover:bg-white/20"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8ZM9.8 15.5v-7l6 3.5-6 3.5Z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
