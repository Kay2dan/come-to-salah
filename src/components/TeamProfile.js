import React from "react";
import { Title, Subtitle, Image, Columns, Column } from "bloomer";

const TeamProfile = ({ data }) => {
  const { name, role, link } = data;
  const imgClass = link.type !== "none" ? `icon_${link.type}` : "";
  console.log("imgClass: ", name, role, link, imgClass);
  return (
    <div className="profile">
      <Columns>
        <Column isSize="1/2">
          <Title>{name}</Title>
          <Subtitle>{role}</Subtitle>
          <a href={link.to}>
            <div
              isSize="24x24"
              className={imgClass}
              style={{ width: "28px", height: "28px" }}
            />
          </a>
        </Column>
        <Column isSize="1/2">
          <p>
            Lorem ipsum dolor sit amet, sed graeci accusamus ei. Nec reque
            utamur delectus no, partem apeirian sea ei. Facilis accumsan
            consectetuer no his, eum id omnis modus doming. Mea te saepe nostrud
            gloriatur. Meis velit elaboraret ex ius, cum debet nobis aliquando
            ex.
          </p>
        </Column>
      </Columns>
    </div>
  );
};

export default TeamProfile;
