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


export const signupStepStore = defineStore('signupStep', () => {
  const step = ref(1)
  const stepsArray = [FirstPage, SecondPage, ThirdPage, FourthPage, FifthPage, SixthPage, SeventhPage, EigthPage]
  const steps = ref(stepsArray.length)
  const typeOfInvestor = ref('')

  return { step, steps, stepsArray, typeOfInvestor }
})
