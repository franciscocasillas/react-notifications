import "../stylesheets/NotificationCount.css";

function NotificationCount({ counter, className }) {
	return <button className={className}>{counter} Notifications</button>;
}

export default NotificationCount;
