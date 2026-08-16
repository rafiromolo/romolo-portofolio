export type ProjectEntry = {
    slug: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveLink?: string;
    repoLink?: string;
}

export const projects: ProjectEntry[] = [
  {
    slug: "dashboard-analisis-data-amazon-bookstore",
    title: "Dashboard Analisis Data pada Dataset Amazon Bookstore",
    description:
      "Dashboard analisis data Amazon Bookstore menggunakan Tableau.",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Project+1",
    tags: ["Tableau"],
    liveLink: "#",
    repoLink: "#",
  },
  {
    slug: "analisis-data-bike-sharing",
    title: "Analisis Data pada Data Bike Sharing",
    description:
      "Analisis data menggunakan Python dengan library matplotlib dan seaborn, dan menggunakan Streamlit sebagai dashboard.",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Project+2",
    tags: ["Python", "Seaborn", "Streamlit"],
    liveLink: "#",
    repoLink: "#",
  },
  {
    slug: "klasifikasi-gambar-batu-kertas-gunting",
    title: "Klasifikasi Gambar Batu Kertas Gunting",
    description:
      "Klasifikasi gambar tentang isyarat tangan permainan batu-gunting-kertas.",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Project+3",
    tags: ["Python", "TensorFlow"],
    liveLink: "#",
    repoLink: "#",
  },
  {
    slug: "landing-page-order-percetakan-kalender",
    title: "Landing Page Order Percetakan Kalender",
    description:
      "Sebuah landing page berbasis website perusahaan CV Prima Print untuk mengarahkan calon customer untuk memesan kalender.",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Project+4",
    tags: ["HTML & CSS"],
    liveLink: "#",
    repoLink: "#",
  },
];

export const latestProject = [...projects]
    .slice(0, 4);