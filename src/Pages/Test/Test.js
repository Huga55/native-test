import React, {useEffect, useState} from "react";
import {View, Text, Animated, StyleSheet, Easing} from "react-native";


const Test = () => {
    const [isReady, setIsReady] = useState(false);
    const arr = ["Test1111"];

    const newArr = [1, 2];



    let animatedValue = [];
    let animatedStyle = [];
    let animated= [];

    newArr.map((ar) => {
        animated.push(new Animated.Value(0));
    });
    // animated[0] = new Animated.Value(0);
    // animated[1] = new Animated.Value(0);

    useEffect(() => {
        setInterval(() => {
            // Animated.timing(animated[0], {
            //     toValue: 400,
            //     duration: 3000,
            // }).start();
            //
            // Animated.timing(animated[1], {
            //     toValue: 400,
            //     duration: 3000,
            //     delay: 1000,
            // }).start();

            animated.map((an, index) => {
                Animated.timing(an, {
                    toValue: 400,
                    duration: 3000,
                    delay: index * 1000,
                }).start();
            });



            // for(let i = 0; i < arr.length; i++) {
            //     animatedValue[i] = new Animated.Value(0);
            // }
            animatedValue[0] = new Animated.Value(0);
            animatedValue.map((a) => {
                Animated.timing(a, {
                    toValue: 300,
                    duration: 3000,
                    easing: Easing.bounce,
                }).start();
            });
            // Animated.sequence([
            //     Animated.parallel(allAnims),
            // ]).start();


            setIsReady(true);
        }, 2000)
    }, [])



    if(!isReady) {
        return(
            <View style={styles.container}>
                <Text>Loading.....</Text>
            </View>
        );
    }


    let animatedStyle1 = [];

    animatedStyle1[0] = {top: animated[0]};
    animatedStyle1[1] = {top: animated[1]};
    animatedValue.map((a, index) => animatedStyle[index] = {top: a} );
    return(
        <View style={styles.container}>
            {
                newArr.map((ar, index) =>
                {return (<Animated.View key={index} style={[styles.text, animatedStyle1[index] ]}><Text>{ar}</Text></Animated.View>)})
            }
            {/*<Animated.View style={[styles.text, animatedStyle1[0] ]}><Text>test1</Text></Animated.View>*/}
            {/*<Animated.View style={[styles.text, animatedStyle1[1] ]}><Text>Textttt</Text></Animated.View>*/}
            {
                arr.map((e, index) => {
                    return(
                        <Text>test</Text>//<Animated.View key={index} style={[styles.text, {top: animatedStyle[index]} ]}><Text>{e}2</Text></Animated.View>
                    );
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        position: "absolute",
        top: -100,
    },
    text_hide: {
        opacity: 1,
    }
});

export default Test;