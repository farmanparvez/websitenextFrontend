import { Button } from "antd";
// import "./style.css";

const CsButton = (props) => {

  return (
    <Button
      {...props}
      type="primary"
      className={props.type === "pr" ? `pr ${props?.className}` : "sc"}
    >
      {props.children}
    </Button>
  );
};

export default CsButton;
