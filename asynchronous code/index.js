function func1(func2){
    setTimeout(()=>{console.log("task 1"),func2()},3000);
}

function func2(){
    console.log("task 2");
    console.log("task 3");
    console.log("task 4");
}

func1(func2);