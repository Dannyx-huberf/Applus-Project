import house1 from "@/assets/properties/house1.png";
import house2 from "@/assets/properties/house2.png";


export const properties = [
  {
    id: "mini-lux-3bed",
    project: "Applus Mini-Lux",
    unit: "3-Bedroom Apartment",
    tagline: "Spacious family living with full lifestyle amenities",
    image: house1, // swap to: miniLuxImg
    badge: "3 Bed",
    features: [
      { icon: "🛏️", label: "Bedrooms",  value: "3 Bedrooms" },
      { icon: "🚿", label: "Bathrooms",  value: "3 Toilets & Baths" },
      { icon: "🏊", label: "Pool",       value: "Swimming Pool" },
      { icon: "🛋️", label: "Lounge",     value: "Recreational Lounge" },
      { icon: "🚗", label: "Parking",    value: "Dedicated Car Park" },
      { icon: "💡", label: "Power",      value: "24hr Power Supply" },
      { icon: "🔒", label: "Security",   value: "24hr Security" },
      { icon: "🏗️", label: "Finish",     value: "Premium Finishing" },
    ],
  },
  {
    id: "mini-lux-1bed",
    project: "Applus Mini-Lux",
    unit: "1-Bedroom Apartment",
    tagline: "Smart, modern living with premium shared amenities",
    image: house1, // swap to: miniLuxImg
    badge: "1 Bed",
    features: [
      { icon: "🛏️", label: "Bedrooms",  value: "1 Bedroom" },
      { icon: "🚿", label: "Bathrooms",  value: "1 Toilet & Bath" },
      { icon: "🏊", label: "Pool",       value: "Swimming Pool" },
      { icon: "🛋️", label: "Lounge",     value: "Recreational Lounge" },
      { icon: "🚗", label: "Parking",    value: "Dedicated Car Park" },
      { icon: "💡", label: "Power",      value: "24hr Power Supply" },
      { icon: "🔒", label: "Security",   value: "24hr Security" },
      { icon: "🏗️", label: "Finish",     value: "Premium Finishing" },
    ],
  },
  {
    id: "applus-homes",
    project: "Applus Homes",
    unit: "Residential Apartment",
    tagline: "Comfortable, well-built homes for everyday living",
    image: house2, // swap to: homesImg
    badge: "Homes",
    features: [
      { icon: "🛏️", label: "Bedrooms",  value: "Spacious Bedrooms" },       // update once confirmed
      { icon: "🚿", label: "Bathrooms",  value: "Modern Bathrooms" },         // update once confirmed
      { icon: "🚗", label: "Parking",    value: "Car Park" },
      { icon: "💡", label: "Power",      value: "24hr Power Supply" },
      { icon: "🔒", label: "Security",   value: "24hr Security" },
      { icon: "🏗️", label: "Finish",     value: "Quality Finishing" },
      { icon: "🌊", label: "Drainage",   value: "Good Drainage System" },
      { icon: "🏘️", label: "Community",  value: "Serene Neighbourhood" },
    ],
  },
];