import { Video } from "lucide-react";

interface LessonProps {
  title: string;
  duration: string;
}

export function Lesson({ title, duration }: LessonProps) {
  return (
    <button className=" flex items-center gap-3 text-sm text-zinc-400">
      <Video className=" w-4 h-4 text-zinc-500" />
      <span>{title}</span>
      <span className="ml-auto text-sm font-mono text-zinc-500">
        {duration}
      </span>
    </button>
  );
}
