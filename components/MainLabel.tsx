import { Badge } from "@/components/ui/badge";

interface MainLabelProps {
  text: string;
  isNew?: boolean;
  isActive?: boolean;
}

export function MainLabel({ text }: MainLabelProps) {
  return (
    <Badge variant="secondary" className="bg-purple-900/40 text-foreground flex items-center hover:bg-zinc-800/80 transition-colors">
      {text}
    </Badge>
  );
}