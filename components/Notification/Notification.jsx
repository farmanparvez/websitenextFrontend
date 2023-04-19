import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openNotificationWithIcon } from "../../utils/notification";
import { reset } from "../../redux/slice/globalSlice";

const Notification = ({ i18n }) => {
  const { isMessage, isNotification, status } = useSelector(({ global }) => global)
  const dispatch = useDispatch();
  const msg = i18n.resolvedLanguage === 'en' ? isMessage?.en : isMessage?.sp 
  
  useEffect(() => {
    if(isNotification) openNotificationWithIcon(status, msg)
    return () => dispatch(reset())
    // eslint-disable-next-line
  },[isNotification])
  return
};

export default Notification;
