import React, { useState } from "react";

export default function SidebarItem({
  img,
  activeImg,
  title,
  active,
  activeLink,
  handleLinkClick,
}) {
  const isActive = activeLink === active;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const fontWeight = isActive ? "bold" : "normal";
  const color = isActive || isHovered ? "#1785C6" : "#6B7487";

  return (
    <a
      href={active}
      className={isActive ? "active" : ""}
      onClick={() => handleLinkClick(active)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={isActive || isHovered ? activeImg : img}
        style={{ width: "19.89px", height: "19.89px" }}
      />
      <font className="sidebar-text" style={{ fontWeight, color }}>
        {title}
      </font>
    </a>
  );
}
