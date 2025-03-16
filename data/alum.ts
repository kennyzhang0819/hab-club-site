import type { Photo } from "./events"

interface Company {
    name: string;
    link: string;
    image: Photo;
}

export const alum: Company[] = [
    {
        name: "Google",
        link: "",
        image: {
            id: "google",
            src: "https://iili.io/HY6ZF8g.png",
            alt: "string",
            width: 120,
            height: 60,
        }
    }
]