export const CalBalance = (user) =>{
   return user.movements.reduce((acc, item)=>{
        return acc + item;
    }, 0)
}