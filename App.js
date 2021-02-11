import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import TodoElem from "./src/components/TodoElem/TodoElem";
import NavigationContainer from "@react-navigation/native/src/NavigationContainer";
import {createStackNavigator} from "@react-navigation/stack";
import Films from "./src/components/FIlms/Films";
import Books from "./src/components/Books/Books";

const Stack = createStackNavigator();

export default function App() {
    const [todos, setTodos] = useState([
        {id: 1, text: "New Todo to Need to do 1"},

    ]);
    const [textInput, setTextInput] = useState("");
    const [showDelete, setShowDelete] = useState(0);

    const addNewTodo = () => {
        if (textInput) {
            setTodos((prev) => [...prev, {id: prev[prev.length - 1].id + 1, text: textInput}]);
            setTextInput("");
        }else {
            //Alert.alert("This input must not be empty!");
        }
    }

    const deleteTodo = (id) => {
        setTodos(prev => prev.filter(t => id !== t.id));
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Films" component={Films} />
                <Stack.Screen name="Books" component={Books} />
            </Stack.Navigator>
        </NavigationContainer>
        // <View style={styles.container}>
        //     <View style={styles.header}>
        //         <Text style={styles.header__text}>Todo List</Text>
        //     </View>
        //     <View style={styles.form}>
        //         <TextInput style={styles.input}
        //                    onChangeText={setTextInput}
        //                    value={textInput}/>
        //         <View style={styles.add}>
        //             <Button title={"+"} onPress={addNewTodo}/>
        //         </View>
        //     </View>
        //     <FlatList
        //         style={styles.todo_list}
        //         data={todos}
        //         renderItem={({ item }) => <TodoElem
        //             id={item.id}
        //             showDelete={showDelete}
        //             setShowDelete={setShowDelete}
        //             deleteTodo={deleteTodo}
        //             text={item.text}/>}
        //             keyExtractor={item => item.id.toString()}
        //     />
        //     <Text style={styles.subscribe}>Todo App By GUM</Text>
        // </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: "5%",
        paddingBottom: 25,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    header: {
        width: "100%",
        height: 100,
        marginBottom: 15,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    header__text: {
        color: "#000",
        fontSize: 26,
        fontWeight: "bold",
    },
    form: {
        width: "100%",
        marginBottom: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    input: {
        width: "85%",
        height: 40,
        padding: 5,
        paddingLeft: 15,
        borderWidth: 3,
        borderColor: "#f2f2f2",
        borderRadius: 4,
    },
    add: {
        width: 40,
        paddingVertical: 2,
    },
    todo_list: {
        width: "100%",
    },
    subscribe: {
        marginTop: 25,
        color: "#000",
    }

});
