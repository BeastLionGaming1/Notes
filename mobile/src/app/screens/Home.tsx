import React, { useState, useEffect } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, ScrollView, View, StyleSheet, ActivityIndicator  } from "react-native";
import { Link } from "expo-router";
import Header from "@/components/Header.tsx";
import SearchBar from "@/components/SearchBar.tsx";
import NoteCard from "@/components/NoteCard.tsx";

import api from "../api.ts";

interface Note {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
}

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNotes() {
      try {
        setLoading(true);
        const res = await api.get("/api/notes");
        setNotes(res.data.notes);
        setLoading(false);
      } catch (error) {
       console.log("Error Getting Notes:", error);
        setLoading(false);
      }finally {
        setLoading(false);
      }
    }

    fetchNotes();
  }, []);
  
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Header />
        <SearchBar value={search} onChangeText={setSearch} />
        
        <ScrollView
          style={styles.notesContainer}
          contentContainerStyle={
            loading
              ? {
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 30
                }
              : undefined
          }
        >
          {loading ? (
            <ActivityIndicator size={30} />
          ) : (
            notes.map((note) => (
              <NoteCard 
                key={note._id}
                note={note}
              />
            ))
          )}
        </ScrollView>
        
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  notesContainer: {
    paddingHorizontal: 20,
  }
});