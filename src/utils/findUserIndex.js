export const findUserIndexByusername = (accs, username)=>{
    return accs.find((acc, index)=>{
    if(acc.username === username){
        return index
    }
})
}