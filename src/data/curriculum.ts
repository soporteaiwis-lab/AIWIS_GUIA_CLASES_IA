export type Role = 'student' | 'mentor';

export interface ClassItem {
  id: number;
  moduleId: number;
  classNumber: string;
  title: string;
  description: string;
  image: string;
  studentView: string[];
  mentorView: string[];
  type: 'class' | 'workshop' | 'extra';
  status: 'available' | 'locked';
}

export const curriculumData: ClassItem[] = [
  // MÓDULO 1
  {
    id: 1,
    moduleId: 1,
    classNumber: "CLASE 01",
    title: "Introducción a la IA Corporativa",
    description: "Fundamentos de la Inteligencia Artificial, historia, tipos de IA y su impacto directo en el negocio.",
    image: "https://picsum.photos/seed/ai-intro/600/900?blur=2",
    studentView: [
      "Conceptos básicos sin tecnicismos.",
      "Identificar oportunidades de IA en tu día a día.",
      "Entender el impacto futuro en la industria financiera."
    ],
    mentorView: [
      "Enfocarse en desmitificar la IA (no son 'Terminators').",
      "Usar la analogía del 'asistente junior rápido'.",
      "Fomentar participación pidiendo ejemplos de sus áreas."
    ],
    type: 'class',
    status: 'available'
  },
  {
    id: 2,
    moduleId: 1,
    classNumber: "CLASE 02",
    title: "Dominando ChatGPT, Claude y Gemini",
    description: "Comparativa técnica y práctica de los principales LLMs del mercado. ¿Cuál usar, cuándo y por qué?",
    image: "https://picsum.photos/seed/llm-compare/600/900?blur=2",
    studentView: [
      "Diferencias entre ChatGPT, Claude y Gemini.",
      "Qué es un LLM y cómo 'piensa'.",
      "Elegir la herramienta correcta según la tarea."
    ],
    mentorView: [
      "Hacer demo en vivo mostrando la misma pregunta a los 3 modelos.",
      "Explicar el concepto de 'Alucinación' claramente.",
      "Remarcar que Gemini es excelente para Google Workspace."
    ],
    type: 'class',
    status: 'available'
  },
  {
    id: 3,
    moduleId: 1,
    classNumber: "CLASE 03",
    title: "Ingeniería de Prompts Profesional",
    description: "Técnicas avanzadas de comunicación con IA: Chain-of-Thought, Few-Shot, y Role Prompting orientados a finanzas.",
    image: "https://picsum.photos/seed/prompt-eng/600/900?blur=2",
    studentView: [
      "Estructurar comandos (prompts) perfectos.",
      "Obtener respuestas precisas y sin errores.",
      "Plantillas reusables para el trabajo corporativo."
    ],
    mentorView: [
      "Dar énfasis a 'Chain-of-Thought' (Piensa paso a paso) para matemáticas/riesgos.",
      "Mostrar un 'Prompt Malo' vs un 'Prompt Excelente'.",
      "Dejar plantillas que puedan copiar y pegar."
    ],
    type: 'class',
    status: 'available'
  },
  {
    id: 4,
    moduleId: 1,
    classNumber: "CLASE 04",
    title: "Programa con IA desde Cero",
    description: "Introducción a la creación de código (Python, Scripts) usando asistentes como Copilot y Cursor sin experiencia previa.",
    image: "https://picsum.photos/seed/coding-ai/600/900?blur=2",
    studentView: [
      "Entender qué es una API.",
      "Crear tu primer script básico usando IA.",
      "Automatizar micro-tareas del computador."
    ],
    mentorView: [
      "Mantenerlo simple: no asustar con jerga de programación.",
      "Mostrar cómo la IA actúa como traductor de Español a Código.",
      "Ejercicio sugerido: Renombrador masivo de archivos."
    ],
    type: 'class',
    status: 'available'
  },
  {
    id: 5,
    moduleId: 1,
    classNumber: "TALLER A",
    title: "Miniproyecto 1: Automatización Básica",
    description: "Aplicación práctica de los primeros módulos. Automatización de una tarea cotidiana en el entorno corporativo.",
    image: "https://picsum.photos/seed/workshop-a/600/900?blur=2",
    studentView: [
      "Aplicar prompts avanzados en un caso real.",
      "Crear un script básico funcional.",
      "Presentar resultados al equipo."
    ],
    mentorView: [
      "Asistir en la creación de scripts.",
      "Evaluar la lógica del prompt.",
      "Dar feedback constructivo sobre la viabilidad."
    ],
    type: 'workshop',
    status: 'available'
  },
  
  // MÓDULO 2
  {
    id: 6,
    moduleId: 2,
    classNumber: "CLASE 06",
    title: "Bases Vectoriales y RAG",
    description: "Cómo hacer que la IA lea y analice documentos internos y privados de forma segura sin alucinar.",
    image: "https://picsum.photos/seed/rag-vector/600/900?blur=2",
    studentView: [
      "Qué es RAG (Generación Aumentada por Recuperación).",
      "Hablar con manuales, PDFs y Excel corporativos.",
      "Privacidad de datos empresariales."
    ],
    mentorView: [
      "Explicar RAG como un estudiante que responde un examen a 'libro abierto' vs memoria.",
      "Enfatizar la seguridad: No compartir datos sensibles a internet abierto."
    ],
    type: 'class',
    status: 'available'
  },
  {
    id: 7,
    moduleId: 2,
    classNumber: "CLASE 07",
    title: "Herramientas Low-Code: Make y n8n",
    description: "Conectando aplicaciones sin programar. Creación de flujos de trabajo visuales para conectar correos, CRMs y LLMs.",
    image: "https://picsum.photos/seed/low-code/600/900?blur=2",
    studentView: [
      "Uso de interfaces Drag & Drop para automatizar.",
      "Conectar Gmail, Sheets y ChatGPT.",
      "Desplegar tu primera automatización real."
    ],
    mentorView: [
      "Hacer una demostración de Make.com en vivo.",
      "Mostrar cómo la IA clasifica un correo entrante (Urgente vs Spam)."
    ],
    type: 'class',
    status: 'available'
  },
  {
    id: 8,
    moduleId: 2,
    classNumber: "CLASE 08",
    title: "Creación de Agentes IA y Asistentes",
    description: "El paso de modelos reactivos a modelos proactivos. Cómo los Agentes pueden tomar decisiones multi-paso.",
    image: "https://picsum.photos/seed/ai-agents/600/900?blur=2",
    studentView: [
      "Qué diferencia a un LLM normal de un Agente.",
      "Uso de herramientas ('Tools') por parte de la IA.",
      "Supervisión humana (Human-in-the-loop)."
    ],
    mentorView: [
      "Introducir el concepto de autonomía controlada.",
      "Mostrar cómo un Agente puede buscar en web, leer, y luego generar un reporte solo."
    ],
    type: 'class',
    status: 'available'
  },
  {
    id: 9,
    moduleId: 2,
    classNumber: "CLASE 09",
    title: "Gemas y Estrategias 'Paso a Paso'",
    description: "Creación de 'Gemas' (asistentes personalizados en Gemini) y el poder de dividir problemas complejos en pasos pequeños.",
    image: "https://picsum.photos/seed/gemini-gems/600/900?blur=2",
    studentView: [
      "Crear tu propia 'Gema' para tu puesto de trabajo.",
      "Estrategia Iterativa Secuencial para evitar errores.",
      "Validación cruzada de resultados IA."
    ],
    mentorView: [
      "Revisar los casos de la clase (Ej: Validador de reportes).",
      "Mostrar un caso de éxito de migración de procesos.",
      "La regla: IA (95% trabajo pesado) + Humano (5% supervisión experta)."
    ],
    type: 'class',
    status: 'available'
  },
  {
    id: 10,
    moduleId: 2,
    classNumber: "TALLER B",
    title: "Miniproyecto 2: Agentes y RAG",
    description: "Construcción de un asistente corporativo capaz de consultar documentos internos y ejecutar acciones.",
    image: "https://picsum.photos/seed/workshop-b/600/900?blur=2",
    studentView: [
      "Implementar un flujo RAG básico.",
      "Conectar un agente a una base de conocimiento.",
      "Probar la precisión de las respuestas."
    ],
    mentorView: [
      "Ayudar a estructurar los documentos para el RAG.",
      "Revisar los flujos de Make/n8n de los alumnos.",
      "Asegurar que no haya fuga de información sensible."
    ],
    type: 'workshop',
    status: 'available'
  },
  
  // MÓDULO 3
  {
    id: 11,
    moduleId: 3,
    classNumber: "CLASE 11",
    title: "Integración de APIs y Servicios Cognitivos",
    description: "Arquitectura tecnológica para conectar los sistemas Legacy con modelos de lenguaje de última generación.",
    image: "https://picsum.photos/seed/api-integration/600/900?blur=2",
    studentView: [
      "Cómo se comunican los sistemas internos con OpenAI/Google.",
      "Concepto de Endpoints, Tokens y Latencia.",
      "Viabilidad técnica de proyectos IA."
    ],
    mentorView: [
      "Perfil más técnico para gerentes IT.",
      "Discutir modernización de sistemas antiguos usando intermediarios de IA."
    ],
    type: 'class',
    status: 'available'
  },
  {
    id: 12,
    moduleId: 3,
    classNumber: "CLASE 12",
    title: "Escalabilidad de IA en la Empresa",
    description: "De la prueba de concepto (PoC) a la producción. Cómo escalar soluciones de IA a toda la organización.",
    image: "https://picsum.photos/seed/ai-scale/600/900?blur=2",
    studentView: [
      "Gestión de costos de API (Tokens).",
      "Monitoreo de rendimiento y calidad.",
      "Gestión del cambio organizacional."
    ],
    mentorView: [
      "Enfocarse en el ROI y los costos ocultos.",
      "Estrategias para adopción masiva por parte de los empleados."
    ],
    type: 'class',
    status: 'available'
  },
  {
    id: 13,
    moduleId: 3,
    classNumber: "CLASE 13",
    title: "Arquitecturas Cloud IA",
    description: "Despliegue de soluciones en la nube (GCP, AWS, Azure) y consideraciones de infraestructura.",
    image: "https://picsum.photos/seed/cloud-ai/600/900?blur=2",
    studentView: [
      "Servicios gestionados vs Open Source.",
      "Seguridad en la nube.",
      "Casos de arquitectura de referencia."
    ],
    mentorView: [
      "Comparar Vertex AI vs Azure OpenAI.",
      "Discutir soberanía de datos."
    ],
    type: 'class',
    status: 'locked'
  },
  {
    id: 14,
    moduleId: 3,
    classNumber: "CLASE 14",
    title: "Preparación de Proyecto Final",
    description: "Definición del alcance, arquitectura y plan de ejecución para el proyecto final de adopción.",
    image: "https://picsum.photos/seed/final-prep/600/900?blur=2",
    studentView: [
      "Estructurar el pitch del proyecto.",
      "Definir KPIs de éxito.",
      "Asignación de roles en el equipo."
    ],
    mentorView: [
      "Validar que los proyectos sean realistas y aporten valor.",
      "Aprobar las arquitecturas propuestas."
    ],
    type: 'class',
    status: 'locked'
  },
  {
    id: 15,
    moduleId: 3,
    classNumber: "TALLER C",
    title: "Miniproyecto 3: Proyecto Final",
    description: "Cierre del programa. Exposición de las soluciones construidas, feedback gerencial y graduación.",
    image: "https://picsum.photos/seed/workshop-c/600/900?blur=2",
    studentView: [
      "Aprender de las soluciones de otros equipos.",
      "Medición de impacto y escalabilidad.",
      "Próximos pasos post-programa."
    ],
    mentorView: [
      "Facilitar la sesión de pitch.",
      "Evaluar viabilidad técnica en entorno real.",
      "Cierre motivacional."
    ],
    type: 'workshop',
    status: 'locked'
  },
  
  // Extra Material
  {
    id: 16,
    moduleId: 4,
    classNumber: "CLASE 16",
    title: "Casos de Uso Bancarios Avanzados",
    description: "Análisis de implementaciones reales en banca: Detección de fraude, evaluación de riesgo crediticio y atención al cliente.",
    image: "https://picsum.photos/seed/banking-ai/600/900?blur=2",
    studentView: [
      "Identificación de anomalías transaccionales.",
      "Hiper-personalización de ofertas financieras."
    ],
    mentorView: [
      "Traer KPIs reales de proyectos AIWIS.",
      "Explicar cómo la IA reduce el tiempo de evaluación crediticia."
    ],
    type: 'extra',
    status: 'available'
  },
  {
    id: 17,
    moduleId: 4,
    classNumber: "CLASE 17",
    title: "IA Generativa para Análisis de Datos",
    description: "Interpretación de grandes volúmenes de datos. Generación de gráficos, SQL automático y dashboards ejecutivos.",
    image: "https://picsum.photos/seed/data-analysis/600/900?blur=2",
    studentView: [
      "Pedirle a la IA que analice Excel/CSVs.",
      "Obtener insights ocultos en la data.",
      "Traducir 'lenguaje negocio' a consultas SQL."
    ],
    mentorView: [
      "Usar 'Advanced Data Analysis' como demo.",
      "Mostrar cómo generar un reporte financiero a partir de un CSV crudo en 2 minutos."
    ],
    type: 'extra',
    status: 'available'
  },
  {
    id: 18,
    moduleId: 4,
    classNumber: "CLASE 18",
    title: "Seguridad, Ética y Compliance en IA",
    description: "Navegando el marco regulatorio, protección de datos personales y sesgos algorítmicos.",
    image: "https://picsum.photos/seed/ai-ethics/600/900?blur=2",
    studentView: [
      "Qué datos NUNCA compartir con una IA pública.",
      "Entender el sesgo de la IA y cómo mitigarlo.",
      "Regulaciones actuales para la banca en LatAm."
    ],
    mentorView: [
      "Clase crítica: Remarcar políticas de seguridad corporativa.",
      "Explicar la diferencia entre IA Enterprise (segura) e IA Consumer (entrena con tus datos)."
    ],
    type: 'extra',
    status: 'available'
  }
];
