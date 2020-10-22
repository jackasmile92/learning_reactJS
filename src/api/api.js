import * as axios from 'axios';

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "14dce060-facd-4221-90f7-da62342b9b10"
    }
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`
            , { withCredentials: true })
            .then(response => {
                return response.data;
            })

    },
    unfollow(id) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data;
        });
    },

    follow(id) {
        return instance.post(`follow/${id}`).then(response => {
            return response.data;
        });

    }
};


export const profileAPI = {
    getProfileInfo(userId) {
        return instance.get(`profile/` + userId).then(response => {
            return response.data;
        });
    },
    getStatus(userId){
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status){
        return instance.put(`profile/status/`,{ status : status});
    }
}


export const authAPI = {
    me(){
        return instance.get(`auth/me`).then(response => {
            return response.data;
        });
            
    }
}