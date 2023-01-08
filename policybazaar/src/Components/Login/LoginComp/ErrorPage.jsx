function ErrorPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: "70%",
        margin: "100px auto",
      }}
    >
      {/* <h1>Error Page</h1> */}
      <div style={{ width: "200px" }}>
        <img
          src="https://static.pbcdn.in/cdn/images/error-icon-updated.png"
          alt="Error Image"
          width={"100%"}
        />
      </div>
      <div style={{ width: "70%" }}>
        <h1
          style={{
            fontSize: "3em",
            letterSpacing: "1px",
            color: "red",
            marginTop: "60px",
          }}
        >
          We couldn’t find that page.
        </h1>
      </div>
    </div>
  );
}
export default ErrorPage;
