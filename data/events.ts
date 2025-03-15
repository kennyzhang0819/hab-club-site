export interface Event {
  id: string;
  name: string;
  description: string;
  date: string;
  coverImage: string;
  photos: Photo[];
}

export interface Photo {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const events: Event[] = [
  {
    id: "calhacks-10",
    name: "Cal Hacks 10.0",
    description: "Our flagship hackathon hosted in San Francisco",
    date: "October 2023",
    coverImage: "https://calhacks-sierra.s3-us-west-2.amazonaws.com/assets/branding/fellowship.png",
    photos: Array.from({ length: 20 }, (_, i) => ({
      id: `calhacks-10-${i + 1}`,
      src: `https://calhacks-sierra.s3.us-west-2.amazonaws.com/assets/gallery/calhacks10/${i + 1}.jpg`,
      alt: `Cal Hacks 10.0 - Photo ${i + 1}`,
      width: 1200,
      height: 800
    }))
  },
  {
    id: "cubstart-spring-2023",
    name: "Cubstart Spring 2023",
    description: "A program for new hackers to learn and build",
    date: "Spring 2023",
    coverImage: "https://calhacks-sierra.s3-us-west-2.amazonaws.com/assets/branding/cubstart.png",
    photos: Array.from({ length: 15 }, (_, i) => ({
      id: `cubstart-spring-2023-${i + 1}`,
      src: `https://calhacks-sierra.s3.us-west-2.amazonaws.com/assets/gallery/cubstart-spring-2023/${i + 1}.jpg`,
      alt: `Cubstart Spring 2023 - Photo ${i + 1}`,
      width: 1200,
      height: 800
    }))
  },
  {
    id: "calhacks-9",
    name: "Cal Hacks 9.0",
    description: "Our annual hackathon bringing together hackers from around the world",
    date: "October 2022",
    coverImage: "https://calhacks-sierra.s3.us-west-2.amazonaws.com/assets/9.0/sponsors/citadel.png",
    photos: Array.from({ length: 25 }, (_, i) => ({
      id: `calhacks-9-${i + 1}`,
      src: `https://calhacks-sierra.s3.us-west-2.amazonaws.com/assets/gallery/calhacks9/${i + 1}.jpg`,
      alt: `Cal Hacks 9.0 - Photo ${i + 1}`,
      width: 1200,
      height: 800
    }))
  },
  {
    id: "hackjam-2023",
    name: "HackJam 2023",
    description: "A mini-hackathon focused on quick prototyping and learning",
    date: "April 2023",
    coverImage: "https://calhacks-sierra.s3.us-west-2.amazonaws.com/assets/hackathonsatberkeley/coding-ddoski.png",
    photos: Array.from({ length: 12 }, (_, i) => ({
      id: `hackjam-2023-${i + 1}`,
      src: `https://calhacks-sierra.s3.us-west-2.amazonaws.com/assets/gallery/hackjam-2023/${i + 1}.jpg`,
      alt: `HackJam 2023 - Photo ${i + 1}`,
      width: 1200,
      height: 800
    }))
  }
]; 