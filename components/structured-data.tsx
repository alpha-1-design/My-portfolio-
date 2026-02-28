export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Samuel Mensah",
    alternateName: "Alpharian",
    url: "https://samuelmensah.dev",
    email: "alphariansamuel@gmail.com",
    jobTitle: "Full-Stack Developer & Creative Engineer",
    description:
      "Professional web developer, hosting specialist, video editor and photo editor based in Ghana.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "GH",
    },
    sameAs: [
      "https://github.com/alpha-1-design",
      "https://www.facebook.com/share/1E5LRhNPtV/",
      "https://www.instagram.com/samuelmensah607",
      "https://youtube.com/@alpharianbaby",
      "https://www.tiktok.com/@alpharianbaby1",
      "https://open.spotify.com/user/31no777qrxgz76zx2iawcnw2rhv4",
      "https://pin.it/4UiEORro6",
    ],
    knowsAbout: [
      "Web Development",
      "Full-Stack Development",
      "React",
      "Next.js",
      "TypeScript",
      "Video Editing",
      "Photo Editing",
      "Web Hosting",
      "UI/UX Design",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        name: "Web Development",
        description: "Full-stack web applications built with modern technologies.",
        priceCurrency: "USD",
        price: "500",
      },
      {
        "@type": "Offer",
        name: "Hosting & DevOps",
        description: "Reliable hosting solutions and server management.",
        priceCurrency: "USD",
        price: "100",
      },
      {
        "@type": "Offer",
        name: "Video Editing",
        description: "Professional video editing for social media and corporate content.",
        priceCurrency: "USD",
        price: "150",
      },
      {
        "@type": "Offer",
        name: "Photo Editing",
        description: "High-end photo retouching and enhancement.",
        priceCurrency: "USD",
        price: "50",
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
