import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

const search = () => {
  const [busqueda, setBusqueda] = useState("");

  const router = useRouter();
  const {
    data: movies,
    loading,
    error,
    refetch: loadMovies,
    reset,
  } = useFetch(() => fetchMovies({ query: busqueda }), false);

  useEffect(() => {
    const timeout = setTimeout( async () => {
      if (busqueda.trim()) {
        await loadMovies();
      } else {
        reset();
      }
    }, 500);
    return()=>clearTimeout(timeout)
  }, [busqueda]);

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="flex-1 absolute w-full z-0"
        resizeMode="cover"
      />

      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        className="px-5"
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 16,
          marginVertical: 16,
        }}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <>
            <View className="w-full flex-row justify-center mt-20 items-center">
              <Image source={icons.logo} className="w-12 h-10" />
            </View>
            <View className="my-5">
              <SearchBar
                placeholder="Buscar película"
                value={busqueda}
                onChangeText={(text: string) => setBusqueda(text)}
              />
            </View>
            {loading && (
              <ActivityIndicator
                size="large"
                color="#0000ff"
                className="my-3"
              />
            )}
            {error && (
              <Text className="text-red-500 px-5 my-5">
                {" "}
                Error: {error.message}
              </Text>
            )}
            {!loading && !error && busqueda.trim() && movies?.length > 0 && (
              <Text className="text-xl text-white font-bold">
                Resultados para{" "}
                <Text className="text-purple-500">{busqueda}</Text>
              </Text>
            )}
          </>
        }
        ListEmptyComponent={
          !loading && !error ? (
            <View className="mt-10 px-5">
              <Text className="text-center text-gray-500">
                {busqueda.trim()?"No se encontró la película":"Busca una película"}
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default search;

const styles = StyleSheet.create({});
