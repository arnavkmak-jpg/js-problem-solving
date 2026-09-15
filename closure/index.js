function createCounter(){

    let count = 0;

    function increment(){
        count++;
        console.log(count);
    }

    function getCount(){
        return count;
    }

    return{increment,getCount};
}

// const counter = createCounter();

// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

// console.log(counter.getCount());


function createScore(){
    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`${points}pts added`)
    }

    function decreaseScore(points){
        score -= points;
        console.log(`${points}pts removed`)
    }

    function getScore(){
        return score;
    }

    return {increaseScore,decreaseScore,getScore};
}

const realScore = createScore();

realScore.increaseScore(3);
realScore.increaseScore(15);
realScore.decreaseScore(4);

console.log(realScore.getScore());

