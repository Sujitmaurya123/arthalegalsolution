import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <>
      {/* Call Button */}
      <a
        href="tel:+917834993487"
        style={{
          position: "fixed",
          bottom: "96px",
          right: "24px",
          width: "60px",
          height: "60px",
          backgroundColor: "#2563EB",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          zIndex: 9999,
          textDecoration: "none",
        }}
        aria-label="Call"
      >
        <FaPhoneAlt size={26} />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917834993487"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          width: "60px",
          height: "60px",
          backgroundColor: "#25D366",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          zIndex: 9999,
          textDecoration: "none",
        }}
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={32} />
      </a>
    </>
  );
}