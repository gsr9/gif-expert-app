import "@testing-library/jest-dom";
import { GifGrid } from "../../components/GifGrid";
import { shallow } from "enzyme";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("pruebas en el componente <GifGrid />", () => {
  const category = "One punch";

  test("debe de mostrar correctamente el componente", () => {
    useFetchGifs.mockReturnValue({ data: [], loading: true });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar items cuando se cargan imágenes useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        url: "https://localhost/cualquier/cosa.png",
        title: "Cualquier cosa",
      },
      {
        id: "123",
        url: "https://localhost/cualquier/cosa.png",
        title: "Cualquier cosa",
      },
    ];
    useFetchGifs.mockReturnValue({ data: gifs, loading: false });
    const wrapper = shallow(<GifGrid category={category} />);
    const p = wrapper.find("p");
    expect(wrapper).toMatchSnapshot();
    expect(p.exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
});
