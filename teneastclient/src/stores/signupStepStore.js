import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import FirstPage from '../components/signupComponents/FirstPage.vue'
import SecondPage from '../components/signupComponents/SecondPage.vue'
import ThirdPage from '../components/signupComponents/ThirdPage.vue'
import FourthPage from '../components/signupComponents/FourthPage.vue'
import FifthPage from '../components/signupComponents/FifthPage.vue'
import SixthPage from '../components/signupComponents/SixthPage.vue'
import SeventhPage from '../components/signupComponents/SeventhPage.vue'
import EigthPage from '../components/signupComponents/EigthPage.vue'
import NinthPage from '@/components/signupComponents/NinthPage.vue'
import FinishedSignup from '@/components/signupComponents/FinishedSignup.vue'
import { userStore } from './userStore.js'


export const signupStepStore = defineStore('signupStep', () => {
  const step = ref(1)
  const stepsArray = [FirstPage, SecondPage, ThirdPage, FourthPage, FifthPage, SixthPage, SeventhPage, EigthPage, NinthPage, FinishedSignup]
  const signupFormInputs = ref(['firmName', 'first_name', 'last_name', 'email', 'phoneNumber', 'countryOfResidence', 'password', 'confirmPassword', 'agree'])
  const signupFormValues = ref({})
  signupFormInputs.value.forEach(input => {
    signupFormValues[input] = ref('')
  })
  const steps = ref(stepsArray.length - 1)
  const typeOfInvestor = ref('')

  function $signup(event) {
    event.preventDefault()
    const formData = this.signupFormValues
    formData['username'] = this.signupFormValues.email
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(res => {
      if(res.token){
        this.step = this.step + 1
        const userStoreData = userStore()
        userStoreData.user = res.user
        userStoreData.loggedIn = true
      }
    })
    .catch(err => {
      this.step = this.step + 1
      console.error(err)
    })
  }

    function handleInput(event, userDataType){
      this.signupFormValues[userDataType] = event.target.value
      let allFieldsEntered = false
      const keys = this.signupFormInputs
      for(let i = 0;i < keys.length;i++){
          if(!this.signupFormValues[keys[i]]){
              allFieldsEntered = false
              break
          }
          if(i === keys.length - 1){
              allFieldsEntered = true
          }
      }
      console.log(userDataType)
      if(userDataType === 'email'){
        validateEmail(this.signupFormValues.email)
      }else if(userDataType === "password" || userDataType === "confirmPassword"){
        validatePassword(this.signupFormValues.password, this.signupFormValues.confirmPassword)
      }
      console.log(allFieldsEntered)
      if(allFieldsEntered){
        const emailValid = validateEmail(this.signupFormValues.email)
        const passwordsMatch = validatePassword(this.signupFormValues.password, this.signupFormValues.confirmPassword)
        const submitButton = document.querySelector('.submit-button')
        console.log(emailValid, passwordsMatch)
        if(!emailValid && !passwordsMatch){
          console.log('not disabled')
          submitButton.disabled = false
        }else{
          console.log('disabled')
          submitButton.disabled = true
        }
      }
    }

    function validateEmail(emailValue){
      const emailErrorEl = document.querySelector('.email-error')
      let validEmailError
      if(!emailValue.match(/[a-zA-Z0-9]*@[a-z]*.com/)){
          emailErrorEl.classList.remove('hidden')
          validEmailError = true
      }else{
          emailErrorEl.classList.add('hidden')
          validEmailError = false
      }
      return validEmailError
    }

    function validatePassword(passwordValue, confirmationValue){
      let passwordError
      const passwordInputContainer = document.querySelector('.passwords')
      if((passwordValue && confirmationValue) && (passwordValue != confirmationValue)){
          passwordInputContainer.querySelector('p').classList.remove('hidden')
          passwordError = true
      }else{
          passwordInputContainer.querySelector('p').classList.add('hidden')
          passwordError = false
      }

      return passwordError
    }
  return { step, steps, stepsArray, typeOfInvestor, signupFormValues, signupFormInputs, $signup, handleInput, validateEmail, validatePassword}
})
