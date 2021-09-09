<template>
<div class="bg-gray-100">

    <div class="container mx-auto my-5 p-5">
        <div class="md:flex no-wrap md:-mx-2 ">

            <div class="bg-white p-3 w-full shadow-sm rounded-sm">
                <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                    <span clas="text-green-500">
                        <!-- <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg> -->
                    </span>
                    <span class="tracking-wide">About</span>
                </div>
                <div class="text-gray-700">
                    <div class="grid md:grid-cols-2 w-full text-sm">
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">Title:</div>
                            <div class="px-4 py-2">{{performanceReview.title}}</div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">Reviewee :</div>
                            <div class="px-4 py-2">
                                    <span v-for="reviewee in  performanceReview.reviewees" :key="reviewee.id">
                                        {{reviewee.name}},
                                    </span>
                            </div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">Reviewers:</div>
                            <div class="px-4 py-2">
                                    <span v-for="reviewer in  performanceReview.reviewers" :key="reviewer.id">
                                        {{reviewer.name}},
                                    </span>
                            </div>
                        </div>

                    </div>
                </div>
                <button class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Show
                    Full Information</button>
            </div>

        </div>
    </div>
</div>
</template>

<script>
import {
    performanceReviews
} from '@/api/performanceReviews';
export default {

    data: function () {
        return {
            performanceReview: {}
        };
    },
    mounted() {
        this.performanceReview = performanceReviews.find(perfRev => perfRev.id == this.$route.params.id)

    }

}
</script>

<style>
:root {
    --main-color: #4a76a8;
}

.bg-main-color {
    background-color: var(--main-color);
}

.text-main-color {
    color: var(--main-color);
}

.border-main-color {
    border-color: var(--main-color);
}
</style>
