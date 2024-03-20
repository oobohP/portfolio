import { buildSanityURL } from "@/sanity/sanity-utils";

interface EmailTemplateProps {
  firstName: string;
  blogTitle: string;
  blogExcerpt: string;
  blogUrl: string;
  mainImage: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  blogTitle,
  blogExcerpt,
  blogUrl,
  mainImage,
}) => (
  <div
    style={{
      margin: "0 auto",
      maxWidth: "600px",
      padding: "20px",
      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      backgroundColor: "#ffffff",
      color: "#333333",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
    }}
  >
    <header
      style={{
        marginBottom: "20px",
      }}
    >
      <img
        src={buildSanityURL(mainImage).url()}
        alt="Blog Header Image"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          borderRadius: "8px 8px 0 0",
        }}
      />
      <h1
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          marginTop: "20px",
          textAlign: "center",
          color: "#007bff",
        }}
      >
        Hi {firstName},
      </h1>
      <h2
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          marginTop: "10px",
          textAlign: "center",
          color: "#333333",
        }}
      >
        New Blog Post Alert!
      </h2>
    </header>
    <main style={{ textAlign: "center" }}>
      <h3
        style={{
          fontSize: "22px",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        {blogTitle}
      </h3>
      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.5",
          marginBottom: "20px",
        }}
      >
        {blogExcerpt}
      </p>
      <a
        href={blogUrl}
        style={{
          backgroundColor: "#007bff",
          color: "#ffffff",
          textDecoration: "none",
          padding: "12px 24px",
          borderRadius: "5px",
          display: "inline-block",
          fontWeight: "bold",
        }}
      >
        Read More
      </a>
    </main>
  </div>
);
