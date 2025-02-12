import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

const PasswordSchema = Yup.object().shape({
    PassLength: Yup.number()
        .min(4, "Should be minimum of 4 chars")
        .max(16, "Can only accept max of 16 chars")
        .required("A length is of 4 - 16 is required")
})

export default function Proj3() {

    const [password, setpassword] = useState('')
    const [isPassGen, setisPassGen] = useState(false)
    const [lowercase, setLowercase] = useState(true)
    const [uppercase, setUppercase] = useState(false)
    const [useNums, setuseNums] = useState(false)
    const [useSymbols, setuseSymbols] = useState(false)

    const genPassString = (passwordLength: number) => {
        let characterList = ''
        const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz'
        const digitChars = '0123456789'
        const specialChars = '!@#$%^&*()_+'

        if (uppercase) {
            characterList += upperCaseChars
        }
        if (lowercase) {
            characterList += lowerCaseChars
        }
        if (useNums) {
            characterList += digitChars
        }
        if (useSymbols) {
            characterList += specialChars
        }

        const passwordFinal = createPass(characterList, passwordLength)
        setpassword(passwordFinal)
        setisPassGen(true)
    }

    const createPass = (characters: string, passwordLength: number) => {
        let result = ''
        for (let i = 0; i < passwordLength; i++) {
            const characterIndex = Math.round(Math.random() * characters.length)
            result += characters.charAt(characterIndex)
        }
        return result
        console.log("Pass created")
    }

    const resetPass = () => {
        setpassword('')
        setisPassGen(false)
        setLowercase(true)
        setUppercase(false)
        setuseNums(false)
        setuseSymbols(false)
    }

    return (
        <ScrollView keyboardShouldPersistTaps="handled">
            <SafeAreaView style={styles.appContainer}>
                <View style={styles.formContainer}>
                    <Text style={styles.title}>Password Generator</Text>
                    <Formik
                        initialValues={{passwordLength:'' }}
                        validationSchema={PasswordSchema}
                        onSubmit={values => {
                            console.log(values);
                            genPassString(+values.passwordLength) // the + sign basically casts it to a number type.
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            isValid,
                            handleChange,
                            handleSubmit,
                            handleReset
                            /* and other goodies */
                        }) => (
                            <>
                            <View style={styles.inputWrapper}>
                                <View style={styles.inputColumn}>
                                    <Text style={styles.heading}>Password Length</Text>
                                    {touched.passwordLength && errors.passwordLength && (
                                    <Text style={styles.errorText}>
                                        {errors.passwordLength}
                                    </Text>
                                )};
                                </View>
                                <TextInput 
                                    style={styles.inputStyle}
                                    value={values.passwordLength}
                                    onChangeText={handleChange('passwordLength')}
                                    placeholder='Ex.8'
                                    keyboardType='numeric'
                                    />
                            </View>
                            <View style={styles.inputWrapper}>
                                <Text style={styles.heading}>Include lowercase</Text>
                                <BouncyCheckbox
                                useBuiltInState={false}
                                isChecked={lowercase}
                                onPress={() => setLowercase(!lowercase)}
                                >
                                </BouncyCheckbox>
                            </View>
                            <View style={styles.inputWrapper}>
                                <Text style={styles.heading}>Include Uppercase</Text>
                                <BouncyCheckbox
                                useBuiltInState={false}
                                isChecked={lowercase}
                                onPress={() => setUppercase(!uppercase)}
                                >
                                </BouncyCheckbox>
                            </View>
                            <View style={styles.inputWrapper}>
                                <Text style={styles.heading}>Include Numbers</Text>
                                <BouncyCheckbox
                                useBuiltInState={false}
                                isChecked={lowercase}
                                onPress={() => setuseNums(!useNums)}
                                >
                                </BouncyCheckbox>
                            </View>
                            <View style={styles.inputWrapper}>
                                <Text style={styles.heading}>Include Symbols</Text>
                                <BouncyCheckbox
                                useBuiltInState={false}
                                isChecked={lowercase}
                                onPress={() => setuseSymbols(!useSymbols)}
                                >
                                </BouncyCheckbox>
                            </View>
                            

                            <View style={styles.formActions}>
                                <TouchableOpacity
                                disabled={!isValid}
                                style={styles.primaryBtn}
                                onPress={() => handleSubmit()}
                                >
                                    <Text style={styles.primaryBtnTxt}>Generate password</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                style={styles.secondaryBtn}
                                onPress={() => {
                                    handleReset();
                                    resetPass();
                                }}
                                >
                                    <Text>Reset</Text>
                                </TouchableOpacity>
                            </View>
                            </>
                        )}
                    </Formik>
                </View>
                {isPassGen? (
                    <View style={[styles.card, styles.cardElevated]}>
                        <Text style={styles.subTitle}>Result:</Text>
                        <Text style={styles.description}>Long press to copy</Text>
                        <Text selectable={true} style={styles.generatedPassword}>{password}</Text>
                    </View>
                ) : null}
            </SafeAreaView>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
    },
    formContainer: {
        margin: 8,
        padding: 8,
    },
    title: {
        fontSize: 32,
        fontWeight: '600',
        marginBottom: 15,
    },
    subTitle: {
        fontSize: 26,
        fontWeight: '600',
        marginBottom: 2,
    },
    description: {
        color: '#758283',
        marginBottom: 8,
    },
    heading: {
        fontSize: 15,
    },
    inputWrapper: {
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    inputColumn: {
        flexDirection: 'column',
    },
    inputStyle: {
        padding: 8,
        width: '30%',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#16213e',
    },
    errorText: {
        fontSize: 12,
        color: '#ff0d10',
    },
    formActions: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    primaryBtn: {
        width: 120,
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 8,
        backgroundColor: '#5DA3FA',
    },
    primaryBtnTxt: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
    },
    secondaryBtn: {
        width: 120,
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 8,
        backgroundColor: '#CAD5E2',
    },
    secondaryBtnTxt: {
        textAlign: 'center',
    },
    card: {
        padding: 12,
        borderRadius: 6,
        marginHorizontal: 12,
    },
    cardElevated: {
        backgroundColor: '#ffffff',
        elevation: 1,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#333',
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    generatedPassword: {
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 12,
        color: '#000'
    },
})