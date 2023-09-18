/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChevronDown } from "lucide-react";
import { Lesson } from "./Lesson";
import * as Collapsible from "@radix-ui/react-collapsible";
import { useAppSelector } from "../store";
import { useDispatch } from "react-redux";
import { play } from "../store/slices/player";

interface ModulesProps {
  moduleIndex: number;
  title: string;
  amountOfLessons: number;
}

export function Module({ moduleIndex, title, amountOfLessons }: ModulesProps) {
  const { currentLessonIndex, currentModuleIndex } = useAppSelector((state) => {
    const { currentLessonIndex, currentModuleIndex } = state.player;
    return { currentLessonIndex, currentModuleIndex };
  });

  const lessons = useAppSelector((state) => {
    return state.player.course.module[moduleIndex].lessons;
  });

  const dispatch = useDispatch();

  return (
    <Collapsible.Root className="group" defaultOpen={moduleIndex === 0}>
      <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4 hover:bg-zinc-700 ">
        <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
          {moduleIndex}
        </div>

        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">
            {amountOfLessons} classes
          </span>
        </div>
        <ChevronDown className="h-5 w-4 ml-auto group-data-[state=open]:rotate-180 transition-transform" />
      </Collapsible.Trigger>

      <Collapsible.Content>
        <nav className=" relative flex flex-col gap-4 p-6">
          {lessons.map((lesson, lessonIndex) => {
            const isCurrent =
              currentModuleIndex === moduleIndex &&
              currentLessonIndex === lessonIndex;
            return (
              <Lesson
                key={lesson.id}
                title={lesson.title}
                duration={lesson.duration}
                onPlay={() => {
                  dispatch(play([moduleIndex, lessonIndex]));
                }}
                isCurrent={isCurrent}
              />
            );
          })}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
