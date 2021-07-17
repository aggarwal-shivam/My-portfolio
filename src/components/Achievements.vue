<template>
    <div
        class="py-4 p-st"
        :class="{
        'bg-light': !nightMode,
        'bg-dark2': nightMode,
        'text-light': nightMode,
        }"
    >
    <div class="container">
        <div
            class="text-center"
            data-aos="fade"
            data-aos-once="true"
            data-aos-duration="1000"
        >
            <span
                class="title text-center"
                :class="{ pgray: !nightMode, 'text-light': nightMode }"
                >Achievemets.</span
            >
        </div>
        <hr
            width="50%"
            :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
        />
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
            <Timeline :data="achivements" :nightMode="nightMode" />
        </div>
    </div>
</template>

<script>
import Timeline from "./helpers/Timeline";
import info from "../../info";

export default {
    name: "Achievemets",
    components : {
        Timeline,
    },
    props: {
        nightMode: {
            type: Boolean,
        },
    },
    data(){
        return{
            achievements: info.achievements
        };
    },
};
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
}
</style>