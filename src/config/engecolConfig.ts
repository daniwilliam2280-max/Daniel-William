import { CompanyConfig, FaqItem } from '../types';

export const INITIAL_CONFIG: CompanyConfig = {
  name: 'ENGECOL Energia Solar LTDA',
  legalName: 'ENGECOL ENERGIA SOLAR LTDA',
  tagline: 'Energia solar para sua casa, comércio e empresa',
  contactName: 'Júnior Moraes',
  phone: '(66) 99643-9811',
  phoneRaw: '5566996439811',
  whatsapp: '(66) 99643-9811',
  whatsappLink: 'https://wa.me/5566996439811',
  instagram: '@engecol_solar',
  instagramUrl: 'https://www.instagram.com/engecol_solar/',
  cityRegion: 'Mato Grosso e Região',
  hero: {
    badge: 'Soluções em Energia Fotovoltaica',
    title: 'Energia solar para sua casa, comércio e empresa',
    subtitle: 'Reduza até 95% da sua conta de luz com projetos fotovoltaicos sob medida, engenharia especializada e facilidade de financiamento.',
    ctaPrimary: 'Solicitar orçamento pelo WhatsApp',
    ctaSecondary: 'Conheça nossos serviços',
    imageUrl: '',
  },
  about: {
    title: 'Sobre a ENGECOL Energia Solar',
    subtitle: 'Compromisso com qualidade, tecnologia e sustentabilidade',
    description: 'A ENGECOL Energia Solar LTDA é uma empresa especializada em projetos, homologação e instalação de sistemas solares fotovoltaicos.',
    paragraphs: [
      'Atuamos no desenvolvimento de soluções completas para residências, empresas, comércios, indústrias e projetos de usinas solares.',
      'Nosso foco é oferecer equipamentos de alta eficiência, rigor técnico nas instalações e acompanhamento em todas as etapas, desde a avaliação de viabilidade até a homologação junto à concessionária de energia.',
      'Trabalhamos com transparência e respeito para que cada cliente usufrua da segurança e economia que a energia solar proporciona ao seu patrimônio.'
    ],
    stats: [
      { value: 'Até 95%', label: 'Redução potencial na conta de luz' },
      { value: '100%', label: 'Projetos homologados e regulamentados' },
      { value: '25+ Anos', label: 'Vida útil estimada dos módulos' },
      { value: 'Até 72x', label: 'Possibilidade de financiamento bancário' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
  },
  services: [
    {
      id: 'residencial',
      title: 'Energia Solar Residencial',
      category: 'Residências',
      description: 'Gere sua própria eletricidade limpa no telhado de sua residência, proteja sua família contra aumentos tarifários e valorize seu imóvel.',
      benefits: [
        'Economia imediata na fatura mensal',
        'Valorização do patrimônio residencial',
        'Monitoramento do consumo pelo smartphone'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1508873696983-2df570464756?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'comercial',
      title: 'Energia Solar Comercial',
      category: 'Comércios',
      description: 'Diminua custos operacionais fixos do seu negócio, aumente a lucratividade da sua empresa e agregue valor sustentável à sua marca.',
      benefits: [
        'Redução drástica das despesas fixas com luz',
        'Retorno sobre o investimento atrativo',
        'Diferencial competitivo sustentável'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'industrial',
      title: 'Energia Solar Industrial',
      category: 'Indústrias',
      description: 'Sistemas robustos de média e alta tensão dimensionados para atender demandas energéticas exigentes com máxima eficiência técnica.',
      benefits: [
        'Otimização do custo por kWh consumido',
        'Projetos em conformidade com normas técnicas',
        'Blindagem contra oscilações de bandeiras tarifárias'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'instalacao',
      title: 'Instalação de Sistemas Fotovoltaicos',
      category: 'Engenharia',
      description: 'Mão de obra técnica qualificada com instalação segura de inversores, cabeamento, estruturas de fixação e homologação completa.',
      benefits: [
        'Equipe treinada com EPIs e normas de segurança',
        'Equipamentos de marcas consolidadas no mercado',
        'Homologação burocrática integral na concessionária'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'usinas',
      title: 'Projetos de Usinas Solares',
      category: 'Solo e Usinas',
      description: 'Desenvolvimento e implantação de usinas solares de solo em médias e grandes áreas com estudo de sombreamento e alta irradiação.',
      benefits: [
        'Estudo topográfico e análise de viabilidade',
        'Dimensionamento para geração em larga escala',
        'Estruturas fixas ou com rastreamento solar'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'renda',
      title: 'Soluções para Geração de Renda',
      category: 'Investimento',
      description: 'Alternativas de investimento em energia solar para geração distribuída, autoconsumo remoto e modelos de locação energética.',
      benefits: [
        'Monetização de áreas e terrenos ensolarados',
        'Diversificação de patrimônio com ativo tangível',
        'Atendimento com análise de viabilidade financeira'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'financiamento',
      title: 'Simulação e Financiamento',
      category: 'Facilidade',
      description: 'Auxílio completo para simulação de crédito bancário onde a economia na fatura auxilia no pagamento das próprias parcelas.',
      benefits: [
        'Financiamento de até 100% do projeto (sujeito a análise)',
        'Parcelamento em até 72 vezes em instituições parceiras',
        'Simulação personalizada sem compromisso'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80'
    }
  ],
  gallery: [
    {
      id: 'proj-1',
      title: 'Usina Solar em Solo — 7 Fileiras Fotovoltaicas',
      category: 'usina',
      location: 'Solo Cercado / Usina de Médio Porte',
      description: 'Obra 01 identificada do Instagram: 7 fileiras de módulos fotovoltaicos em solo com cerca perimetral e alta irradiação para autoconsumo remoto.',
      imageUrl: ''
    },
    {
      id: 'proj-2',
      title: 'Sistema Comercial / Industrial ao Pôr do Sol',
      category: 'comercial',
      location: 'Cobertura Metálica Comercial',
      description: 'Obra 02 identificada do Instagram: Instalação fotovoltaica em cobertura metálica ampla para redução drástica dos custos fixos da empresa.',
      imageUrl: ''
    },
    {
      id: 'proj-3',
      title: 'Residencial 12 Módulos em Fibrocimento',
      category: 'residencial',
      location: 'Telhado de Fibrocimento Ondulado',
      description: 'Obra 03 identificada do Instagram: Arranjo 2x6 com 12 placas solares perfeitamente estancadas e fixadas com parafusos prisioneiros.',
      imageUrl: ''
    },
    {
      id: 'proj-4',
      title: 'Usina Solar Rural em Pastagem — Agronegócio',
      category: 'usina',
      location: 'Área Rural / Fazenda Agro',
      description: 'Obra 04 identificada do Instagram: Geração fotovoltaica em grande área de pastagem para atendimento de bombas, pivôs e sede rural.',
      imageUrl: ''
    },
    {
      id: 'proj-5',
      title: 'Residencial em Telhas Coloniais / Cerâmicas',
      category: 'residencial',
      location: 'Telhado Cerâmico de Alto Padrão',
      description: 'Obra 05 identificada do Instagram: Instalação com 12 módulos (10 em linha + 2 superiores) com ganchos em inox sem furos nas telhas.',
      imageUrl: ''
    },
    {
      id: 'proj-6',
      title: 'Engenharia de Solo com Perfis Galvanizados',
      category: 'usina',
      location: 'Estrutura Técnica em Encosta',
      description: 'Obra 06 identificada do Instagram: Perfis de sustentação em aço galvanizado a quente e conexão com transformador rural de média tensão.',
      imageUrl: ''
    },
    {
      id: 'proj-7',
      title: 'Cobertura Residencial com 16 Módulos (2x8)',
      category: 'residencial',
      location: 'Cobertura Residencial / Garagem',
      description: 'Obra 07 identificada do Instagram: Fileira dupla de 16 placas solares suprindo elevado consumo com ar-condicionado e freezer.',
      imageUrl: ''
    }
  ],
  financing: {
    title: 'Financiamento de Energia Solar',
    partner: 'Parceria com Instituições Financeiras (ex.: Santander)',
    maxCoverage: 'Financiamento de até 100% do projeto',
    maxInstallments: 'Parcelamento em até 72 vezes',
    description: 'Você pode substituir a sua conta de luz pelo valor da parcela do financiamento. Conforme as condições da instituição, é possível financiar todo o sistema.',
    disclaimer: 'As condições de financiamento divulgadas correspondem a informações comerciais e estão estritamente sujeitas à análise de crédito, comprovação cadastral, taxas de juros vigentes e regras da instituição financeira parceira no momento da contratação. Não garantimos aprovação prévia.'
  },
  plants: {
    title: 'Usinas Solares e Geração de Renda',
    subtitle: 'Oportunidades de investimento com energia fotovoltaica',
    description: 'Projetos de usinas solares de solo representam uma alternativa para investidores e proprietários de áreas ensolaradas que desejam ingressar na geração de energia limpa.',
    features: [
      'Estudo técnico preliminar de radiação e topografia da área',
      'Dimensionamento de inversores e cabeamento de média tensão',
      'Possibilidade de atendimento a múltiplas unidades consumidoras',
      'Engenharia de conexão e processo de acesso à rede elétrica'
    ],
    disclaimer: 'Os dados e estimativas de projetos de usinas divulgados refletem parâmetros específicos de estudos e simulações técnicas. Rendimentos, tempos de amortização e retornos variam conforme irradiação do local, tarifas locais, regras regulatórias da ANEEL/concessionária e custo de implantação. Não constituem promessa ou garantia de resultado financeiro.'
  }
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Como funciona a energia solar?',
    answer: 'Os módulos solares instalados no seu telhado ou em solo captam a luz do sol e geram energia elétrica em corrente contínua. O inversor solar converte essa eletricidade para corrente alternada (padrão da sua casa ou empresa). A energia gerada é consumida instantaneamente e o excedente é injetado na rede da concessionária, gerando créditos energéticos para abater nas suas próximas faturas.'
  },
  {
    id: 'faq-2',
    question: 'Como solicitar um orçamento com a ENGECOL?',
    answer: 'É muito simples: basta entrar em contato com Júnior Moraes pelo WhatsApp (66) 99643-9811 ou preencher o formulário no nosso site. Ter em mãos uma foto recente da sua conta de energia de luz facilita o cálculo da média de consumo e permite um dimensionamento preliminar rápido e personalizado.'
  },
  {
    id: 'faq-3',
    question: 'É possível instalar energia solar em uma residência?',
    answer: 'Sim, com certeza! A energia solar residencial é indicada para casas de diferentes portes. Avaliamos a estrutura do telhado (orientação, inclinação e sombreamento) e dimensionamos a quantidade ideal de painéis para suprir o consumo da família.'
  },
  {
    id: 'faq-4',
    question: 'A empresa atende comércios e indústrias?',
    answer: 'Sim. A ENGECOL desenvolve projetos completos para comércios, barracões, empresas de serviços, indústrias e propriedades rurais, buscando máxima eficiência técnica e mitigação dos custos elétricos operacionais.'
  },
  {
    id: 'faq-5',
    question: 'Como funciona a avaliação do projeto?',
    answer: 'Nossa equipe analisa o consumo médio dos últimos 12 meses na sua conta de energia, faz a verificação do local de instalação (tipo de telhado ou solo, padrão de entrada e cabeamento) e elabora uma proposta com dimensionamento técnico, estimativa de geração e opções de pagamento.'
  },
  {
    id: 'faq-6',
    question: 'Quais são as possibilidades de financiamento?',
    answer: 'Trabalhamos com linhas de financiamento de instituições financeiras (como Santander e bancos cooperativos), com opções de financiar até 100% do projeto e parcelamento em até 72 vezes. A aprovação, taxas e prazos estão sujeitos à análise de crédito individual de cada banco.'
  },
  {
    id: 'faq-7',
    question: 'Como entrar em contato com a ENGECOL?',
    answer: 'Você pode falar diretamente com Júnior Moraes no WhatsApp principal (66) 99643-9811 (ou clicando no botão verde no site), ligar para nosso atendimento ou acompanhar nossas publicações no Instagram oficial @engecol_solar (instagram.com/engecol_solar).'
  }
];
