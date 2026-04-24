'use client'

import { Clock, Code2, Users, Award, ArrowRight, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Clock,
    text: '+40 horas de conteúdo direto ao ponto',
  },
  {
    icon: Code2,
    text: 'Projetos com Python + IA desde o módulo 1',
  },
  {
    icon: Users,
    text: 'Suporte da comunidade com +20.000 alunos',
  },
  {
    icon: Award,
    text: 'Certificado reconhecido pelo mercado',
  },
]

function CodePreview() {
  return (
    <div className="group relative">
      {/* Glow effect */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-20 blur-xl transition-opacity group-hover:opacity-30" />

      {/* Card */}
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0f]/80 backdrop-blur-xl">
        {/* Header */}
        <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>
          <span className="ml-2 text-xs text-white/40">main.py</span>
        </div>

        {/* Code */}
        <div className="p-4 sm:p-6">
          <pre className="text-xs sm:text-sm">
            <code>
              <span className="text-purple-400">from</span>
              <span className="text-white"> openai </span>
              <span className="text-purple-400">import</span>
              <span className="text-white"> OpenAI</span>
              {'\n\n'}
              <span className="text-gray-500"># Crie seu assistente de IA</span>
              {'\n'}
              <span className="text-blue-400">client</span>
              <span className="text-white"> = </span>
              <span className="text-emerald-400">OpenAI</span>
              <span className="text-white">()</span>
              {'\n\n'}
              <span className="text-blue-400">response</span>
              <span className="text-white"> = client.</span>
              <span className="text-yellow-400">chat</span>
              <span className="text-white">.</span>
              <span className="text-yellow-400">completions</span>
              <span className="text-white">.</span>
              <span className="text-emerald-400">create</span>
              <span className="text-white">(</span>
              {'\n'}
              <span className="text-white"> model=</span>
              <span className="text-amber-300">{'"gpt-4"'}</span>
              <span className="text-white">,</span>
              {'\n'}
              <span className="text-white"> messages=[</span>
              <span className="text-white">{'{'}</span>
              {'\n'}
              <span className="text-white"> </span>
              <span className="text-amber-300">{'"role"'}</span>
              <span className="text-white">: </span>
              <span className="text-amber-300">{'"user"'}</span>
              <span className="text-white">,</span>
              {'\n'}
              <span className="text-white"> </span>
              <span className="text-amber-300">{'"content"'}</span>
              <span className="text-white">: </span>
              <span className="text-amber-300">{'"Olá, IA!"'}</span>
              {'\n'}
              <span className="text-white"> {'}'}]</span>
              {'\n'}
              <span className="text-white">)</span>
              {'\n\n'}
              <span className="text-purple-400">print</span>
              <span className="text-white">(response.choices[</span>
              <span className="text-orange-400">0</span>
              <span className="text-white">].message.content)</span>
            </code>
          </pre>
        </div>

        {/* Footer */}
        <div className="flex items-center gap-2 border-t border-white/5 bg-white/[0.02] px-4 py-3">
          <Sparkles className="h-4 w-4 text-indigo-400" />
          <span className="text-xs text-white/50">Seu primeiro projeto com IA em minutos</span>
        </div>
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black pt-16">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        {/* Mesh gradient */}
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-[120px]" />
        <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/15 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
              </span>
              <span className="text-xs font-medium text-white/70">Vagas abertas para 2025</span>
            </div>

            {/* Headline */}
            <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Aprenda Python do zero e construa{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                projetos reais com IA
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-white/60 lg:mx-0">
              O curso mais prático do Brasil para quem quer entrar em tecnologia sem enrolação
            </p>

            {/* Features */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3 transition-colors hover:border-white/10 hover:bg-white/[0.04]"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
                    <feature.icon className="h-4 w-4 text-indigo-400" />
                  </div>
                  <span className="text-sm text-white/70">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <button className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-xl hover:shadow-indigo-500/30">
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="relative">Quero começar agora</span>
                <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-medium text-white backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10">
                Ver o que vou aprender
              </button>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex items-center justify-center gap-4 lg:justify-start">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-black bg-gradient-to-br from-indigo-400 to-purple-400"
                  />
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold text-white">+20.000</span>
                <span className="text-white/50"> alunos já estudam conosco</span>
              </div>
            </div>
          </div>

          {/* Code Preview */}
          <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
            <CodePreview />
          </div>
        </div>
      </div>
    </section>
  )
}
