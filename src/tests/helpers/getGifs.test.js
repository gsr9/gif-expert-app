import { getGifs } from "../../helpers/getGifs";

describe("Pruebas sobre el helper getGifs fetch", () => {
  test("debe de traer 10 elementos", async () => {
    const gifs = await getGifs("One punch");

    expect(gifs.length).toBe(10);
  });


  test("debe de traer 10 elementos", async () => {
    const gifs = await getGifs("");

    expect(gifs.length).toBe(0);
  });


});
