const Cookies = require('js-cookie')
export async function getData( grade , subject){
const data = await fetch(`https://academy-backend-mu.vercel.app/api/${grade}/${subject}`)
const DataShow = await data.json()
return DataShow.data
}


export async function getCoursesUser(token){
    const user = await fetch(`https://academy-backend-mu.vercel.app/api/user`,{
        headers:{
            "Content-Type":'application/json',
            "token":token
        }
    })
    const DataUser = await user.json();
    let coursesUser = DataUser.data.courses
    let time = [];
    let courses = [];
    for(let i = 0 ; i < coursesUser.length ; i++){
        time.push(coursesUser[i].again)
        courses.push(coursesUser[i].id)
    }
    return [time,courses] 
}

