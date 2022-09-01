<template>

        <div>
          <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="Workflow">
          <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign up!</h2>

        </div>
        <form class="mt-8 space-y-6" @submit="register">
          <input type="hidden" name="remember" value="true">
          <div class="rounded-md shadow-sm">
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autocomplete="email" required autofocus class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address" v-model="user.email">
            </div>
            <div>
              <label for="username" class="sr-only">Full Name</label>
              <input id="username" name="name" type="text" required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Full name" v-model="user.name">
            </div>
            <div class="mt-4">
              <label for="password" class="sr-only">Password</label>
              <input id="password" name="password" type="password" autocomplete="current-password" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password" v-model="user.password">
            </div>
            <div>
              <label for="password2" class="sr-only">Password</label>
              <input id="password2" name="password_confirmation" type="password" autocomplete="current-password" required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password confirmation" v-model="user.password_confirmation">
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input id="conditions" name="conditions" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" required>
              <label for="conditions" class="ml-2 block text-xs text-gray-900">Agree to our Terms and Privacy Policy</label>
            </div>

            <div class="text-sm">
              <router-link :to="{name: 'Login'}" class="font-medium text-right text-indigo-600 hover:text-indigo-500">Already have an account?</router-link>
            </div>
          </div>

          <div>
            <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <!-- Heroicon name: mini/lock-closed -->
                <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                </svg>
              </span>
              Sign Up
            </button>
          </div>
        </form>

</template>



<script setup>
    import store from "../store/index.js"
    import { useRouter } from "vue-router";

    const router = useRouter()

    const user = {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    }

    function register(ev) {
        ev.preventDefault();
        store
            .dispatch("register", user)
            .then(() => {
                router.push({
                    name: "Dashboard",
                });
            })
    }
    //Asdasd0101!
    //XxaXfz27..!?/
</script>
