import classes from "./Header.module.css";

export function Header() {

  return (
    <header className={classes.container}>
      <h1 className={classes.titre}>Bienvenue</h1>
      <p
        style={{
          backgroundColor: "red",
          fontSize: "20px",
        }}
      >
        Lorem ipsum dolor sit, amet consectetur
      </p>
    </header>
  );
}
