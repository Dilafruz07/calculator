import React, { useState } from "react";
import { Button, Image, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const arrButtons = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0',]
const arrOperators = ['+', '-', 'x', '/', '=']
const arrOperators2 = ['C', '+/-', '%']

export function App() {
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [operator, setOperator] = useState('');
    const [result, setresult] = useState('0');

    console.log('1', firstNumber);
    console.log('2', secondNumber);
    console.log('3', operator);

    const checkOperator = (a: string, b: string, opr: string) => {
        switch (opr) {
            case '+':
                return +a + +b;
            case '-':
                return +a - +b;
            case 'x':
                return +a * +b;
            case '/':
                return +a / +b;
            default:
                break;
        }
    };

    const operatorPress = (opr: string) => {
        if (arrOperators.includes(opr)) {
            basicOperator(opr);
        } else if (arrOperators2.includes(opr)) {
            specialOperator(opr);
        }
    };

    const specialOperator = (opr: string) => {
        switch (opr) {
            case 'C':
                setFirstNumber('');
                setSecondNumber('');
                setOperator('');
                setresult('0');
                break;
            case '+/-':
                if (firstNumber) {
                    setFirstNumber((num) => (parseFloat(num) * -1).toString());
                    setresult((parseFloat(firstNumber) * -1).toString());
                } else if (secondNumber) {
                    setSecondNumber((num) => (parseFloat(num) * -1).toString());
                    setresult((parseFloat(secondNumber) * -1).toString());
                }
                break;
            case '%':
                if (firstNumber) {
                    const percentage = (parseFloat(firstNumber) / 100).toString();
                    setFirstNumber(percentage);
                    setresult(percentage);
                } else if (secondNumber) {
                    const percentage = (parseFloat(secondNumber) / 100).toString();
                    setSecondNumber(percentage);
                    setresult(percentage);
                }
                break;
            default:
                break;
        }
    }


    const numberPress = (num: string) => {
        if (!secondNumber && !operator) {
            if (num === '.' && firstNumber === '') {
                setFirstNumber('0.');
                setresult('0.');
            }
            else if (num === '.' && firstNumber.includes('.')) {
                return;
            }
            else {
                setFirstNumber(firstNumber + num);
                setresult(firstNumber + num);
            }

        } else if (operator) {
            if (num === '.' && secondNumber == '') {
                setSecondNumber('0.');
                setresult('0.');
            }
            else if (num === '.' && secondNumber.includes('.')) {
                return;
            }
            else {
                setSecondNumber(secondNumber + num);
                setresult(secondNumber + num);
            }
        }
    };

    const basicOperator = (opr: string) => {
        if (firstNumber && secondNumber) {
            const oprResult = checkOperator(firstNumber, secondNumber, operator);
            setresult(String(oprResult));
            setFirstNumber(String(oprResult));
            setSecondNumber('');
            setOperator('');
        }
        console.log(opr);
        setOperator(opr);
    };

    const deleteLastDigit = () => {
        if (!secondNumber && !operator) {
            if (firstNumber.length === 1) {
                setFirstNumber('');
                setresult('');
            } else {
                setFirstNumber(firstNumber.slice(0, -1));
                setresult(firstNumber.slice(0, -1));
            }
        } else if (operator) {
            if (secondNumber.length === 1) {
                setSecondNumber('');
                setresult('');
            } else {
                setSecondNumber(secondNumber.slice(0, -1));
                setresult(secondNumber.slice(0, -1));
            }
        }
    };
    return (
        <SafeAreaView style={styles.area}>
            <View style={styles.result}>
                <Text style={styles.resultT}>{result}</Text>
            </View>
            <View style={styles.actionArea}>
                <View style={styles.oprButtArea}>
                    <View style={styles.specialOprArea}>
                        {arrOperators2.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.specialOprButton}
                                    onPress={() => operatorPress(item)}>
                                    <Text style={styles.buttonText}>{item}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                    <View style={styles.buttons}>
                        {arrButtons.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.button}
                                    onPress={() => numberPress(item)}>
                                    <Text style={styles.buttonText}>{item}</Text>
                                </TouchableOpacity>
                            );
                        })}
                        <View style={styles.deleteButtArea} >
                            <TouchableOpacity  style={styles.deleteButt} onPress={deleteLastDigit}>
                                <Image source={require('./src/icon/delete.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.oprArea}>
                    {arrOperators.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={styles.oprButt}
                                onPress={() => operatorPress(item)}>
                                <Text style={styles.buttonText}>{item}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: 'pink'
    },
    result: {
        backgroundColor: 'pink',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginHorizontal: 15,
        marginTop: 40,
        flex: 0.6,
    },
    resultT: {
        color: '#4a1e3eu',
        fontSize: 90,
    },
    buttons: {
        backgroundColor: 'pink',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '80%',
    },
    button: {
        backgroundColor: '#700353',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        width: '27%',
        height: 75,
        margin: 6,
    },
    oprButt: {
        backgroundColor: '#572a54',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        width: '95%',
        height: 75,
        margin: 6,
    },
    buttonText: {
        color: 'white',
        fontSize: 30,
    },
    actionArea: {
        flexDirection: 'row',
        width: '100%',
        flex: 1,
    },
    oprArea: {
        backgroundColor: 'pink',
        alignItems: 'center',
        marginLeft: 10,
        width: '22%',
    },
    specialOprArea: {
        backgroundColor: 'pink',
        flexDirection: 'row',
        marginTop: 100,
        marginLeft: 5,
        width: '80%',
    },
    specialOprButton: {
        backgroundColor: '#a34e9e',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        width: '27%',
        height: 75,
        margin: 7,
    },
    oprButtArea: {
        marginLeft: 5,
        marginRight: -75,
        marginTop:-100,
    },
    deleteButtArea: {
        backgroundColor: '#700353',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        width: '27%',
        height: 75,
        margin: 7,
    },
    deleteButt:{
        marginTop:1,
        marginRight:5,
    },
})