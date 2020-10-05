try {
    await new Promise(async (resolve, reject) => {
        console.log("hola");
        console.log("chau");
        reject(new Error("divisor no puede ser 0"));
    })
} catch (err) {
    console.log(err);
}