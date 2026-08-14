import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalEmbed({ children = "Book a Call", className = "" }) {
	useEffect(() => {
		(async function () {
			try {
				const cal = await getCalApi({ namespace: "30min" });
				cal("ui", { hideEventTypeDetails: true, layout: "month_view" });
			} catch (error) {
				console.error("Cal embed failed to load:", error);
			}
		})();
	}, []);

	const handleClick = () => {
		if (window?.Cal?.ns?.["30min"]) {
			window.Cal.ns["30min"]("popup");
			return;
		}
		window.open(
			"https://cal.com/upscaleagency/30min",
			"_blank",
			"noopener,noreferrer",
		);
	};

	return (
		<button
			type="button"
			onClick={handleClick}
			data-cal-namespace="30min"
			data-cal-link="upscaleagency/30min"
			data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
			className={className}
		>
			{children}
		</button>
	);
}
