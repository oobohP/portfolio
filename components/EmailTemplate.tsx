interface EmailTemplateProps {
  firstName: string;
  blogTitle: string;
  blogExcerpt: string;
  blogUrl: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  blogTitle,
  blogExcerpt,
  blogUrl,
}) => (
  <div
    style={{
      margin: "0 auto",
      maxWidth: "600px",
      padding: "20px",
      border: "1px solid #f0f0f0",
      borderRadius: "5px",
    }}
  >
    <header>
      <h1>Hi {firstName}</h1>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px", color: "#333" }}>
        New Blog Post Alert!
      </h1>
    </header>
    <main>
      <h2>{blogTitle}</h2>
      <p>{blogExcerpt}</p>
      <a
        href={blogUrl}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          textDecoration: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          display: "inline-block",
        }}
      >
        Read More
      </a>
    </main>
  </div>
);
