export interface Project {
  slug: string;
  title: string;
  cat: string;
  img: string;
  location: string;
  year: string;
  type: string;
  images: string[];
}

export const projects: Project[] = [
  {
    slug: "courtyard-haven",
    title: "Courtyard Haven",
    cat: "Residential",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    location: "San Francisco, CA",
    year: "2024",
    type: "Residential",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1596433884719-315189326442?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1582268611958-ebfd16139ce0?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    slug: "poolside-eden",
    title: "Poolside Eden",
    cat: "Residential",
    img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
    location: "Los Angeles, CA",
    year: "2023",
    type: "Residential",
    images: [
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1582268611958-ebfd16139ce0?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    slug: "ridge-meadow",
    title: "Ridge Meadow",
    cat: "Residential",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    location: "Marin County, CA",
    year: "2024",
    type: "Residential",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1596433884719-315189326442?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    slug: "sculpted-greens",
    title: "Sculpted Greens",
    cat: "Commercial",
    img: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    location: "Palo Alto, CA",
    year: "2025",
    type: "Commercial",
    images: [
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1581452285117-7429188e6a2b?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1590055531993-979929235760?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    slug: "forest-path",
    title: "Forest Path",
    cat: "Residential",
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
    location: "Napa Valley, CA",
    year: "2023",
    type: "Residential",
    images: [
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1597055181300-e3632f7e7712?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1581452285117-7429188e6a2b?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    slug: "park-walkway",
    title: "Park Walkway",
    cat: "Public Spaces",
    img: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=1200&q=80",
    location: "San Jose, CA",
    year: "2024",
    type: "Public",
    images: [
      "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1590055531993-979929235760?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1597055181300-e3632f7e7712?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    slug: "atelier-terrace",
    title: "Atelier Terrace",
    cat: "Commercial",
    img: "https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=1200&q=80",
    location: "San Francisco, CA",
    year: "2025",
    type: "Commercial",
    images: [
      "https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    slug: "harbor-villa",
    title: "Harbor Villa",
    cat: "Residential",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
    location: "Malibu, CA",
    year: "2024",
    type: "Residential",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    slug: "civic-greenway",
    title: "Civic Greenway",
    cat: "Public Spaces",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    location: "Sacramento, CA",
    year: "2023",
    type: "Public",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    slug: "boutique-plaza",
    title: "Boutique Plaza",
    cat: "Commercial",
    img: "https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?auto=format&fit=crop&w=1200&q=80",
    location: "Berkeley, CA",
    year: "2024",
    type: "Commercial",
    images: [
      "https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    slug: "olive-grove",
    title: "Olive Grove",
    cat: "Residential",
    img: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=1200&q=80",
    location: "Sonoma, CA",
    year: "2024",
    type: "Residential",
    images: [
      "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    slug: "rooftop-canopy",
    title: "Rooftop Canopy",
    cat: "Commercial",
    img: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=1200&q=80",
    location: "Oakland, CA",
    year: "2025",
    type: "Commercial",
    images: [
      "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1597055181300-e3632f7e7712?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1581452285117-7429188e6a2b?auto=format&fit=crop&w=1400&q=80",
    ],
  },
];
