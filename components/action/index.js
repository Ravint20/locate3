export const ADD_PROJECTS = 'ADD_PROJECTS';
export function getProjects() {

    const URL = "http://api-scada.senzmate.com:9014/" + "project";

    return (dispatch) => {
        
        return fetch(URL,
            {
                headers: {
                   // Authorization: 'Bearer ' + store.getState().postLoginReducer.accessToken
                }
            })

            .then((response) => response.json())
            .then((responseJson) => {
                setTimeout(() => {
                    const projects = responseJson.content;
                    dispatch({type: ADD_PROJECTS, projects: projects,loading:false});
                }, 2000);

            })
            .catch((error) => {
                console.error(error);
                dispatch({
                    type: ADD_USER,
                    accessToken: null,
                    tokenType: {},
                    refreshToken: null,
                    expiresIn: {},
                    scope: {},
                    authorities: [],
                    userName:null
                });
                throw error;
            });

    };
}
