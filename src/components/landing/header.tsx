import logo from "@/assets/logo-wordmark.webp";
import { QuoteButton, PhoneLink } from "@/components/landing/cta";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6">
        <a href="#top" className="flex min-w-0 items-center" aria-label="The Board Company — home">
          <img
            src={logo}
            alt="The Board Company logo"
            width={224}
            height={73}
            className="h-9 w-auto sm:h-11"
          />
        </a>
        <div className="flex shrink-0 items-center gap-4">
          <PhoneLink location="header" className="hidden text-sm text-ink lg:inline-flex" />
          <QuoteButton location="header" className="px-4 py-2.5 text-xs sm:text-sm" />
        </div>
      </div>
    </header>
  );
}
