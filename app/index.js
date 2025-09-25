import { useState } from "react";
import { View, Text, Button } from "react-native";
import { Link } from "expo-router";

export default function Home() {

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 12 }}>
      <Text style={{ fontSize: 18 }}>CENTRAL DE ATEDINMENTO</Text>

      <Link href="/sqlite" asChild>
        <Button title="Sou cliente" />
      </Link>
    </View>
  );
}