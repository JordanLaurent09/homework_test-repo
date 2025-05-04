const axios = require("axios");

const PATH = 'http://localhost:3000';

describe("My custom SingerAPI is testing", () => {
  test("POST /newSinger should create a new singer and return json with this singer properties if success", async () => {
    const res = await axios.post(`${PATH}/newSinger`, {

        headers: {
            'Authorization': 'Basic 934762837423nh23men23o3492'
        },

        data: 
            {
                name: "Samantha",
                surname: "Fox",
                genre: "Pop",
                country: "Great Britain"
            }
    });

    expect(res.status).toBe(200);
    expect(res.data).toHaveProperty("name");
    expect(res.data).toHaveProperty("surname");
    expect(res.data).toHaveProperty("genre");
    expect(res.data).toHaveProperty("country");
    expect(res.data.name).toEqual("Samantha");
  });

  test("POST /newSinger should return created singer json if success", async () => {
    const authToken = { 'Authorization': 'Basic 934762837423nh23men23o3492' };
    const singer = {
      name: "Kurt",
      surname: "Cobain",
      genre: "Grunge",
      country: "USA",
    };
    const res = await axios.post(`${PATH}/newSinger`, {headers: authToken, data: singer});

    expect(res.data).toEqual(singer);
  });

  test("POST /newSinger with no authentification token should return code 403", async () => {
    const singer = {
        name: "Britney",
        surname: "Spears",
        genre: "Pop",
        country: "USA"
    };

    const res = await axios.post(`${PATH}/newSinger`, {data: singer});
    expect(res.data.status).toBe(403);

  });

  test("POST /newSinger with wrong or broken auth token should return code 403", async () => {
    const authToken = { 'Authorization': 'ALERT! WRONG TOKEN!' };
    const singer = {
        name: "David",
        surname: "Duchovny",
        genre: "alternative",
        country: "USA"
    };
    const res = await axios.post(`${PATH}/newSinger`, {headers: authToken, data: singer});
    expect(res.data.status).toBe(403);
  })

  test("POST /newSinger with no body or with empty body should return status code 400", async () => {
    const res = await axios.post(`${PATH}/newSinger`);
    expect(res.data.status).toBe(400);
  });

  test("POST /auth with login and password should return status code 200 and authentification token", async () => {
    const res = await axios.post(`${PATH}/auth`, {
      login: "Xenofont",
      password: "ancient_greek_mercenary",
    });

    expect(res.status).toBe(200);
    expect(res.data).toHaveProperty("token");
  });

  test("POST /auth with no credentials should return status code 400", async () => {
    const res = await axios.post(`${PATH}/auth`);
    expect(res.data.status).toBe(400);
  });

  test("POST /newAlbum should create new album instance and return it properties to us", async () => {
    const res = await axios.post(`${PATH}/newAlbum`, {
      id: 101,
      title: "Thriller",
      singer: "Michael Jackson",
      songs: [
        "Wanna be starting somethin",
        "Billie Jean",
        "Thriller",
        "P.Y.T.",
      ],
      year: 1982,
      genre: "Disco",
      label: "Epic Records",
    });
    expect(res.status).toBe(200);
    expect(res.data).toHaveProperty("id");
    expect(res.data).toHaveProperty("title");
    expect(res.data).toHaveProperty("singer");
    expect(res.data).toHaveProperty("songs");
    expect(res.data).toHaveProperty("year");
    expect(res.data).toHaveProperty("genre");
    expect(res.data).toHaveProperty("label");
    expect(res.data.songs).toContain("Billie Jean");
  });

  test("POST /newAlbum should create new album object and return the same json", async () => {
    const madonnaAlbum = {
      id: 6,
      title: "Like a prayer",
      singer: "Madonna",
      songs: ["Like a prayer", "Cherish"],
      year: 1989,
      genre: "Pop",
      label: "Sire Records",
    };

    const res = await axios.post(`${PATH}/newAlbum`, madonnaAlbum);
    expect(res.status).toBe(200);
    expect(res.data).toEqual(madonnaAlbum);
    expect(res.data.songs).toContain("Like a prayer");
  });

  test("POST /newSong should create new song instance and return it object to us", async () => {
    const song = {
      id: 21,
      title: "A girl like you",
      composer: "Edwyn Collins",
      writer: "Edwyn Collins",
      genre: "Alt. Rock",
      year: 1994,
    };

    const res = await axios.post(`${PATH}/newSong`, song);
    expect(res.status).toBe(200);
    expect(res.data).toEqual(song);
    expect(res.data.title).toEqual('A girl like you');
  });
});
