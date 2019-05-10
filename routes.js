//global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//users
const USERS = "/users";
const USERS_DETAIL = "/:id";
// It(USER_DETAIL) will works
// like /users/1
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";


// videos
const VIDEOS = "/videos";
// express can understand when it meet the ":id" as parameter 
// which can change.
// when express meet just /id
// then it will recognize it as just text
const VIDEO_DETAIL = "/:id";
const UPLOAD_VIDEO ="/:id/upload";
const EDIT_VIDEO ="/:id/edit";
// EDIT_VIDEO will works like /videos/:id/edit
const DELETE_VIDEO = "/:id/delete";


const routes={
    //global
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    //users
    users: USERS,
    userDetail: USERS_DETAIL,
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    //video
    videos: VIDEOS,
    videoDetail: VIDEO_DETAIL,
    uploadVideo: UPLOAD_VIDEO,
    editVideo: EDIT_VIDEO,
    deleteVideo: DELETE_VIDEO
};

export default routes;