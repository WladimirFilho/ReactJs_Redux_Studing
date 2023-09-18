import { PlayCircle, Video } from "lucide-react";

interface LessonProps {
  title: string;
  duration: string;
  isCurrent?: boolean;
  onPlay: () => void;
}

export function Lesson({
  title,
  duration,
  onPlay,
  isCurrent = false,
}: LessonProps) {
  return (
    <button
      data-active={isCurrent}
      onClick={onPlay}
      disabled={isCurrent}
      className=" flex items-center gap-3 text-sm text-zinc-400 data-[active=true]:text-emerald-400 enabled:hover:text-zinc-100"
    >
      {isCurrent ? (
        <PlayCircle className="h-4 w-4 text-emerald-400" />
      ) : (
        <Video className=" w-4 h-4 text-zinc-500" />
      )}
      <span>{title}</span>
      <span className="ml-auto text-sm font-mono text-zinc-500">
        {duration}
      </span>
    </button>
  );
}
