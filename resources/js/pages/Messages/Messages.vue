<template>
    <div id="messagesContainer">
        <v-row>
            <v-col sm="12" md="6" lg="4" xl="4">
                <v-toolbar class="elevation-0">
                    <v-btn
                            rounded
                            color="indigo"
                            class="white--text"
                            @click="mode = 'create';this.currentMessage = {department_info: {}}"
                    >
                        <v-icon color="white" class="mx-1">{{ icons.mdiMessagePlus }}</v-icon>
                        {{ $t('general.newMessage') }}
                    </v-btn>
                </v-toolbar>
                <v-tabs grow v-model="tab" background-color="accent-1">
                    <v-tabs-slider></v-tabs-slider>

                    <v-tab href="#tab-1">{{$t('general.incomingMessages')}}</v-tab>
                    <v-tab href="#tab-2">{{$t('general.outgoingMessages')}}</v-tab>

                    <v-tab-item value="tab-1">
                        <v-card class="elevation-0">
                            <div class="messagesList">
                                <div class="text-center" v-if="isLoading" width="100%" style="height: 50vh;">
                                    <v-progress-circular :width="7" :size="70" color="primary"
                                                         indeterminate></v-progress-circular>
                                </div>
                                <v-list v-if="!isLoading" three-line style="cursor: pointer;">
                                    <template v-for="(item, i) in inbox">
                                        <v-divider v-if=" i > 0" :key="i + 'd'" :inset="item.inset"></v-divider>
                                        <v-list-item :key="i + 'm'" @click="mode = 'view'; loadMessage(item.id)">
                                            <v-list-item-content>
                                                <v-list-item-title>{{ item.text.substring(0, 20) }}</v-list-item-title>
                                                <v-list-item-subtitle>{{ item.user_info.user_name }}
                                                </v-list-item-subtitle>
                                                <v-list-item-subtitle>{{ formatDate(item.created_at) }}
                                                </v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </template>
                                </v-list>
                                <div
                                        class="text-center"
                                        width="100%"
                                        v-if="inbox.length == 0 && !isLoading"
                                >{{$t('general.noMessages')}}
                                </div>
                            </div>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item value="tab-2">
                        <v-card class="elevation-0">
                            <div class="messagesList">
                                <div class="text-center" v-if="isLoading" width="100%" style="height: 50vh;">
                                    <v-progress-circular :width="7" :size="70" color="primary"
                                                         indeterminate></v-progress-circular>
                                </div>
                                <v-list v-if="!isLoading" three-line style="cursor: pointer;">
                                    <template v-for="(item, i) in sentMessages">
                                        <v-divider v-if=" i > 0" :key="i + 'd'" :inset="item.inset"></v-divider>
                                        <v-list-item :key="i + 'm'" @click="mode = 'view'; loadMessage(item.id)">
                                            <v-list-item-content>
                                                <v-list-item-title>{{ item.text.substring(0, 20) }}</v-list-item-title>
                                                <v-list-item-subtitle>{{ item.user_info.user_name }}
                                                </v-list-item-subtitle>
                                                <v-list-item-subtitle>{{ formatDate(item.created_at) }}
                                                </v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </template>
                                </v-list>
                                <div
                                        class="text-center"
                                        width="100%"
                                        v-if="sentMessages.length == 0 && !isLoading"
                                >{{$t('general.noMessages')}}
                                </div>
                            </div>
                        </v-card>
                    </v-tab-item>
                </v-tabs>
            </v-col>
            <v-col sm="12" md="6" lg="8" xl="8">
                <div
                        v-if="mode == 'view' && currentMessage.id"
                        id="thread"
                        class="px-2 mb-2 d-flex flex-column"
                >
                    <v-card width="55%" class="ma-2" outlined>
                        <v-card-title>
                            <p v-text="currentMessage.user_info.user_name" class="ma-0 pa-0"></p>:
                        </v-card-title>
                        <v-card-text>
                            <p v-text="currentMessage.text"></p>
                            <previewer
                                    v-for="image in currentMessage.image"
                                    :src="image.image"
                                    :key="image.id"
                                    class="ma-3"
                                    width="20vw"
                                    :height="150"
                            />
                        </v-card-text>
                        <v-card-actions class="d-flex justify-space-between">
                            <small>{{ formatDate(currentMessage.created_at) }}</small>
                            <v-icon>{{ icons.mdiMessage }}</v-icon>
                        </v-card-actions>
                    </v-card>
                    <v-card
                            v-for="(item, i) in currentMessage.response_for_current_message"
                            :key="i"
                            class="ma-2 align-self-end"
                            width="55%"
                            outlined
                    >
                        <v-card-title>
                            <p v-text="item.user_info.user_name" class="ma-0 pa-0"></p>:
                        </v-card-title>
                        <v-card-text>
                            <p v-text="item.text"></p>
                            <previewer
                                    v-for="image in currentMessage.image"
                                    :src="image.image"
                                    :key="image.id"
                                    class="ma-3"
                                    width="10vw"
                                    :height="50"
                            />
                        </v-card-text>
                        <v-card-actions class="d-flex justify-space-between">
                            <small>{{ formatDate(item.created_at) }}</small>
                            <v-icon>{{ icons.mdiReply }}</v-icon>
                        </v-card-actions>
                    </v-card>
                </div>
                <div class="px-10 pt-12">
                    <v-col cols="3">

                        <v-select
                                v-if="mode == 'create'"
                                :items="departments"
                                :error-messages="departmentErrors"
                                v-model="department"
                                :label="$t('general.department')"
                                item-value="id"
                                outlined
                                dense
                                :item-text="$i18n.locale == 'ar' ? 'name_ar' : 'name'"
                        />
                    </v-col>
                    <v-text-field
                            v-model="newMessage"
                            :prepend-icon="icons.mdiPaperclip "
                            :append-outer-icon="newMessage ? icons.mdiSend : null"
                            filled
                            :clear-icon="icons.mdiCloseCircle"
                            clearable
                            :rules="[v => !!v || $requiredRules]"
                            :label="$t('general.message')"
                            type="text"
                            @click:append-outer="sendMessage"
                            @click:clear="newMessage = ''"
                            @click:prepend=" addFiles "
                    ></v-text-field>
                    <v-file-input
                            multiple
                            style="display: none;"
                            id="selectFiles"
                            chips
                            show-size
                            counter
                            v-model="files"
                            :label="$t('general.selectFiles')"
                            rounded
                            outlined
                            dense
                            accept="application/pdf, image/*"
                    />
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import {required} from "vuelidate/lib/validators";
    import previewer from "./../../components/imagePreview";

    import {
        mdiEmailSend,
        mdiCloseCircle,
        mdiMessagePlus,
        mdiReply,
        mdiMessage,
        mdiSend,
        mdiPaperclip
    } from "@mdi/js";

    export default {
        components: {
            previewer
        },
        data() {
            return {
                icons: {
                    mdiEmailSend,
                    mdiCloseCircle,
                    mdiMessagePlus,
                    mdiReply,
                    mdiMessage,
                    mdiSend,
                    mdiPaperclip
                },
                tab: "tab-1",
                sentMessages: [],
                inbox: [],
                departments: [],
                department: "",
                userDepartmentID: null,
                newMessage: null,
                currentMessage: {department_info: {}},
                mode: "create",
                files: [],
                isLoading: false
            };
        },
        validations: {
            newMessage: {
                required
            },
            department: {
                required
            },

        },
        methods: {
            loadMessages() {
                this.isLoading = true;

                axios
                        .post(`/api/getAuthDetails?atype=1`)
                        .then(({data}) => {
                            this.sentMessages = data.data.messages;
                        })
                        .catch(err => {
                            console.warn(err)
                        })
                        .finally(() => {
                            this.isLoading = false;
                        });

                let departmentID = this.$store.state.user.department_id;
                this.userDepartmentID = this.$store.state.user.department_id;
                if (departmentID)
                    axios.get(`/api/department/${departmentID}`).then(({data}) => {
                        this.inbox = data.data.messages;
                    });

                if (this.currentMessage.id) this.loadMessage(this.currentMessage.id);
            },
            loadDefaults() {
                axios.get(`/api/department`)
                        .then(res => {
                            this.departments = res.data.data.filter(item => item.id != this.userDepartmentID);
                        })
                        .catch(err => {
                            console.warn(err)
                        });
            },
            loadMessage(id) {
                this.currentMessage = {};
                axios
                        .get(`/api/Message/${id}`)
                        .then(res => {
                            this.currentMessage = res.data.data;
                        })
                        .catch(err => {
                            console.warn(err)
                        });
            },
            sendMessage() {
                this.$v.$touch();
                if (this.$v.$invalid) return;
                let form = new FormData();
                form.append(`text`, this.newMessage);
                form.append(`has_images`, this.files.length ? 1 : 0);
                if (this.department) form.append(`department_id`, this.department);
                this.files.forEach(file => form.append("images[]", file));
                if (this.mode == 'view' && this.currentMessage.id)
                    form.append(`response_message_id`, this.currentMessage.id);
                axios
                        .post(`/api/Message`, form)
                        .then(res => {
                            this.$notify({text: this.$t("general.success"), type: "success"});
                            this.loadMessages();
                            this.resetForm();
                        })
                        .catch(err => {
                            console.warn(err)
                        });
            },
            resetForm() {
                this.department = "";
                this.newMessage = "";
                this.image = null;
                this.$v.$reset();
            }
            ,
            addFiles() {
                document.getElementById("selectFiles").click();
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.loadMessages();
            });
        }
        ,
        mounted() {
            this.loadDefaults();
        }
        ,
        computed: {
            departmentErrors() {
                const errors = [];
                if (!this.$v.department.$dirty) return errors;
                !this.$v.department.required && errors.push(this.$t("validate.required"));
                return errors;
            },
            newMessageErrors() {
                const errors = [];
                if (!this.$v.newMessage.$dirty) return errors;
                !this.$v.newMessage.required && errors.push(this.$t("validate.required"));
                return errors;
            }
        }
    }
    ;
</script>

<style scoped>
    #messagesContainer {
        width: 100%;
        overflow-x: hidden;
    }

    .messagesList {
        height: 70vh;
        overflow-y: scroll;
    }

    #thread {
        overflow-y: scroll;
    }

    #reply-message {
        height: 20vh;
    }

    * {
        scrollbar-width: thin;
        scrollbar-color: #8bd886;
    }
</style>
