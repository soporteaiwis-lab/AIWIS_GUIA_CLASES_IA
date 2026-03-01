import { BookOpen, GraduationCap, User } from 'lucide-react';
import { Role } from '../data/curriculum';

interface HeaderProps {
  role: Role;
  setRole: (role: Role) => void;
}

export default function Header({ role, setRole }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-bg-base/90 backdrop-blur-md border-b border-border-subtle px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
          AIWIS
        </h1>
        <p className="text-xs text-text-secondary uppercase tracking-widest font-semibold">
          Adopción de IA Corporativa
        </p>
      </div>

      <div className="flex bg-bg-card border border-border-subtle rounded-full p-1 shadow-lg">
        <button
          onClick={() => setRole('student')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
            role === 'student'
              ? 'bg-accent-secondary text-white shadow-[0_4px_15px_rgba(99,102,241,0.4)]'
              : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          <GraduationCap size={18} />
          <span className="hidden sm:inline">Vista Alumno / Gerencia</span>
          <span className="sm:hidden">Alumno</span>
        </button>
        <button
          onClick={() => setRole('mentor')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
            role === 'mentor'
              ? 'bg-accent-primary text-bg-base shadow-[0_4px_15px_rgba(0,212,170,0.4)]'
              : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          <User size={18} />
          <span className="hidden sm:inline">Vista Mentor</span>
          <span className="sm:hidden">Mentor</span>
        </button>
      </div>
    </header>
  );
}
