import { IconType } from "react-icons";
import { MdAssessment, MdContactMail, MdHome, MdInfo } from "react-icons/md";

interface ContactData {
	url: string;
	imageUrl?: string;
	color: string;
}

export const __websiteURL__ = "https://mathletedev.vercel.app";
export const __baseURL__ = process.env.NEXT_PUBLIC_BASE_URL || __websiteURL__;

export const __homePages__: Record<string, IconType> = {
	home: MdHome,
	about: MdInfo,
	skills: MdAssessment,
	contact: MdContactMail
};

export const __simpleIcons__ =
	"https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/";
export const __contactSites__: Record<string, ContactData> = {
	github: {
		url: "https://github.com/mathletedev",
		color: "#f5f5f5"
	},
	youtube: {
		url: "https://www.youtube.com/channel/UCOaIT1nP-FhOFlhz2_fzJ1Q",
		color: "#ff0000"
	},
	discord: {
		url: "https://discord.gg/RRfW8FrX3E",
		color: "#7289da"
	},
	gmail: {
		url: "mailto:mathletedev@gmail.com",
		color: "#4285f4"
	},
	facebook: {
		url: "https://www.facebook.com/profile.php?id=100061416503358",
		color: "#4267b2"
	},
	twitter: {
		url: "https://twitter.com/MathleteDev",
		color: "#1da1f2"
	}
};
