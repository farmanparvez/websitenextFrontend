import { Trans } from "react-i18next";
import { useState, useEffect } from "react";
import { AutoComplete, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { searchDrugs } from "../../redux/actions/medicineAction";

//component are use in multple place { header, homepage hero section }
const AutoCompleteComponent = ({ t, componentLocation }) => {
  const [search, onSearch] = useState(null);
  const { popularDrugSearch, isPopularDrugSearchLoading } = useSelector(
    ({ medicine }) => medicine
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSelect = (data) => navigate(`/drug/${data}`);

  useEffect(() => {
    var timer;
    if (search?.length >= 3) {
      timer = setTimeout(() => {
        const param = new URLSearchParams();
        param.append("stext", `${search}`);
        dispatch(searchDrugs(param));
        onSearch("");
      }, 500);
    }
    return () => clearTimeout(timer);
  }, [search, dispatch]);

  return (
    <>
      {componentLocation === "header" ? (
        <AutoComplete
          className="autocomplete"
          allowClear
          style={{
            width: "327px",
            borderRadius: "4px",
          }}
          onSelect={onSelect}
          onSearch={(text) => onSearch(text)}
          options={popularDrugSearch}
          notFoundContent="Not Found"
        >
          <Input
            className="rounded-[4px] w-[327px]"
            placeholder={t("Search Drug")}
            prefix={<SearchOutlined className="text-csTextColor-2" />}
          />
        </AutoComplete>
      ) : (
        <AutoComplete
          className="bg-csYellow md:w-[100%] rounded-[4px] z-10"
          //   allowClear
          onSelect={onSelect}
          onSearch={(text) => onSearch(text)}
          options={popularDrugSearch}
          notFoundContent="Not Found"
        >
          <Input.Search
            prefix={<SearchOutlined className="text-csTextColor-2" />}
            className="bg-csYellow md:w-[60%] rounded-[4px] z-10"
            placeholder={t("Search by medication name")}
            enterButton={
              <span className="text-csTextColor-1 ">
                <Trans i18nKey={"Find Savings"}>
                  <code>Find Savings</code>
                </Trans>
              </span>
            }
            size="large"
            onSearch={(text) => onSearch(text)}
            loading={isPopularDrugSearchLoading}
          />
        </AutoComplete>
      )}
    </>
  );
};

export default AutoCompleteComponent;
