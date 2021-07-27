import { useState,useRef,useEffect } from "react";
import { EducationData, WorkData } from "./educationandwork";
import * as Unicons from "@iconscout/react-unicons";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styles from "./qualification.module.css";

export default function Qualifications() {
  const [qualification, setState] = useState("education");
  const placeholder=useRef(null);
  const workTimeline=useRef(null);
  const educationTimeline=useRef(null);
  useEffect(() => {
    console.log(workTimeline.current.style.visibility);
    
var heightOfPlaceholder= workTimeline.current.style.visibility === "hidden" ? educationTimeline.current.getBoundingClientRect().height : workTimeline.current.getBoundingClientRect().height;

    if(placeholder.current){
      placeholder.current.style.height =`calc(${heightOfPlaceholder}px + 15px)`}
    
  }, [qualification])

  return (
    <div className={styles.container}>
      <div className={styles.qualificationHeader}>
        <h1 className="">Qualifications</h1>
        <p className={styles.qualificationHeaderText}>My personal journey</p>
      </div>
      <div className={styles.qualificationSwitcher}>
        <button
          className={styles.educationSwitchButton}
          style={
            qualification === "education"
              ? { color: "hsl(250, 57%,53%)" }
              : null
          }
          onClick={() =>
            setState((qualification) => (qualification = "education"))
          }
        >
          <Unicons.UilGraduationCap />
          <h4>Education</h4>
        </button>
        <button
          style={
            qualification === "work" ? { color: "hsl(250, 57%,53%)" } : null
          }
          className={styles.workSwitchButton}
          onClick={() => setState((qualification) => (qualification = "work"))}
        >
          <Unicons.UilBriefcase />
          <h4>Work</h4>
        </button>
      </div>
      <div className={styles.qualifications}>
        <div ref={educationTimeline} 
          className={styles.qualificationEducation}
          style={
            qualification === "education"
              ? { visibility: "visible", opacity: 1 }
              : { visibility: "hidden", opacity: 0 }
          }
        >
          <VerticalTimeline>
            {EducationData().map((data) => (
              <VerticalTimelineElement
                style={{ margin: "0" }}
                className="vertical-timeline-custom-line vertical-timeline vertical-timeline--two-columns"
                key={data.title}
                contentStyle={{
                  background: "hsl(250, 57%,53%)",
                  color: "white",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid hsl(250, 57%,53%) ",
                }}
                dateClassName={styles.verticalDate}
                date={data.date}
                iconStyle={{ background: "hsl(250, 57%,53%)" }}
                // icon={<Unicons.UilBook color="hsl(250, 57%,53%)" />}
              >
                <h4 className="vertical-timeline-element-subtitle">
                  {data.title}
                </h4>
                <p style={{ marginTop: 0 }}>{data.university}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div ref={workTimeline}
          className={styles.qualificationWork}
          style={
            qualification === "work"
              ? { visibility: "visible", opacity: 1 }
              : { visibility: "hidden", opacity: 0 }
          }
        >
          <VerticalTimeline>
            {WorkData().map((data) => (
              <VerticalTimelineElement
                key={data.title}
                className="vertical-timeline--two-columns"
                contentStyle={{
                  background: "hsl(250, 57%,53%)",
                  color: "white",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid hsl(250, 57%,53%) ",
                }}
                dateClassName={styles.verticalDate}
                date={data.date}
                iconStyle={{ background: "hsl(250, 57%,53%)" }}
                // icon={<Unicons.UilConstructor color="hsl(250, 57%,53%)" />}
              >
                <h4 className="vertical-timeline-element-subtitle">
                  {data.title}
                </h4>
                <p style={{ marginTop: 0 }}>{data.location}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div ref={placeholder} className={styles.placeholder}></div>
      </div>
    </div>
  );
}
