import React, { useState, useRef } from 'react';
import Header from './components/Header';
import ClassCard from './components/ClassCard';
import ClassModal from './components/ClassModal';
import AIChat from './components/AIChat';
import { curriculumData, Role, ClassItem } from './data/curriculum';
import { motion } from 'motion/react';
import { Lock, ChevronLeft, ChevronRight } from 'lucide-react';

export default function App() {
  const [role, setRole] = useState<Role>('student');
  const [selectedClass, setSelectedClass] = useState<ClassItem | null>(null);

  const module1ScrollRef = useRef<HTMLDivElement>(null);
  const module2ScrollRef = useRef<HTMLDivElement>(null);
  const module3ScrollRef = useRef<HTMLDivElement>(null);
  const extraScrollRef = useRef<HTMLDivElement>(null);

  const module1Classes = curriculumData.filter(item => item.moduleId === 1);
  const module2Classes = curriculumData.filter(item => item.moduleId === 2);
  const module3Classes = curriculumData.filter(item => item.moduleId === 3);
  const extraMaterials = curriculumData.filter(item => item.moduleId === 4);

  const scroll = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const renderModuleSection = (
    title: string, 
    description: string, 
    classes: ClassItem[], 
    scrollRef: React.RefObject<HTMLDivElement | null>,
    badgeText: string
  ) => (
    <section className="relative group mb-16">
      <div className="flex flex-col md:flex-row justify-between items-end mb-6 pb-4 border-b border-border-subtle gap-4">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">
            {title}
          </h3>
          <p className="text-text-secondary text-base">
            {description}
          </p>
        </div>
        <span className="px-4 py-2 bg-accent-primary/10 text-accent-primary border border-accent-primary/30 rounded-full text-sm font-bold whitespace-nowrap">
          {badgeText}
        </span>
      </div>

      {/* Scroll Container Wrapper */}
      <div className="relative group">
        {/* Navigation Arrows */}
        <button 
          onClick={() => scroll(scrollRef, 'left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-bg-elevated/90 hover:bg-bg-card text-white rounded-full border border-border-subtle shadow-2xl backdrop-blur-md transition-all hidden md:flex items-center justify-center -ml-4 hover:scale-110 hover:text-accent-primary"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          onClick={() => scroll(scrollRef, 'right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-bg-elevated/90 hover:bg-bg-card text-white rounded-full border border-border-subtle shadow-2xl backdrop-blur-md transition-all hidden md:flex items-center justify-center -mr-4 hover:scale-110 hover:text-accent-primary"
        >
          <ChevronRight size={24} />
        </button>

        {/* Horizontal Scroll Container for Cards */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto hide-scrollbar gap-6 pb-8 pt-4 -mx-6 px-6 snap-x snap-mandatory scroll-smooth"
        >
          {classes.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="snap-start shrink-0"
            >
              <ClassCard item={item} role={role} onClick={setSelectedClass} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-bg-base text-text-primary font-sans selection:bg-accent-secondary/30">
      <Header role={role} setRole={setRole} />

      <main className="max-w-[1600px] mx-auto px-6 py-12 space-y-24 overflow-hidden">
        
        {/* Phase 1 Section */}
        <div>
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary tracking-tight mb-4">
              Fase 1: Adopción de IA Corporativa
            </h2>
            <p className="text-text-secondary text-xl max-w-3xl">
              Fundamentos, herramientas y primeros pasos en la automatización con Inteligencia Artificial.
            </p>
          </div>

          {renderModuleSection(
            "Módulo 1: Fundamentos y Primeros Pasos",
            "Introducción a los LLMs, Prompt Engineering y automatización básica.",
            module1Classes,
            module1ScrollRef,
            "5 Clases • En Curso"
          )}

          {renderModuleSection(
            "Módulo 2: Agentes y Bases Vectoriales",
            "RAG, herramientas Low-Code y creación de asistentes proactivos.",
            module2Classes,
            module2ScrollRef,
            "5 Clases • Próximamente"
          )}

          {renderModuleSection(
            "Módulo 3: Escalabilidad y Arquitectura",
            "Integración de APIs, Cloud y proyecto final de adopción.",
            module3Classes,
            module3ScrollRef,
            "5 Clases • Próximamente"
          )}
        </div>

        {/* Extra Materials Section */}
        <section className="relative group">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 pb-4 border-b border-border-subtle gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">
                Material Extra (No Presencial)
              </h2>
              <p className="text-text-secondary text-lg">
                Contenido adicional en video para profundizar en temas específicos.
              </p>
            </div>
            <span className="px-4 py-2 bg-accent-secondary/10 text-accent-secondary border border-accent-secondary/30 rounded-full text-sm font-bold whitespace-nowrap">
              3 Videos • Opcional
            </span>
          </div>

          {/* Scroll Container Wrapper */}
          <div className="relative group">
            {/* Navigation Arrows */}
            <button 
              onClick={() => scroll(extraScrollRef, 'left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-bg-elevated/90 hover:bg-bg-card text-white rounded-full border border-border-subtle shadow-2xl backdrop-blur-md transition-all hidden md:flex items-center justify-center -ml-4 hover:scale-110 hover:text-accent-secondary"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={() => scroll(extraScrollRef, 'right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-bg-elevated/90 hover:bg-bg-card text-white rounded-full border border-border-subtle shadow-2xl backdrop-blur-md transition-all hidden md:flex items-center justify-center -mr-4 hover:scale-110 hover:text-accent-secondary"
            >
              <ChevronRight size={24} />
            </button>

            <div 
              ref={extraScrollRef}
              className="flex overflow-x-auto hide-scrollbar gap-6 pb-8 pt-4 -mx-6 px-6 snap-x snap-mandatory scroll-smooth"
            >
              {extraMaterials.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="snap-start shrink-0"
                >
                  <ClassCard item={item} role={role} onClick={setSelectedClass} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Phase 2 Placeholder */}
        <section className="opacity-70">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 pb-4 border-b border-border-subtle gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-text-muted tracking-tight mb-2">
                Fase 2: Agentes Autónomos y Desarrollo Avanzado
              </h2>
            </div>
            <span className="px-4 py-2 bg-bg-elevated text-text-muted border border-border-subtle rounded-full text-sm font-bold whitespace-nowrap">
              Próximamente
            </span>
          </div>
          
          <div className="w-full h-64 rounded-2xl border-2 border-dashed border-border-subtle bg-bg-elevated/50 flex flex-col items-center justify-center text-text-muted p-8 text-center">
            <Lock size={48} className="mb-4 opacity-50" />
            <h3 className="text-xl font-bold mb-2">Contenido Bloqueado</h3>
            <p className="max-w-md">Debes completar y aprobar la Fase 1 para desbloquear la Malla Curricular Avanzada.</p>
          </div>
        </section>

      </main>

      {/* Modal */}
      {selectedClass && (
        <ClassModal
          item={selectedClass}
          role={role}
          onClose={() => setSelectedClass(null)}
        />
      )}

      {/* AI Chat Widget */}
      <AIChat />
    </div>
  );
}
