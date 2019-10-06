import Auth from "../auth";


it('expects Auth to return 409 - conflict', async () => {
    const res = await Auth.checkEmail("abc@gmail.com");
    expect(res.status).toBe(409)
});

it('expects Auth to return 200 - OK', async () => {
    const res = await Auth.checkEmail("okjool2012@gmail.com");
    expect(res.status).toBe(200)
});