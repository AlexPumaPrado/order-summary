import classes from "./card.module.css";
function Card() {
  return (
    <div className={classes.fondo} src="images/pattern-background-desktop.svg">
      <div className={classes.card}>
        <img
          src="images/illustration-hero.svg"
          alt="hero"
          className={classes.imagen}
        />
        <h1 className={classes.title}>Order Summary</h1>
        <h3 className={classes.descripcion}>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </h3>
        <div className={classes.price}>
          <img
            className={classes.icon}
            src="images/icon-music.svg"
            alt="icon music"
          />
          <div className={classes.textprice}>
            <span className={classes.titleprice}>Annual Plan</span>
            <span className={classes.nprice}>$59.99/year</span>
          </div>
          <a
            className="text-color font-weight-700 text-decoration-underline"
            href="#"
          >
            Change
          </a>
        </div>
        <button className={classes.button1}>Proceed to Payment</button>
        <button className={classes.button2}>Cancel Order</button>
      </div>
    </div>
  );
}

export default Card;
