const Create=(project)=>{

    return(dispatch,getState,{getFirestore,getFirebase})=>{
        
        const firestore= getFirestore();
        const profile=getState().firebase.profile;
        const authorId=getState().firebase.auth.uid;
        
        firestore.collection('Project').add({
            ...project,
            authorFirstName:profile.firstName,
            authorLastName:profile.lastName,
            authorId,
            createdAt:new Date()
        }).then(()=>{
            dispatch({
                type:'CREATE_PROJECT',
                project
            })
        }).catch((err)=>{
            dispatch({
                type:'CREATE_PROJECT_ERROR',
                err
            })
        })
    }
}

export default Create