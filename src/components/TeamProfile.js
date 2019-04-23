import React from "react";
import { Title, Subtitle, Image, Columns, Column } from "bloomer";

const TeamProfile = ({ data }) => {
  const { name, role, link, message } = data;
  const imgClass = link.type !== "none" ? `icon_${link.type}` : "";
  return (
    <div className="profile">
      <Columns>
        <Column isSize="1/2">
          <Title isSize="5">{name}</Title>
          <Subtitle isSize="6">{role}</Subtitle>
          <a href={link.to} blank>
            <div className={imgClass} />
          </a>
        </Column>
        <Column isSize="1/2">
          <p>{message}</p>
        </Column>
      </Columns>
    </div>
  );
};

export default TeamProfile;
