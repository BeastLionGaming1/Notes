import { View, StyleSheet, Image } from "react-native";
import { Menu } from "lucide-react-native";
import { Link } from "expo-router";

export default function Header() {
  return (
    <View style={styles.container}>
      <Menu size={24} color="#343434" /> 
      <Link href="screens/Profile" asChild>
        <Image 
          source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIaozuP0fC--gHJ4dqYH0MeBBxHpySCZUvIyDv9XHAkXoztWY1U5rL_0tIvFihlf2Ku2hFmmu6snsWD8u5QjNfvROUPon7MAySLiLfQ-26Q5W2vBTqiR7bIrbp9k7-NTVQkk2lOis8h9Tq7ZnEzRrPCIiK4zJF4LR7RlgU6HRn-SrjZV-CY2r8ekBZPAOPU_xq14OGFhj78DrRn2e_1_-1B-6_0bkDSjOHYK54daPqmHvCQBAOpRF3GqNScGnX0mcfgdCv6m-iWZuq" }}
          style={styles.profilePic}
          resizeMode="cover"
        />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
  },
  profilePic: {
    height: 30,
    width: 30,
    borderRadius: 50,
  }
});