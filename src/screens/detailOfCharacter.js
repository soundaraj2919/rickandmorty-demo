import React from "react";
import { Image, Text, View } from "react-native";
import Header from "../components/header";
import { useGetCharactersByIdQuery } from "../redux/characters";

export default function DetailOfCharacter(props){
    const {data} = useGetCharactersByIdQuery(props.route.params.id)
    console.log(data)
    const renderCharacters = (character) => {
        const {id,name,status,species,gender,image,location,origin} = character
        return (
            <View key={id} className="m-5 rounded bg-slate-800">
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

            </View>
        )
    }
    return (
        <View>
            <Header />
            {data && renderCharacters(data)}
        </View>
    )
}