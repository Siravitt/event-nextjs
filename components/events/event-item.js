import Link from "next/link";
import classes from "./event-item.module.css";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";

export default function EventItem({ title, image, date, location, id }) {
  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{readableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
          <div className={classes.actions}>
            <Button link={exploreLink}>Explore Event</Button>
          </div>
        </div>
      </div>
    </li>
  );
}