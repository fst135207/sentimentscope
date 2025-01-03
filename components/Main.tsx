"use client"
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

interface MainLabel {
  id: string;
  label: string;
}

export default function Main() {
  const [labels, setLabels] = useState<MainLabel[]>([]);

  useEffect(() => {
    const fetchLabels = async () => {
      try {
        const response = await fetch("/api/mainlabels");
        const data = await response.json();
        console.log("API Response:", data);
        setLabels(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to fetch labels:", error);
        setLabels([]);
      }
    };

    fetchLabels();
  }, []);

  return (
    <main className="h-screen bg-background">
      <div className="py-24 sm:py-32 lg:pb-40">
        <div className="relative mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl pt-5 text-center">
              Sentiment <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Score</span>
            </h1>
            <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto text-center text-accent-foreground">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
            </p>
            <hr className="w-11/12 h-1 mx-auto my-4 bg-foreground border-0 rounded md:my-10" />
            <p className="text-lg leading-8 max-w-2xl mx-auto text-center text-accent-foreground">
              Choose a main Topic to get started
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {labels.map((label) => (
                <a
                key={label.id}
                href={`/${label.id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                  {label.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
