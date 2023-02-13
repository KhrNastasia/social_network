const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS"

let initialState = {
  // users: [
  //   { id: 1, followed: false,fullName:'Nastya' , status:'Hello, Im ok', location:{city: 'Minsk', country: 'Belarus'}},
  //   { id: 2, followed: true,fullName:'Sasha' , status:'Im not okay', location:{city: 'Moscow', country: 'Russia'}},
  //   { id: 3, followed: false,fullName:'Oleg' , status:'im so good', location:{city: 'Kiev', country: 'Ukrain'}},
  // ]
};

const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW: 
        return {
            ...state,
            users: state.users.map( u => {
                if (u.id === action.userId){
                    return {...u, followed: true}
                }
                return u;
            })
        }
    case UNFOLLOW:
        return{
            ...state,
            users: state.users.map( u => {
                if (u.id === action.userId){
                    return {...u, followed: false}
                }
                return u;
            })
        }
    case SET_USERS:
        return {
            ...state,
            users: [...state.users, ...action.users]
        }
    default:
      return state;
  }
};

export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};

export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};

export const setUserAC = (users) => {
    return {
        type: SET_USERS,
        users,
    }
}

export default userReducer;

