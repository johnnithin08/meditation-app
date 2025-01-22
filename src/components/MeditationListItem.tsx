import React, { FunctionComponent } from "react";
import { View, Text } from "react-native";

interface IMeditationListItemProps {
	item: IMeditationItem;
}

export const MeditationListItem: FunctionComponent<
	IMeditationListItemProps
> = ({ item }: IMeditationListItemProps) => {
	const { title } = item;
	return (
		<View className="p-5 border-2 border-gray-300 rounded-2xl">
			<Text className="font-semibold text-2xl">{title}</Text>
		</View>
	);
};
