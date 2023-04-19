import { Result } from "antd";
import { Link } from "react-router-dom";
import CsButton from "../CsButton/CsButton";

const PageNotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <div className="flex justify-center">
          <Link to="/">
            <CsButton type="pr">Back Home</CsButton>
          </Link>
        </div>
      }
    />
  );
};

export default PageNotFound;
