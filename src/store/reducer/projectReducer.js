const initState={
    projects:[
        {id:1, title:"Calendar App", content:"Its a calendar App"},
        {id:2, title:"Blog App", content:"Its a blog App"},
        {id:3, title:"Todo App", content:"Its a todo App"}
    ]
}

const projectReducer=(state=initState,action)=>{
    switch (action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state
        default:
            return state
    }
}

export default projectReducer