import { Assessment, ContactMail, Home, Info } from "@material-ui/icons";
import homenavStyles from "../styles/homenav.module.css";

export const __websiteURL__ = "https://mathletedev.vercel.app";
export const __baseURL__ = process.env.NEXT_PUBLIC_BASE_URL || __websiteURL__;

export const __homePages__: Record<string, JSX.Element> = {
	home: <Home className={homenavStyles["nav-button"]} />,
	about: <Info className={homenavStyles["nav-button"]} />,
	skills: <Assessment className={homenavStyles["nav-button"]} />,
	contact: <ContactMail className={homenavStyles["nav-button"]} />
};
