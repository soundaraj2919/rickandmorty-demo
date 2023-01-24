import React from "react";
import { Image, Text, View } from "react-native";

export default function Header() {
    return (
        <View className="flex flex-row h-screen space-x-2 bg-white items-center h-12">
            <View className={"flex-1"}>
                <Image source={require("./logo.png")} className="h-10 w-10" />
            </View>
            <View className={"flex-1 flex-row justify-between"}>
                <Text className="font-bold text-lg	">
                    Docs
                </Text>
                <Text className="font-bold text-lg	">
                    About
                </Text>

                <Image source={require("./heart.png")} className="h-8 w-10" />
            </View>
        </View>

    )
}