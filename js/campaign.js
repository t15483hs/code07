function campaignNumber(age,sex,married){
    var user = {
        age:age,
        sex:sex,
        married:married
    }
    if (user.age >=30 && user.sex == 1 && user.married == true){
        return(1)
    }
    else if(user.age <30 && user.age >= 20 && user.sex == 0 && user.married ==false){
       return(2)
    }
    else if(user.sex == 0 && user.married == true){
        return(3)
    }
    else{
        return(4)
    }
}