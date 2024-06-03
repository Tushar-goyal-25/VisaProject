// RECORD CLASS FOR QUESTIONS FOR FIGURING OUT THE TYPE OF USER

class Question{
    constructor(ques, opt1, opt2, opt3, opt4){
        this.ques = ques;
        this.opt1 = opt1;
        this.opt2 = opt2;
        this.opt3 = opt3; 
        this.opt4 = opt4;

    }
    getQuestion(){
        return this.ques;
    }
    getOptions(){
        return [this.opt1, this.opt2, this.opt3, this.opt4];
}
    
}

//CREATE QUESTIONS  

function createQuestion(strin, opt1, opt2,opt3,opt4){
    const question = new Question(strin, opt1, opt2, opt3, opt4);
    console.log(question.getQuestion());
    const options = (question.getOptions());
    options.forEach(option => {
        console.log(option)
    });


}

createQuestion("How old are you?", "18-28", "29-40", "40-59", "60+");