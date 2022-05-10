import axios from 'axios';
import store from './../store/index';
import {EventBus} from "../app";

export default function setup() {
    let messages = store.getters.getMessagesNotifyShown;
    axios.interceptors.request.use(function (config) {
        config.params = {...config.params, local: localStorage.getItem('locale')};
        store.commit('startBar');
        // console.log('Request interceptors: ', config);
        return config;
    }, function (error) {
        // this.showErrorMessage(error.response.data.message);
        store.commit('stopBar');
        // console.log('Request error: ' , error);
        return Promise.reject(error);
    });

    axios.interceptors.response.use(function (response) {
        store.commit('stopBar');
        let loginStatus = localStorage.getItem("token") ? localStorage.getItem("token") : false;
        // console.log('Response interceptors : ', response)
        // console.log('Response status : ', response.data.status)
        if (response.headers['content-type'].includes('pdf')
            || response.headers['content-type'].includes('image')) {
            if (loginStatus) {
                return Promise.resolve(response);
            }
        }
        if (parseInt(response.data.status) !== 200) {
            // this.showErrorMessage(error.response.data.message);
            return Promise.reject(response);
        }
        if (response.data.message == "success response" || response.status == 200) {
            if (loginStatus) {
                if (!messages.includes(response.data.message) && response?.config?.method != 'get') {
                    // EventBus.showSuccessMessage(response.data.message);
                    store.commit('appendMessagesNotifyShown' , response.data.message);
                }
            }
        }
        return Promise.resolve(response)
    }, function (error) {
        if (error.response
            && error.response.data
            && error.response.data.status
            && parseInt(error.response.data.status) === 400) {
            EventBus.showErrorMessage(error.response.data.message);
        }
        if (error.response
            && error.response.data
            && error.response.data.status
            && parseInt(error.response.data.status) === 301) {
            EventBus.showErrorMessage('there is an error thorough request');
        }
        if (parseInt(error.response.status) === 422) {
            Object.values(error.response.data).forEach(items => {
                items.forEach(item => {
                    EventBus.showErrorMessage(item);
                })
            })
        }
        if (parseInt(error.response.status) === 401) {
            EventBus.showErrorMessage(error.response.data.message);
        }
        store.commit('stopBar');
        // console.log('Response error: ', error);
        return Promise.reject(error);
    })
}
