import { IconType } from "react-icons";
import { MdAssessment, MdContactMail, MdHome, MdInfo } from "react-icons/md";

export const __websiteURL__ = "https://mathletedev.vercel.app";
export const __baseURL__ = process.env.NEXT_PUBLIC_BASE_URL || __websiteURL__;

export const __homePages__: Record<string, IconType> = {
	home: MdHome,
	about: MdInfo,
	skills: MdAssessment,
	contact: MdContactMail
};
