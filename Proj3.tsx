import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import * as Yup from 'yup'

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

    const genPassString = (passwordLength: number)=>{
        let characterList = ''
        const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz'
        const digitChars = '0123456789'
        const specialChars = '!@#$%^&*()_+'

        if(uppercase){
            characterList += upperCaseChars
        }
        if(lowercase){
            characterList += lowerCaseChars
        }
        if(useNums){
            characterList += digitChars
        }
        if(useSymbols){
            characterList+= specialChars
        }

        const passwordFinal = createPass(characterList, passwordLength)
        setpassword(passwordFinal)
        setisPassGen(true)
    }
    
    const createPass = (characters: string, passwordLength: number)=>{
        let result = ''
        for(let i = 0; i < passwordLength; i++) {
            const characterIndex = Math.round(Math.random() * characters.length)
            result += characters.charAt(characterIndex)
        }
        return result
        console.log("Pass created")
    }

    const resetPass = ()=> {
        setpassword('')
        setisPassGen(false)
        setLowercase(true)
        setUppercase(false)
        setuseNums(false)
        setuseSymbols(false)
    }

    return (
    <View>
      <Text>Proj3</Text>
    </View>
  )
}

const styles = StyleSheet.create({})