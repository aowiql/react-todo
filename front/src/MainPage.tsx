import Active from "./component/Active";
import Done from "./component/Done";
import Input from "./component/Input";
import Title from "./component/Title";
import "./index";

const MainPage = () => {
  return (
    <div className="mainpage">
      <Title />
      <Input />
      <div className="todolist">
        <Active />
        <Done />
      </div>
    </div>
  );
};

export default MainPage;
