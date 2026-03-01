import { useState } from 'react';
import Header from './components/Header';
import ClassCard from './components/ClassCard';
import ClassModal from './components/ClassModal';
import { curriculumData, Role, ClassItem } from './data/curriculum';
import { motion } from 'motion/react';
import { Lock } from 'lucide-react';

export default function App() {
  const [role, setRole] = useState<Role>('student');
  const [selectedClass, setSelectedClass] = useState<ClassItem | null>(null);

  const phase1Classes = curriculumData.filter(item => item.id <= 15 && item.type !== 'extra');
  const extraMaterials = curriculumData.filter(item => item.type === 'extra');

  return (
    <div className="min-h-screen bg-bg-base text-text-primary font-sans selection:bg-accent-secondary/30">
      <Header role={role} setRole={setRole} />

      <main className="max-w-[1600px] mx-auto px-6 py-12 space-y-24">
        
        {/* Phase 1 Section */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 pb-4 border-b border-border-subtle gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">
                Fase 1: Adopción de IA Corporativa
              </h2>
              <p className="text-text-secondary text-lg">
                Fundamentos, herramientas y primeros pasos en la automatización con Inteligencia Artificial.
              </p>
            </div>
            <span className="px-4 py-2 bg-accent-primary/10 text-accent-primary border border-accent-primary/30 rounded-full text-sm font-bold whitespace-nowrap">
              15 Clases • En Curso
            </span>
          </div>

          {/* Horizontal Scroll Container for Cards */}
          <div className="flex overflow-x-auto hide-scrollbar gap-6 pb-8 pt-4 -mx-6 px-6 snap-x snap-mandatory">
            {phase1Classes.map((item, index) => (
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
        </section>

        {/* Extra Materials Section */}
        <section>
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

          <div className="flex overflow-x-auto hide-scrollbar gap-6 pb-8 pt-4 -mx-6 px-6 snap-x snap-mandatory">
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
    </div>
  );
}
