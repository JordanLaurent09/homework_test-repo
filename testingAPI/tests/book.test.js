const axios = require('axios');


const BASE_URL = 'https://restful-booker.herokuapp.com';

describe('Books API', () => {
        // работает только в Postman, а в тестах jest возвращает только 418 код ошибки по непонятным причинам
        test('POST /booking should create new booking and return it back to us', async () => {
            const newBooking = {
                firstname : "Jim",
                lastname : "Brown",
                totalprice : 111,
                depositpaid : true,
                bookingdates : {
                    checkin : "2018-01-01",
                    checkout : "2019-01-01"
                },
                additionalneeds : "Breakfast"
            };
            const res = await axios.post(`https://restful-booker.herokuapp.com/booking`, newBooking);
            expect(res.status).toBe(200);
            expect(res.data).toEqual(newBooking)
        });

        test('GET /booking should return all bookings from database', async () => {
            const res = await axios.get(`${BASE_URL}/booking`);
            expect(res.status).toBe(200);
            expect(Array.isArray(res.data)).toBe(true);
            res.data.forEach(booking => {
                expect(booking).toHaveProperty('bookingid');
            });
        })

        test('GET /booking?query should return chosen bookings ids by it firstname, lastname, checkin, checkout', async() => {
            const res = await axios.get(`${BASE_URL}/booking?firstname=Jim&&lastname=Brown`);
            expect(res.status).toBe(200);
            expect(Array.isArray(res.data)).toBe(true);
            res.data.forEach(booking => {
                expect(booking).toHaveProperty('bookingid');
            });
        })

        // работает только в Postman, а в тестах jest возвращает только 418 код ошибки по непонятным причинам
        test('GET /booking/:{bookingid} should return specific booking by it id', async() => {
            const res = await axios.get(`${BASE_URL}/booking/100`);
            expect(res.status).toBe(200);
        })

        // работает только в Postman, а в тестах jest возвращает только 418 код ошибки по непонятным причинам
        test('PUT /booking/:{bookingid} should allows to update chosen booking by it id', async() => {
            const updatingBooking = {
                firstname : "Tommy",
                lastname : "Vercetti",
                totalprice : 111,
                depositpaid : true,
                bookingdates : {
                    checkin : "2018-01-01",
                    checkout : "2019-01-01"
                },
                additionalneeds : "Money"
            };
            const res = await axios.put(`${BASE_URL}/booking/100`, updatingBooking, {
                headers: {
                    "Authorization": "Basic YWRtaW46cGFzc3dvcmQxMjM="
                }
            });
            expect(res.status).toBe(200);
        })

        // работает только в Postman, а в jest возвращает код ошибки 405
        test('PATCH /booking/:{bookingid} should partial update booking data', async () => {
            const updatedFields = {
                firstname: "Sammy",
                lastname: "Petersonn"
            };
            const res = await axios.patch(`${BASE_URL}/booking/101`, updatedFields, {
                headers: {
                    "Authorization": "Basic YWRtaW46cGFzc3dvcmQxMjM="
                }
            });
            expect(res.status).toBe(200);
        })

        // работает только в Postman, а в jest возвращает код ошибки 405
        test('DELETE /booking/:{bookingid} should delete specified booking', async () => {
            const res = await axios.delete(`${BASE_URL}/booking/100`, {
                headers: {
                    "Authorization": "Basic YWRtaW46cGFzc3dvcmQxMjM="
                }
            });
            expect(res.status).toBe(201);
        })
})