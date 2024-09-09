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
import { useUserStore } from './userStore.js'


export const signupStepStore = defineStore('signupStep', () => {
  const step = ref(1)
  const stepsArray = [FirstPage, SecondPage, ThirdPage, FourthPage, FifthPage, SixthPage, SeventhPage, EigthPage, NinthPage]
  const signupFormInputs = ['firmName', 'firstName', 'lastName', 'email', 'phoneNumber', 'countryOfResidence', 'password']
  const signupFormValues = ref({})
  signupFormInputs.forEach(input => {
    signupFormValues[input] = ref('')
  })
  const steps = ref(stepsArray.length)
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
        const userStore = useUserStore()
        userStore.user = res.user
        userStore.loggedIn = true
      }
    })
    .catch(err => {
      this.step = this.step + 1
      console.error(err)
    })
  }

  return { step, steps, stepsArray, typeOfInvestor, signupFormValues, $signup }
})
