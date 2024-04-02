import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Keyboard } from 'react-native';
import * as Speech from "expo-speech";

export default function DictionaryScreen() {
  const [newWord, setNewWord] = useState("");
  const [checkedWord, setCheckedWord] = useState("");
  const [definition, setDefinition] = useState("");

  
  const searchWord = (enteredWord) => {
    setNewWord(enteredWord);
  };


  getInfo = () => {
    var url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + newWord;

    return fetch(url)
      .then((data) => data.json())
      .then((response) => {
        if (response && Array.isArray(response) && response.length > 0) {
          var word = response[0].word;
          setCheckedWord(word);

          if (
            response[0].meanings &&
            Array.isArray(response[0].meanings) &&
            response[0].meanings.length > 0
          ) {
            var definitions = response[0].meanings.map(
              (meaning) => meaning.definitions.map((def) => def.definition)
            );

            // Flattening the array of definitions
            definitions = definitions.flat();

            setDefinition(definitions.join("\n\n"));
          } else {
            setDefinition("No definitions found");
          }
        } else {
          setCheckedWord("Word not found");
          setDefinition("");
        }
      })
      .catch((error) => {
        
        setCheckedWord("Not entered any word");
        setDefinition("");
      });
  };

  const speak = () => {
    Speech.speak(checkedWord);
  };

  const clear = () => {
    setCheckedWord("");
    setDefinition("");
    setNewWord("");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../../assets/spacesearch.jpg")}
          resizeMode="cover"
          style={{ flex: 1 }}
        >
          <View style={{ flex: 0.8 }}>
            <View style={{ justifyContent: "center", alignItems: "center", paddingHorizontal: 10 }}>

              <View style={styles.inputcontainer}>

                <Image
                  style={styles.searchButton}
                  source={require("../../../assets/search.png")}
                ></Image>
                
                <TextInput
                style={styles.inputbox}
                placeholder="Search a word"
                placeholderTextColor={"white"}
                textAlign="left"
                clearButtonMode="while-editing"
               onChangeText={searchWord}
               value={newWord}
               onSubmitEditing={() => getInfo()}
              ></TextInput>  
               
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "65%",
                  marginTop: 20,
                  marginBottom: 20,
                }}
              >

                <TouchableOpacity style={styles.buttonDesign}

                  onPress={() => {
                    Keyboard.dismiss();
                    clear();
                  }}
                >
                  <Text style={styles.buttonText}>Clear All</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    speak();
                  }}
                >
                  <Image
                    style={styles.speakerButton}
                    source={require("../../../assets/speaker1.png")}
                  />
                </TouchableOpacity>
              </View>

              <View>
                <Text style={styles.textDesign}>
                  Word : {checkedWord}{" "}
                </Text>
                <Text style={styles.textDesign}>Definition : {definition} </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
  },

  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },

  buttonDesign: {
    backgroundColor: "teal",
    width: 150,
    height: 50,
    marginTop: 10,
   
    color: "white",

    borderRadius: 25,
  },
  buttonText: {
    fontSize: 25,
    color: "white",
    marginHorizontal: 5,
    alignSelf: "center",
    marginTop: 5,

  },
  speakerButton: {
    width: 50,
    height: 40,
    marginTop: 15
  },
  textDesign: {
    fontSize: 20,
    textAlign: "center",
   fontWeight:"400",
    marginTop: 10,

    color: "white"
  },
  searchButton: {
    margin: 3,
    marginTop: 12,
    marginLeft: 18,
    height: 30,
    padding: 8,
    width: 25,
    resizeMode: "center"
  },
  inputcontainer: {
    flexDirection: "row",
    alignContent: "center",
    width: "90%",
    height: 60,
    borderWidth: 3,
    borderColor: "white",
    marginTop: 80,
    borderRadius: 28,
  },
  inputbox: {
    fontSize: 25,
    color: "white",
    marginLeft: 15,
  },
  crossButton: {
    margin: 3,
    marginTop: 8,
    marginLeft: 18,
    height: 40,
    padding: 8,
    width: 25,
    resizeMode: "center"
  },
});