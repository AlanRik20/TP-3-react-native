// Importación de íconos personalizados desde una carpeta de constantes
import { icons } from "@/constants/icons";

// Importación de imágenes (como un fondo para el tab activo)
import { images } from "@/constants/images";

// Componente de navegación por pestañas de Expo Router (basado en React Navigation)
import { Tabs } from "expo-router";

// Importación del núcleo de React
import React from "react";

// Componentes de React Native para renderizar imágenes, fondos, texto y vistas
import { Image, ImageBackground, Text, View } from "react-native";

/*
  Componente que representa un ícono personalizado para cada tab.
  Cambia su estilo dependiendo de si está enfocado (seleccionado) o no.
*/
const TabIcon = ({ focused, icon, title }: any) => {
  if (focused) {
    // Si la pestaña está activa, muestra el fondo de destaque y estilos diferentes
    return (
      <ImageBackground
        source={images.highlight} // Fondo de imagen que indica la pestaña activa
        className="flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
      >
        <Image source={icon} tintColor="#151312" className="size-5" />
        <Text className="text-secondary text-base font-semibold ml-2">
          {title}
        </Text>
      </ImageBackground>
    );
  }

  // Si la pestaña no está activa, solo se muestra el ícono con un color más claro
  return (
    <View className="size-full justify-center items-center mt-10 rounded-full">
      <Image source={icon} tintColor="#A8B5D5" className="size-5" />
      <Text className="text-secondary text-base font-semibold ml-2">
        {title}
      </Text>
    </View>
  );
};

/*
  Componente principal de layout para las pestañas.
  Aquí se definen las diferentes pantallas de navegación inferior (tabs).
*/
const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        // Oculta los nombres de las pestañas por defecto
        tabBarShowLabel: false,

        // Estilos para cada item individual de la barra de pestañas
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },

        // Estilos generales para la barra de navegación inferior
        tabBarStyle: {
          backgroundColor: "#0f0d23", // Color de fondo
          borderRadius: 50, // Bordes redondeados para estilo pill
          marginHorizontal: 20, // Márgenes laterales
          marginBottom: 36, // Separación inferior
          height: 52, // Altura de la barra
          position: "absolute", // Posicionamiento flotante
          overflow: "hidden", // Oculta desbordes
          borderWidth: 1,
          borderColor: "#0f0d23", // Borde del mismo color que el fondo
        },
      }}
    >
      {/* Pestaña "Home" (pantalla principal) */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false, // Oculta el encabezado superior
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />

      {/* Pestaña "Search" */}
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} title="Search" />
          ),
        }}
      />

      {/* Pestaña "Saved" */}
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.save} title="Saved" />
          ),
        }}
      />

      {/* Pestaña "Profile" */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};

// Exportación del componente para ser usado por el sistema de rutas de Expo Router
export default _layout;
