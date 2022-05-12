<template>
    <div>
        <v-card width="25vw" class="rounded-lg" style="height: 350px">
                        <v-card-text>{{$props.item.name}}</v-card-text>

            <v-img height="20vh" :src="$props.item.img"></v-img>

            <v-card-title>{{$props.item.title}}</v-card-title>
            <v-card-text>{{$props.item.description}}</v-card-text>
            <div class="text-center">
                <v-rating v-model="$props.item.rating" readonly color="yellow darken-3"
                          background-color="grey darken-1"/>
            </div>
            <v-card-actions class="d-flex justify-center">
                <v-btn
                        v-if="$isLoggedin"
                        :to="{ name: $props.item.link , params: {id: $props.item.id}} " color="orange" text>
                    {{$t('request.orderThis')}}
                </v-btn>
                <v-btn v-if="!$isLoggedin" @click="redirectIfNotLoggedIn()" color="orange" text>
                    {{$t('request.orderThis')}}
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "service-item",
        props: ["item"],
        data() {
            return {};
        },
        methods: {
            goto(link) {
                this.$router.push({name: link});
            }
        }
    };
</script>

<style scoped>
    .b-btn {
        width: 150px;
        border-radius: 10px;
        background: #93d98f;
        color: white;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
    }
</style>
