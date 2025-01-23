import { Link, router, useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text, Pressable } from "react-native";
import {
	SafeAreaView,
	useSafeAreaInsets,
} from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Slider from "@react-native-community/slider";

import { meditations } from "../../../dummy";

const details = () => {
	const { id } = useLocalSearchParams<{ id: string }>();

	const meditation = meditations.find(
		(meditation) => meditation.id === parseInt(id, 10)
	);

	if (!meditation) {
		return <Text>No meditation found.</Text>;
	}

	const { title } = meditation;
	return (
		<SafeAreaView className="flex-1 bg-orange-400 p-2">
			<View className="flex-1">
				<View className="flex-row items-center justify-between p-10">
					<Link href="../" asChild>
						<AntDesign
							name="infocirlceo"
							size={24}
							color={"black"}
						/>
					</Link>
					<View className="bg-zinc-900 p-2 rounded-md">
						<Text className="text-zinc-100 font-semibold">
							Today's Meditation
						</Text>
					</View>
					<Link href="../" asChild>
						<AntDesign name="close" size={26} color={"black"} />
					</Link>
				</View>
				<Text className="text-3xl mt-10 text-center text-zinc-800 font-semibold">
					{title}
				</Text>
			</View>

			<Pressable className="bg-zinc-800 rounded-full self-center w-24 aspect-square items-center justify-center">
				<FontAwesome6 name="play" size={24} color={"snow"} />
			</Pressable>

			<View className="flex-1 p-10 justify-end gap-5">
				<View className="flex-row items-center justify-between">
					<MaterialIcons name="airplay" size={24} color={"black"} />
					<MaterialCommunityIcons
						name="cog-outline"
						size={24}
						color={"black"}
					/>
				</View>
				<View>
					<Slider
						style={{ width: "100%" }}
						minimumValue={0}
						maximumValue={1}
						minimumTrackTintColor="#3A3937"
						maximumTrackTintColor="#3A393755"
						thumbTintColor="#3A3937"
					/>
					<View className="flex-row justify-between">
						<Text className="">03:24</Text>
						<Text>13:14</Text>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default details;
