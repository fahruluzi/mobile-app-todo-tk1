import React from 'react';
import { View, Image, Text, FlatList, StyleSheet } from 'react-native';
import { useImageViewModel } from '../viewmodels/ImageViewModel';

const ImageScreen: React.FC = () => {
  const { images } = useImageViewModel();

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.url }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  card: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
  },
  title: {
    marginTop: 10,
    fontSize: 18,
  },
});

export default ImageScreen;
