import React from "react";

function FooterItem({ title, content }) {
  return (
    <div>
      <h2 className="Footer-itemTitle">{title}</h2>
      <div>
        {content.map((item, i) => {
          return (
            <p className="footer-itemSub" key={i}>
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default FooterItem;
