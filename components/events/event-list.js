import EventItem from "./event-item";
import classes from "./event-list.module.css"

export default function EventList({ items }) {
  return (
    <ul className={classes.list}>
      {items.map((el) => (
        <EventItem
          key={el.id}
          id={el.id}
          title={el.title}
          date={el.date}
          location={el.location}
          image={el.image}
        />
      ))}
    </ul>
  );
}
