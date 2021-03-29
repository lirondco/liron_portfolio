import React from "react";
import Snake from "react-simple-snake";

export default function Sod() {

  return (
    <section className="section_HE" lang="he" dir="rtl">
      <div className="body_text_HE snake_div">
          
        <Snake percentageWidth={65} snakeColor={"red"} appleColor={"purple"}/>
      </div>
    </section>
  );
}
