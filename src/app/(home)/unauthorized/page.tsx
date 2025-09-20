export default function UnauthorizedPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        fontFamily: "sans-serif",
        padding: "1rem",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#e63946" }}>
        🚫 Unauthorized Access
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
        You do not have permission to access this app.
      </p>
      <p style={{ fontSize: "1rem", color: "#555" }}>
        Please get a valid URL or credentials from the developer to access the
        app.
      </p>
    </div>
  );
}
