import { shallow } from "enzyme";
import React from "react";
import GifExpertApp from "../GifExpertApp";

describe("Pruebas en <GifExpertApp />", () => {
  test("debe de mostrar el componente correctamente", () => {
    const wrapper = shallow(<GifExpertApp />);

    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar una lista de categorías", () => {
    const categories = ["One punch", "Dragon ball"];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GridGrid").length).toBe(categories.length);
  });
});
