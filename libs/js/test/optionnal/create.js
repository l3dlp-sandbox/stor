const stor = require("../../stor");

const Stor = new stor.Stor("http://90.109.132.10:8080", "password");

let users = Stor.Table("test");

it("Create", async () => {
    const response = await users.Create({name: 'jean'});
    const body = await response.text();
    expect(body).toEqual("{\"n\":1,\"nModified\":1,\"ok\":1}");
});