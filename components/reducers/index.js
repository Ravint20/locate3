import {combineReducers} from 'redux';

import {
    ADD_PROJECTS
} from "../action/index";


import APP_DATA from '../action/saveAction';

let initialStateProjects = {
    projects: [],
    loading: true
};

const getProjectsReducer = (state = initialStateProjects, action) => {
    switch (action.type) {
        case ADD_PROJECTS:
            state = Object.assign({}, state, {projects: action.projects, loading: action.loading});
            return state;
        default:
            return state;
    }
};

let initialStateProjects = {
    appData: [],
    loading: true
};

const getAppData = (state = initialStateProjects, action) => {
    switch (action.type) {
        case PP_DATA:
            state = Object.assign({}, state, {appData: action.appData, loading: action.loading});
            return state;
        default:
            return state;
    }
};


const rootReducer = combineReducers({
    getProjectsReducer: getProjectsReducer,
    getAppData:getAppData,

});

export default rootReducer;
