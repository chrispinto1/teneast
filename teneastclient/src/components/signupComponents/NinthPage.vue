<script setup>
  import { signupStepStore } from '@/stores/signupStepStore.js'
 
  const signupStore = signupStepStore()

  function finished(){
    if(signupStore.step === signupStore.steps -1){
      signupStore.step--
    }
}
</script>
<template>
    <h1 class="font-semibold text-4xl mb-3">Please share any additional information that may help our evaluation process.</h1>
    <p class="mb-16">(e.g., LinkedIn profile, investing experience or goals)</p>
    <textarea class="border-2 border-black w-[50%] h-32 p-5 mb-10" placeholder="Write your response here"></textarea>
    <div class="flex flex-col mb-10">
        <label class="mb-1 text-m text-slate-700 font-semibold text-xl">Who Referred you to 10 East?</label>
        <input type="text" class="border border-slate-400 w-[50%] h-10 px-3">
    </div>
    <button @click="() => signupStore.step++" class="rounded-lg bg-yellow-600 py-3 px-6 text-white" type="submit">Submit</button>
</template>