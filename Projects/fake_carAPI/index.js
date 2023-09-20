const { v4: uuidv4 } = require("uuid");
fake_cars = [
    {
        car_id: uuidv4(),
        car_name: "2024 Honda Civic",
        car_type: "Sedan",
        car_brand: "Honda",
        engine_type: "turbocharged and intercooled DOHC 16-valve inline-4",
        engine_power: "180 hp @ 6000 rpm",
        price: "$29,295",
        img: "https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg?crop=1xw:0.9997727789138833xh;center,top&resize=980:*",
    },
    {
        car_id: uuidv4(),
        car_name: "2024 Mercedes-Benz E-Class",
        car_type: "Coupe",
        car_brand: "Mercedes",
        engine_type: "turbocharged and intercooled DOHC 24-valve inline-6",
        engine_power: "375 hp @ 5800 rpm",
        price: "$67,000",
        img: "https://hips.hearstapps.com/hmg-prod/images/2019-mercedes-benz-e-class-coupe-1548703839.jpg?crop=1xw:0.9997727789138833xh;center,top&resize=980:*",
    },
    {
        car_id: uuidv4(),
        car_name: "2024 Chevrolet Corvette",
        car_type: "Sports Car",
        car_brand: "Chevrolet",
        engine_type: "turbocharged and intercooled DOHC 24-valve inline-6",
        engine_power: "495 hp @ 6450 rpm",
        price: "$67,895",
        img: "https://hips.hearstapps.com/hmg-prod/images/2019-chevrolet-corvette-1548707003.jpg?crop=1xw:1xh;center,top&resize=980:*",
    },
    {
        car_id: uuidv4(),
        car_name: "2024 Porsche 718 Boxster",
        car_type: "Convertible",
        car_brand: "Porsche",
        engine_type: "DOHC 24-valve flat-6",
        engine_power: "394 hp @ 7000 rpm",
        price: "$72,050",
        img: "https://hips.hearstapps.com/hmg-prod/images/2019-porche-718-boxster-1558114648.jpg?crop=1xw:0.9997727789138833xh;center,top&resize=980:*",
    },
    {
        car_id: uuidv4(),
        car_name: "2024 Chrysler Pacifica",
        car_type: "SUV",
        car_brand: "Honda",
        engine_type: "DOHC 24-valve V-6",
        engine_power: "287 hp @ 6400 rpm",
        price: "$39,620",
        img: "https://hips.hearstapps.com/hmg-prod/images/2019-hyundai-kona-1548195339.jpg?crop=1xw:0.9997727789138833xh;center,top&resize=980:*",
    },
    {
        car_id: uuidv4(),
        car_name: "2024 Volvo V60 / V60 Cross Country",
        car_type: "Station Wagon",
        car_brand: "Volvo",
        engine_type:
            "Turbocharged and intercooled DOHC 16-valve 2.0-liter inline-4",
        engine_power: "312 hp",
        price: "$50,845",
        img: "https://hips.hearstapps.com/hmg-prod/images/2019-volvo-v60-1558105490.jpg?crop=1xw:1xh;center,top&resize=980:*",
    },
    {
        car_id: uuidv4(),
        car_name: "2024 Volkswagen Golf GTI",
        car_type: "Hatchback",
        car_brand: "Volkswagen",
        engine_type:
            "Turbocharged and intercooled DOHC 16-valve 2.0-liter inline-4",
        engine_power: "241 hp @ 6500 rpm",
        price: "$32,915",
        img: "https://hips.hearstapps.com/hmg-prod/images/2019-volkswagen-golf-gti-1548698211.jpg?crop=1xw:1xh;center,top&resize=980:*",
    },
    {
        car_id: uuidv4(),
        car_name: "2024 Chrysler Pacifica",
        car_type: "Minivan",
        car_brand: "Chrysler",
        engine_type: "DOHC 24-valve V-6",
        engine_power: "287 hp @ 6400 rpm",
        price: "$39,620",
        img: "https://hips.hearstapps.com/hmg-prod/images/2019-chrysler-pacifica-1548198350.jpg?crop=1xw:1xh;center,top&resize=980:*",
    },
    {
        car_id: uuidv4(),
        car_name: "2023 Honda Ridgeline",
        car_type: "Pickup Truck",
        car_brand: "Honda",
        engine_type: "SOHC 24-valve V-6",
        engine_power: "280 hp @ 6000 rpm",
        price: "$40,175",
        img: "https://hips.hearstapps.com/hmg-prod/images/2019-honda-ridgeline-1548198293.jpg?crop=1xw:1xh;center,top&resize=980:*",
    },
];

const express = require("express");
const path = require("path");
app = express();
app.set("view engine", "ejs");
app.set("views", path.join(`${__dirname}/views`));
app.use(express.static(`${__dirname}/public}`));
app.use(express.urlencoded({ extended: true }));
port = 3000;

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/cars", (req, res) => {
    res.render("cars", { fake_cars });
});

app.post("/", (req, res) => {
    console.log(req.body);
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
