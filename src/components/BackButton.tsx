import { ArrowLeft } from "phosphor-react";

interface BackButtonProps {
  onClick: () => void;
}
export function BackButton({ onClick }: BackButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
    >
      <ArrowLeft weight="bold" className="w-4 h-4" />
    </button>
  );
}
