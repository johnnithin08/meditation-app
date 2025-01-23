import React from "react";
import { SafeAreaView, View, Text, FlatList } from "react-native";
import { meditations } from "../../dummy";
import { MeditationListItem } from "@/components/MeditationListItem";

const index = () => {
	return (
		<SafeAreaView className="flex-1">
			<FlatList
				className="bg-white"
				contentContainerClassName="gap-8 p-3"
				data={meditations}
				renderItem={({ item, index }) => {
					return <MeditationListItem item={item} />;
				}}
			/>
		</SafeAreaView>
	);
};

export default index;
