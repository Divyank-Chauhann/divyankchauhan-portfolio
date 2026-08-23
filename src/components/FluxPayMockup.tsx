import homeAsset from "@/assets/fluxpay-Home.png.asset.json";
import scanAsset from "@/assets/fluxpay-Scan_QR.png.asset.json";
import sendAsset from "@/assets/fluxpay-Sending_Money_2.png.asset.json";

const phones = [
  {
    src: scanAsset.url,
    alt: "FluxPay scan QR code screen",
    className:
      "w-[23%] -rotate-6 translate-y-[3%] z-10 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.55)]",
  },
  {
    src: homeAsset.url,
    alt: "FluxPay home screen with account balance and recent activity",
    className:
      "w-[27%] -mx-[2.5%] z-20 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]",
  },
  {
    src: sendAsset.url,
    alt: "FluxPay send money screen with keypad",
    className:
      "w-[23%] rotate-6 translate-y-[3%] z-10 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.55)]",
  },
];

export function FluxPayMockup() {
  return (
    <div className="flex aspect-[1600/1104] w-full items-center justify-center bg-[oklch(0.22_0.01_140)] px-[6%]">
      {phones.map((p) => (
        <img
          key={p.alt}
          src={p.src}
          alt={p.alt}
          loading="lazy"
          className={`rounded-[8%_/_4%] ${p.className}`}
        />
      ))}
    </div>
  );
}
