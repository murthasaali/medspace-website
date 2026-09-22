export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://medspace.ai/#organization",
    name: "MedSpace AI",
    url: "https://medspace.ai",
    description:
      "MedSpace AI is a healthcare technology platform that connects clinical data, patient information, medical devices and healthcare workflows through a governed clinical knowledge graph.",
    foundingDate: "2024",
    sameAs: [],
    logo: {
      "@type": "ImageObject",
      url: "https://medspace.ai/logo.png",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://medspace.ai/#website",
    url: "https://medspace.ai",
    name: "MedSpace AI",
    publisher: { "@id": "https://medspace.ai/#organization" },
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://medspace.ai/#webpage",
    url: "https://medspace.ai",
    name: "MedSpace AI | Clinical Intelligence & Healthcare AI Platform",
    isPartOf: { "@id": "https://medspace.ai/#website" },
    about: { "@id": "https://medspace.ai/#organization" },
    description:
      "MedSpace AI is a healthcare technology platform connecting clinical data, patient information and medical devices through a governed clinical knowledge graph.",
    breadcrumb: { "@id": "https://medspace.ai/#breadcrumb" },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://medspace.ai/#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://medspace.ai",
      },
    ],
  };

  const softwareApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "MedSpace AI Platform",
    applicationCategory: "HealthApplication",
    operatingSystem: "Web-based",
    description:
      "Healthcare technology platform connecting clinical data through a governed clinical knowledge graph with five integrated products.",
    url: "https://medspace.ai",
    offers: {
      "@type": "Offer",
      price: "",
      priceCurrency: "USD",
      description: "Contact for pricing",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApp) }}
      />
    </>
  );
}
