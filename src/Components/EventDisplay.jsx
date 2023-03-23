import EventCard from "./EventCard";
import './EventDisplay.css'

const EventDisplay = () => {
    return(
        <>
            <div className="Event-Display">
                <EventCard />
                <EventCard />
                <EventCard />
            </div>
            <div className="Event-Display">
                <EventCard />
                <EventCard />
                <EventCard />
            </div>
        </>
    );
}
export default EventDisplay;