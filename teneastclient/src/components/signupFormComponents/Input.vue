<script setup>
    const props = defineProps(['label', 'type', 'userDataType'])
    import { signupStepStore } from '@/stores/signupStepStore.js'
    const signupStore = signupStepStore()
    let validEmailError, passwordError
    function handleInput(event){
        signupStore.signupFormValues[props.userDataType] = event.target.value
        const submitButton = document.querySelector('.submit-button')
        const checkbox = document.querySelector('.agree-checkbox')
        const emailError = document.querySelector('.email-error')
        if(props.userDataType === 'email'){
            if(!signupStore.signupFormValues.email.match(/[a-zA-Z0-9]*@[a-z]*.com/)){
                emailError.classList.remove('hidden')
                validEmailError = true
            }else{
                emailError.classList.add('hidden')
                validEmailError = false
            }
        }else if(props.userDataType === "password" || props.userDataType === "confirmPassword"){
            const password = signupStore.signupFormValues.password
            const confirmPassword = signupStore.signupFormValues.confirmPassword
            const passwordInputContainer = document.querySelector('.passwords')
            if((password && confirmPassword) && (password != confirmPassword)){
                passwordInputContainer.querySelector('p').classList.remove('hidden')
                passwordError = true
            }else{
                passwordInputContainer.querySelector('p').classList.add('hidden')
                passwordError = false
            }
        }

        let allFieldsEntered = false
        const keys = Object.keys(signupStore.signupFormValues)
        for(let i = 0;i < keys.length;i++){
            if(!signupStore.signupFormValues[keys[i]]){
                allFieldsEntered = false
                break
            }

            if(i === keys.length - 1){
                allFieldsEntered = true
            }
        }
        if(allFieldsEntered && checkbox.checked && !validEmailError && !passwordError){
            submitButton.disabled = false
        }else{
            submitButton.disabled = true
        }
    }
</script>

<template>
    <div class="flex flex-col mb-10 mr-10">
        <label class="mb-1 text-m text-slate-700 font-semibold">{{ label }}</label>
        <input @input="handleInput" :type="type" :class="label==='EMAIL' ? 'border border-slate-400 w-96 h-10 px-3' : 'border border-slate-400 w-72 h-10 px-3'">
    </div>
</template>