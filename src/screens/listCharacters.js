import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Header from "../components/header";
import { useGetCharactersQuery } from "../redux/characters";

export default function ListCharacter() {
    const {data} = useGetCharactersQuery()
    const navigation = useNavigation()
    console.log(data,"data")

    const renderCharacters = (character) => {
        const {id,name,status,species,gender,image,location,origin} = character
        return (
            <TouchableOpacity onPress={()=>navigation.navigate("Detail",{id})} key={id} className="m-5 rounded bg-slate-800">
                <Image className="rounded" style={{ height: 300 }} source={{ uri: image }} />
                <View className="m-5">
                    <Text className="font-bold text-2xl	text-white">{name}</Text>
                    <Text className="font-bold text-1xl	text-white">{status} - {species}</Text>
                    <View className="mt-5">
                        <Text className="text-slate-500">last known location</Text>
                        <Text className="font-bold text-2xl	text-white">{location.name}</Text>
                    </View>
                    <View className="mt-5">
                        <Text className="text-slate-500">first sees in</Text>
                        <Text className="font-bold text-2xl	text-white">{origin.name}</Text>
                    </View>
                </View>

            </TouchableOpacity>
        )
    }
    return (
        <ScrollView className="bg-zinc-800">
            <Header />
            <View className="flex items-center pt-10 px-10 justify-center bg-white" >
                <Text className="font-bold text-6xl	text-center text-black">The Rick and Morty API</Text>
            </View>
            {data?.results.map((character) => renderCharacters(character))}
        </ScrollView>
    )
}