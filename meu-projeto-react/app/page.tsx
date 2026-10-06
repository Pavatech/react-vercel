const features = [
  {
    title: "Design moderno",
    description: "Interfaces elegantes e focadas em conversão para destacar seu produto.",
  },
  {
    title: "Performance",
    description: "Estrutura leve com carregamento rápido e experiência fluida para o usuário.",
  },
  {
    title: "Experiência",
    description: "Toda a navegação pensada para ser clara, intuitiva e fácil de usar.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#f5f3ff_0%,_#eef2ff_30%,_#f8fafc_100%)] px-6 py-10 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <header className="mb-16 flex items-center justify-between rounded-full border border-slate-200 bg-white/70 px-5 py-3 shadow-sm backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
              P
            </div>
            <span className="text-lg font-semibold">Pavatech</span>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#sobre" className="transition hover:text-slate-900">Sobre</a>
            <a href="#servicos" className="transition hover:text-slate-900">Serviços</a>
            <a href="#contato" className="transition hover:text-slate-900">Contato</a>
          </nav>

          <a
            href="#contato"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Fale conosco
          </a>
        </header>

        <section className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="inline-flex rounded-full border border-violet-200 bg-violet-100 px-3 py-1 text-sm font-medium text-violet-700">
              Soluções digitais que entregam resultados
            </span>

            <h1 className="mt-6 max-w-xl text-5xl font-black tracking-tight text-slate-900 md:text-6xl">
              Transforme ideias em experiências que encantam.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              Criamos produtos digitais modernos, intuitivos e de alto impacto para marcas que querem crescer com clareza e autoridade.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#servicos"
                className="rounded-full bg-violet-600 px-6 py-3 text-center font-semibold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-500"
              >
                Ver serviços
              </a>
              <a
                href="#sobre"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Saiba mais
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-500">
              <div>
                <span className="block text-2xl font-bold text-slate-900">+120</span>
                projetos entregues
              </div>
              <div>
                <span className="block text-2xl font-bold text-slate-900">4.9/5</span>
                avaliação média
              </div>
              <div>
                <span className="block text-2xl font-bold text-slate-900">24h</span>
                tempo médio de resposta
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_30px_80px_rgba(15,_23,_42,_0.08)]">
            <div className="rounded-[1.5rem] bg-slate-900 p-5 text-white">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Dashboard</p>
                  <h2 className="text-2xl font-bold">Performance</h2>
                </div>
                <span className="rounded-full bg-emerald-500/20 px-2.5 py-1 text-xs font-medium text-emerald-300">
                  +28%
                </span>
              </div>

              <div className="space-y-4">
                {[
                  [68, "Engajamento"],
                  [82, "Conversão"],
                  [94, "Satisfação"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                      <span>{label}</span>
                      <span>{value}%</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-slate-700">
                      <div
                        className="h-2.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400"
                        style={{ width: `${value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-[1.5rem] border border-dashed border-slate-200 bg-slate-50 p-5">
              <p className="text-sm text-slate-500">Equipe</p>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-slate-900">Estratégia + Design + Tech</p>
                  <p className="text-sm text-slate-500">Tudo em um só lugar</p>
                </div>
                <div className="flex -space-x-2">
                  {['A', 'B', 'C'].map((letter) => (
                    <div
                      key={letter}
                      className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-violet-100 text-xs font-bold text-violet-700"
                    >
                      {letter}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="mt-20">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Serviços</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Soluções pensadas para evolução real</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-lg text-violet-700">
                  ✦
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="sobre" className="mt-20 rounded-[2rem] bg-slate-900 px-8 py-10 text-white md:px-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">Sobre</p>
              <h2 className="mt-3 text-3xl font-bold">Somos a ponte entre estratégia, tecnologia e presença de marca.</h2>
            </div>
            <p className="text-lg leading-8 text-slate-300">
              Ajudamos empresas a criar experiências digitais que geram confiança, fortalecem a imagem da marca e transformam visitas em relacionamento duradouro.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
