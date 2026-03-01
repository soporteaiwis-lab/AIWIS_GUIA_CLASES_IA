import { Play, Lock, FileText, CheckCircle } from 'lucide-react';
import { ClassItem, Role } from '../data/curriculum';

interface ClassCardProps {
  item: ClassItem;
  role: Role;
  onClick: (item: ClassItem) => void;
}

export default function ClassCard({ item, role, onClick }: ClassCardProps) {
  const isLocked = item.status === 'locked';
  const isWorkshop = item.type === 'workshop';
  const isExtra = item.type === 'extra';

  return (
    <div
      onClick={() => !isLocked && onClick(item)}
      className={`group relative flex-shrink-0 w-[280px] md:w-[320px] h-[480px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:z-10 ${
        isLocked ? 'opacity-60 grayscale cursor-not-allowed' : ''
      }`}
    >
      {/* Background Image */}
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-bg-base/80 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="mb-auto flex justify-between items-start">
          <span
            className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full backdrop-blur-md border ${
              isWorkshop
                ? 'bg-accent-warning/20 text-accent-warning border-accent-warning/50'
                : isExtra
                ? 'bg-accent-secondary/20 text-accent-secondary border-accent-secondary/50'
                : 'bg-accent-primary/20 text-accent-primary border-accent-primary/50'
            }`}
          >
            {item.classNumber}
          </span>
          {isLocked && (
            <div className="bg-bg-base/80 p-2 rounded-full backdrop-blur-md">
              <Lock size={16} className="text-text-muted" />
            </div>
          )}
        </div>

        <div className="transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
          <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2 leading-tight">
            {item.title}
          </h3>
          <p className="text-sm text-text-secondary line-clamp-2 mb-4">
            {item.description}
          </p>

          {/* Role specific preview */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 h-0 group-hover:h-auto overflow-hidden">
            <div className={`p-3 rounded-lg text-xs border-l-2 mb-4 ${
              role === 'student' ? 'bg-bg-card border-accent-secondary' : 'bg-bg-card border-accent-primary'
            }`}>
              <strong className="block text-text-primary mb-1">
                {role === 'student' ? '🎓 Lo que aprenderás:' : '👨‍🏫 Guía para Mentor:'}
              </strong>
              <ul className="text-text-secondary space-y-1">
                {(role === 'student' ? item.studentView : item.mentorView).slice(0, 2).map((point, idx) => (
                  <li key={idx} className="flex items-start gap-1">
                    <span className="text-[10px] mt-0.5">▹</span> {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 bg-white text-black py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
                <Play size={16} fill="currentColor" /> Ver
              </button>
              <button className="p-2 bg-bg-elevated text-text-primary border border-border-subtle rounded-lg hover:bg-border-subtle transition-colors">
                <FileText size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
