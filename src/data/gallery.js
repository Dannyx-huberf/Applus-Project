
import gal2 from "../assets/gallery/2.jpg";
import gal3 from "../assets/gallery/3.jpg";
import gal4 from "../assets/gallery/4.jpg";
import gal5 from "../assets/gallery/5.jpg";
import gal6 from "../assets/gallery/6.jpg";
import gal8 from "../assets/gallery/8.jpg";
import gal10 from "../assets/gallery/10.png";
import gal11 from "../assets/gallery/11.jpg";
// These are the real video files now.
import vid1 from "../assets/gallery/vid1.mp4";
import vid2 from "../assets/gallery/vid2.mp4";

// Optional: if you ever export a still frame from each video (e.g. via
// ffmpeg, or just a screenshot) as a .jpg/.png, import it here and set it
// as `poster` below. Without one, the grid tile will show the video's own
// first frame instead, which works fine but loads a touch slower.
// import vid1Poster from "../assets/gallery/vid1-poster.jpg";
// import vid2Poster from "../assets/gallery/vid2-poster.jpg";

export const galleryImages = [
  {
    type: "image",
    src: gal11,
    title: "Home Image",
  },
  {
    type: "image",
    src: gal2,
    title: "Exterior View",
  },
  {
    type: "image",
    src: gal3,
    title: "Side View",
  },
  {
    type: "image",
    src: gal4,
    title: "Road View",
  },
  {
    type: "image",
    src: gal8,
    title: "Front View",
  },
  {
    type: "image",
    src: gal5,
    title: "Road Development",
  },
  {
    type: "image",
    src: gal6,
    title: "Gutter Development",
  },
  {
    type: "video",
    src: vid1,
    poster: gal10, // swap in vid1Poster above if you generate a still frame
    title: "Property Walkthrough",
  },
  {
    type: "video",
    src: vid2,
    poster: gal8, // swap in vid2Poster above if you generate a still frame
    title: "Site Tour",
  },
];