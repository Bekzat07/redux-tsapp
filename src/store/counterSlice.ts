import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"

export const fetchTodos = createAsyncThunk(
    "counter/fetchTodos",
    async function(_,{rejectWithValue}) {
        try {
             const responce = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
          
        const data = await responce.json();
        return data;
            
        } catch (error) {
            return rejectWithValue("Server Error")
        }
       
    }
)
const initialState: {
    posts: any[];
    status: any;
    error: any;
  } = {
    posts: [],
    status: null,
    error: null,
  };
export const counterSlice = createSlice({
    name: 'post',
    initialState,
    reducers:{
        setPosts:(state,action)=>{
            state.posts=action.payload
        },
        removeTodo:(state,action)=>{
            state.posts=state.posts.filter(post=>post.id!==action.payload)
        }
    },extraReducers:{
        [fetchTodos.pending.toString()]:(state)=>{
            state.status ="Loading";
            state.error = null
        },
        [fetchTodos.fulfilled.toString()]:(state,action)=>{
           state.status="resolve";
           state.posts = action.payload;
        },
        [fetchTodos.rejected.toString()]:(state,action)=>{
            state.status="rejected";
            state.error = action.payload
        }
    }
})
export const {setPosts,removeTodo} = counterSlice.actions
export default counterSlice.reducer
