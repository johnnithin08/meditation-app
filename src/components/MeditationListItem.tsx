import React, { FunctionComponent } from "react";
import { View, Text, Pressable } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, router } from "expo-router";

interface IMeditationListItemProps {
	item: IMeditationItem;
}

export const MeditationListItem: FunctionComponent<
	IMeditationListItemProps
> = ({ item }: IMeditationListItemProps) => {
	const { duration, id, title } = item;

	return (
		<Link href={`/meditation/${id}`} asChild>
			<Pressable className="flex-row items-center gap-5">
				<View className="bg-green-700 p-1 rounded-full">
					<FontAwesome name="check" size={16} color="white" />
				</View>
				<View className="flex-1 p-5 py-8 border-2 border-gray-300 rounded-2xl">
					<Text className="font-semibold text-2xl mb-2">{title}</Text>
					<View className="flex-row items-center gap-2">
						<FontAwesome6 name="clock" size={16} color="gray" />
						<Text className="text-gray-600">{duration} min</Text>
					</View>
				</View>
			</Pressable>
		</Link>
	);
};
