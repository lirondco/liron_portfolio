import React from "react";
import Snake from "react-simple-snake";

export default function Secret() {

  return (
    <section className="section_EN" lang="en" dir="ltr">
      <div className="body_text_EN snake_div">
        <Snake percentageWidth={65} snakeColor={"red"} appleColor={"purple"}/>
      </div>
    </section>
  );
}
