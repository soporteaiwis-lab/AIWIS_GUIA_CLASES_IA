import { X, Play, FileText, CheckCircle, MessageSquare, Database, GraduationCap, User } from 'lucide-react';
import { ClassItem, Role } from '../data/curriculum';
import { motion, AnimatePresence } from 'motion/react';

interface ClassModalProps {
  item: ClassItem | null;
  role: Role;
  onClose: () => void;
}

export default function ClassModal({ item, role, onClose }: ClassModalProps) {
  if (!item) return null;

  const isWorkshop = item.type === 'workshop';
  const isExtra = item.type === 'extra';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-bg-elevated border border-border-subtle rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors"
          >
            <X size={20} />
          </button>

          {/* Left Side - Image & Quick Actions */}
          <div className="w-full md:w-2/5 h-64 md:h-auto relative">
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-elevated via-bg-elevated/40 to-transparent md:bg-gradient-to-r md:from-transparent md:to-bg-elevated" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 md:hidden">
              <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full backdrop-blur-md border inline-block mb-2 ${
                isWorkshop ? 'bg-accent-warning/20 text-accent-warning border-accent-warning/50' : 
                isExtra ? 'bg-accent-secondary/20 text-accent-secondary border-accent-secondary/50' : 
                'bg-accent-primary/20 text-accent-primary border-accent-primary/50'
              }`}>
                {item.module}
              </span>
              <h2 className="text-2xl font-bold text-white leading-tight">{item.title}</h2>
            </div>
          </div>

          {/* Right Side - Details */}
          <div className="w-full md:w-3/5 p-6 md:p-8 overflow-y-auto hide-scrollbar flex flex-col">
            <div className="hidden md:block mb-6">
              <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full border inline-block mb-3 ${
                isWorkshop ? 'bg-accent-warning/10 text-accent-warning border-accent-warning/30' : 
                isExtra ? 'bg-accent-secondary/10 text-accent-secondary border-accent-secondary/30' : 
                'bg-accent-primary/10 text-accent-primary border-accent-primary/30'
              }`}>
                {item.module}
              </span>
              <h2 className="text-3xl font-bold text-text-primary leading-tight">{item.title}</h2>
            </div>

            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              {item.description}
            </p>

            {/* Dynamic Content based on Role */}
            <div className={`p-5 rounded-xl border-l-4 mb-8 ${
              role === 'student' 
                ? 'bg-bg-card border-accent-secondary' 
                : 'bg-bg-card border-accent-primary'
            }`}>
              <h4 className="text-text-primary font-bold mb-4 flex items-center gap-2 text-lg">
                {role === 'student' ? (
                  <><GraduationCap size={20} className="text-accent-secondary" /> Lo que aprenderás en esta sesión:</>
                ) : (
                  <><User size={20} className="text-accent-primary" /> Guía de enseñanza para el Mentor:</>
                )}
              </h4>
              <ul className="space-y-3">
                {(role === 'student' ? item.studentView : item.mentorView).map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-text-secondary">
                    <CheckCircle size={18} className={`mt-0.5 flex-shrink-0 ${role === 'student' ? 'text-accent-secondary/70' : 'text-accent-primary/70'}`} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interactive AI Features (Mock UI for the concept) */}
            <div className="mt-auto pt-6 border-t border-border-subtle">
              <h4 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-4">Recursos y Acciones</h4>
              <div className="flex flex-wrap gap-3">
                <button className="flex-1 min-w-[140px] bg-white text-black py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
                  <Play size={18} fill="currentColor" /> Reproducir
                </button>
                <button className="flex-1 min-w-[140px] bg-bg-card text-text-primary border border-border-subtle py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-border-subtle transition-colors">
                  <FileText size={18} /> Materiales
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mt-3">
                <button className="bg-bg-card text-text-secondary border border-border-subtle py-3 px-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:text-accent-secondary hover:border-accent-secondary/50 transition-colors text-sm">
                  <MessageSquare size={16} /> Foro de Dudas
                </button>
                <button className="bg-bg-card text-text-secondary border border-border-subtle py-3 px-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:text-accent-primary hover:border-accent-primary/50 transition-colors text-sm">
                  <Database size={16} /> Notas IA
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
