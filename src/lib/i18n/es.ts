import { BUSINESS, SERVICES, type CategoryId, type Service } from "@/lib/business";
import type { Dictionary } from "./en";

/**
 * Spanish copy (usted, US/Miami usage: "financiamiento", "estimado",
 * "cotización"). A faithful translation of en.ts and business.ts: it adds no
 * claim the English does not make, and keeps every hedge. Not yet reviewed by
 * the client or a native proofreader.
 *
 * Google reviews are deliberately NOT here. They stay verbatim in the
 * customer's own language; translating them would put words in their mouths.
 */

type ServiceCopy = Pick<Service, "name" | "title" | "description" | "summary" | "intro" | "points" | "ctaName">;

const SERVICE_COPY: Record<string, ServiceCopy> = {
  "windows-and-doors": {
    name: "Ventanas y puertas de impacto",
    title: "Ventanas y puertas de impacto contra huracanes | Sur de la Florida",
    description:
      "Ventanas y puertas de impacto certificadas contra huracanes: eficiencia energética, facturas mensuales más bajas y seguridad todo el año. Financiamiento disponible. Contratista con licencia en Miami-Dade.",
    summary: "Resistentes a huracanes, eficientes y silenciosas todo el año.",
    intro:
      "Las ventanas y puertas de impacto cumplen varias funciones a la vez en el sur de la Florida: están diseñadas para resistir los escombros y la presión de los huracanes, reducen el calor solar contra el que tiene que trabajar el aire acondicionado, y el vidrio laminado de impacto atenúa de forma notable el ruido de la calle y de los aviones. Vivir en la Florida exige proteger bien su hogar, y esta es una protección que funciona todos los días del año, no solo durante la temporada.",
    points: [
      {
        title: "Eficiencia energética",
        body: "Las ventanas de impacto están diseñadas para minimizar el calor solar en verano y conservar el calor dentro de su hogar en las épocas más frías. Menos transferencia de calor significa una habitación que mantiene su temperatura en lugar de luchar contra el sol a través del vidrio.",
      },
      {
        title: "Facturas mensuales más bajas",
        body: "En el sur de la Florida el aire acondicionado funciona casi todo el año, y el vidrio es por donde entra la mayor parte del calor. Detenerlo en la ventana, y no después, hace que el sistema trabaje menos para mantener la misma temperatura: un ahorro que se nota en la factura cada mes, no una sola vez al instalarlas.",
      },
      {
        title: "Seguridad contra tormentas",
        body: "El vidrio de impacto no solo resiste los huracanes: bien instalado, ofrece el más alto nivel de protección a su hogar y a sus pertenencias durante todo el año.",
      },
    ],
  },
  kitchen: {
    name: "Cocina",
    title: "Remodelación de cocinas en North Miami Beach",
    description:
      "Renovación completa de cocinas, gestionada de principio a fin: permisos, diseño, materiales y construcción. Consulta de diseño sin costo adicional. Contratista con licencia CGC1529180.",
    summary: "Gestionada de principio a fin, del permiso al último detalle.",
    intro:
      "Nuestro equipo gestiona cada aspecto de la renovación de su cocina de principio a fin. Eso incluye obtener los permisos, asegurar la aprobación de la construcción y organizar los materiales antes de empezar el trabajo. Preparamos con usted un plan que se ajuste a sus necesidades y a su presupuesto.",
    points: [
      {
        title: "Planificación",
        body: "Los permisos, la aprobación de la construcción y la programación de materiales se resuelven antes de que nadie empiece a trabajar, para que el plazo que le damos sea el plazo que se cumple.",
      },
      {
        title: "Diseño",
        body: "Trabaje junto a nuestro equipo para diseñar la distribución y la estética y elegir materiales, accesorios y acabados, sin costo adicional. Le ofrecemos ayudas visuales para que pueda imaginar la cocina terminada.",
      },
      {
        title: "Construcción",
        body: "Un solo contratista general con licencia para todo el trabajo y un solo punto de contacto, desde la demolición hasta la inspección final.",
      },
    ],
  },
  bathroom: {
    name: "Baño",
    title: "Renovación de baños en Miami-Dade y Broward",
    description:
      "Renovación completa de baños: accesorios, distribución, azulejos y plomería. Consulta gratis y financiamiento disponible. Contratista general con licencia CGC1529180.",
    summary: "Accesorios, distribución, azulejos y plomería en un solo proyecto.",
    intro:
      "Si está pensando en renovar su baño, vale la pena planificarlo con cuidado. Desde elegir los accesorios adecuados hasta crear una distribución funcional, hay mucho que considerar. Ya sea que quiera actualizar un baño existente o empezar desde cero, nuestro equipo puede ayudarle a diseñar un espacio que se adapte a la forma en que realmente lo usa.",
    points: [
      { title: "Distribución", body: "Un plano funcional pensado para el espacio que usted tiene, no una plantilla colocada encima." },
      { title: "Accesorios y acabados", body: "Una selección guiada por su presupuesto y por lo que resiste la humedad del sur de la Florida." },
      { title: "Todos los oficios juntos", body: "Azulejos, plomería y acabados coordinados bajo un solo contrato." },
    ],
  },
  remodeling: {
    name: "Mejoras para el hogar",
    title: "Mejoras para el hogar y remodelación interior en Miami",
    description:
      "Renovación interior completa de cocinas, baños y áreas de estar, por un contratista general con licencia en la Florida. Calificación de 5.0 en 44 reseñas de Google.",
    summary: "Renovación interior de toda la casa bajo un solo contrato.",
    intro:
      "Nuestro trabajo de renovación interior abarca desde la remodelación de cocinas y baños hasta el rediseño de las áreas de estar. Nos enfocamos en la calidad de la obra y de los acabados: interiores que funcionan como usted vive y que conservan su calidad años después de terminar el trabajo.",
    points: [
      {
        title: "Cocinas y baños",
        body: "Renovar la cocina y el baño puede aumentar considerablemente el valor de su casa. Por todo el tiempo que se pasa en estos espacios, mejorar su organización y eficiencia se aprovecha por partida doble.",
      },
      { title: "Áreas de estar", body: "Reconfiguración, acabados y muebles empotrados diseñados en torno a la estructura existente." },
      { title: "Un solo contratista", body: "Un único contratista general con licencia a cargo del permiso, el calendario y la responsabilidad." },
    ],
  },
  pool: {
    name: "Piscinas",
    ctaName: "piscina",
    title: "Construcción y diseño de piscinas en el sur de la Florida",
    description:
      "Construcción de piscinas a la medida de su terreno y presupuesto, con concreto y materiales de primera. Contratista general con licencia en Miami-Dade y Broward.",
    summary: "Hechas a la medida de su terreno y su presupuesto, no de un catálogo.",
    intro:
      "Adaptamos la construcción y el diseño de su piscina a sus preferencias y a su presupuesto, sin sacrificar calidad ni inflar el costo. Nuestro equipo construye piscinas a la medida con materiales de primera y técnicas de construcción modernas, para que el resultado sea tan duradero como atractivo. Sin soluciones genéricas.",
    points: [
      {
        title: "Concreto",
        body: "Un material duradero y versátil que permite dar forma a la piscina según el terreno, y no al terreno según la piscina.",
      },
      {
        title: "Diseño a la medida",
        body: "Pensado en torno a su jardín, su acceso y su presupuesto desde el primer boceto, incluido un borde infinito donde el terreno descienda y el lugar lo permita.",
      },
      { title: "Hecha para durar", body: "Materiales de primera y técnicas de construcción actuales, para una larga vida en las condiciones de la Florida." },
    ],
  },
  "artificial-turf": {
    name: "Césped artificial",
    title: "Instalación de césped artificial en el sur de la Florida",
    description:
      "Césped artificial de bajo mantenimiento para jardines, azoteas, patios y terrazas. Sin agua y seguro para niños y mascotas. Instaladores con licencia, seguro y verificación de antecedentes.",
    summary: "Sin agua, de bajo mantenimiento y seguro para niños y mascotas.",
    intro:
      "La instalación de césped artificial consiste en preparar el área, colocar la base e instalar el césped: una alternativa de bajo mantenimiento al césped natural que se mantiene verde sin agua. También es un gasto fijo menos en el presupuesto del hogar: nada que regar, nada que cortar y nada que abonar, de modo que el jardín deja de sumar a las facturas mensuales y conserva el mismo color durante toda la temporada seca.",
    points: [
      {
        title: "Bajo mantenimiento",
        body: "Una superficie sin agua, segura para niños y mascotas, fácil de limpiar y apta por igual para jardines, azoteas, patios y terrazas.",
      },
      {
        title: "Instaladores de confianza",
        body: "Todos nuestros instaladores son locales, con licencia y seguro. Verificamos los antecedentes de todas las personas que entrarán a su hogar.",
      },
      { title: "Apoyo a los profesionales locales", body: "Las cuadrillas de su proyecto son oficios locales, no un equipo subcontratado que viene de fuera." },
    ],
  },
  "outdoor-living": {
    name: "Renovación de espacios exteriores",
    title: "Cocinas exteriores, pérgolas y espacios exteriores | Miami",
    description:
      "Cocinas exteriores, pérgolas, piscinas y renovación completa de espacios exteriores para hogares del sur de la Florida, por un contratista general con licencia. Estimados gratis, financiamiento disponible.",
    summary: "Cocinas exteriores, pérgolas, piscinas y renovación exterior completa.",
    intro:
      "Una piscina, una cocina exterior, una pérgola y el terreno entre ellas son un solo proyecto, no cuatro. Diseñamos y construimos todo el espacio exterior bajo un solo contrato, de modo que la estructura de la piscina y su plomería, el pavimento, las estructuras, las instalaciones y los acabados se planifican juntos y los instala una sola cuadrilla, y la piscina se integra en el espacio al que pertenece en lugar de colocarse en un jardín que luego hay que rehacer a su alrededor.",
    points: [
      {
        title: "Piscinas",
        body: "Una piscina a la medida, adaptada al terreno en lugar de elegida de un catálogo, con la estructura, la cubierta, el remate y los equipos planificados junto con el pavimento y las estructuras, no después.",
      },
      {
        title: "Cocinas exteriores",
        body: "Encimera, cocción y almacenamiento integrados en el espacio, con la plomería y la electricidad planificadas desde el principio en lugar de añadirse después.",
      },
      {
        title: "Pérgolas",
        body: "Una estructura de sombra con el tamaño y la ubicación adecuados para la forma en que realmente usa el jardín, con permiso y construida como parte del mismo trabajo.",
      },
    ],
  },
};

