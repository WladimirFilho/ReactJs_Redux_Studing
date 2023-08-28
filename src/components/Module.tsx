import { ChevronDown } from "lucide-react";
import { Lesson } from "./Lesson";

interface ModulesProps {
  moduleIndex: number;
  title: string;
  amountOfLessons: number;
}

export function Module({ moduleIndex, title, amountOfLessons }: ModulesProps) {
  return (
    <div>
      <button className="flex w-full items-center gap-3 bg-zinc-800 p-4 hover:bg-zinc-700 ">
        <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
          {moduleIndex}
        </div>

        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">
            {amountOfLessons} classes
          </span>
        </div>
        <ChevronDown className="h-5 w-4 ml-auto" />
      </button>
      <nav className=" relative flex flex-col gap-4 p-6">
        <Lesson title="Redux Foundation" duration="9:13" />
        <Lesson title="Redux Foundation" duration="9:13" />
        <Lesson title="Redux Foundation" duration="9:13" />
      </nav>
    </div>
  );
}
