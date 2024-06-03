import QuestionComponent from "./components/Question";

// RECORD CLASS FOR QUESTIONS FOR FIGURING OUT THE TYPE OF USER
class Question {
  constructor(ques, opt1, opt2, opt3, opt4) {
    this.ques = ques;
    this.opt1 = opt1;
    this.opt2 = opt2;
    this.opt3 = opt3;
    this.opt4 = opt4;
  }
  getQuestion() {    // GETS THE QUESTIONS
    return this.ques;
  }
  getOptions() {   // GETS THE OPTIONS
    return [this.opt1, this.opt2, this.opt3, this.opt4];
  }
}


const App = () => {
  const question1 = new Question(
    "What is your primary consideration when making a large purchase (e.g., car, appliance)?",
    "Functionality and necessity",
    "Best value for money",
    "Brand reputation and luxury",
    "Latest trends and modern features"
);

const question2 = new Question(
    "How often do you eat out at restaurants?",
    "Rarely, we prefer home-cooked meals",
    "Occasionally, but only with discounts or deals",
    "Frequently, we enjoy fine dining experiences",
    "Often, we like trying new places in the city"
  );

  const question3 = new Question(
    "When planning a vacation, what is your priority?",
    "Family-friendly activities and accommodations",
    "Affordable options and discounts",
    "Luxury resorts and exclusive experiences",
    "Popular urban destinations with lots to explore"
  );

  const question4 = new Question(
    "How do you approach grocery shopping?",
    "Buy in bulk for the whole family",
    "Look for the best deals and use coupons",
    "Purchase high-quality and organic products",
    "Buy what we need for the week, focusing on fresh and trendy items"
  );

  const question5 = new Question(
    "What is your spending habit for clothing?",
    "Practical and durable clothes for the family",
    "Shop during sales and at discount stores",
    "Designer brands and high-end fashion",
    "Stylish and current fashion trends"
  );

  const question6 = new Question(
    "How do you manage household expenses?",
    "Share and allocate expenses among family members",
    "Strict budgeting and tracking of every expense",
    "Flexible budgeting with a focus on quality",
    "Spend as needed with some attention to budget"
  );

  const question7 = new Question(
    "What type of home do you prefer?",
    "Spacious with enough room for everyone",
    "Affordable and within a tight budget",
    "Large and luxurious with premium amenities",
    "Modern, compact, and in an urban area"
  );

  const question8 = new Question(
    "How important is saving and investing to you?",
    "Important to secure the family’s future",
    "Extremely important, every penny counts",
    "Important, but not at the expense of enjoying life",
    "Moderately important, prefer to balance saving and spending"
  );

  const question9 = new Question(
    "How old are you?",
    "18-28",
    "29-40",
    "41-59",
    "60+"
  );

    const question10 = new Question(
    "What is your average monthly spend?",
    "Less than £1000",
    "£1000 - £3000",
    "£3000 - £5000",
    "More than £5000"
);

  return (
    <div>
      <QuestionComponent question={question1} />
      <QuestionComponent question={question2} />
      <QuestionComponent question={question3} />
      <QuestionComponent question={question4} />
      <QuestionComponent question={question5} />
      <QuestionComponent question={question6} />
      <QuestionComponent question={question7} />
      <QuestionComponent question={question8} />
      <QuestionComponent question={question9} />
      <QuestionComponent question={question10} />
    </div>
  );
};

export default App;
