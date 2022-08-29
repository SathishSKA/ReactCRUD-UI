import * as React from "react";
import { Card } from "@mui/material";

export const About = () => {
  const enviroment = [
    {
      workspace: "Work Space",
      img:"https://images.pexels.com/photos/7070/space-desk-workspace-coworking.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      info: "A workspace is (often) a file or directory that allows a user to gather various source code files and resources and work with them as a cohesive unit.[1] Often these files and resources represent the complete state of an integrated development environment (IDE) at a given time, a snapshot.",
    },
    {
      workspace: "Production",
      img:"https://www.qmillwright.com/wp-content/uploads/2019/04/Manufacturing-Processes.jpg",
      info: "Manufacturing is the creation or production of goods with the help of equipment, labor, machines, tools, and chemical or biological processing or formulation. It is the essence of secondary sector of the economy.",
    },
    {
      workspace: "Assembly",
      img:"https://www.assemblymag.com/ext/resources/Issues/2020/October/POY/asb1020poy1.jpg?1601991805",
      info: "An assembly line is a manufacturing process in which interchangeable parts are added to a product in a sequential manner to create an end product. The workers and machinery used to produce the item are stationary along the line and the product moves through the cycle, from start to finish",
    },
    {
      workspace: "Packaging",
      img:"https://images.squarespace-cdn.com/content/v1/5ae8bd2f89c1723a6f6f557b/1565746365299-O2H3DBK8JHA700K2BDAO/electronics+fulfillment+packaging?format=1000w",
      info: "Packaging is the science, art and technology of enclosing or protecting products for distribution, storage, sale, and use. Packaging also refers to the process of designing, evaluating, and producing packages. ... Packaging contains, protects, preserves, transports, informs, and sells.",
    },
  ];
  return (
    <div className="about-section" >
     
      <section className="about-cards" >
      {enviroment.map(({workspace,img,info})=>(
        <Card className="about-card" sx={{ maxWidth: 345 }}>
          <h3>{workspace}</h3>
          <img className="about-img" src={img} />
          <p className="about-info">{info}</p>
        </Card>
        ))}
      </section>

    </div>
  );
};
