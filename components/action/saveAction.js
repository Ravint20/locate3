export const APP_DATA = 'APP_DATA';
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
                    dispatch({type: APP_DATA, appData:appData,loading:false});
                }, 2000);

            })
            .catch((error) => {
                console.error(error);
                dispatch({
                    type: APP_DATA,
                    
                });
                throw error;
            });

    };
}
