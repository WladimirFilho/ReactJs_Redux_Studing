/* eslint-disable @typescript-eslint/no-unused-vars */
import ReactPlayer from "react-player";
import { useAppSelector } from "../store";
import { useDispatch } from "react-redux";
import { next, useCurrentLesson } from "../store/slices/player";

export function Video() {
  const dispatch = useDispatch();

  const { currentLesson } = useCurrentLesson();

  function handlePlayerNext() {
    dispatch(next());
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        playing={true}
        onEnded={handlePlayerNext}
        width="100%"
        height="100%"
        controls
        url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
      />
    </div>
  );
}
