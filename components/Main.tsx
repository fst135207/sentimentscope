import { Badge } from "@/components/ui/badge";
import react from "react";
import { MainLabel } from "./MainLabel";

export default function Main() {
  return (
    <main className="h-screen bg-background">
      <div className="fixed h-full top-0 left-0 right-0 z-0">
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="relative mx-auto px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              {/* Title and description */}
              <div className="mx-auto max-w-4xl text-center">
                <Badge variant="secondary" className="bg-purple-600/90 text-foreground">Updates every 15 Minutes</Badge>

                  <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl pt-5">
                    Sentiment <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Score</span>
                  </h1>

                  <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto text-accent-foreground">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  </p>

                  <hr className="w-11/12 h-1 mx-auto my-4 bg-foreground border-0 rounded md:my-10" />
                </div>
                {/* Categories mit isNew=true kann man setzten ob Kategorie neu ist*/}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  <MainLabel text="Crypto" />
                  <MainLabel text="Commodities"/>
                  <MainLabel text="Forex" />
                  <MainLabel text="Stocks" />
                  <MainLabel text="Memecoins" />
                </div>
              </div>
            </div>
          </div>
        </div>
    </main>
  );
}
