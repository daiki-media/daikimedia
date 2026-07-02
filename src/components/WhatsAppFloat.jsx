"use client";
import Image from "next/image";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/601114850067?text=Hello%20I%20would%20like%20to%20know%20more%20about%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 9999,
        padding: '12px',
        borderRadius: '50%',
        transition: 'transform 0.2s ease',
        display: 'block'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <Image
        src="/images/whatsapp.jpg"
        alt="WhatsApp"
        width={48}
        height={48}
        style={{
          display: 'block',
          width: '48px',
          height: '48px'
        }}
      />
    </a>
  );
}