/* ==========================================================================
   CONFIGURAÇÃO — edite apenas este bloco para trocar textos, planos, preços e contatos.
   Valores: use número (ex.: 250) ou null para exibir o texto de "valorTexto".
   ========================================================================== */
const CONFIG = {
  marca: { nome: "TÃO Performance", palavras: ["TÃO", "Performance"], tagline: "Treino específico · Dieta individualizada", descricao: "Treino específico e dieta individualizada, com Nutrição Esportiva e Educação Física em um mesmo planejamento." },

  whatsapp: {
    numero: "5500000000000",              // EDITE: código do país + DDD + número, só dígitos
    exibicao: "(00) 00000-0000",           // EDITE: como o número aparece no rodapé
    mensagemGeral: "Olá! Gostaria de saber mais sobre a consultoria.",
    mensagemPlano: "Olá! Tenho interesse no plano \"{plano}\". Gostaria de mais informações."
  },

  hero: {
    eyebrow: "Nutrição Esportiva + Educação Física",
    titulo: ["Sua evolução começa com ", "estratégia."],
    subtitulo: "Nutrição e treinamento trabalhando juntos para transformar sua saúde, sua performance e seus resultados.",
    botaoPrincipal: "Conhecer os planos",
    botaoSecundario: "Como funciona",
    tags: ["Corrida", "Musculação", "Alimentação equilibrada", "Desempenho físico"]
  },

  sobre: {
    titulo: "Dois profissionais, um único planejamento.",
    texto: "A consultoria reúne Nutrição Esportiva e Educação Física no mesmo acompanhamento, para que alimentação e treino sejam planejados em conjunto.",
    pilares: [
      { icone: "nutri", cor: "red", titulo: "Nutrição individualizada", texto: "Planejamento alimentar desenvolvido considerando rotina, objetivos, preferências e necessidades nutricionais." },
      { icone: "treino", cor: "", titulo: "Treinamento personalizado", texto: "Organização de treinos considerando condicionamento físico, experiência, disponibilidade e evolução." },
      { icone: "link", cor: "", titulo: "Acompanhamento integrado", texto: "Comunicação e alinhamento entre os profissionais para promover uma evolução consistente." }
    ]
  },

  etapas: {
    titulo: "Como funciona o acompanhamento",
    texto: "Do primeiro contato aos ajustes, cada etapa acontece em ordem e com clareza. Toque em uma etapa para destacá-la.",
    lista: [
      { titulo: "Contato inicial", texto: "O interessado escolhe o plano e inicia o atendimento." },
      { titulo: "Avaliação individual", texto: "Coleta das informações necessárias para compreender o perfil, os objetivos e a rotina." },
      { titulo: "Planejamento personalizado", texto: "Elaboração das estratégias nutricionais e de treinamento conforme os serviços contratados." },
      { titulo: "Início do acompanhamento", texto: "Disponibilização das orientações e ferramentas necessárias." },
      { titulo: "Monitoramento e ajustes", texto: "Acompanhamento periódico, avaliação da evolução e ajustes individualizados." }
    ]
  },

  planos: {
    titulo: "Escolha o plano ideal para você",
    texto: "Três formas de acompanhamento. O plano híbrido reúne nutrição e treinamento em uma única estratégia.",
    botao: "Quero contratar",
    valorTexto: "Valor sob consulta",
    lista: [
      { nome: "Consultoria Nutricional", area: "nutri", valor: null, periodicidade: "", destaque: false,
        beneficios: ["Avaliação nutricional", "Planejamento alimentar individualizado", "Orientações nutricionais", "Acompanhamento conforme a periodicidade contratada"] },
      { nome: "Consultoria de Treinamento", area: "treino", valor: null, periodicidade: "", destaque: false,
        beneficios: ["Avaliação física inicial", "Treinamento individualizado", "Organização da rotina de exercícios", "Ajustes conforme a evolução"] },
      { nome: "Consultoria Híbrida Completa", area: "hibrida", valor: null, periodicidade: "", destaque: true, selo: "Mais completo",
        beneficios: ["Acompanhamento nutricional", "Planejamento de treinamento", "Integração entre Nutrição e Educação Física", "Monitoramento da evolução", "Ajustes individualizados"] }
    ]
  },

  diferenciais: {
    titulo: "O que torna o acompanhamento diferente",
    lista: [
      { icone: "user", titulo: "Estratégias individualizadas", texto: "Tudo parte do seu perfil, da sua rotina e dos seus objetivos." },
      { icone: "users", titulo: "Integração entre profissionais", texto: "Nutrição e treino dialogam para que as decisões façam sentido juntas." },
      { icone: "flask", titulo: "Evidências científicas", texto: "Planejamento baseado em evidências científicas." },
      { icone: "chart", titulo: "Acompanhamento da evolução", texto: "Sua evolução é monitorada e o plano é ajustado quando necessário." },
      { icone: "calendar", titulo: "Flexibilidade para diferentes rotinas", texto: "O planejamento considera a sua disponibilidade e o seu dia a dia." },
      { icone: "heart", titulo: "Atendimento humanizado", texto: "Proximidade e escuta em todas as etapas do acompanhamento." }
    ]
  },

  faq: {
    titulo: "Perguntas frequentes",
    lista: [
      { p: "Como funciona a consultoria híbrida?", r: "Nutrição e Educação Física atuam no mesmo acompanhamento. Os profissionais alinham as estratégias para que alimentação e treino sigam o mesmo objetivo." },
      { p: "O atendimento é presencial ou online?", r: "As modalidades de atendimento disponíveis são informadas no contato inicial pelo WhatsApp." },
      { p: "Posso contratar apenas a nutrição?", r: "Sim. O plano Consultoria Nutricional é voltado a quem quer apenas o acompanhamento nutricional." },
      { p: "Posso contratar apenas o treinamento?", r: "Sim. O plano Consultoria de Treinamento é voltado a quem quer apenas o acompanhamento de treino." },
      { p: "Como recebo meu planejamento?", r: "A forma de entrega do planejamento é combinada no início do acompanhamento, conforme o plano contratado." },
      { p: "Qual é a duração do acompanhamento?", r: "A duração e a periodicidade são informadas antes da contratação, conforme o plano escolhido." },
      { p: "Como funciona a renovação?", r: "As condições de renovação são apresentadas no atendimento, antes de fechar o plano." },
      { p: "Como posso realizar o pagamento?", r: "As formas de pagamento são informadas pelo WhatsApp, no momento da contratação." }
    ]
  },

  final: {
    titulo: "O próximo passo da sua evolução começa aqui.",
    subtitulo: "Escolha o acompanhamento que combina com seus objetivos e comece a construir resultados com planejamento e consistência.",
    botao: "Conhecer os planos"
  },

  rodape: {
    email: "contato@seudominio.com.br",    // EDITE
    redes: [ { nome: "Instagram", url: "https://instagram.com/seuperfil" } ],   // EDITE
    profissionais: [
      { nome: "Nome do(a) Nutricionista", registro: "Nutricionista · CRN-0 nº 00000" },    // EDITE
      { nome: "Nome do(a) Profissional de Educação Física", registro: "Educação Física · CREF nº 000000-G/UF" }  // EDITE
    ],
    links: [ { nome: "Política de privacidade", url: "#" }, { nome: "Termos de uso", url: "#" } ],   // EDITE: URLs
    aviso: "Conteúdo informativo. As condutas são definidas após avaliação individual."
  }
};
