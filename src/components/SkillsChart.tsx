import React, { FC } from "react";
import {
	PolarAngleAxis,
	PolarGrid,
	PolarRadiusAxis,
	Radar,
	RadarChart,
	ResponsiveContainer
} from "recharts";
import { skillsData } from "../lib/constants";

const SkillsChart: FC = () => {
	return (
		<ResponsiveContainer width="100%" height="100%">
			<RadarChart data={skillsData}>
				<PolarGrid stroke="white" />
				<PolarAngleAxis dataKey="technology" tick={{ fill: "skyblue" }} />
				<PolarRadiusAxis
					angle={90 - 360 / skillsData.length}
					tick={{ fill: "skyblue" }}
				/>
				<Radar
					dataKey="level"
					strokeOpacity={0}
					fill="tomato"
					fillOpacity={0.5}
				/>
			</RadarChart>
		</ResponsiveContainer>
	);
};

export default SkillsChart;
