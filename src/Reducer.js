
export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    // REMOVE after finished developing
    // token: "BQD5-jnVaYk81U7eSfXMuHQ3dINswbTpsX63Lerv4f4U4rcMp7YuWdSG9J8x5fcywY61hzRAk2EsXRnYquTKK4zpqxtEsqV5Vlziz2YW64p4VaRWkPm10z5pdWFkOT4dL9JCPE0wVBWd4IZFiK-SbMSGqcZomSrvhfy69se4g3szhADgwlvjilNr4PBUYP8A0NWSBF9eqaqL4uajWS5mr2iK",
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };

        case "SET_TOP_ARTISTS":
            return {
              ...state,
              top_artists: action.top_artists,
            };

        case "SET_PLAYING":
            return {
              ...state,
              playing: action.playing,
            };
        
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };

        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }

        default:
            return state;
    }
}

export default reducer;