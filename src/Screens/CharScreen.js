import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, ImageBackground, FlatList, Modal } from 'react-native';
import { Character } from '../Components/Character'
import { getAllCharacters } from "../API/RANDMApi";
import {ErrorSplash} from "../Components/ErrorSplash";

export default function CharScreen({ navigation, route }) {
  const [data, setData] = useState([]);
  const [characterData, setCharacterData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState(null);
  const [hasError, setHasError] = useState(false)
  const getSelectedCharacter = (characterId) => {
      return characterData.find((Character) => Character.id === characterId)
  }

  useEffect(() => {
    const fetchNames = async () => {
      try {
        const fetchedData = await getAllCharacters();
        const extractedNames = fetchedData.map((item) => ({id: item.id, name: item.name}));
        setCharacterData(fetchedData);
        setData(extractedNames);
    } catch (error) {
        setError(error.message);
        setHasError(true);
      }
    };
    fetchNames();
  }, []);


  let language = route.params.language;
  let greeting = language === "f" ? "B" : "H";

  return (
    <View style={styles.container}>
        {hasError ? (<ErrorSplash errorMessage={error} />) : (
      <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
              <Text style={styles.listItem}
              onPress={() => {
                setSelectedItem(item);
                setModalVisible(true);
              }}>
                {item.name}
              </Text>
            )}
          initialNumToRender={50}
          windowSize={10}
          maxToRenderPerBatch={50}
          />)}
        <Modal
            animationType="slide"
            transparent={false}
            visible={isModalVisible}>
            <View>
                {isModalVisible && (<Character Data={getSelectedCharacter(selectedItem.id)}/>)}
                <Button title="Close" onPress={() => setModalVisible(false)} />
            </View>
        </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
  },
    listItem: {
      padding: 5,
        fontWeight: "bold",
        fontSize: 20,
    }
});