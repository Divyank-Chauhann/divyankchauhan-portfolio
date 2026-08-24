import zaavicMonitorAsset from "@/assets/zaavic-monitor.png.asset.json";

export function ZaavicMockup() {
  return (
    <img
      src={zaavicMonitorAsset.url}
      alt="Zaavic Plants homepage displayed on a modern desktop monitor in a warm studio"
      loading="lazy"
      width={1600}
      height={1104}
      className="block aspect-[1600/1104] w-full object-cover"
    />
  );
}
