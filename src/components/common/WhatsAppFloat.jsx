import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/2349096854184"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-[999]
        flex
        items-center
        justify-center
        w-14
        h-14
        rounded-full
        bg-[#25D366]
        text-white
        shadow-xl
        hover:scale-110
        transition
      "
    >
      <FaWhatsapp size={28} />
    </a>
  );
}