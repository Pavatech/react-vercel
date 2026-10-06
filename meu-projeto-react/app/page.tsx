export default function Home() {
  return (
    <>
      <header className="flex flex-col items-center justify-between gap-4 bg-slate-900 px-6 py-5 text-white sm:flex-row">
        <h2 className="text-xl font-bold">🏫 ESCOLA DE INFORMÁTICA 📕</h2>
        <nav className="flex flex-wrap justify-center gap-5 text-sm font-medium">
          <a className="transition hover:text-violet-300" href="#">
            Produtos
          </a>
          <a className="transition hover:text-violet-300" href="">
            Cursos HTML
          </a>
          <a className="transition hover:text-violet-300" href="">
            Cursos JS
          </a>
          <a className="transition hover:text-violet-300" href="">
            Sobre
          </a>
        </nav>
      </header>

      <div className="banner flex min-h-64 flex-col items-center justify-center gap-3 bg-violet-100 px-6 py-12 text-center text-violet-950">
        <h1 className="text-4xl font-bold">teste</h1>
        <h1 className="text-4xl font-bold">teste2</h1>
      </div>

      <main className="main flex min-h-64 flex-col items-center justify-center gap-3 bg-white px-6 py-12 text-center text-slate-900">
        <h1 className="text-3xl font-semibold">principal1</h1>
        <h1 className="text-3xl font-semibold">principal2</h1>
      </main>
    </>
  );
}
