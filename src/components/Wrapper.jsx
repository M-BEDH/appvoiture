export default function Wrapper( { children } ) {
  return (
    <div
      style={{
        border: "2px solid white",
        borderRadius: "10px",
        padding: "10px",
        width: "300px",
        margin: "10px auto",
        backgroundColor: "#237b9eff",
        color: "white",
      }}
    >
      {children}
      
    </div>
  );
}
