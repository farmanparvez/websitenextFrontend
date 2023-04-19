import card from "../../assets/card.svg";
import user from "../../assets/user.svg";
import plus from "../../assets/plus.svg";
import msg1 from "../../assets/msg1.svg";
import msg2 from "../../assets/msg2.svg";

const Menu = () => {
  const memu = [
    {
      icon: card,
      name: "Savings Card",
      link: "/saved-card",
      id: "/saved-card",
    },
    {
      icon: user,
      name: "My Account",
      link: "/account",
      id: "/account",
    },
    {
      icon: plus,
      name: "My Prescriptions",
      link: "/prescriptions",
      id: "/prescriptions",
    },
    { icon: plus, 
      name: "My Orders", 
      link: "/orders", 
      id: "/orders" },
    {
      icon: msg1,
      name: "Cryto Rewards",
      link: "/cryto-rewards",
      id: "/cryto-rewards",
    },
    {
      icon: msg2,
      name: "Messages",
      link: "/messages",
      id: "/messages",
    },
  ];
  return memu;
};

export default Menu;
