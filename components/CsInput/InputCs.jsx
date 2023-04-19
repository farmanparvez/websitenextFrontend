import { Input } from "antd";
// import "./style.css";

const Inputcs = (props) => {
  return (
    <div className="csInput">
      <Input
        {...props}
        className={`bg-csTextColor-9 h-10 text-white ${props?.csClassName}`}
      />
    </div>
  );
};

export default Inputcs;
