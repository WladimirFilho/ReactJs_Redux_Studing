/* eslint-disable @typescript-eslint/no-unused-vars */
import { MessageCircle } from "lucide-react";

import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { Module } from "../components/Module";
import { useAppSelector } from "../store";
import { useCurrentLesson } from "../store/slices/player";
import { useEffect } from "react";

export function Player() {
  // Reducer slices state
  const modules = useAppSelector((state) => {
    return state.player.course.module;
  });

  const { currentLesson } = useCurrentLesson();

  useEffect(() => {
    document.title = `Watching: ${currentLesson.title}`;
  }, [currentLesson]);

  return (
    <div className=" h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex flex-col w-[1100px] gap-6">
        <div className="flex items-center justify-between">
          {/* Header */}
          <Header />

          <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm text-white font-medium hover:bg-violet-600">
            {" "}
            <MessageCircle className="w-4 h-4" /> Leave a comment
          </button>
        </div>
        <main className=" relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          {/* Video Player section */}
          <div className="flex-1">
            <Video />
          </div>

          {/* Video List Section */}
          <aside className="w-80 border-l border-zinc-800 bg-zinc-900 absolute top-0 bottom-0 right-0 overflow-y-scroll scrollbar-thin scrollbar-track-zinc-750 scrollbar-thumb-zinc-800 divide-y-2 divide-zinc-900">
            {modules.map((module, index) => {
              return (
                <Module
                  key={module.id}
                  moduleIndex={index}
                  title={module.title}
                  amountOfLessons={module.lessons.length}
                />
              );
            })}
          </aside>
        </main>
      </div>
    </div>
  );
}