const services: Service[] = SERVICES.map((s) => ({ ...s, ctaName: undefined, ...SERVICE_COPY[s.slug] }));
const name = (slug: string) => SERVICE_COPY[slug].name;

const categories: Dictionary["categories"] = [
  {
    id: "indoor",
    label: "Renovación interior",
    short: "Interior",
    anchor: "indoor",
    blurb:
      "Ventanas y puertas de impacto, cocinas, baños y mejoras para toda la casa, habitación por habitación, bajo un solo contrato.",
  },
  {
    id: "outdoor",
    label: "Renovación exterior",
    short: "Exterior",
    anchor: "outdoor",
    blurb: "Piscinas, césped artificial, cocinas exteriores, pérgolas y espacios exteriores completos.",
  },
];

const byCategory = (id: CategoryId) => services.filter((s) => s.category === id);

export const es: Dictionary = {
  licenseLabel: "Contratista General Certificado de la Florida",
  tagline: "Abra la puerta a la casa de sus sueños",
  license: "Licencia",
  googleReviews: "reseñas de Google",
  requestQuote: "Solicite una cotización",
  home_: "Inicio",
  services,
  categories,
  faqs: [
    {
      q: "¿Qué servicios ofrece Florida Green Improvements?",
      a: "Ofrecemos ventanas y puertas de impacto certificadas contra huracanes, remodelación de cocinas, remodelación de baños, mejoras para toda la casa y renovación exterior: piscinas, césped artificial, cocinas exteriores y pérgolas.",
    },
    {
      q: "¿Sus contratistas tienen licencia y seguro?",
      a: `Sí. Contamos con licencia completa (${BUSINESS.license}) y seguro. Nuestro equipo está formado por profesionales con años de experiencia específica en el sector, y se verifican los antecedentes de cada instalador que entrará a su hogar.`,
    },
    {
      q: "¿Cuánto dura un proyecto típico de principio a fin?",
      a: "Depende de la complejidad y del alcance. Trabajamos para terminar los proyectos de forma eficiente sin descuidar la calidad de la obra, y le damos un plazo estimado durante la consulta.",
    },
    {
      q: "¿Cobran por un estimado o por una consulta de diseño?",
      a: "No. Los estimados son gratis y sin compromiso, y la consulta de diseño (distribución, materiales, accesorios y acabados, con ayudas visuales para que vea el espacio antes de construirlo) está incluida sin costo adicional.",
    },
    {
      q: "¿Ofrecen financiamiento?",
      a: "Sí. Hay financiamiento disponible y opciones con $0 de entrada. Contáctenos y haremos que alguien le explique las opciones de financiamiento y le ayude a decidir cuál le conviene a su proyecto. La aprobación y las condiciones las establece el proveedor de financiamiento.",
    },
    {
      q: "¿En qué áreas trabajan?",
      a: `Trabajamos en los condados de Miami-Dade y Broward, incluidos ${BUSINESS.address.locality}, Miami y Aventura.`,
    },
    {
      q: "¿Sus productos son ecológicos?",
      a: "Damos prioridad a la sostenibilidad y a la responsabilidad ambiental al seleccionar los productos. Las ventanas y puertas de eficiencia energética y los materiales que especificamos para las remodelaciones se eligen para reducir el impacto ambiental y para durar.",
    },
  ],
  financing: {
    eyebrow: "Financiamiento",
    heading: "Financiamiento disponible. Opciones con $0 de entrada.",
    intro:
      "Para mantener, reparar o renovar su hogar, puede obtener un préstamo para mejoras del hogar. Hay varias opciones de financiamiento y vale la pena evaluar cada una con calma. Hable con nosotros y haremos que alguien le explique las opciones y encuentre el mejor enfoque para su proyecto.",
    cards: [
      {
        title: "Opciones con $0 de entrada",
        body: "Atendemos todos los presupuestos, sin importar su tamaño, y ofrecemos nuestros servicios sin exigir un pago por adelantado.",
      },
      {
        title: "Financiamiento flexible",
        body: "Financiamiento organizado en torno a su proyecto, para que el trabajo pueda empezar sin un esfuerzo inicial para el presupuesto de su hogar.",
      },
      {
        title: "Aprobación sencilla",
        body: "Un trámite rápido y fluido, pensado para ser accesible sea cual sea su historial de crédito.",
      },
    ],
    disclaimer:
      "El financiamiento y las opciones con $0 de entrada están sujetos a aprobación y a las condiciones del proveedor de financiamiento. Pregúntenos y le confirmaremos qué hay disponible para su proyecto.",
  },
  whyChooseUs: [
    {
      title: "Experiencia profesional",
      body: "Nuestros técnicos aportan años de experiencia y el mejor equipo del sector en cada instalación.",
    },
    {
      title: "Materiales de la mejor calidad",
      body: "Todos nuestros materiales son del más alto nivel: dan a su hogar la protección que necesita y además ahorran en sus costos de energía.",
    },
    {
      title: "Satisfacción del cliente",
      body: "Garantizamos nuestro trabajo y nos esforzamos por que nuestros clientes queden contentos, con comunicación clara y un servicio confiable desde la primera llamada hasta la inspección final.",
    },
    {
      title: "Soluciones accesibles",
      body: "Trabajamos con cualquier presupuesto, por pequeño que sea. Hay financiamiento disponible y ofrecemos nuestros servicios sin pago inicial.",
    },
    {
      title: "Facturas de servicios más bajas",
      body: "Las ventanas y puertas de impacto reducen la transferencia de calor, así el sistema trabaja menos para mantener la temperatura, y el ahorro continúa mucho después de la instalación.",
    },
    {
      title: "Más valor para su casa",
      body: "Las casas con cocinas actualizadas y elementos resistentes a impactos mantienen un valor de mercado más alto y encuentran comprador más rápido en el mercado de la Florida.",
    },
  ],
  meta: {
    ogLocale: "es_US",
    title: `${BUSINESS.name} | Ventanas de impacto, cocinas y exteriores`,
    description:
      "Contratista general con licencia en Miami-Dade y Broward. Ventanas y puertas de impacto contra huracanes, cocinas, baños, remodelaciones completas, piscinas, césped y espacios exteriores. Calificación de 5.0 en 44 reseñas de Google. Licencia CGC1529180.",
    ogDescription:
      "Contratista general con licencia en North Miami Beach. Calificación de 5.0 en 44 reseñas de Google. Licencia CGC1529180.",
    twitterDescription:
      "Contratista general con licencia en North Miami Beach. Calificación de 5.0 en 44 reseñas de Google.",
    ogAlt:
      "Florida Green Improvements, contratista general con licencia en North Miami Beach, Florida. Licencia CGC1529180. Calificación de 5.0 en 44 reseñas de Google.",
    catalogName: "Servicios de mejoras para el hogar",
    aboutTitle: "Nosotros: contratista general con licencia en North Miami Beach",
    aboutDescription:
      "Florida Green Improvements es un contratista general con licencia (CGC1529180) en Miami-Dade y Broward, con calificación de 5.0 en 44 reseñas de Google. Un equipo, un permiso, un punto de contacto.",
    contactTitle: "Contacto y estimados gratis",
    contactDescription:
      "Solicite un estimado gratis a Florida Green Improvements. Contratista general con licencia en la Florida, CGC1529180, en Miami-Dade y Broward. Llame al (786) 238-1213.",
  },
  skipLink: "Saltar al contenido",
  home: {
    heroLede:
      "Ventanas de impacto, cocinas y remodelaciones completas para hogares del sur de la Florida que tienen que sobrevivir la temporada y seguir luciendo así.",
    licensedInsured: "Con licencia y seguro",
    area: "Miami-Dade y Broward",
    aboutEyebrow: "Nosotros",
    aboutHeading: "Un solo contratista para todo el trabajo.",
    aboutBody:
      "Florida Green Improvements es un contratista general con licencia que trabaja en ventanas y puertas de impacto contra huracanes, remodelación de cocinas y baños, y renovación exterior. Un permiso, un calendario, un punto de contacto, desde el primer plano hasta la inspección final.",
    aboutCta: "Conozca la empresa",
    servicesHeading: "Servicios",
    processHeading: "Cómo funciona",
    process: [
      {
        title: "Planificación",
        body: "Los permisos, la aprobación de la construcción y la programación de materiales se resuelven antes de que nadie empiece a trabajar, para que el plazo que le damos sea el plazo que se cumple.",
      },
      {
        title: "Diseño",
        body: "Revisamos con usted la distribución, los materiales, los accesorios y los acabados, con ayudas visuales para que vea el espacio antes de construirlo. Sin costo adicional.",
      },
      {
        title: "Construcción",
        body: "Un solo contratista general con licencia se hace cargo del permiso, el calendario y la responsabilidad, desde la demolición hasta la inspección final.",
      },
    ],
    freeConsultation: "Consulta gratis",
    freeEstimates: "Estimados gratis",
    ctaHeading: "¿Listo para transformar su espacio?",
    ctaBody:
      "Cuéntenos qué tiene en mente. Iremos a verlo con calma y le daremos un precio en el que puede confiar.",
  },
  about: {
    nav: "Nosotros",
    eyebrow: "Desde 2016",
    heading: "Hecho por gente que contesta el teléfono",
    whoWeAre: "Quiénes somos",
    lead: "Florida Green Improvements ofrece servicios de construcción y mejoras para el hogar de alta calidad a un precio accesible. Como equipo de expertos, entregamos un trabajo excepcional y usamos nuestro conocimiento y experiencia para transformar su hogar.",
    body: "Somos un contratista general con licencia en la Florida, lo que significa que una sola empresa se hace cargo del permiso, el calendario y la responsabilidad de todo el trabajo: ventanas y puertas de impacto contra huracanes, renovación interior completa y todo lo que está fuera de las paredes. Usted no tiene que coordinar cinco oficios. Solo llama a un número.",
    onRecord: "Datos comprobables",
    trades: "Oficios bajo un solo contrato",
    ctaHeading: "¿Listo para transformar su espacio?",
  },
  contactPage: {
    nav: "Contacto",
    eyebrow: "Estimados gratis · Sin compromiso",
    heading: "Cuéntenos qué tiene en mente",
  },
  service: {
    overview: "Resumen",
    detail: "Detalles",
    freeEstimate: "Estimado gratis",
    cta: (n: string) => `Hablemos de su proyecto de ${n}`,
    also: "También de Florida Green",
  },
  notFound: {
    heading: "Esta página no existe",
    body: "Es posible que el enlace esté desactualizado. Todo lo que hacemos está en la página principal, o llámenos y le indicaremos dónde encontrarlo.",
    back: "Volver al inicio",
  },
  footer: {
    blurb:
      "Un contratista general con licencia en la Florida que trabaja en ventanas y puertas de impacto contra huracanes, remodelación de cocinas y baños, y renovación exterior en Miami-Dade y Broward.",
    services: "Servicios",
    contact: "Contacto",
    onInstagram: "Florida Green Improvements en Instagram",
    onFacebook: "Florida Green Improvements en Facebook",
    financing: "Financiamiento y $0 de entrada",
    faq: "Preguntas frecuentes",
    siteBy: "Sitio por",
  },
  reviews: {
    eyebrow: "Reseñas",
    heading: "Lo que dicen nuestros clientes en Google",
    stars: (n: number) => `${n} de 5 estrellas`,
    readFull: "Lea la reseña completa en Google",
    verified: "Reseña verificada de Google",
    readAll: (n: number) => `Lea las ${n} reseñas`,
    note: "Las reseñas se muestran tal como el cliente las escribió en Google, en su idioma original.",
  },
  why: {
    eyebrow: "Por qué elegirnos",
    heading: "Por qué los propietarios eligen a Florida Green",
    body: "Nuestro compromiso es dar el mejor servicio a propietarios como usted: un trabajo que resiste el clima de la Florida, a un precio que se ajusta a su presupuesto.",
    cta: "Pida un estimado gratis",
  },
  financingUi: {
    heading: "Financiamiento disponible",
    subheading: "Opciones con $0 de entrada",
    cta: "Vea sus opciones",
  },
  faqUi: {
    eyebrow: "Preguntas frecuentes",
    heading: "¿Tiene alguna pregunta?",
    body: "Si tiene una pregunta, vea si ya la respondimos aquí abajo: estas son las que más nos hacen.",
    cta: "Pregúntenos otra cosa",
  },
  client: {
    locale: "es",
    nav: {
      primary: [
        { href: "/#work", label: "Proyectos" },
        { href: "/#services", label: "Servicios" },
        { href: "/about", label: "Nosotros" },
        { href: "/contact", label: "Contacto" },
      ],
      categories: categories.map((c) => ({
        id: c.id,
        label: c.label,
        anchor: c.anchor,
        services: byCategory(c.id).map((s) => ({ slug: s.slug, name: s.name })),
      })),
      homeLabel: "Florida Green Improvements: inicio",
      freeConsultation: "Consulta gratis",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      menu: "Menú",
      call: "Llamar",
      requestQuote: "Pedir cotización",
      language: "Idioma",
    },
    consent: {
      label: "Preferencias de cookies",
      body: "Usamos Google Analytics para saber cómo llega la gente a este sitio. No se guarda nada en su dispositivo a menos que usted acepte.",
      accept: "Aceptar",
      decline: "Rechazar",
    },
    form: {
      serviceOptions: SERVICES.map((s) => ({ value: s.name, label: name(s.slug) })),
      genericError: "Algo salió mal. Inténtelo de nuevo.",
      networkError: "No pudimos conectar con el servidor. Revise su conexión e inténtelo de nuevo.",
      received: "Solicitud recibida",
      thanks: "Gracias, ya la tenemos.",
      followUp: "Nos comunicaremos pronto para acordar un momento en que podamos ir a ver el trabajo con calma.",
      name: "Nombre",
      namePlaceholder: "Su nombre completo",
      phone: "Teléfono",
      email: "Correo electrónico",
      emailPlaceholder: "usted@ejemplo.com",
      need: "¿Qué necesita?",
      selectService: "Seleccione un servicio",
      somethingElse: "Otra cosa",
      about: "Sobre el proyecto",
      aboutPlaceholder: "¿Qué tiene pensado, más o menos, y dónde está la propiedad?",
      help: "Con una o dos frases basta; después le pediremos los detalles.",
      sending: "Enviando…",
      send: "Enviar solicitud",
    },
    popup: {
      offer: "Estimado gratis · Sin compromiso",
      heading: "Renueve su hogar",
      lede: "Díganos qué parte de la casa quiere renovar. Iremos a verla con calma y le daremos un precio en el que puede confiar.",
      question: "¿Qué quiere renovar?",
      categories: [
        { label: "Cocina", service: "Kitchen" },
        { label: "Baño", service: "Bathroom" },
        { label: "Espacio exterior", service: "Outdoor Living Renovation" },
        { label: "Ventanas y puertas de impacto", service: "Impact Windows & Doors" },
      ],
      cta: "Pida una cotización gratis",
      close: "Cerrar",
    },
    contact: {
      showcase: ["Cocinas", "Baños", "Remodelación", "Piscinas", "Espacios exteriores"],
      offer: "Estimado gratis · Sin compromiso",
      heading: "Cuéntenos qué tiene en mente",
      body: "Iremos a ver el trabajo con calma y le daremos un precio en el que puede confiar.",
      requestQuote: "Solicite una cotización",
      callUs: "Llámenos",
      hours: "Lunes a viernes, 9 a. m.–5 p. m.",
      office: "Oficina",
      reviews: "reseñas",
      previous: "Imagen anterior",
      next: "Imagen siguiente",
    },
  },
};
