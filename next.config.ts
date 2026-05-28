import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "dentakay.com" },
      { protocol: "https", hostname: "www.acibadem.com.tr" },
      { protocol: "https", hostname: "cosmedica.com" },
      { protocol: "https", hostname: "www.smilehairclinic.com" },
      { protocol: "https", hostname: "veraclinic.net" },
      { protocol: "https", hostname: "bahceci.com" },
      { protocol: "https", hostname: "www.dunyagoz.com" },
      { protocol: "https", hostname: "memorial.com.tr" },
      { protocol: "https", hostname: "www.quartzclinique.com" },
      { protocol: "https", hostname: "www.acibadembayindir.com" },
      { protocol: "https", hostname: "cdn.medicalpark.com.tr" },
      { protocol: "https", hostname: "www.medicana.com.tr" },
      { protocol: "https", hostname: "www.esteworldturkey.com" },
      { protocol: "https", hostname: "www.otajinemedhastanesi.com" },
    ],
  },
};

export default nextConfig;
