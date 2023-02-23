export const findUserByusername = (accs, username)=>{
    return accs.find((acc)=>acc.username === username)
}