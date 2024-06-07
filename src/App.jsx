import { useState } from "react";
import "./App.css";
import NotificationCount from "./assets/components/NotificationCount";
import ReceiveNotificationButton from "./assets/components/ReceiveNotificationButton";
import ReadNotificationButton from "./assets/components/ReadNotificationButton";

function App() {
	const [numberOfNotifications, setNumberOfNotifications] = useState(0);
	const handleIncreaeNotificationsByOne = (numberOfNotifications) => {
		setNumberOfNotifications((numberOfNotifications += 1));
	};
	const handleDecreaseNotificationsByOne = (numberOfNotifications) => {
		setNumberOfNotifications((numberOfNotifications -= 1));
	};

	return (
		<div>
			<ReceiveNotificationButton
				increaseNotificationsByOne={handleIncreaeNotificationsByOne}
			/>
			<ReadNotificationButton
				decreaseNotificationsByOne={handleDecreaseNotificationsByOne}
			/>
			<NotificationCount
				counter={numberOfNotifications}
				className={
					numberOfNotifications > 0 ? "hasNotifications" : "noNotifications"
				}
			/>
		</div>
	);
}

export default App;
