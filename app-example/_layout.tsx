import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';


// Prevent the splash screen from auto-hiding before asset loading is complete.

export default function RootLayout() {

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    </ThemeProvider>
  );
}
