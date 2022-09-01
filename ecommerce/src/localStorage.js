let arr=[]
export const saveData = (data)=>{
    arr.push(data)
    localStorage.setItem("cardData",JSON.stringify(arr))
}
