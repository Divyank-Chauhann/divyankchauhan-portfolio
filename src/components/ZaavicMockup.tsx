import zaavicAsset from "@/assets/zaavic-hero.png.asset.json";

export function ZaavicMockup() {
  return (
    <div className="flex w-full items-center justify-center bg-[oklch(0.20_0.03_150)] p-5 sm:p-8 md:p-12">
      <div className="w-full overflow-hidden rounded-lg bg-background shadow-[0_30px_70px_-30px_rgba(0,0,0,0.55)] ring-1 ring-black/10">
        <div className="flex items-center gap-2 border-b border-hairline bg-muted px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-foreground/20" />
          <span className="h-2 w-2 rounded-full bg-foreground/20" />
          <span className="h-2 w-2 rounded-full bg-foreground/20" />
          <span className="ml-3 hidden truncate rounded-sm bg-background px-2 py-0.5 text-[10px] tracking-wide text-muted-foreground sm:block">
            zaavicplants.netlify.app
          </span>
        </div>
        <img
          src={zaavicAsset.url}
          alt="Zaavic Plants e-commerce website homepage design"
          loading="lazy"
          width={1009}
          height={603}
          className="block h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
