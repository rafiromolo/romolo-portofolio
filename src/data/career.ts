export type CareerEntry = {
    slug: string;
    role: string;
    company: string;
    period: string;
    isCurrent?: boolean;
    summary: string;
    details?: string[];
};

export const careerHistory: CareerEntry[] = [
    {
        slug: "role-sekarang",
        role: "Digitalisasi Finance Accounting",
        company: "PT Mekar Armada Jaya",
        period: "2024 - Sekarang",
        isCurrent: true,
        summary:
            "Membangun dan memelihara aplikasi web dari sisi frontend hingga sedikit backend, fokus pada pengalaman pengguna yang clean dan performa yang cepat.",
        details: [
            "Membangun dan memelihara komponen frontend menggunakan JavaScript, dengan fokus pada performa dan aksesibilitas.",
            "Berkolaborasi dengan tim desain untuk menerjemahkan mockup jadi antarmuka yang responsif.",
        ],
    }
]