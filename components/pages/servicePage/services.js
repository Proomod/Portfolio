import styles from "./Service.module.css";
import * as Unicons from "@iconscout/react-unicons";

import Service from "../../services/service";

export default function Services() {
  const myServices = [
    {
      id: 1,
      name: "FrontEnd\nDeveloper",
      icon: <Unicons.UilArrow />,
      description: [
        "I develop user Interface",
        "Responsive web apps",
        "professional looking webPages",
      ],
    },
    {
      id: 2,
      name: "Backend\nDeveloper",
      icon: <Unicons.UilArrow />,
      description: [
        "Api consumption",
        "DataBase design",
        "validation and authentication",
      ],
    },
    {
      id: 4,
      name: "Mobile\nDeveloper",
      icon: <Unicons.UilArrow />,
      description: [
        "Create wonderful app with good UI",
        "Use flutter and native approaach",
        "lorem ipsum dolor sit amet",
      ],
    },
    {
      id: 3,
      name: "ML\nEngineer",
      icon: <Unicons.UilArrow />,
      description: [
        "create and train different models ",
        "lorem ipsum dolor",
        "Something Interesting should be here",
      ],
    },
  ];

  return (
    <div className="container">
      <h1 className={styles.serviceHeader}>Services</h1>
      <p className={styles.serviceSubHeader}>What I offer</p>

      <div className={styles.services}>
        {myServices.map((data) => (
          <Service data={{ ...data }} key={data.id} />
        ))}
      </div>
    </div>
  );
}
