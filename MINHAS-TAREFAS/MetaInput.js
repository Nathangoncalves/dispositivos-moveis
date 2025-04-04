import { View, Button, TextInput, StyleSheet } from "react-native";
import { rotulo_btn_cadastro_meta, rotulo_input_meta } from '../mensagens';
import React, { useState } from "react";

function MetaInput(props) {
  const [inputMetaText, setInputMetaText] = useState('');

  function metaInputHandler(inputText) {
    setInputMetaText(inputText);
  }

  function addMetaHandler() {
    props.onAddMeta(inputMetaText);
    setInputMetaText('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.inputText}
          placeholder={rotulo_input_meta}
          onChangeText={metaInputHandler}
          value={inputMetaText}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button title={rotulo_btn_cadastro_meta} onPress={addMetaHandler} />
      </View>
    </View>
  );
}

export default MetaInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1
  },
  inputWrapper: {
    width: '65%',
  },
  buttonWrapper: {
    width: '30%',
  },
  inputText: {
    borderColor: '#cccccc',
    borderWidth: 1,
    padding: 8
  }
});
