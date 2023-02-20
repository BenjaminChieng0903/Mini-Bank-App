export const filteredUserByusername = (acc, username)=>{
   return acc.filter(
    (account)=> account.username === username)
}