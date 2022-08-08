export default {
    port: 1337,
    dbUri: "mongodb://localhost:27017/rest-api-tutorial",
    saltWorkFactor: 10,
}

// saltWorkFactor = number of times password is being encrypted (the more, the more secure it is)