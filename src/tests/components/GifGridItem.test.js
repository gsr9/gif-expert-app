import { shallow } from "enzyme";
import React from "react";
import { GifGridItem } from "../../components/GifGridItem";

const title = "Título";
const url = "https://i1.wp.com/aprendergratis.es/wp-content/uploads/2018/11/udemy-cursos-gratis.png?resize=1200%2C630&ssl=1";
const wrapper = shallow(<GifGridItem title={title} url={url} />);

describe("Pruebas en el componente <GifGridItem />", () => {
  test("debe de mostrar correctamente el componente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de tener un párrafo con el title", () => {
    const p = wrapper.find("p");

    expect(p.text().trim()).toBe(title);
  });

  test("debe de tener una imagen con src y title", () => {
    const img = wrapper.find("img");

    const { src, alt } = img.props();

    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("debe de tener animate__fadeIn", () => {
    const div = wrapper.find("div");

    expect(div.hasClass("animate__fadeInUp")).toBe(true);
  });
});
